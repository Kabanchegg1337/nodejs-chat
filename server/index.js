const { createServer } = require("http");
const { Server } = require("socket.io");
const moment = require('moment');

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const users = [];

const checkBanned = (id, callback) => {
  const user = users.find((u) => u.token === id);
    if (user.banned) {
      const currDate = moment();
      const diff = moment(user.banEndTime).diff(currDate, 'seconds');
      if (diff > 0) {
        callback({
          status: 403,
          message: `Вы заблокированы!\nПодождите еще ${diff} секунд`,
        });
        return false
      }
      else {
        unban(user)
        return true
      }
    }
    return true
}

const makeModerator = (user) => {
  const target = users.find((u) => u.token === user.token);
  target.role = "moderator";
  users.map((u) => {
    if (u.token === target.token) return target;
    return u;
  });
  return target;
};

const ban = (user, time) => {
  const target = users.find((u) => u.token === user.token);
  target.banned = true;
  target.banEndTime = moment().add(time, 'minutes').format();
  users.map((u) => {
    if (u.token === target.token) return target;
    return u;
  });
};
const unban = (user) => {
  const target = users.find((u) => u.token === user.token);
  target.banned = false;
  target.banEndTime = null;
  users.map((u) => {
    if (u.token === target.token) return target;
    return u;
  });
};

io.on("connection", (socket) => {
  socket.on("login", (data, callback) => {
    const role = data.name === "admin" ? "admin" : "user";
    const user = {
      name: data.name,
      role: role,
      token: socket.id,
      banned: false,
      banEndTime: null,
    };
    users.push(user);
    callback(user);
    console.log(`${user.name} connected`);
  });
  socket.on("ban_user", (data, callback) => {
    const user = users.find((u) => u.token == socket.id);
    if (user.role != "admin" && user.role != "moderator")
      return callback({
        status: 403,
        message: "У вас не достаточно прав для выполнения этой команды",
      });
    ban(data.user, data.time);
  });
  socket.on("make_moderator", (data, callback) => {
    const user = users.find((u) => u.token == socket.id);
    if (user.role != "admin")
      return callback({
        status: 403,
        message: "У вас не достаточно прав для выполнения этой команды",
      });
    io.to(data.user.token).emit("role_changed", makeModerator(data.user));
  });
  socket.on("message", (message, callback) => {
    if (checkBanned(message.sender.token, callback)) io.emit("message", message);
  });
});

httpServer.listen(3001);

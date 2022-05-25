import React from 'react'
import Message from './Message'

export default function Chat() {
    const [messages, setMessages] = React.useState([
        {
            id: 1, 
            text: "kekw"
        },
        {
            id: 1, 
            text: "kekw"
        },
        {
            id: 1, 
            text: "lla facilisi. In ac ex sem. Ut placerat blandit tincidunt. Nunc elementum, est ut rhoncus fringilla, lacus sapien ullamcorper dui, sit amet euis"
        },
        {
            id: 1, 
            text: "la augue eget ipsum. Etiam congue pulvinar orci et mattis. Ut hendrerit risus in dolor mollis convallis. Pellentesque venenatis leo euismod, "
        },
        {
            id: 1, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut faucibus ex, ut tempor massa. Sed egestas mollis venenatis. Nulla pretium eros auctor tellus tincidunt, vel consequat ipsum maximus. Donec fringilla, enim at egestas vulputate, tellus lectus sollicitudin neque, molestie cons"
        },
        {
            id: 1, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut faucibus ex, ut tempor massa. Sed egestas mollis venenatis. Nulla pretium eros auctor tellus tincidunt, vel consequat ipsum maximus. Donec fringilla, enim at egestas vulputate, tellus lectus sollicitudin neque, molestie cons"
        },
        {
            id: 1, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut faucibus ex, ut tempor massa. Sed egestas mollis venenatis. Nulla pretium eros auctor tellus tincidunt, vel consequat ipsum maximus. Donec fringilla, enim at egestas vulputate, tellus lectus sollicitudin neque, molestie cons"
        },
        {
            id: 1, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut faucibus ex, ut tempor massa. Sed egestas mollis venenatis. Nulla pretium eros auctor tellus tincidunt, vel consequat ipsum maximus. Donec fringilla, enim at egestas vulputate, tellus lectus sollicitudin neque, molestie cons"
        },
        {
            id: 1, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut faucibus ex, ut tempor massa. Sed egestas mollis venenatis. Nulla pretium eros auctor tellus tincidunt, vel consequat ipsum maximus. Donec fringilla, enim at egestas vulputate, tellus lectus sollicitudin neque, molestie cons"
        },
        {
            id: 1, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut faucibus ex, ut tempor massa. Sed egestas mollis venenatis. Nulla pretium eros auctor tellus tincidunt, vel consequat ipsum maximus. Donec fringilla, enim at egestas vulputate, tellus lectus sollicitudin neque, molestie cons"
        }
    ])


  return (
    <div className='chat'>
        {messages.map((message, index) => {
            return <Message key={index} message={message} />
        })}
    </div>
  )
}

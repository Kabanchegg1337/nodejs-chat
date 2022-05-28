import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from '../features/chat/messagesSlice';
import userReducer from '../features/chat/userSlice';

export default configureStore({
  reducer: {
    messages: messagesReducer,
    user: userReducer
  },
})
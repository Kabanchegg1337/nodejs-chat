import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from '../features/chat/messagesSlice';

export default configureStore({
  reducer: {
    messages: messagesReducer
  },
})
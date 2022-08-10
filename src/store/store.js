import { configureStore } from '@reduxjs/toolkit'
import users from './slices/user/userSlice'

export default configureStore({
  reducer: {
    users
  }
})

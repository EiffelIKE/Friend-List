import React from 'react'
import UserList from './components/UserList'
// redux
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store} >
      <UserList/>
    </Provider>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'

import AuthContextProvider from './context/auth'
import PostContextProvider from './context/posts'
import AppRouter from './router/AppRouter'



ReactDOM.render(
  <AuthContextProvider>
    <PostContextProvider>
      <AppRouter />
    </PostContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
)


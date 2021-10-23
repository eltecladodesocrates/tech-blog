import React from 'react'
import ReactDOM from 'react-dom'

import PostContextProvider from './context/posts'
import AppRouter from './router/AppRouter'



ReactDOM.render(
  <PostContextProvider>
    <AppRouter />
  </PostContextProvider>,
  document.getElementById('root')
)


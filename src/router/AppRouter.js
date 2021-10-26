import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Create from '../Pages/Create'
import Signup from '../Pages/Signup'
import Post from '../components/Post'
import Edit from '../Pages/Edit'
import Footer from '../components/Footer'
import NotFound from '../Pages/NotFound'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={Dashboard} exact/>
                <Route path='/login' component={Login}/>
                <Route path='/create' component={Create}/>
                <Route path='/signup' component={Signup} />
                <Route path='/post/:id' component={Post} />
                <Route path='/edit/:id' component={Edit} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter

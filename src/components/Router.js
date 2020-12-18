import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../components/Home'
import Bookscontainer from '../components/BooksContainer'
import About from '../components/About'
import BooksList from '../components/BooksList'

function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/CreateForm' component={Bookscontainer}/>
            <Route exact path='/Books' component={BooksList}/>
        </Switch>
    )
}

export default Router

import React, { Component } from 'react'
import Router from './Router'
import BooksContainer from './BooksContainer'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <BooksContainer/> */}
                <Router/>
            </div>
        )
    }
}

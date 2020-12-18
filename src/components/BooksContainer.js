//data & methods
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/booksActions'

class BooksContainer extends Component {

    componentDidMount(){
        this.props.fetchBooks()
    }

    render() {
        return (
            <div>
                Books Container
            </div>
        )
    }
}

export default connect(null, {fetchBooks})(BooksContainer) 
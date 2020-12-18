//data & methods

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/booksActions'
import BooksForm from "./BooksForm";
import BooksList from './BooksList';

class BooksContainer extends Component {

    componentDidMount(){
        this.props.fetchBooks()
    }

    render() {
        return (
            <div>
                Books Container
                {/* Update this refractor */}
                <BooksList />
                <BooksForm/>
            </div>
        )
    }
}

export default connect(null, {fetchBooks})(BooksContainer) 
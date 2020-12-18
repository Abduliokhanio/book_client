import React, { Component } from 'react'
import { addBook } from '../actions/booksActions'
import { connect } from 'react-redux'

export class BooksForm extends Component {

    state = {
        title: ''
    }

    handleChange = e => {
        const { value } = e.target //whats going on with title lol?

        this.setState({
            title: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addBook(this.state)
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input type = 'text' value={this.state.title} onChange={this.handleChange} name="title"/>
                <input type = "submit" value ="Create Book"/>
            </form>
        )
    }
}

export default connect(null, {addBook})(BooksForm) 

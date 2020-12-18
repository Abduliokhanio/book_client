import React from 'react'
import { connect } from 'react-redux'

function BooksList(books) {
    console.log(books)
    return (
        <div>
            {/* Why books.books?? */}
            { books.books.map(book => <ul><li key={book.id}>{book.title}</li></ul>) } 
            {/* {console.log(books.books)} */}
        </div>
    )
}

const mapStateToProps = state => {
    return {books: state.books}

}

export default connect(mapStateToProps)(BooksList)

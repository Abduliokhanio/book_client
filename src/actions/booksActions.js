export const fetchBooks = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/books')
        .then(resp => resp.json())
        .then(books => dispatch({type: "FETCH_BOOKS", payload: books}))
    }
}

export const addBook = book => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/books',{
            method: 'POST',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(book => dispatch({type: "ADD_BOOK", payload: book}))
    }
}


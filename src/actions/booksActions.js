export const fetchBooks = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/books')
        .then(resp => resp.json())
        .then(books => dispatch({type: "FETCH_BOOKS", payload: books}))
    }
}


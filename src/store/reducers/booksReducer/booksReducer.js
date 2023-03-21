const initialState = {
    books: [],
}
export const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS':
            return [action.payload.books]
        default:
            return state;
    }
}
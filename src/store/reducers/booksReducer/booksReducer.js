const initialState = {
    books: [],
}
export const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS':
            return {...state, books: action.payload.books}
        default:
            return state;
    }
}
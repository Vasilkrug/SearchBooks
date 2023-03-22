const initialState = {
    books: [],
    totalBooks: 0,
}
export const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS':
            return {...state, books: action.payload.books};
        case 'TOTAL_BOOKS':
            return {...state, totalBooks: action.payload.count}
        default:
            return state;
    }
}
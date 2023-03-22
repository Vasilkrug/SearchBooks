const initialState = {
    books: [],
    totalBooks: 0,
    isLoading: false,
}
export const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS':
            return {...state, books: action.payload.books};
        case 'TOTAL_BOOKS':
            return {...state, totalBooks: action.payload.count};
        case 'SET_IS_LOADING':
            return {...state, isLoading: action.payload.isLoading}
        default:
            return state;
    }
}
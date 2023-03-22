const initialState = {
    books: [],
    totalBooks: 0,
    isLoading: false,
    hasError: false,
    selectedBook: {},
    inputValue: '',
    sortOptions: {},
    startIndex: 0
}
export const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS':
            return {...state, books: action.payload.books};
        case 'TOTAL_BOOKS':
            return {...state, totalBooks: action.payload.count};
        case 'LOAD_MORE_BOOKS':
            return {...state, books: [...state.books, ...action.payload.books]}
        case 'SET_IS_LOADING':
            return {...state, isLoading: action.payload.isLoading};
        case 'SET_ERROR':
            return {...state, hasError: action.payload.error};
        case 'SELECT_BOOK':
            return {...state, selectedBook: state.books.find(item => item.id === action.payload.id)};
        case 'SET_INPUT_VALUE':
            return {...state, inputValue: action.payload.inputValue}
        case 'SET_SORT_OPTIONS':
            return {...state, sortOptions: action.payload.sortOptions}
        case 'INCREMENT_START_INDEX':
            return {...state, startIndex: state.startIndex + 30}
        default:
            return state;
    }
}
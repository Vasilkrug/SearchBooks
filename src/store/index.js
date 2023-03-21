import {createStore, combineReducers} from "redux";
import {BooksReducer} from "./reducers/booksReducer/booksReducer";


const rootReducer = combineReducers({
    books: BooksReducer,
})

export const store = createStore(rootReducer)
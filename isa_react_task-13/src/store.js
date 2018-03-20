import { createStore, combineReducers } from 'redux';
import contacts from '../src/contacts'


const reducer = combineReducers({
    contacts
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    console.log('change', store.getState())
})


export default store
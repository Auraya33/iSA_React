import { createStore } from 'redux';

const initialState = {
    value: 0
}
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '':
            return {

            }
        default:
            return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    console.log('zmiana', store.getState())
})


export default store
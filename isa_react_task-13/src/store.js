import { createStore } from 'redux';

const initialState = {
    value: 0
};

const reducer = (state =  initialState, action = {}) => {
    switch (action.type) {
        case '':
            return {

    };

    default:
        return  state
}

const store = createStore(reducer);

    store.subscribe(() => {
        console.log('zmiana', store.getState())
    })
};

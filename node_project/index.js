const redux = require("redux");

const createStore = redux.createStore
console.log(createStore);

// let's create out first Action
const CAKE_ORDER = 'CAKE_ORDER';

// Action is an Object with 'type' property
// we can also add more properties if we want
// {
//     type: CAKE_ORDER,
//     quantity: 1,
// }

// we can also create function which returns Action
function orderCake(){
    return object =
    {
        type: CAKE_ORDER,
        quantity: 1
    }
}

// now lets build out initial state (which should be in single object)
const initialState = {
    numOfCake: 10,
    anotherProperty: 0
}

// now we will create a reducer which is a pure function
// which accepts 2 parameters and returns new state
// 1. Initial state
// 2. Action to be performed

const reducerFunc = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDER:
            return {
                numOfCake: state.numOfCake - 1,
            }
        default:
            return state;
    }
}

// let's create store usign redux createStore method
const store = createStore(reducerFunc);
console.log(store.getState());
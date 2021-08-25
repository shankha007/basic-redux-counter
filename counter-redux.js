// Importing 'redux' in the project
const redux = require("redux");

// Reducer is a pure function (so no side effects are allowed) -> same inputs leads to same output
// Reducer function takes last updated state and action as arguments and returns updated state
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

// Creating the central store
// createStore() method needs a reducer function as an argument
const store = redux.createStore(counterReducer);

// Now we have to create a component which will be subscribed by the store
const counterSubscriber = () => {
  const latestState = store.getState(); // getState() method return the latest state object
  console.log(latestState);
};

// The store has to subscribe the component to trigger the changes made to state
store.subscribe(counterSubscriber);

// Initializing counterReducer or returning the updated state would not trigger the component function
// To trigger the component function we need to dispatch an action
// dispatch is a method which dispatches an action, and action is a js object with a 'type' property
store.dispatch({ type: 'increment' });

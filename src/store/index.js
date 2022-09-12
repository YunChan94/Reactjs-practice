import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// Redux overwrite state, nên khi set state cần set đầy đủ thông tin trong state
// Không nên thay đổi thông tin của state, mà cần overwite nó vì dễ bị lỗi
// Reducer func
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }

  return state;
};

//create Store
const store = createStore(counterReducer);

export default store;
// Subcribe func
// const subcribe = () => {
//   const lastestState = store.getState();
// };

//subcribe method
// store.subcribe(subcribe);

// Dispatch
// store.dispatch({ type: "" });
// store.dispatch({ type: "" });

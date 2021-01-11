import { createStore } from "redux";

const INITIAL_VALUE = {
  data: [],
};

const todos = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
};

const store = createStore(todos, INITIAL_VALUE);

export default store;

import { Add, Remove } from "./actions";
export function Reducer(
  state = {
    todos: [],
  },
  action
) {
  switch (action.type) {
    case Add:
      return {
        todos: [...state.todos, action.todos],
      };
    case Remove:
      return {
       
todos: state.todos.filter((todo) => todo.id !== action.id), 




      };
    default:
      return state;
  }
}

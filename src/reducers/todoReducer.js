const initState = {
   todoList: [
      {
         id: 1,
         content: "Rock Climbing",
      },
      {
         id: 1,
         content: "HIIT for 20 mins",
      },
   ],
};

const todoReducer = (state = initState, action) => {
   switch (action.type) {
      case "ADD_TODO":
         return {
            ...state,
            todoList: [...state.todoList, action.payload],
         };
      case "REMOVE_TODO":
         return {
            ...state,
            todoList: action.payload,
         };
      default:
         return state;
   }
};

export default todoReducer;

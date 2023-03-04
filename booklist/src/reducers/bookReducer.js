import { nanoid } from "nanoid";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: nanoid(),
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

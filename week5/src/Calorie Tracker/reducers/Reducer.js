import { combineReducers } from "redux";
const initState = [

];
export const calorieReducer = (state = initState, action) => {
  switch (action.type) {

    case "ADD_ENTRY":
      return [
        ...state,
        { ...action.entry, id: Math.floor(Math.random() * 199) }
      ];

    case "DELETE_ENTRY":

      if (window.confirm("Do you want to delete?")) {
        return state.filter((item) => item.id !== action.id);
      }
      else {
        return state;
      }

    case "UPDATE_ENTRY":
      if (window.confirm("Do you want to edit?")) {
        return [...state, { ...action.entry}];
      }
      else {
        return state;
      }

    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  calorie: calorieReducer
});

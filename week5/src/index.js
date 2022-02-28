// import React from "react";
// import ReactDOM from "react-dom";
// //import App from "./Calorie Tracker/App";
// import NavbarCalorie from "./Calorie Tracker/Navbar/NavbarCalorie";
// //import App from "./App";
// function Element  ()  {
// return(<>

// <NavbarCalorie/></>
// )}
// ReactDOM.render(<Element />, document.getElementById("root"));


import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./Calorie Tracker/App";
import { rootReducer } from "./Calorie Tracker/reducers/Reducer";
import NavbarCalorie from"./Calorie Tracker/Navbar/NavbarCalorie";


const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
<NavbarCalorie />
<br/>
    <App />
  </Provider>,
  rootElement
);
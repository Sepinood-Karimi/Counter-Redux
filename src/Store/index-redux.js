// simple redux

// import { createStore } from "redux";
//
// const defaultStateObj = {
//   number: 0,
//   show: true,
// };
// const reducerFunc = (state = defaultStateObj, action) => {
//   if (action.type === "increment") {
//     return {
//       number: state.number + 1,
//       show: true,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       number: state.number - 1,
//       show: true,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       number: state.number + action.payload,
//       show: true,
//     };
//   }
//
//   if (action.type === "decrease") {
//     return {
//       number: state.number - action.payload,
//       show: true,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       number: state.number,
//       show: !state.show,
//     };
//   }
//   return state;
// };
// const store = createStore(reducerFunc);
//
// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "YOON",

  reducers: {
    ChangeName() {
      return "JOHN yoon";
    },
  },
});

export let { ChangeName, increase } = user.actions;

let cartItem = createSlice({
  name: "cartitem",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increase() {},
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cartItem: cartItem.reducer,
  },
});

// // reudx 상태 보관소 임
// /* eslint-disable */
// import { configureStore, createSlice, payload } from "@reduxjs/toolkit";

// import user from "./store/userSlice.js";

// let cart = createSlice({
//   name: "cart",
//   initialState: [
//     { id: 0, name: "White and Black", count: 2 },
//     { id: 1, name: "Grey Yordan", count: 1 },
//   ],
//   reducers: {
//     addCount(state, action) {
//       let nums = state.findIndex((a) => a.id === action.payload);
//       state[nums].count++;
//     },

//     addItem(state, action) {
//       state.push(action.payload);
//     },
//     deleltItem(state, action) {
//       state.pop(action.payload);
//     },
//   },
// });

// export let { addCount, addItem, deleltItem } = cart.actions;

// export default configureStore({
//   reducer: {
//     user: user.reducer,
//     cart: cart.reducer,
//   },
// });

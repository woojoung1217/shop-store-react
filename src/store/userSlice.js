import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "우중", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "Woojoung";
    },
    increseAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, increseAge } = user.actions;

export default user;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  imageProfile:
    "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/240521527_4374177845958670_230611608875898404_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_ohc=Sdifgrh7c4kAX_-9vyA&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfAxSZqT0htizKPyIRxkjysz11I1PuUrnbkDfMylK-vPJg&oe=65298861",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  imageProfile:
    "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/240521527_4374177845958670_230611608875898404_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OFUt3rdRPpMAX_MRu_G&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfC51mBRr5UjoyWXmHIP-ngTGdwLE7MvQvPX_DKano0uWg&oe=65317161",
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

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserRedux: (state, action) => {
      console.log('set user redux : ', action.payload);
      const user = action.payload;
      state.user = user;
    },
  },
})

export const { setUserRedux, setUserKey } = userSlice.actions;

export default userSlice.reducer;
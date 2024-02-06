import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countNumber: 100,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('running in create slice ');
      state.countNumber += 1
    },
    decrement: (state) => {
      state.countNumber -= 1
    },
    incrementByAmount: (state, action) => {
      state.countNumber += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
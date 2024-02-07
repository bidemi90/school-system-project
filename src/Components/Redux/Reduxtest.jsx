import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const Reduxtest = createSlice({
  name: 'Reduxtest',
  initialState,
  reducers: {
    increment: (state) => {
      state.value ++
    },
    decrement: (state) => {
        if (state.value === 0) {
        
          return;
        }
      
        state.value--;
      },      
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = Reduxtest.actions

export default Reduxtest.reducer
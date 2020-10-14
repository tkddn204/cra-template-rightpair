import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const incrementAsync = createAsyncThunk(
  'increment',
  (amount: number, thunkApi) => {
    setTimeout(() => {
      thunkApi.dispatch(incrementByAmount(amount))
    }, 1000)
  }
)

export default counterSlice.reducer

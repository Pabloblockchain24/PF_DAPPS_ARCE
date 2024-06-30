import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    categorySeleted: '',
    productIdSelected: '',
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySeleted = action.payload
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload
    },
  },
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer
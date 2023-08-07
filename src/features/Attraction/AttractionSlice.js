import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const AttractionSlice = createSlice({
  name: 'Attraction',
  initialState,
  reducers: {
    setAttractionID: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAttractionID } = AttractionSlice.actions

export default AttractionSlice.reducer
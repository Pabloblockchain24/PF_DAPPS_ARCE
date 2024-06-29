import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: {
        email: null,
        localId: null,
        photo: null,
      },
      token: null,
      imageCamera: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user.email = action.payload.email
      state.value.user.localId = action.payload.localId
      state.value.token = action.payload.token
    },
    setCameraImage: (state, action) => {
      state.value.imageCamera = action.payload
    },
    setUserPhoto: (state, action) => {
      state.value.user.photo = action.payload
    },

    logout: state => {
      state.value = {
        user: {
          email: null,
          localId: null,
        },
        token: null,
        imageCamera: null,
        photo: null,
      }
    },
  },
})

export const {
  setUser,
  setCameraImage,
  setUserPhoto,
  logout,
} = authSlice.actions

export default authSlice.reducer
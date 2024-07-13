import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user_data: {}
}

const Loginslice = createSlice({
   name: "mylogdata",
   initialState: initialState,
   reducers: ({
      adduser_data: (state, action) => {
         console.log("1111111111111111111---->",action.payload)
         state.user_data = action.payload
         console.log("22222---------->",state.user_data)
      }
   })
})

export const { adduser_data } = Loginslice.actions;
export default Loginslice.reducer;

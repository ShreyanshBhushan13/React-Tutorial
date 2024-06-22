import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
name:"cart",
initialState:{
    items:[]
},
  reducers:{
    // {
    //   payload:pizza; pass as a second argument
    // }
    // modify our state based on the action
      addItem:(state,action)=>{
       state.items.push(action.payload);
       
      },
      removeItem:(state)=>{
        state.items.pop();
      },
      clearCart:(state)=>{
        state.items.length=0; // initalItems=[]
      }
  },
});

// {
//     actions;{
//       addItem
//     }
//     reducer:{

//     }
// }
export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;



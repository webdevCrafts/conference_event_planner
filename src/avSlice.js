import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		name: "Projectors",
		cost: 200,
		quantity: 0,
    },
    { 
        img: "https://images.unsplash.com/photo-1595432541891-a461100d3054?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		name: "Speaker",
		cost: 35,
		quantity: 0,
    },
    { 
        img: "https://images.unsplash.com/photo-1638189906269-c37fdb5a9351?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		name: "Whiteboards",
		cost: 80,
		quantity: 0,
    },
    { 
        img: "https://images.unsplash.com/photo-1591409574546-c01d92033d4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		name: "Signage",
		cost: 80,
		quantity: 0,
    },
    { 
        img: "https://images.unsplash.com/photo-1580493783887-8c874c534e93?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		name: "Microphones",
		cost: 45,
		quantity: 0,
    }
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      
    },
    decrementAvQuantity: (state, action) => {
     
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;

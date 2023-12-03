import { shoeArr } from "../data"
import { ADD, DELETE } from "./constant";

let initialState = {
    shoeArr: shoeArr,
    cart :[]
}

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD :{
        let cloneCart = [...state.cart];
        let index = cloneCart.findIndex((item)=>item.id ==payload.id);
        if(index ==-1){
         
          let newShoe ={...payload, soLuong :1};
          cloneCart.push(newShoe);
        }else{
          
          cloneCart[index].soLuong++;
  
        }  
          
        state.cart = cloneCart
        return{...state}
      };
      case DELETE:{
       
          let newCart =state.cart.filter((item)=>item.id != payload);
      
      return {...state,cart :newCart}
    }
      default:
      return state;
    
      
    
    }
  
  

  }


// rxreducer
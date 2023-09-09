import React, { createContext, useReducer,useContext } from 'react';
import Card from "./Card";
import {Info} from "./Array";
import {cartReducer} from "./Reducers";
import { productReducer } from './Reducers';
const Cart=createContext();
const Context=({children})=>{
  const product= Info.map((user,i)=>{
    return(

    <Card 
      id={Info[i].id}
      rating={Info[i].rating}
      name={Info[i].name}
      Price={Info[i].Price}
      Infos={Info[i].Infos}
      imgSrc={Info[i].imgSrc}
    />
  
  )
  })
    const[state,dispatch]=useReducer(cartReducer,{
      product:product,
      cart:[]
    });
    const[productState,productDispatch]=useReducer(productReducer,{searchQuery:""})
  return(
    <>
    <Cart.Provider value={{state,dispatch,productState,productDispatch}}>{children}</Cart.Provider>
    </>
  );
}

export const CartState=()=>{
  return useContext(Cart);
}
export default Context;

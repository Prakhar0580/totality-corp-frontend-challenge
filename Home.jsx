import React from 'react';
import {CartState} from "./Context";
import SingleProduct from './SingleProduct';
import "./Styles.css";
import Filters from "./Filters";
const Home = () => {
  const {state:{product},
  productState :{sort,searchQuery}}=CartState();
  const transformProducts=()=>{
    let sortedProducts=product;
    if(sort){
      sortedProducts=sortedProducts.sort((a,b)=>
        sort==="lowToHigh"?a.Price-b.Price:b.Price-a.Price
      );
      if(searchQuery){
        sortedProducts=sortedProducts.filter((prod)=>{
          prod.name.toLowerCase().includes(searchQuery)
        });
      }
    }
    return sortedProducts;
  }
  return (
    <div className="home">
    <Filters/>
    <div className="productContainer">
    {
      transformProducts().map((user)=>{
        return(
          <>
          <SingleProduct prod={user.props} key={user.props.id}/>
          </>
        )
      })
    }
    </div>
    </div>
  )
}

export default Home
import React from 'react'
import {Button,Card} from "react-bootstrap";
import Cards from "./Cards";
import "./Styles.css";
import {CartState} from "./Context";
const SingleProduct = ({prod}) => {
  const{state:{cart},
          dispatch}=CartState();
  return (
    <div className="products" style={{height:"30%"}}>
        <Card>
            <Card.Img variant="top" src={prod.imgSrc} alt="photo"/>
            <Card.Body className="cardBody">
                <Card.Title style={{height:"50px",textDecorationLine:"underline"}}>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom:"10px"}}>
                    <span style={{fontWeight:"bolder",margin:"10px",fontSize:"30px"}}>{prod.Price}</span>
                    <p>{prod.Infos}</p>
                </Card.Subtitle>
                {cart.some(p=>p.id===prod.id)?(
                  <Button  onClick={()=>{
                    dispatch({
                      type:"REMOVE_FROM_CART",
                      payload:prod
                    });
                  }} variant="danger">Remove From Cart</Button>
                ):(
                  <Button onClick={()=>{
                    dispatch({
                      type:"ADD_TO_CART",
                      payload:prod
                    });
                  }}>Add to cart</Button>
                )}
                
                
            </Card.Body>
        </Card>
        
    </div>
  )
}

export default SingleProduct
import React from 'react'
import {CartState} from "./Context";
import {ListGroup,Row,Col,Image,Button} from "react-bootstrap";
import {useEffect,useState} from "react";
import {AiFillDelete} from "react-icons/ai";
const Cart = () => {
  const{state:{cart},dispatch}=CartState();
  const[total,setTotal]=useState(0);
  useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=>acc + parseFloat(curr.Price)||0,0));
  },[cart]);
  return (
    
    <div className="home">
      <div className="cartContainer">
      <ListGroup>
        {
          cart.map((prod)=>{
            return(
              <>
              {/* <span>{prod.name}</span> */}
              <ListGroup.Item key={prod.id}>
              <Row>
              <Col md={3}>
                <Image src={prod.imgSrc} style={{width:"20%"}}/>
                </Col>
                <Col md={3}>
                <span>{prod.name} </span>
                </Col>
                <Col md={3}>
                <span>{prod.Price} </span>
                </Col>
                <Col md={3}>
                <Button>
                <AiFillDelete
                                    style={{fontSize:"20px",cursor:"pointer"}}
                                    onClick={()=>dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload:prod,
                                    })}
                                />
                </Button>
                </Col>
              </Row>
              </ListGroup.Item>
              </>
            )
          })
        }
      </ListGroup>
      <div className="cartFilter summary">
        <span className="title">
          Subtotal  ({cart.length})
        </span>
        <span style={{fontWeight:"700px" , fontSize:"20"}}> Total : {total} Rs</span>
        <br/>
        <Button>Proceed to pay</Button>
      </div>
      </div>
    </div>
  )
}

export default Cart
import React from 'react'
import {Navbar,Container, FormControl,Nav,Dropdown, Badge} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {FaShoppingCart} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import {CartState} from "./Context";
import {Button} from "react-bootstrap";
import "./Styles.css";
const Header = () => {
    const{state:{cart},dispatch}=CartState();
  return (
    
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link To="/">Nearby Window</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl 
                    style={{width:500}}
                     placeholder="search your product" 
                     className="m-auto"/>
                </Navbar.Text>
                <Nav>
                <Dropdown>
                <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {cart.length>0?(
                    <>
                        {
                            cart.map((prod,i)=>{
                                 return(
                                    <>
                                <span className="cartImage" key={prod.id}>
                                    <img src={prod.imgSrc} className="cartItemImage" alt="photo"/>
                                    <div className="classItemDetail">
                                            <span>{prod.name}</span><br/>
                                           <span>{prod.Price}</span>
                                    </div>
                                <AiFillDelete
                                    style={{fontSize:"20px",cursor:"pointer"}}
                                    onClick={()=>dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload:prod,
                                    })}
                                />
                                </span>
                                </>
                                 ) 
                                
                            })
                        
                        }
                        <Link to="./Cart">
                            <Button style={{width:"95%" , margin:"0 10px"}}>Go to Cart</Button>
                        </Link>
                    </>
                ):(<span style={{padding:10}}>Cart is Empty</span>)}
                    
                </Dropdown.Menu>
                </Dropdown>
                </Nav>
            </Container>
                
                
        </Navbar>

  )
}

export default Header
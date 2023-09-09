import React, {useState} from 'react'
import "./Styles.css";
import {Button,Form} from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from './Context';
const Filters = () => {
    const[rate,setRate]=useState(5);
    const{productState :{sort,searchQuery},productDispatch}=CartState();
  return (
    <div className="filters">
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`}
                onChange={()=>
                productDispatch({
                    type:"SORT_BY_PRICE",
                    payload:"lowToHigh"
                })}
                checked={sort==="lowToHigh"?true:false}
            
            />
    </span>
        <span>
        <Form.Check
                inline
                label="Descending"
                name="group1"
                type="radio"
                id={`inline-2`}
                onChange={()=>
                productDispatch({
                    type:"SORT_BY_PRICE",
                    payload:"highToLow"
                })}
                checked={sort==="highToLow"?true:false}
            />
        </span>
        {/* <span>
            <label style={{paddingRight:"10px"}}>Rating</label>
            <Rating rating={rate} style={{cursor:"pointer"}}/>
        </span> */}
        <Button variant="light" 
        onChange={()=>
                productDispatch({
                    type:"CLEAR_FILTER",
                })}>Clear Filters</Button>
    </div>
  )
}

export default Filters;
import React from "react";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import tachyons from 'tachyons';
import "tachyons/css/tachyons.min.css";
import "tachyons/css/tachyons.css";
import "./index.css";
const Card=(props)=>{
    return(
      <>
      
    <div class=" wd dtc  mw8 center pv4 pv5-m pv6-ns"  style={{marginLeft:"100px"}}>
  <div class="dtc v-top">
    <img src={props.imgSrc} alt="photo" class="mw5 db" />
  </div>
  <div class=" v-top pl3">
  <h3>{props.Price}</h3>
    <p class="lh-copy mv0" style={{fontWeight:"bolder",fontSize:"25px"}}>
      {props.Infos}
    </p>
    <div class="ph3" style={{marginTop:"20px"}}>
    <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" style={{fontWeight:"bold"}} href="#0">Add  to Cart</a>
    </div>
  </div>
</div>
</>
    )
}
export default Card;
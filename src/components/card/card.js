import React from "react";
import "./card.css"

const card = (props) => (
  
  <div className="cardBox col-3">
    
    <div className="card">
    <a href={props.url} className="link">
      <img src="https://via.placeholder.com/50" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.description}</p> 
      </div>
      </a>
    </div>
  </div>

);

export default card;

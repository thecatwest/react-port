import React from "react";
// import Portfolio from "../Portfolio/index"


function Project({ image, title, github, link, description}){
    return ( 
  <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={link} className="btn btn-primary">Live</a> |
    <a href={github} className="btn btn-primary"> Github Repo</a>
  </div>
</div>    
    );
}


export default Project;

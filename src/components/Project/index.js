import React from "react";
// import images from "../../assets/portfolio"


function Project({ image, title, github, link, description}){
  const style = {
    color: "#08e8de"
  }
    return ( 
  <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top img-thumbnail" alt="project-pic"/>
  <div className="card-body">
    <h5 className="card-title" style={style}>{title}</h5>
    <p className="card-text">{description}</p>
    <a href={link} className="btn btn-primary">Live</a> |
    <a href={github} className="btn btn-primary"> Github Repo</a>
  </div>
</div>    
    );
}


export default Project;

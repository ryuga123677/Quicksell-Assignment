import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import dot from "../assets/Untitled/icons_FEtask/3 dot menu.svg"
import todo from "../assets/Untitled/icons_FEtask/To-do.svg";
import Backlog from "../assets/Untitled/icons_FEtask/Backlog.svg";
export const Card = ({ id, title, tag, }) => {
  const [data, Setdata] = useState({});

  return (
    <>
      <div className="card">
        <div className="card-name">
         <div style={{color:"grey"}}>{id}</div>
          <div className="card-images">HV</div>
        </div>
        <div style={{display:"flex",gap:4,marginTop:5,fontWeight:"bold"}}><img src={Backlog}></img><div>{title}</div></div>
        <div style={{marginTop:10,display:"flex",gap:2,color:"grey",width:"max-content"}}><div style={{border: "1px solid #ccc",borderRadius:"5px",paddingTop:5}}><img src={dot}></img></div><div style={{display:"flex",border: "1px solid #ccc",borderRadius:"5px",fontSize:"smaller",padding:5,paddingRight:2}}><div style={{width: '10px',height:"10px",backgroundColor: 'grey',borderRadius: '50%',  }}></div>{tag}</div></div>
      </div>
    </>
  );
};

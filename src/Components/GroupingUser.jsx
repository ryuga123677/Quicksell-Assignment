import React from "react";
import { useState, useEffect } from "react";
import "./GroupingStatus.css";
import axios from "axios";
import { Card } from "./Card";
import Add from "../assets/Untitled/icons_FEtask/add.svg";
import dots from "../assets/Untitled/icons_FEtask/3 dot menu.svg";
import "./Card.css"
export const GroupingUser = ({sortedin}) => {
  const [data, setData] = useState([]);
const [user,Setuser]=useState([]);
  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        console.log(res.data.tickets);
        setData(res.data.tickets);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        console.log(res.data.users);
        Setuser(res.data.users);
      });
  }, []);

  return (
    <>
      <div className="horizontal">
        {user.length>0 && user.map((user)=><div className="vertical">
          <div className="header">
            <div style={{display:"flex"}}>
            <div className="card-images">HV</div>
             <div style={{padding:5}}>{user.name}</div> 
            </div>
            <div>
              {" "}
              <img src={Add} alt="add" />
              <img src={dots} alt="dots" />
            </div>
          </div>
          <div>
            {data.length > 0 &&
              data
                .filter((ticket) => ticket.userId === user.id)
                .sort((a, b) => {
                  
                  if (sortedin === "priority") {
                    return b.priority - a.priority; 
                  } else if (sortedin === "title") {
                    return a.title.localeCompare(b.title); 
                  }
                  return 0;
                })
                .map((ticket) => (
                  <Card
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    status={ticket.status}
                    tag={ticket.tag[0]}
                  />
                ))}
          </div>
        </div>)
        

            }
      </div>
    </>
  );
};

import React from "react";
import { useState, useEffect } from "react";
import "./GroupingStatus.css";
import axios from "axios";
import { Card } from "./Card";
import Add from "../assets/Untitled/icons_FEtask/add.svg";
import dots from "../assets/Untitled/icons_FEtask/3 dot menu.svg";
import Backlog from "../assets/Untitled/icons_FEtask/Backlog.svg";
import Cancelled from "../assets/Untitled/icons_FEtask/Cancelled.svg";
import Display from "../assets/Untitled/icons_FEtask/Display.svg";
import Done from "../assets/Untitled/icons_FEtask/Done.svg";
import todo from "../assets/Untitled/icons_FEtask/To-do.svg";

export const GroupingStatus = ({ sortedin }) => {
  const [data, setData] = useState([]);
const[count,Setcout]=useState([]);
  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        console.log(res.data.tickets);
        setData(res.data.tickets);
      });
  }, []);

  return (
    <>
      <div className="horizontal">
        <div className="vertical">
          <div className="header">
            <div style={{display:"flex",gap:5}}>
              <img src={Backlog} alt="Backlog" />
              Backlog 
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
                .filter((ticket) => ticket.status === "Backlog")
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
        </div>

        {/* Todo Section */}
        <div className="vertical">
          <div className="header">
            <div style={{display:"flex",gap:5}}>
              {" "}
              <img src={todo} alt="Todo" />
              Todo
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
                .filter((ticket) => ticket.status === "Todo")
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
        </div>

        {/* InProgress Section */}
        <div className="vertical">
          <div className="header">
            <div style={{display:"flex",gap:5}}>
            
              <img src={Display} alt="InProgress" />
              InProgress
            </div>
            <div>
              
              <img src={Add} alt="add" />
              <img src={dots} alt="dots" />
            </div>
          </div>
          <div>
            {data.length > 0 &&
              data
                .filter((ticket) => ticket.status === "In progress")
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
        </div>

        {/* Done Section */}
        <div className="vertical">
          <div className="header">
            <div style={{display:"flex",gap:5}}>
              {" "}
              <img src={Done} alt="Done" />
              Done
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
                .filter((ticket) => ticket.status === "Done")
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
        </div>

        {/* Cancelled Section */}
        <div className="vertical">
          <div className="header">
            <div style={{display:"flex",gap:5}}>
              <img src={Cancelled} alt="Cancelled" />
              Cancelled
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
                .filter((ticket) => ticket.status === "Cancelled")
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
        </div>
      </div>
    </>
  );
};

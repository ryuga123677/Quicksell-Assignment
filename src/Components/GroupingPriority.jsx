import React from "react";
import { useState, useEffect } from "react";
import "./GroupingStatus.css";
import axios from "axios";
import { Card } from "./Card";
import Add from "../assets/Untitled/icons_FEtask/add.svg";
import dots from "../assets/Untitled/icons_FEtask/3 dot menu.svg";
import High from "../assets/Untitled/icons_FEtask/Img - High Priority.svg";
import Medium from "../assets/Untitled/icons_FEtask/Img - Medium Priority.svg";
import UrgentGray from "../assets/Untitled/icons_FEtask/SVG - Urgent Priority grey.svg";
import Low from "../assets/Untitled/icons_FEtask/Img - Low Priority.svg";

export const GroupingPriority = ({sortedin}) => {
  const [data, setData] = useState([]);

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
              <img src={dots} alt="Backlog" />
               No Priority
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
            <div style={{display:"flex",gap:5}}>  <img src={UrgentGray} alt="Todo" />
            Urgent</div>
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
            <div style={{display:"flex",gap:5}}> <img src={High} alt="InProgress" />
            High</div>
            <div>
              {" "}
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
           <div style={{display:"flex",gap:5}}> <img src={Medium} alt="Done" />
           Medium</div>
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
            <div style={{display:"flex",gap:5}}><img src={Low} alt="Cancelled" />
            Low</div>
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

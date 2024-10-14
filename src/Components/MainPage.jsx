import React, { useEffect, useState } from "react";
import { GroupingStatus } from "./GroupingStatus";
import axios from "axios";
import { GroupingUser } from "./GroupingUser";
import { GroupingPriority } from "./GroupingPriority";
import inprogress from "../assets/Untitled/icons_FEtask/Display.svg";
import "./MainPage.css";

export const MainPage = () => {
  const [name, setName] = useState("status");
  const [sortBy, setSortBy] = useState("title");
  const [showButtons, setShowButtons] = useState(false);
  const [showNestedButtons1, setShowNestedButtons1] = useState(false);
  const [showNestedButtons2, setShowNestedButtons2] = useState(false);

  const handleToggle = () => {
    setShowButtons(!showButtons);
  };

  const handleToggleNested1 = () => {
    setShowNestedButtons1(!showNestedButtons1);
    // Close Button 2's nested options if open
    setShowNestedButtons2(false);
  };

  const handleToggleNested2 = () => {
    setShowNestedButtons2(!showNestedButtons2);
    // Close Button 1's nested options if open
    setShowNestedButtons1(false);
  };

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <>
      <div style={{ height: "50px", backgroundColor: "white", width: "150%" }}>
        {/* Open Button */}
        <button
          style={{
            display: "flex",
            gap: 3,
            border: "1px solid",
            boxShadow: " 0 2px 8px 1px #ccc",
             borderColor:"grey"
          }}
          className="displaybutton"
          onClick={handleToggle}
        >
          <img src={inprogress} alt="Display" /> <div>Display</div>
        </button>

        {showButtons && (
          <div
            style={{
              position: "absolute",
              width: "250px",
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              gap: "5px",
              backgroundColor: "#f8f8fa",
              border: "1px solid",
              borderRadius: "5px",
              padding: "10px", 
              boxshadow:"1 2px 8px 1px #ccc",
               borderColor:"grey"
            }}
          >
            {/* Button 1 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 2,

              }}
            >
              <div style={{ color: "grey" }}>Grouping - </div>
              <button
                style={{
                  width: "100px",
                  border: "1px solid",
                  borderRadius: "3px",
                  backgroundColor: "white",
                   borderColor:"grey"
                }}
                onClick={handleToggleNested1}
              >
                {name}
              </button>
            </div>

            {showNestedButtons1 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5px",
                }}
              >
                <button
                  style={{
                    border: "1px solid",
                    borderRadius: "3px",
                    backgroundColor: "white",
                     borderColor:"grey"
                  }}
                  onClick={() => setName("status")}
                >
                  Status
                </button>
                <button
                  style={{
                    border: "1px solid",
                    borderRadius: "3px",
                    backgroundColor: "white",
                     borderColor:"grey"
                  }}
                  onClick={() => setName("user")}
                >
                  User
                </button>
                <button
                  style={{
                    border: "1px solid",
                    borderRadius: "3px",
                    backgroundColor: "white",
                     borderColor:"grey"
                  }}
                  onClick={() => setName("priority")}
                >
                  Priority
                </button>
              </div>
            )}

            {/* Button 2 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 2,
                
              }}
            >
              <div style={{ color: "grey" }}>Ordering - </div>
              <button
                style={{
                  width: "100px",
                  border: "1px solid",
                  borderRadius: "3px",
                  backgroundColor: "white",
                   borderColor:"grey"
                }}
                onClick={handleToggleNested2}
              >
                {sortBy}
              </button>
            </div>

            {showNestedButtons2 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5px",
                }}
              >
                <button
                  style={{
                    border: "1px solid",
                    borderRadius: "3px",
                    backgroundColor: "white",
                     borderColor:"grey"
                  }}
                  onClick={() => setSortBy("title")}
                >
                  Title
                </button>
                <button
                  style={{
                    border: "1px solid",
                    borderRadius: "3px",
                    backgroundColor: "white",
                     borderColor:"grey"
                  }}
                  onClick={() => setSortBy("priority")}
                >
                  Priority
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {name === "status" ? <GroupingStatus sortedin={sortBy} /> : ""}
      {name === "user" ? <GroupingUser sortedin={sortBy} /> : ""}
      {name === "priority" ? <GroupingPriority sortedin={sortBy} /> : ""}
    </>
  );
};

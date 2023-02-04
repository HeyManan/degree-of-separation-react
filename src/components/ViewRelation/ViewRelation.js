import React, { useState } from "react";
import "./viewRelation.css";
import { logic } from "./resolveRelations.js";
import Alert from "../Alert/Alert";

const ViewRelation = () => {
  let currentUsers = JSON.parse(localStorage.getItem("users"));
  let relations = JSON.parse(localStorage.getItem("relations"));
  let [selectedUser1, setSelectedUser1] = useState("");
  let [selectedUser2, setSelectedUser2] = useState("");
  let [output, setOutput] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const removeAlert = () => {
    setAlert({ show: false, msg: "", type: "" });
  };

  const handleChange = () => {
    if (selectedUser1 !== "" && selectedUser2 !== "") {
      let sourceId = currentUsers.indexOf(selectedUser1);
      let destinationId = currentUsers.indexOf(selectedUser2);

      if (sourceId !== -1 && destinationId !== -1) {
        logic(sourceId, destinationId, relations, currentUsers).then((output) =>
          // console.log(output);
          setOutput(output)
        );
      }
    } else {
      setAlert({
        show: true,
        msg: "Please select both Users!",
        type: "danger",
      });
    }
  };

  return (
    <div className="viewRelationContainer">
      {alert.show && <Alert {...alert} removeAlert={removeAlert} />}

      <div className="designxxContainer">
        <div className="designxx">
          {/* {"Hello" + <br /> + "ok"} */}
          {output.map((seperation, index) => {
            let result = JSON.stringify(index + 1) + ". ";
            for (let i = 0; i < seperation?.length; i++) {
              if (i === seperation?.length - 1)
                result += currentUsers[seperation[i]] + "\n";
              else result += currentUsers[seperation[i]] + " > ";
            }
            console.log(result);
            return result;
          })}
        </div>
        <div className="formxxx">
          <div className="userInputxx">
            {/* <input type="text" placeholder="Name of User 1" name="user1" /> */}
            <div className="slct">
              <select
                name="user1"
                onChange={(e) => setSelectedUser1(e.target.value)}
                value={selectedUser1}
              >
                <option value="">Please select a User 1</option>
                {currentUsers
                  ?.filter((user) => user !== selectedUser2)
                  ?.map((user, id) => (
                    <option value={user} key={id}>
                      {user}
                    </option>
                  ))}
              </select>
            </div>
            <span>➕</span>
            {/* <input type="text" placeholder="Name of User 2" name="user2" /> */}
            <div className="slct">
              <select
                name="user2"
                onChange={(e) => setSelectedUser2(e.target.value)}
                value={selectedUser2}
              >
                <option value="">Please select a User 2</option>
                {currentUsers
                  ?.filter((user) => user !== selectedUser1)
                  ?.map((user, id) => (
                    <option value={user} key={id}>
                      {user}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <button onClick={handleChange}>VIEW RELATION</button>
        </div>
      </div>
    </div>
  );
};

export default ViewRelation;

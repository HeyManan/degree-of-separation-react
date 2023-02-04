import React, { useState } from "react";
import "./addRelationship.css";
import addRelation from "../../static/images/addRelation.png";
import Alert from "../Alert/Alert";

let relations = [];
const AddRelationship = () => {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  const [selectedUser1, setSelectedUser1] = useState("");
  const [selectedUser2, setSelectedUser2] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const removeAlert = () => {
    setAlert({ show: false, msg: "", type: "" });
  };

  const handleClick = () => {
    if (selectedUser1 !== "" && selectedUser2 !== "") {
      if (
        storedUsers.indexOf(selectedUser1) !== -1 &&
        storedUsers.indexOf(selectedUser2) !== -1
      ) {
        let relation = [];
        relation[0] = storedUsers.indexOf(selectedUser1);
        relation[1] = storedUsers.indexOf(selectedUser2);
        relations.push(relation);

        localStorage.setItem("relations", JSON.stringify(relations));
        setAlert({
          show: true,
          msg: "Relationship added successfully!",
          type: "success",
        });
      }
    } else {
      setAlert({
        show: true,
        msg: "Please select both Users!",
        type: "danger",
      });
    }
    setSelectedUser1("");
    setSelectedUser2("");
  };

  return (
    <div className="addRelationContainer">
      {alert.show && <Alert {...alert} removeAlert={removeAlert} />}
      <div className="designxContainer">
        <div className="designx">
          <img className="imgxx" src={addRelation} alt="alt"></img>
        </div>
        {/* <span className="subTitlex">Enter the Name of the Users</span> */}
        <div className="formxx">
          <div className="userInputx">
            <div className="slct">
              <select
                name="user1"
                onChange={(e) => setSelectedUser1(e.target.value)}
                value={selectedUser1}
              >
                <option value="">Please select a User 1</option>
                {storedUsers
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
                {storedUsers
                  ?.filter((user) => user !== selectedUser1)
                  ?.map((user, id) => (
                    <option value={user} key={id}>
                      {user}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <button onClick={handleClick}>ADD FRIEND</button>
        </div>
      </div>
    </div>
  );
};

export default AddRelationship;

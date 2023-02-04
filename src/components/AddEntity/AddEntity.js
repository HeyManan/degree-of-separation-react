import React, { useState } from "react";
import "./addEntity.css";
import addUser from "../../static/images/addUser.png";
import Alert from "../Alert/Alert";

let users = [];
const AddEntity = () => {
  const [user, setUser] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleClick = (e) => {
    if (user !== "" && users.indexOf(user) !== -1) {
      setAlert({ show: true, msg: "User already exist!", type: "danger" });
    } else if (user !== "" && users.indexOf(user) === -1) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      setAlert({
        show: true,
        msg: "User added successfully!",
        type: "success",
      });
    } else {
      setAlert({ show: true, msg: "Please enter the name", type: "danger" });
    }
    setUser("");
  };

  const removeAlert = () => {
    setAlert({ show: false, msg: "", type: "" });
  };
  return (
    <div className="addEntityContainer">
      {alert.show && <Alert {...alert} removeAlert={removeAlert} />}
      <div className="designContainer">
        <div className="design">
          <img className="imgx" src={addUser} alt="alt"></img>
        </div>
        {/* <span className="subTitle">Enter the Name of the User</span> */}
        <div className="formx">
          <div className="userInput">
            <input
              type="text"
              placeholder="Enter name of the user"
              name="user"
              value={user}
              onInput={(e) => setUser(e.target.value)}
            />
          </div>
          <button onClick={handleClick}>ADD USER</button>
        </div>
      </div>
    </div>
  );
};

export default AddEntity;

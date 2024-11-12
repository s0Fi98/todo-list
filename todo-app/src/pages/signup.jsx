import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

import Axios from "axios";

import Eye from "../assets/eye.svg";
import CloseEye from "../assets/closedeye.svg";

const Create = () => {
  const navigate = useNavigate();

  const [signup, setSignUp] = useState({
    userId: "",
    password: "",
  });
  const createUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3500/save-credentials", signup)
      .then((response) => {
        console.log(response.data);
        navigate("/home-page");
      })
      .catch((error) => {
        console.log("error message: ", error);
      });
  };

  const [eye, setEye] = useState(false);
  const toggleImage = () => {
    setEye(!eye);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create</h1>
        <div className="input-group">
          <label htmlFor="userId1">User Id:</label>
          <input
            type="text"
            id="userId"
            placeholder="User Id"
            value={signup.userId}
            onChange={(e) =>
              setSignUp({ ...signup, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="userId2">Password:</label>
          <div className="password-field">
            <input
              type={eye ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={signup.password}
              onChange={(e) =>
                setSignUp({ ...signup, [e.target.id]: e.target.value })
              }
            />
            <button onClick={toggleImage}>
              {eye ? <img src={Eye} alt="" /> : <img src={CloseEye} alt="" />}
            </button>
          </div>
        </div>
        <button className="login-button" onClick={createUser}>
          CREATE
        </button>
      </div>
    </div>
  );
};

export default Create;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Axios from "axios";

import Eye from "../assets/eye.svg";
import CloseEye from "../assets/closedeye.svg";

import "../css/a.css";

const A = () => {
  // const navigate = useNavigate();

  const [eye, setEye] = useState(false);

  const toggleImage = () => {
    setEye(!eye);
  };

  const [inputData, setInputData] = useState({
    userId: "",
    password: "",
  });

  {
    // const [loginData, setLoginData] = useState({
    //   userId: "Solman",
    //   password: "pass123",
    // });
    // const login = (event) => {
    //   event.preventDefault();
    //   console.log(inputData, loginData);
    //   if (
    //     inputData.userId == loginData.userId &&
    //     inputData.password == loginData.password
    //   ) {
    //     sessionStorage.setItem("userId", loginData.userId);
    //     navigate("/home-page");
    //   } else {
    //     alert("Look at user and Password");
    //   }
    // };
  }

  const login = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3500/match-users", inputData)
    .then((response) => {
      console.log(response.data)
      navigate('/home-page')
    })
    .catch((error) => {
      console.log("error message: ", error);
    })
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="userId1">User Id:</label>
          <input
            type="text"
            id="userId"
            placeholder="User Id"
            value={inputData.userId}
            onChange={(e) =>
              setInputData({ ...inputData, [e.target.id]: e.target.value })
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
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, [e.target.id]: e.target.value })
              }
            />
            <button onClick={toggleImage}>
              {eye ? <img src={Eye} alt="" /> : <img src={CloseEye} alt="" />}
            </button>
          </div>
        </div>
        <button className="login-button" onClick={login}>
          LOGIN
        </button>
        <Link to="/forgot-password" className="forgot-password-link">
          <h5>Forgot Password?</h5>
        </Link>
        <div className="login-footer">
          <span>Don't have login data create one :</span>
          <span>
            <Link to={'/create-Login-credentials'}><h5>Create</h5></Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default A;

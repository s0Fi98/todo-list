import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signup.css";
import GoogleImg from "../assets/google.svg";
import SigninImg from "../assets/sign.svg";

import Axios from "axios";

import Eye from "../assets/eye.svg";
import CloseEye from "../assets/closedeye.svg";

const Create = () => {
  const navigate = useNavigate();

  const [signup, setSignUp] = useState({
    fname: "",
    email: "",
    contact: "",
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
          <label htmlFor="fname">Full Name:</label>
          <input
            type="text"
            id="fname"
            placeholder="Enter Your Name"
            value={signup.fname}
            onChange={(e) =>
              setSignUp({ ...signup, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="someone@email.com"
            value={signup.email}
            onChange={(e) =>
              setSignUp({ ...signup, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="number">Contact:</label>
          <input
            type="number"
            id="contact"
            placeholder="Phone Number"
            value={signup.contact}
            onChange={(e) =>
              setSignUp({ ...signup, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="userId1">User Id:</label>
          <input
            type="text"
            id="userId"
            placeholder="create an user id"
            value={signup.userId}
            onChange={(e) =>
              setSignUp({ ...signup, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
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
        <div className="OR">
        <h4>or</h4>
        </div>
        <div className="signup-footer">
          <div className="google-svg">
          <span><h5>Create with Google:</h5></span>
          <span>
            <Link to={''}><img className="google-img" src={GoogleImg} alt="Google-icon"/></Link>
          </span>
          </div>
          <div className="signin-svg">
            <span><h5>Already a user:</h5></span>
            <span>
              <Link to={'/'}>
              <img src={SigninImg} alt="signin-img" className="signin-img"/>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

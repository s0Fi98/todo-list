import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../pages/nav";

import "../css/c.css";

const C = () => {
  const [addTodo, setAddTodo] = useState({
    todoTittle: "",
    todoTextarea: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddTodo((data) => ({ ...data, [id]: value }));
  };

  const AddGoal = (event) => {
    event.preventDefault();
    console.log("Todo Added..", addTodo);
  };

  return (
    <div className="create-container">
      <Nav />
      <div className="create-card">
        <div className="create-heading">
          <div className="back-button">
            <Link to={"/home-page"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </Link>
          </div>
          <h1 className="header-title">Add Todos</h1>
        </div>
        <div className="create-input">
          <label htmlFor="">Todo Tittle:</label>
          <input
            type="text"
            id="todoTittle"
            placeholder="Enter Tittle.."
            value={addTodo.todoTittle}
            onChange={handleChange}
          />
        </div>
        <div className="create-input">
          <label htmlFor="">Enter Your Goal:</label>
          <textarea
            name=""
            id="todoTextarea"
            placeholder="Add Todos.."
            rows={8}
            value={addTodo.todoTextarea}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="create-btn">
          <button onClick={AddGoal}>Add Goal</button>
        </div>
      </div>
    </div>
  );
};

export default C;

import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../css/cards.css";

const Card = () => {

  const [todoData, setTodoData] = useState([{
    id: "", todoTittle: "", todoTextarea: ""
  }]);

 useEffect(() => {
   alert("Hiii")
   Axios.get("http://localhost:3500/get-Todos")
   .then((result) => {
    console.log("result is: ", result);
    setTodoData(result.data.data)
   }).catch((err) => {
    
   });
 }, [])
 


  const deleteCard = () => {
    alert('Card Removed!')
  }

  const [checked, setChecked] = useState(false);
  const handleCheck = (e) => {
    setChecked(!checked)
    alert('Goal Completed')

  }

  return (
    <div className="main-container">
        {todoData.length && todoData.map((val) => (
          <div className="main-card" key={val.id}>
            <div className="card-head">
              <span>
                <input type="checkbox" onChange={handleCheck}/>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                  onClick={deleteCard}
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
              </span>
            </div>
            <div className="card-tittle">
              <h1>{val.todoTittle}</h1>
            </div>
            <div className="card-para">
              <p>{val.todoTextarea}</p>
            </div>
            <div className="card-btn">
              <button>Read More..</button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Card;

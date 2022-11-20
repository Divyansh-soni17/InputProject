import React from "react";
import { useState } from "react";
import "./home.css";
import axios from "axios";
const Home = () => {
  const [datause, setdatause] = useState([]);
  const [counter, setCounter] = useState(1);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleData = () => {
    console.log(datause);
  };

  const onchangeInput = (val, index) => {
    let temp = datause;
    temp[index] = val.target.value;
    setdatause(temp);
  };

  const callAPI = async (datause) => {
    let payload = {
      dataarray: datause,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://localhost:3000/getdata/adddata`,
      payload,
      config
    );
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <button onClick={handleClick}>Add More</button>

        {Array.from(Array(counter)).map((c, index) => {
          return (
            <input
              className="infodata"
              key={index}
              type="text"
              onChange={(e) => {
                onchangeInput(e, index);
              }}
            ></input>
          );
        })}
        <div className="bottomitem">
          <button
            onClick={() => {
              callAPI(datause);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

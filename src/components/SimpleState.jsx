import React from "react";
import { useState } from "react";

const SimpleState = () => {
  const [name, setName] = useState("Declan");
  const handleNameChange = () => {
    if (name == "Declan") {
      setName("saka");
    } else {
      setName("Declan");
    }
  };

  const [num, setNum] = useState(0);
  // inr\crease
  const handleIncrease = () => {
    setNum(num + 1);
  };
  //   decrease
  const handleDecrease = () => {
    setNum(num - 1);
  };
  const details = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
          omnis ipsum dolore sed quisquam voluptate animi, consectetur culpa
          similique hic quidem praesentium itaque, id quas necessitatibus rerum
          odit voluptates ullam veniam accusantium dolorum debitis magni
          temporibus. Ratione deserunt aliquid natus. Nihil quasi iure
          asperiores rerum laboriosam quod incidunt repudiandae!`;
  const [show, setShow] = useState(false);
  const handleShowDetails = () => {
    setShow(!show);
    
  };

  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl font-bold">UseState 1</h1>
      <p>My name is {name}</p>
      <button onClick={handleNameChange} className="mybtn">
        Change Name
      </button>

      <h1 className="text-4xl my-3.5">{num}</h1>
      <button onClick={handleIncrease} className="mybtn mr-3">
        {" "}
        Increase
      </button>
      <button onClick={() => setNum(0)} className="mybtn">
        {" "}
        Reset
      </button>
      <button onClick={handleDecrease} className="mybtn ml-3">
        {" "}
        Decrease
      </button>

      <div className="max-w-[600px] mx-auto p-3 shadow-lg text-start">
        <h1 className="text-4xl font-bold">Top Football News</h1>
        <h2 className="text-2xl text-red-500 my-2">
          Madrid Demolished at the emirate stadium
        </h2>
        <p className="mb-2">{show ? details : details.substr(0, 100)+('.....')}</p>
        <button onClick={handleShowDetails} className="mybtn">{show ? "show less" : "show more"}</button>
      </div>
    </div>
  );
};

export default SimpleState;

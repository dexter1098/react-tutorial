import React from "react";

const EventHandling = () => {
  const handleClick = () => {
    alert("welcome user");
  };

  const handleClickAgain = (name) => {
    alert(`Welcome ${name}`);
  };
  return (
    <div className="py-10 text-center ">
      <h1 className="p-5 text-3xl"> Responding to User interaction</h1>
      <button onClick={handleClick} className="mybtn">
        Click Me
      </button>
      <button  onClick={() => handleClickAgain('john')} className="mybtn ml-3"> Click Again </button>
    </div>
  );
};

export default EventHandling;

import React from "react";

const Loading = ({ title }) => {
  return (
    <div className="card bg-dark75 shadow-xl flex flex-col items-center m-5 p-8 text-primary w-[80%] max-w-[300px] mx-auto">
      <span className="loading loading-infinity loading-lg"></span>
      <span>{title}</span>
    </div>
  );
};

export default Loading;

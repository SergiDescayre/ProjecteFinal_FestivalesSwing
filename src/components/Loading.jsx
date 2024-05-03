import React from "react";

const Loading = ({ title }) => {
  return (
    <div className="card bg-zinc-900 shadow-xl flex flex-col items-center m-5 p-8 text-orange-200 w-[80%] mx-auto">
      <span className="loading loading-infinity loading-lg"></span>
      <span>{title}</span>
    </div>
  );
};

export default Loading;

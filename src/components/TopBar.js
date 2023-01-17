import React from "react";
import top from "../assets/images/top.png";
const TopBar = (props) => {
  return (
    <div
      className="h-screen p-8 relative "
      style={{
        background: `url(${top})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="text-white absolute top-60 left-60  text-2xl  ">
        WE ARE <br />
        FACELESS
        <p className="text-teal">Make secure payments seamlessly!</p>
        <button className="rounded-full mt-4 text-base  text-justify text-white p-2 bg-teal">
          LAUNCH APP
        </button>
      </div>
    </div>
  );
};

export default TopBar;

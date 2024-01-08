import React, { useState } from "react";

const Box = ({ backgroundColor, height, width }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        height: `${height}px`,
        width: `${width}px`,
      }}
    ></div>
  );
};

export default Box;

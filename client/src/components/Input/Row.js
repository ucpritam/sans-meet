import React from "react";
import Key from "./Key";

const Row = ({ keys, mode, handleTxt }) => {
  return (
    <div className="row">
      {keys &&
        keys.map((val, idx) => (
          <Key key={idx} config={val} mode={mode} handleTxt={handleTxt} />
        ))}
    </div>
  );
};

export default Row;

import React from "react";

const Key = ({ config, mode, handleTxt }) => {
  const [clicked, setClicked] = React.useState(false);
  const { ul, ur, m, extraComp, style, onClick } = config;
  const M = mode === 2 ? (ul ? ul : m) : mode === 1 ? (ur ? ur : m) : m;
  return (
    <div
      className={`key
      ${config.className ? config.className : ""}
      ${clicked ? "clicked" : ""}
      `}
      style={style ? style : null}
      onMouseDown={(e) => {
        e.preventDefault();
        setClicked(true);
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        setClicked(false);
        handleTxt(M);
      }}
      onMouseLeave={() => setClicked(false)}
      onClick={onClick ? onClick : () => null}
    >
      <div>
        <span>{ul ? (mode === 2 ? m : ul) : ""}</span>
        {ur && <span>{mode === 1 ? m : ur}</span>}
        {extraComp && extraComp}
      </div>
      <div>
        <span>{M}</span>
      </div>
    </div>
  );
};

export default Key;

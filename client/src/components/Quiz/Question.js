import React from "react";

export default function Question({ id, val, setScore }) {
  const [ansShown, setAnsShown] = React.useState(false);
  const _map = ["अ", "ब", "स", "द"];
  return (
    <div id={`question-${id}`}>
      <section className={`question ${ansShown ? "answer-shown" : ""}`}>
        <div className="holder">{val.q}</div>
        <section className="options">
          {val.o.map((option, idx) => (
            <Option
              key={idx}
              optionLabel={option}
              optionName={_map[idx]}
              rightAns={val.ra}
              ansShown={ansShown}
              informParent={() => setAnsShown(true)}
              setScore={setScore}
            />
          ))}
        </section>
      </section>
    </div>
  );
}

function Option({
  optionLabel,
  optionName,
  rightAns,
  informParent,
  ansShown,
  setScore
}) {
  const [state, setState] = React.useState(1);
  const handleMouseUp = () => {
    if (optionName === rightAns) {
      setState(2);
      setScore((score) => score + 1);
    } else setState(0);
    informParent();
  };
  return (
    <div
      className={
        state === 2 || (ansShown && optionName === rightAns)
          ? "right"
          : state === 0
          ? "wrong"
          : ""
      }
      onMouseUp={handleMouseUp}
    >
      <span>{optionName}.</span>
      <p>{optionLabel}</p>
    </div>
  );
}

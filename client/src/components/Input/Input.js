import React from "react";
import Row from "./Row";

import "./Input.css";

const Input = ({
  setMessage, //this becomes useless
  sendMessage,
  message, //this one too
  data,
  sendButton
}) => {
  const [layout, setLayout] = React.useState(0);
  const backspaceHist = [];
  const textRef = React.useRef(null);

  const Rows = [
    [
      { m: "`", ur: "~", ul: "", className: "m-hide" },
      { m: "१", ur: "ऍ", ul: "1" },
      { m: "२", ur: "ॅ", ul: "2" },
      { m: "३", ur: "्र", ul: "3" },
      { m: "४", ur: "र्", ul: "4" },
      { m: "५", ur: "ज्ञ", ul: "5" },
      { m: "६", ur: "त्र", ul: "6" },
      { m: "७", ur: "क्ष", ul: "7" },
      { m: "८", ur: "श्र", ul: "8" },
      { m: "९", ur: "(", ul: "9" },
      { m: "०", ur: ")", ul: "0" },
      { m: "-", ur: "ः", ul: "_", className: "m-hide" },
      { m: "ृ", ur: "ऋ", ul: "=", className: "m-hide" },
      { m: "ॉ", ur: "ऑ", ul: "\\", className: "m-hide" },
      {
        m: "Backspace",
        className: "bckspce",
        extraComp: <div />
      }
    ],
    [
      { m: "Tab", className: "tab", extraComp: <div /> },
      { m: "ौ", ur: "औ" },
      { m: "ै", ur: "ऐ" },
      { m: "ा", ur: "आ" },
      { m: "ी", ur: "ई" },
      { m: "ू", ur: "ऊ" },
      { m: "ब", ur: "भ" },
      { m: "ह", ur: "ङ" },
      { m: "ग", ur: "घ" },
      { m: "द", ur: "ध" },
      { m: "ज", ur: "झ", ul: "[" },
      { m: "ड", ur: "ढ", ul: "]" },
      { m: "़", ur: "ञ", className: "m-hide" },
      { m: "Enter", className: "enter" }
    ],
    [
      { m: "Caps", className: "caps", extraComp: <div /> },
      { m: "ो", ur: "ओ" },
      { m: "े", ur: "ए" },
      { m: "्", ur: "अ" },
      { m: "ि", ur: "इ" },
      { m: "ु", ur: "उ" },
      { m: "प", ur: "फ" },
      { m: "र", ur: "ऱ" },
      { m: "क", ur: "ख" },
      { m: "त", ur: "थ" },
      { m: "च", ur: "छ", ul: ";" },
      { m: "ट", ur: "ठ", ul: "'" }
    ],
    [
      {
        m: "⇧",
        className: "shift shift-left",
        style: { flexDirection: "row", alignItems: "center" },
        extraComp: <div>Shift</div>,
        onClick: () => setLayout((l) => (l !== 1 ? 1 : 0))
      },
      { m: "ं", ur: "ँ", ul: "ॐ" },
      { m: "म", ur: "ण" },
      { m: "व", ur: "न", ul: "~" },
      {
        m: "`",
        ur: "ञ",
        ul: "़",
        className: "m-show",
        style: { gridColumn: "7 span" }
      },
      { m: "ल", ur: "ळ" },
      { m: "स", ur: "श" },
      { m: "ष", ur: ",", ul: "<" },
      { m: "।", ur: ".", ul: ">" },
      { m: "य", ur: "य़", ul: "/" },
      {
        m: "Shift",
        className: "shift shift-right",
        onClick: () => setLayout((l) => (l !== 1 ? 1 : 0)),
        extraComp: <div />
      },
      {
        m: "⌫",
        ur: "ञ",
        ul: "़",
        className: "m-show",
        extraComp: <div />,
        style: { gridColumn: "8 span" }
      }
    ],
    [
      {
        m: "Alt",
        className: "alt alt-left",
        extraComp: <div />,
        onClick: () => setLayout((l) => (l !== 2 ? 2 : 0))
      },
      { m: "Space", className: "space", extraComp: <div /> },
      {
        m: "Alt",
        className: "alt alt-right",
        onClick: () => setLayout((l) => (l !== 2 ? 2 : 0)),
        extraComp: <div />
      },
      { m: "-", ur: "ः", ul: "_", className: "m-show" },
      { m: "ृ", ur: "ऋ", ul: "=", className: "m-show" },
      { m: "ॉ", ur: "ऑ", ul: "\\", className: "m-show" },
      { m: "⏎", className: "enter m-show" }
    ]
  ];

  const handleTxt = (mainLetter) => {
    let l;
    if (mainLetter === "Backspace" || mainLetter === "⌫") {
      if (backspaceHist.length > 0) {
        backspaceHist.shift();
        textRef.current.value =
          backspaceHist.length > 0 ? backspaceHist[0] : "";
      }
    } else if (mainLetter === "Space") {
      l = textRef.current.value.concat(" ");
      textRef.current.value = l;
      if (l !== backspaceHist[0]) backspaceHist.unshift(l);
    } else if (mainLetter === "Tab") {
      l = textRef.current.value.concat("    ");
      textRef.current.value = l;
      if (l !== backspaceHist[0]) backspaceHist.unshift(l);
    } else if (mainLetter === "Enter" || mainLetter === "⏎") {
      l = textRef.current.value.concat("\n");
      textRef.current.value = l;
      if (l !== backspaceHist[0]) backspaceHist.unshift(l);
    } else if (!["Alt", "Shift", "Caps", "⇧"].includes(mainLetter)) {
      l = textRef.current.value.concat(mainLetter);
      textRef.current.value = l;
      if (l !== backspaceHist[0]) backspaceHist.unshift(l);
    }
    textRef.current.focus();

    // try {
    //   let setpos = document.createRange();
    //   let set = window.getSelection();
    //   setpos.setStart(
    //     textRef.current.childNodes[0],
    //     textRef.current.value.length
    //   );
    //   setpos.collapse(true);
    //   set.removeAllRanges();
    //   set.addRange(setpos);
    //   textRef.current.focus();
    // } catch (error) {}
  };

  const rows = data ? data : Rows;

  const handleSendMessage = () => {
    sendMessage(textRef.current.value) //this way u can get the input value and do whatever the f u want 
    textRef.current.value = ''
    backspaceHist.splice(0, backspaceHist.length)
  }
  
  return (
    <form className="form">
      <input
        ref={textRef}
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)} /* onChnage event does not get triggered when using the virtual keyboard, so u cant do this */
        onKeyPress={(event) =>
          event.key === "Enter" ? handleSendMessage() : null
        }
      />
      <button className="sendButton" onClick={(e) =>{e.preventDefault();handleSendMessage()}}>
        <i className="fa fa-paper-plane" aria-hidden="true">Send</i>
      </button>

      <div className="keyboard-container" onClick={(e) => e.preventDefault()}>
        {/* <div className="text-container">
          <div
            ref={textRef}
            id="text-ip"
            autoFocus
            autoCorrect="false"
            contentEditable="true"
          ></div>
          <div
            className="send-button"
            onClick={() => (enterHandler ? enterHandler() : null)}
          >
            {sendButton ? sendButton : "send"}
          </div>
        </div> */}
        <div
          className={`keyboard ${
            layout === 0 ? "default" : layout === 1 ? "shift_" : "alt_"
          }`}
        >
          <div>
            {rows &&
              rows.map((val, idx) => (
                <Row key={idx} keys={val} mode={layout} handleTxt={handleTxt} />
              ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Input;

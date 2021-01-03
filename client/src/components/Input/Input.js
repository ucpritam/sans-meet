import React from "react";
import Row from "./Row";
import 'font-awesome/css/font-awesome.min.css';

import "./Input.css";

const Input = ({
  sendMessage,
  data
}) => {
  const [layout, setLayout] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const [backspaceHist, setBackspaceHist] = React.useState([""]);
  const textRef = React.useRef(null);

  // React.useEffect(()=>{
  //   setMessage(backspaceHist[0])
  // }, [backspaceHist])

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
        
        setBackspaceHist(bh => { if (bh.length > 1) { bh.shift(); setMessage(bh[0]); return bh } else { setMessage(bh[0]); return bh};})
        setMessage(backspaceHist[0])
        // textRef.current.value =
        //   backspaceHist.length > 0 ? backspaceHist[0] : "";
        return
      }
    } else if (mainLetter === "Space") {
      l = textRef.current.value.concat(" ");
    } else if (mainLetter === "Tab") {
      l = textRef.current.value.concat("    ");
    } else if (mainLetter === "Enter" || mainLetter === "⏎") {
      l = textRef.current.value.concat("\n");
    } else if (!["Alt", "Shift", "Caps", "⇧"].includes(mainLetter)) {
      l = textRef.current.value.concat(mainLetter);
    }
    setMessage(l);
    setBackspaceHist(bh => { bh.unshift(l); console.log(bh); return bh })

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
    sendMessage(message)
    setMessage('')
    backspaceHist.splice(0, backspaceHist.length)
    textRef.current.focus();
  }
  
  return (
    <div className="form">
      <input
        ref={textRef}
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? handleSendMessage() : null
        }
      />
      <button className="sendButton" onMouseUp={() => handleSendMessage()}>
        <i className="fa fa-paper-plane" aria-hidden="true"></i>
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
    </div>
  );
};

export default Input;

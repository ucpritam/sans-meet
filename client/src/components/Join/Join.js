import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');

  return (
    <div className="joinOuterContainer">
    <h1 className="heading">सुस्वागतम्</h1>
      <div className="joinInnerContainer">
        
        <div>
          <input placeholder="नाम" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${"admin"}`}>
          <button className={'button mt-20'} type="submit">Join</button>
        </Link>
      </div>
      <h3 className="credit">Developed by team Yantra</h3>
      
    </div>
  );
}
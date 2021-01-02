import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h3>Active now</h3>
            <div className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                   <span className="name-on">{name}</span>
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
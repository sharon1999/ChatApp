import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './ChatList.css';

const ChatList = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1 className='text-lg'>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img alt="Online Icon" className='px-2' src={onlineIcon}/>
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default ChatList;
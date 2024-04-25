import React from "react";
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutsLarge';
import ChatIcon from '@material-ui/icons/ChatIcon';
import MoreVert from '@material-ui/icons/MoreVert';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="app-window">
      <div className="sidebar">

        <header>
          <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/>
            <div className="header--buttons">
            <div className="header--btn">
                <DonutLargeIcon styled={{collor: '#919191'}} />
              </div>
              <div className="header--btn">
                <ChatIcon styled={{collor: '#919191'}} />
              </div>
              <div className="header--btn">
                <MoreVert styled={{collor: '#919191'}} />
              </div>
            </div>

        </header>

        <div className="search">
          ...
        </div>

        <div className="chatlist">
          ...
        </div>
        
      </div>
      <div className="contentarea">
        ...
      </div>
    </div>
  );
}

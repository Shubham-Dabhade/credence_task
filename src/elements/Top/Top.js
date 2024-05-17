import React, { useRef, useState } from 'react';
import "./top.css";

const Top = ({toggleButton,active}) => {


  return (
    <div className="Top">
        <div className="inside-top-container">
            <div className="top-left-container">
                <div className="top-left-container-title">
                    Social Media Dashboard
                </div>
                <div className={`top-left-container-followers-count  ${active?"dark-top-left-container-followers-count":""}`}>
                    Total Followers:23,004
                </div>
            </div>
            <div className="top-right-container">
                <div className={`top-right-container-toggle-text ${active?"text_color_top":""}`}>
                    Dark Mode
                </div>
                <div className={`top-right-container-toggle-button ${active?"toggle-background-active":""}`} onClick={toggleButton}>
                    <div className={`top-right-container-toggle-button-circle ${active?"toggle-active":""} `}>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top;
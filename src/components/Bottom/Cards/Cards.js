import React from 'react';
import "./cards.css";

const Cards = ({data,active}) => {
  return (
    <div className="Bottom-Cards">
        <div className={`inside-bottom-cards ${active?"dark-inside-bottom-cards":""}`}>
            <div className="main-bottom-container-top-row">
                <div className="main-bottom-top-type" style={{color:active?"hsl(228, 34%, 66%)":"hsl(228, 12%, 44%)"}}>
                    {data['type']}
                </div>
                <div className="main-bottom-top-logo-container">
                    {data['logo']}
                </div>
            </div>
            <div className="main-bottom-container-bottom-row" >
                <div className="main-bottom-bottom-count">
                    {data['count']}
                </div>
                <div className="main-bottom-bottom-raise-container" style={{color:data['raise_dir']==="up"?"hsl(163, 72%, 41%)":"hsl(356, 69%, 56%)"}}>
                    <div className="main-bottom-bottom-arrow">
                        {data['raise_dir']==='up'?<svg xmlns="http://www.w3.org/2000/svg" className='main-bottom-bottom-arrow-lo' width="8" height="4"><path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z"/></svg>}
                    </div>
                    <div className="main-bottom-bottom-raise-number">
                        {data['raise']}
                    </div>
                    <div className="main-bottom-bottom-raise-static">
                        %
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;
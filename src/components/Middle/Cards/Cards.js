import React, { useState } from 'react';
import "./cards.css"

const Cards = ({dat,active}) => {
    const [data,setData] = useState(dat)

  return (
    <div className="Middle-Cards" style={{background:data["top_color"]}}>
        <div className={`inside-middle-cards-container ${active?"dark-inside-middle-cards-container":""}`} >
            <div className="middle-card-top-section">
                <div className="middle-social-logo">
                    {data["social"]}
                </div>
                <div className="middle-socail-id" style={{color:active?"hsl(228, 34%, 66%)":"hsl(228, 12%, 44%)"}}>
                    {data['id']}
                </div>
            </div>
            <div className="middle-card-middle-section">
                <div className="middle-card-followers-count">
                    {data['followers']}
                </div>
                <div className="middle-followers" style={{color:active?"hsl(228, 34%, 66%)":"hsl(228, 12%, 44%)"}}>
                    FOLLOWERS
                </div>
            </div>
            <div className={`middle-card-bottom-section`} style={{color:data['raise_dir']==="up"?"hsl(163, 72%, 41%)":"hsl(356, 69%, 56%)"}}>
                <div className="middle-card-bottom-arrow-container">
                    {data['raise_dir']==='up'?<svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z"/></svg>}
                </div>
                <div className="middle-card-bottom-raise">
                    {data['raise']}
                </div>
                <div className="middle-card-bottom-today">
                    Today
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;
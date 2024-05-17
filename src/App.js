import { useState } from "react";
import "./App.css";
import Top from "./elements/Top/Top";
import Middle from "./elements/Middle/Middle";
import Bottom from "./elements/Bottom/Bottom";

function App() {
  const [active,setActive] = useState(false)

  const toggleButton=()=>{
      setActive(!active)
  }


  return (
    <div className={`App ${active?"dark":""}`}>
      <div className={`top-background-container ${active?"dark-top-background-container":""}`}></div>
      <div className="inside-app-container">
        <Top toggleButton={toggleButton} active={active}/>
        <Middle active={active}/>
        <Bottom active={active}/>
      </div>
    </div>
  );
}

export default App;

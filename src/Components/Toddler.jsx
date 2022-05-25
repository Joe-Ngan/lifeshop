import React, { useContext, useState } from "react";
import fatherhood from "../Images/fatherhood.png";
import motherhood from "../Images/motherhood.png";
import fathertime from "../Images/fathertime.png";
import mothercare from "../Images/mothercare.png";
import mothercompany from "../Images/mothercompany.png";
import {
  loremIpsum,
  toddlerWords,
  toddlerPassBody,
  toddlerPassTitle,
} from "../Texts/texts";
import Popup from "../Components/Popup";
import appContext from "../Context/appContext";
import congratsToddler from "../Images/congrats-toddler.png";
function Toddler({ handleGrow }) {
  const [opacity, setOpacity] = useState(1);
  const [isShown, setIsShown] = useState(false);
  const state = useContext(appContext);
  const minChangeForEachClick = 0.1;

  function handleClick(){
    handleGrow(state.username, 5, 30, 0, 10, 0);
  }

  function ChangeOpacity() {
    if (opacity > 0) {
      setOpacity(opacity - minChangeForEachClick);
    }
    if (opacity <= 0) {
      setIsShown(true);
    }
  }
  
  return (
    <div className="toddler">
      <div className="toddler-display">
        <img onClick={ChangeOpacity} className="toddler-photo" src={fatherhood} alt="fatherhood"/>
        <img onClick={ChangeOpacity} className="toddler-photo" src={motherhood} alt="motherhood"/>
        <img onClick={ChangeOpacity} className="toddler-photo fathertime" src={fathertime} alt="fathertime"/>
        <img onClick={ChangeOpacity} className="toddler-photo" src={mothercare} alt="mothercare"/>
        <img onClick={ChangeOpacity} className="toddler-photo" src={mothercompany} alt="mothercompany"/>
        <img onClick={ChangeOpacity} className="toddler-photo" src={fatherhood} alt="fatherhood"/>
        <img onClick={ChangeOpacity} className="toddler-photo" src={motherhood} alt="motherhood"/>
        <img onClick={ChangeOpacity} className="toddler-photo fathertime" src={fathertime} alt="fathertime"/>
        <img onClick={ChangeOpacity} className="toddler-photo" src={mothercare} alt="mothercare"/>
        <img onClick={ChangeOpacity} className="toddler-photo" src={mothercompany} alt="mothercompany"/>
      </div>
      <div className="toddler-loremipsum" style={{ "--opacity": `${opacity}` }}>
        {loremIpsum}
      </div>
      <div
        className="toddler-toddlerWords"
        style={{ "--opacity": `${1 - opacity}` }}
      >
        {toddlerWords}
      </div>
      {isShown && (
        <div className="toddler-popup">
          <Popup
            mainbody={toddlerPassBody}
            title={toddlerPassTitle}
            picture={congratsToddler}
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  );
}

export default Toddler;

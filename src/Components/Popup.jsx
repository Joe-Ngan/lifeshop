import React, { useContext } from "react";
import  appContext from "../Context/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart,faCoins,faSmileBeam, faUserClock, faGem } from '@fortawesome/free-solid-svg-icons';

function Popup({ title, mainbody, picture, before, handleClick }) {
  const state = useContext(appContext);
  return (
    <div
      className="popup"
    >
      <div className="popup-title">
          <span>&#127882;</span>
          <span className="popup-title-text">{title}</span>
      </div>
      <div className="popup-main-body">
        <div>{mainbody}</div>
        <img
          className={`popup-photo ${before&&state.status.age<18?'hint':''}`}
          src={picture}
          alt="popupClipart"
        />
        {!before &&
        <div className="popup-status">
        {state.status.age===0 && <div>Welcome, little baby.</div>}
        {state.status.age===1 && <div>Welcome, little toddler.</div>}
        {state.status.age===6 && <div>Welcome, kid.</div>}
          <div><FontAwesomeIcon icon={faUserClock}/>Current age: <span className="white-text">{state.status.age}</span></div>
        {state.status.age>=1 && <>
          <div><FontAwesomeIcon icon={faHandHoldingHeart}/>Health status: <span className="white-text">{state.status.health}%.</span></div>
        </>}
        {state.status.age>=6 &&
        <>
          <div><FontAwesomeIcon icon={faSmileBeam}/>Happiness status: <span className="white-text">{state.status.happiness}%.</span></div>
          <div><FontAwesomeIcon icon={faGem}/> Value status: <span className="white-text">{state.status.value}%.</span></div>
        </>}
        {state.status.age>=18 &&
          <div><FontAwesomeIcon icon={faCoins}/> Wealth status: <span className="white-text">{state.status.money}%.</span></div>
        }
        </div>
      }
      </div>
      <div className="popup-button-container">
        <button className="popup-button" onClick={handleClick}>Confirm</button>
      </div>
    </div>
  );
}

export default Popup;

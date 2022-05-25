import React, { useContext, useState } from "react";
import playfun from "../Images/playfun.png";
import rightpath from "../Images/rightpath.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning,faClipboardList,faClipboardCheck, faCheckSquare,faSquare } from '@fortawesome/free-solid-svg-icons';
import appContext from "../Context/appContext";
import Popup from "../Components/Popup";
import congratsKid from "../Images/congrats-kid.png";

function Kid({handleGrow}) {
  const state = useContext(appContext);

  const [funBlank, setFunBlank] = useState("");
  const [easyBlank, setEasyBlank] = useState("");
  const [surviveBlank, setSurviveBlank] = useState("");
  const [easyOrRightCheck, setEasyOrRightCheck] = useState(false);
  const [believeBlank, setBelieveBlank] = useState("");
  const [focusBlank, setFocusBlank] = useState("");
  const [fifthChoice, setFifthChoice] = useState(false);
  const [believePopUpDisappear, setBelievePopUpDisappear] = useState(false);
  const [focusPopUpDisappear, setFocusPopUpDisappear] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const BelievePopup = () => {
    return (
      <div className={`kid-popup ${believePopUpDisappear?'hidden':''}`}>
        <div className="kid-popup-line"></div>
        <div className="kid-popup-question"><FontAwesomeIcon icon={faWarning} /> Are you sure?</div>
        <div className="kid-popup-options">
            <div className="kid-popup-yes" onClick={()=>{setBelievePopUpDisappear(true)}}>&#9758; Yes</div>
            <div className="kid-popup-no">&#9758; Emm..</div>
        </div>
        
      </div>
    );
  };
  const FocusPopup = () => {
      return (
        <div className={`kid-popup ${focusPopUpDisappear?'hidden':''}`}>
            <div className="kid-popup-menu"><span className="cross-circle" onClick={()=>{setFocusPopUpDisappear(true)}}>&#8855;</span><span className="minus-circle" onClick={()=>{setFocusPopUpDisappear(true)}}>&#8854;</span> Importance Things Selector</div>
            <div className="kid-focuspopup-choices">
                <div className="kid-focuspopup-choice">&#8977; Doubt</div>
                <div className="kid-focuspopup-choice">&#8977; Gossip</div>
                <div className="kid-focuspopup-choice">&#8977; Self-critique</div>
                <div className="kid-focuspopup-choice">&#8977; Opinions of strangers</div>
            </div>
        </div>
      );
  }
  const thirdIcon = !easyOrRightCheck? <FontAwesomeIcon icon={faClipboardList} /> : <FontAwesomeIcon icon={faClipboardCheck} /> 
  
  const allRight = (funBlank==='un' && easyBlank==='asy' && surviveBlank==='urvive' 
  && believeBlank==='elieve' && focusBlank==='ocus' && easyOrRightCheck);

  function onhandleShowPopup(){
    if(allRight){
      setIsShown(true);
    }
  }

  function handleClick(){
    handleGrow(state.username, 12, 0, 0, 0, 10);
  }


  return (
    <>
        {believeBlank === "elieve" && <BelievePopup />}
        {focusBlank === "ocus" && <FocusPopup />}
      <div className="kid">
        <div className="kid-question">
          Please fill in the blank with appropriate words{" "}
          <span>(First letter is already provided).</span>
        </div>
        <div className="kid-sentence">
          Life is f
          <input
            className="kid-input"
            placeholder="\ˈfən\"
            value={funBlank}
            onChange={(e) => {
              setFunBlank(e.target.value);
            }}
          />
          , so does learning.
        </div>
        <div className="kid-sentence-three">
          But learning is not always e
          <input
            className="kid-input"
            placeholder="asy"
            value={easyBlank}
            onChange={(e) => {
              setEasyBlank(e.target.value);
            }}
          />
          .
        </div>
        <div className="kid-sentence-four">
            Knowing these helps you s
          <input
            className="kid-input"
            placeholder="urvive"
            value={surviveBlank}
            onChange={(e) => {
              setSurviveBlank(e.target.value);
              setEasyOrRightCheck(false);
              if(e.target.value==='urvive')setEasyOrRightCheck(true)
            }}
          />{thirdIcon}
        </div>
        
        <div className="kid-sentence-five">1. Always choose the
        <div className="kid-choice">
            <div className="kid-choice-easy" onClick={()=>{setFifthChoice(false)}}><FontAwesomeIcon icon={!fifthChoice?faCheckSquare:faSquare}/>easy</div>
            <div className="kid-choice-right" onClick={()=>{setFifthChoice(true)}}><FontAwesomeIcon icon={fifthChoice?faCheckSquare:faSquare}/><span className={fifthChoice?'kid-choice-choosen':''}>right</span></div> 
        </div>
         path.</div>
         <div className="kid-sentence-five">2. Keep your eyes on your f<input
            className="kid-input"
            placeholder="ocus"
            value={focusBlank}
            onChange={(e) => {
                if(e.target.value!=='ocus')setFocusPopUpDisappear(false);
                setFocusBlank(e.target.value);
            }}
          />.</div>
         <div className="kid-sentence">
          3. B
          <input
            className="kid-input"
            placeholder="elieve"
            value={believeBlank}
            onChange={(e) => {
                if(believeBlank!=='elieve')setBelievePopUpDisappear(false);
              setBelieveBlank(e.target.value);
            }}
          />{" "}
          in yourself.
        </div>
        
        <button className={`kid-button-confirm ${allRight?'':'hidden'}`} onClick={onhandleShowPopup}>Submit</button>

      </div>
      {funBlank === "un" && (
        <img className="playfun" src={playfun} alt="playfun" />
      )}
      {fifthChoice && <img className="rightpath" src={rightpath} alt="playfun" />}
      {funBlank === "un" && <div className="kid-background"/>}
      {easyBlank === "asy" && <div className="kid-background2" />}
      {surviveBlank === "ard" && <div className="kid-background" />}
      {isShown && (
        <div className="kid-popup">
          <Popup
            mainbody="You are top A learner:)"
            title="Great!"
            picture={congratsKid}
            handleClick={handleClick}
          />
        </div>
      )}
    </>
  );
}

export default Kid;

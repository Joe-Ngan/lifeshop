import React, { useContext, useState } from "react";
import Popup from "./Popup";
import appContext from "../Context/appContext";
import congratsBaby from "../Images/congrats-baby.png";
function Baby({ handleGrow }) {
  const [number, setNumber] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const state = useContext(appContext);

  const [MousePosition, setMousePosition] = useState({
    cursorX: 0,
    cursorY: 0,
  });

  function handleClick() {
    handleGrow(state.username, 1, 50, 0, 0, 0);
  }
  function handleMouseMove(e) {
    setMousePosition({ cursorX: e.screenX, cursorY: e.screenY - 135 });
  }
  return (
    <>
      <div
        className="dark"
        onMouseMove={(e) => {
          handleMouseMove(e);
          if (number > 0) setNumber(number - 1);
          if (number < 500) setIsShown(false);
        }}
        style={{
          "--cursorX": `${MousePosition.cursorX}px`,
          "--cursorY": `${MousePosition.cursorY}px`,
        }}
      >
        <div className="baby-button-panel">
          <div className="baby-progress-title">Mother care:</div>
          <div className="progress">
            <div
              className="progress-value"
              style={{ "--progress": `${number}px` }}
            ></div>
            <div className={`${number/5>=100? 'hidden':''}`}>{number/5}%</div>
          </div>
          <button
            className="add-button"
            onClick={(e) => {
              setNumber(number + 25);
              if (number >= 500) {
                setIsShown(true);
              }
            }}
          >
            ❤️
          </button>
        </div>
        {isShown && (
          <Popup
            mainbody="You survive! Welcome to the world."
            title="Great!"
            picture={congratsBaby}
            handleClick={handleClick}
          />
        )}
      </div>
    </>
  );
}

export default Baby;

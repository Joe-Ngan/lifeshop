import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faCoins,
  faSmileBeam,
  faUserClock,
  faGem,
  faTrashCan,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import playfun from "../Images/playfun.png";
import family from "../Images/market-family.png";
import healthy from "../Images/market-healthy.png";
import moneyPic from "../Images/market-money.png";
import travel from "../Images/market-travel.png";
import sport from "../Images/market-sport.png";
import language from "../Images/market-language.png";
import education from "../Images/market-education.png";
import appContext from "../Context/appContext";

function WalletModal({ id, name, time, health, money, happiness, value, handleDeleteItem }) {
  const [modalDeleteConfirmPopup, setWalletModalBuyConfirmPopup] = useState(false);
  const state = useContext(appContext);
  let pic = playfun;
  if (name === "Travel all around the world") {
    pic = travel;
  } else if (name === "Learn a new language") {
    pic = language;
  } else if (name === "Go further education") {
    pic = education;
  } else if (name === "Earn Money") {
    pic = moneyPic;
  } else if (name === "Do an extreme sport") {
    pic = sport;
  } else if (name === "Live a healthy life") {
    pic = healthy;
  } else if (name === "Start a family") {
    pic = family;
  }

  function handleDeletePossession() {
    setWalletModalBuyConfirmPopup(true);
  }
  function handleConfirmDelete(id){
    handleDeleteItem(id, state.username);
    handleCancelDelete();
  }
  function handleCancelDelete(){
    setWalletModalBuyConfirmPopup(false);
  }
  return (
    <div className={`walletmodal ${modalDeleteConfirmPopup? 'walletmodal-confirm': ''}`}>
      { modalDeleteConfirmPopup?(
          <>
        <div className="delete-confirm-title">
            Are you certain deleting <span className="dark-text">{name}</span>?<br/>
            Please note that your status would not change for your deletion.
        </div>
        <div className="delete-confirm-buttons">
            <button onClick={()=>{handleConfirmDelete(id)}}><FontAwesomeIcon icon={faCircleCheck}/></button>
            <button onClick={handleCancelDelete}><FontAwesomeIcon icon={faCircleXmark}/></button>
        </div>
        </>
      ):(
          <>
          <div className="walletmodal-image-container">
            <img className="walletmodal-image" src={pic} alt="pic" />
          </div>
          <div className="walletmodal-info">
            <div className="walletmodal-info-name">{name}</div>
            <div className="walletmodal-detailinfo">
              <div className="walletmodal-info-time">
                <FontAwesomeIcon icon={faUserClock} /> time: {time}{" "}
              </div>
              <div className="walletmodal-info-health">
                <FontAwesomeIcon icon={faHandHoldingHeart} /> health:{health}{" "}
              </div>
              <div className="walletmodal-info-money">
                <FontAwesomeIcon icon={faCoins} /> money:{money}{" "}
              </div>
              <div className="walletmodal-info-happiness">
                <FontAwesomeIcon icon={faSmileBeam} /> happiness:{happiness}{" "}
              </div>
              <div className="walletmodal-info-value">
                <FontAwesomeIcon icon={faGem} /> value:{value}{" "}
              </div>
            </div>
          </div>
          <div className="walletmodal-buttons">
            {name!=='being'&&
            <button
            className="walletmodal-button-delete"
            onClick={handleDeletePossession}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            }
          </div>
          </>
      )}
      </div>
    );
}

export default WalletModal;

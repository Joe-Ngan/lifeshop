import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faCoins,
  faSmileBeam,
  faGem,
  faUserCircle,
  faEllipsisV,
  faEye,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import appContext from "../Context/appContext";
import CreateItem from "./CreateItem";

function Wallet({ setIsWalletShown, handleAddNewItem }) {
  const state = useContext(appContext);
  const [moreOptions, setMoreOptions] = useState(false);
  const [noticeOfCreationStandard, setNoticeOfCreationStandard] = useState(false);
  const [create, setCreate] = useState(false);
  function handleClickWallet() {
    setMoreOptions(!moreOptions);
  }
  function tryCloseMoreOptions(e) {
    if(e.target.className!=="wallet-title-icon"){
      setMoreOptions(false);
      console.log(e.target);
    }
  }
  function handleClickView() {
    setIsWalletShown(true);
    setMoreOptions(!moreOptions);
  }
  function handleClickCreate(){
    if(state.status.happiness<50 || state.status.value<50){
      setNoticeOfCreationStandard(true);
    }else{
      setCreate(!create);
    }
  }
  return (
    <div className="wallet-item" onClick={(e)=>{tryCloseMoreOptions(e)}}>
      {create && <CreateItem handleAddNewItem={handleAddNewItem}/>}
      
      <div className="wallet-title">
        <div className="wallet-title-more-button" onClick={handleClickWallet}>
          <div className="wallet-title-icon">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
          {moreOptions && (
            <div className="wallet-options">
              <div className="wallet-options-view" onClick={handleClickView}>
                <FontAwesomeIcon icon={faEye} /> View Possessions
              </div>
              <div className="wallet-options-create" onClick={handleClickCreate}>
                <FontAwesomeIcon icon={faCartPlus} /> Create a life product!
              </div>
            </div>
          )}
        </div>
        <div className="wallet-title-image">
          <FontAwesomeIcon icon={faUserCircle} size="2xl" />
        </div>
        <div className="wallet-title-name" size="xs">
          {state.username}
          <span className="wallet-title-age">
            (<span className="wallet-title-age-num">{state.status.age}</span>
            yrs)
          </span>
        </div>
      </div>
      {noticeOfCreationStandard && <div className="creation-prerequisite">
        You currently have no access to creating a new product for life shop.<br/> 
        Please make sure that you have more than 50% happiness and value.<br/>
        <button className="creation-notice-confirm-button" onClick={()=>{setNoticeOfCreationStandard(false)}}>All right.</button>
        </div>}
      <div className="wallet-info">
        <div className="wallet-resource-info">
          <div className="wallet-health">
            <div className="wallet-progress-title">
              <FontAwesomeIcon icon={faHandHoldingHeart} /> Health
            </div>
            <div className="wallet-progress">
              <div
                className="wallet-progress-value"
                style={{
                  "--progress-status": `${state.status.health * 2.5}px`,
                }}
              >
                {state.status.health}
              </div>
            </div>
          </div>
          <div className="wallet-money">
            <div className="wallet-progress-title">
              <FontAwesomeIcon icon={faCoins} /> Money
            </div>
            <div className="wallet-progress">
              <div
                className="wallet-progress-value"
                style={{ "--progress-status": `${state.status.money * 2.5}px` }}
              >
                {state.status.money}
              </div>
            </div>
          </div>
          <div className="wallet-happiness">
            <div className="wallet-progress-title">
              <FontAwesomeIcon icon={faSmileBeam} /> Happiness
            </div>
            <div className="wallet-progress">
              <div
                className="wallet-progress-value"
                style={{
                  "--progress-status": `${state.status.happiness * 2.5}px`,
                }}
              >
                {state.status.happiness}
              </div>
            </div>
          </div>
          <div className="wallet-value">
            <div className="wallet-progress-title">
              <FontAwesomeIcon icon={faGem} /> Value
            </div>
            <div className="wallet-progress">
              <div
                className="wallet-progress-value"
                style={{ "--progress-status": `${state.status.value * 2.5}px` }}
              >
                {state.status.value}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;

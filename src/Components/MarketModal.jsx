import React, { useContext,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill,faHandHoldingHeart,faCoins,faSmileBeam, faUserClock, faGem } from '@fortawesome/free-solid-svg-icons';
import enjoy from "../Images/market-pizza.png";
import family from "../Images/market-family.png";
import healthy from "../Images/market-healthy.png";
import money from "../Images/market-money.png";
import travel from "../Images/market-travel.png";
import sport from "../Images/market-sport.png";
import language from "../Images/market-language.png";
import education from "../Images/market-education.png";
import appContext from "../Context/appContext";

function MarketModal({ properties, handleBuy, handleDeleteMarketItem }) {
  const state = useContext(appContext);
  const { id, name, timeProfit,  healthProfit, happinessProfit, moneyProfit, valueProfit, timeCost, healthCost, happinessCost, moneyCost, valueCost, stock, buyerCount, provider} = properties;
  const [modalBuyConfirmPopup, setMarketModalBuyConfirmPopup] = useState(false);
  const [modalDeleteConfirmPopup, setMarketModalDeleteConfirmPopup] = useState(false);
  const [modalBuyWarningPopup, setMarketModalBuyWarningPopup] = useState(false);
  const [modalBuySuccessPopup, setMarketModalBuySuccessPopup] = useState(false);
  
  function handleClickBuy(id){
    const userAge = state.status.age;
    const userHealth = state.status.health;
    const userMoney = state.status.money;
    const userHappiness = state.status.happiness;
    const userValue = state.status.value;
    if(userAge+timeCost<=100 && userHealth>=healthCost && userMoney>=moneyCost && userHappiness>=happinessCost && userValue>=valueCost){
      setMarketModalBuyConfirmPopup(true);
    }else{
      setMarketModalBuyWarningPopup("true");
    }
  }
  function handleClickDelete(id){
    setMarketModalDeleteConfirmPopup(true);
  }
  function handleClickDeleteConfirm(id){
    handleDeleteMarketItem(id, state.username);
    handleClickCancel();
  }
  function handleClickConfirm(id){
    handleBuy(id, state.username);
    setMarketModalBuySuccessPopup(true);
    setTimeout(()=>{
      setMarketModalBuySuccessPopup(false);
    }, 2000);
    handleClickCancel();
  }
  function handleClickCancel(){
    setMarketModalDeleteConfirmPopup(false);
    setMarketModalBuyConfirmPopup(false);
  }
  let pic = enjoy;
  if( properties.name === 'Travel all around the world'){
     pic = travel;
  }else if( properties.name === 'Learn a new language'){
    pic = language;
  }else if( properties.name === 'Go further education'){
    pic = education;
  }else if( properties.name === 'Earn Money'){
    pic = money;
  }else if( properties.name === 'Do an extreme sport'){
    pic = sport;
  }else if( properties.name === 'Live a healthy life'){
    pic = healthy;
  }else if( properties.name === 'Start a family'){
    pic = family;
  }
  
  
  return (
    <div className="modal-unit">
      {modalBuyConfirmPopup && <div className="modal-buy-confirm-popup">
          <div className="modal-buy-confirm-popup-title">Any purchase in <span className="gradient-text">life shop</span> is irrevocable.<br/> Please note that you will make a purchase to <span className="gradient-text">{name}</span>.<br/> It will cost you:<br/> <span className="gradient-text">{timeCost}</span> time,<br/> <span className="gradient-text">{healthCost}</span> health,<br/> <span className="gradient-text">{moneyCost}</span> money,<br/> <span className="gradient-text">{happinessCost}</span> happiness,<br/> <span className="gradient-text">{valueCost}</span> value. </div>
          <div className="modal-buy-confirm-popup-buttons">
          <button onClick={()=>{handleClickConfirm(id)}}>Sure</button>
          <button onClick={handleClickCancel}>No</button>
          </div>
        </div>}
        {modalDeleteConfirmPopup && <div className="modal-delete-confirm-popup">
          <div className="modal-delete-confirm-title">Please note that your deletion on <span className="gradient-text">{name}</span> is irrevocable.</div>
          <div className="modal-buy-confirm-popup-buttons">
            <button onClick={()=>{handleClickDeleteConfirm(id)}}>Sure</button>
            <button onClick={handleClickCancel}>No</button>
          </div>
        </div>}
        <div className="modal-item">
            <div className="modal-item-pic-container">
                <img className="modal-item-pic" src={pic} alt="pic"/>
            </div>
            <div className="modal-item-title">{name}</div>
        </div>
      <div className="modal-calc">
        <div className="modal-cost">
        <FontAwesomeIcon icon={faMoneyBill}/>Cost:
          <div className="modal-cost-time"><FontAwesomeIcon icon={faUserClock} />:<span className="modal-cost-number">{timeCost}</span><span className="hoverText-cost-time">time cost:{timeCost} <br/> My time left:<span className={`${timeCost>100-state.status.age?'inefficient':''}`}>{100-state.status.age}</span></span></div>
          <div className="modal-cost-health"><FontAwesomeIcon icon={faHandHoldingHeart} />:<span className="modal-cost-number">{healthCost}</span><span className="hoverText-cost-health">health cost:{healthCost} <br/> My health left:<span className={`${healthCost>state.status.health?'inefficient':''}`}>{state.status.health}</span></span></div>
          <div className="modal-cost-money"><FontAwesomeIcon icon={faCoins} />:<span className="modal-cost-number">{moneyCost}</span><span className="hoverText-cost-money">money cost:{moneyCost} <br/> My money left:<span className={`${moneyCost>state.status.money?'inefficient':''}`}>{state.status.money}</span></span></div>
          <div className="modal-cost-happiness"><FontAwesomeIcon icon={faSmileBeam} />:<span className="modal-cost-number">{happinessCost}</span><span className="hoverText-cost-happiness">happiness cost:{happinessCost} <br/> My happiness left:<span className={`${happinessCost>state.status.happiness?'inefficient':''}`}>{state.status.happiness}</span></span></div>
          <div className="modal-cost-value"><FontAwesomeIcon icon={faGem} />:<span className="modal-cost-number">{valueCost}</span><span className="hoverText-cost-value">value cost:{valueCost} <br/> My value left:<span className={`${valueCost>state.status.value?'inefficient':''}`}>{state.status.value}</span></span></div>
        </div>
        <div className="modal-profit">
        <FontAwesomeIcon icon={faMoneyBill}/>Profit:
          <div className="modal-profit-time"><FontAwesomeIcon icon={faUserClock} />:<span className="modal-profit-number">{timeProfit}</span><span className="hoverText-profit-time">time profit:{timeProfit}</span></div>
          <div className="modal-profit-health"><FontAwesomeIcon icon={faHandHoldingHeart} />:<span className="modal-profit-number">{healthProfit}</span><span className="hoverText-profit-health">health profit:{healthProfit}</span></div>
          <div className="modal-profit-money"><FontAwesomeIcon icon={faCoins} />:<span className="modal-profit-number">{moneyProfit}</span><span className="hoverText-profit-money">money profit:{moneyProfit}</span></div>
          <div className="modal-profit-happiness"><FontAwesomeIcon icon={faSmileBeam} />:<span className="modal-profit-number">{happinessProfit}</span><span className="hoverText-profit-happiness">happiness profit:{happinessProfit}</span></div>
          <div className="modal-profit-value"><FontAwesomeIcon icon={faGem} />:<span className="modal-profit-number">{valueProfit}</span><span className="hoverText-profit-value">value profit:{valueProfit}</span></div>
        </div>
      </div>
        {modalBuyWarningPopup && <div className="modal-buy-warning-popup">Insufficient resources to {name} right now. Please check your age, health, money, happiness, value is enough.<button className="modal-buy-warning-button" onClick={()=>{setMarketModalBuyWarningPopup(false)}}>ok</button></div>}
        {modalBuySuccessPopup && <div className="modal-buy-success-popup">You've successfully managed to {name}. <br/>Live your life!</div>}
      <div className="modal-button">
        {provider===state.username? (<button className="modal-delete-button" onClick={()=>{handleClickDelete(id)}} >Delete</button>):(<button className="modal-buy-button" onClick={()=>{handleClickBuy(id)}}>Try it now!</button>)}
        <div className="modal-info">
          <div className="modal-sale-count">Sale Count: {buyerCount}</div>
          <div className="modal-stock-count">Stock Count: {stock}</div>
          <div className="modal-provider">Provider: {provider}</div>
        </div>
      </div>
    </div>
  );
}

export default MarketModal;

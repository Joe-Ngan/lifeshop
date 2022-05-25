import React, { useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faCoins,
  faSmileBeam,
  faGem,
  faUserCircle,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import appContext from "../Context/appContext";

function CreateItem({handleAddNewItem}) {
    const[newItemName, setNewItemName] = useState("");
    const[ageCost, setAgeCost] = useState(0);
    const[healthCost, setHealthCost] = useState(0);
    const[moneyCost, setMoneyCost] = useState(0);
    const[happinessCost, setHappinessCost] = useState(0);
    const[valueCost, setValueCost] = useState(0);
    const[ageProfit, setAgeProfit] = useState(0);
    const[healthProfit, setHealthProfit] = useState(0);
    const[moneyProfit, setMoneyProfit] = useState(0);
    const[happinessProfit, setHappinessProfit] = useState(0);
    const[valueProfit, setValueProfit] = useState(0);

    const state = useContext(appContext);
    function handleSubmmitNewItem(){
        const newItem = {newItemName, ageCost, healthCost, moneyCost, happinessCost, valueCost, ageProfit, healthProfit, moneyProfit, happinessProfit, valueProfit};
        handleAddNewItem(newItem, state.username);
    }
  return (
    <div className="create-item">
      <div className="create-item-title">Create New Item</div>
      <form className="create-item-form">
        <div className="create-item-form-name">
          <label>
            <FontAwesomeIcon icon={faCartPlus} />
            New Item:
            <input
              className="create-item-form-name-input"
              type="text"
              name="name"
              placeholder="New Item"
              value={newItemName}
              onChange={(e)=>{setNewItemName(e.target.value)}}
            />
          </label>
        </div>
        <div className="create-item-form-nums">
          <div className="create-item-form-icon">
            <div><FontAwesomeIcon icon={faUserCircle} />age</div>
            <div><FontAwesomeIcon icon={faHandHoldingHeart} />health</div>
            <div><FontAwesomeIcon icon={faCoins} />money</div>
            <div><FontAwesomeIcon icon={faSmileBeam} />happiness</div>
            <div><FontAwesomeIcon icon={faGem} />value</div>
          </div>
          <div className="create-item-form-cost">
            <label>
              <input
                type="number" name="ageCost" min="0" max="100" value={ageCost}
                onChange={(e)=>{setAgeCost(e.target.value)}}
                placeholder="AgeCost"
              />
            </label>
            <label>
              <input
                type="number" name="healthCost" min="0" max="100" value={healthCost}
                onChange={(e)=>{setHealthCost(e.target.value)}}
                placeholder="HealthCost"
              />
            </label>
            <label>
              <input
                type="number" name="moneyCost" min="0" max="100" value={moneyCost}
                onChange={(e)=>{setMoneyCost(e.target.value)}}
                placeholder="MoneyCost"
              />
            </label>
            <label>
              <input
                type="number" name="happinessCost" min="0" max="100" value={happinessCost}
                onChange={(e)=>{setHappinessCost(e.target.value)}}
                placeholder="HappinessCost"
              />
            </label>
            <label>
              <input
                type="number" name="valueCost" min="0" max="100" value={valueCost}
                onChange={(e)=>{setValueCost(e.target.value)}}
                placeholder="ValueCost"
              />
            </label>
          </div>
          <div className="create-item-form-profit">
            <label>
              <input
                type="number" name="ageProfit" min="0" max="100" value={ageProfit}
                onChange={(e)=>{setAgeProfit(e.target.value)}}
                placeholder="AgeProfit"
              />
            </label>
            <label>
              <input
                type="number" name="healthProfit" min="0" max="100" value={healthProfit}
                onChange={(e)=>{setHealthProfit(e.target.value)}}
                placeholder="HealthProfit"
              />
            </label>
            <label>
              <input
                type="number" name="moneyProfit" min="0" max="100" value={moneyProfit}
                onChange={(e)=>{setMoneyProfit(e.target.value)}}
                placeholder="MoneyProfit"
              />
            </label>
            <label>
              <input
                type="number" name="happinessProfit" min="0" max="100" value={happinessProfit}
                onChange={(e)=>{setHappinessProfit(e.target.value)}}
                placeholder="HappinessProfit"
              />
            </label>
            <label>
              <input
                type="number" name="valueProfit" min="0" max="100" value={valueProfit}
                onChange={(e)=>{setValueProfit(e.target.value)}}
                placeholder="ValueProfit"
              />
            </label>
          </div>
        </div>
        <div className="create-item-form-submit">
          <input type="submit" value="Submit" onClick={handleSubmmitNewItem} />
        </div>
      </form>
    </div>
  );
}

export default CreateItem;

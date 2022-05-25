import React, { useState, useContext } from 'react'
import MarketModal from "../Components/MarketModal";
import Wallet from "../Components/Wallet";
import WalletDetails from "../Components/WalletDetails";
import appContext from '../Context/appContext';
function Teenager({ handleGrow, handleGetItems, handleBuy, handleDeleteItem, handleAddNewItem, handleDeleteMarketItem}) {
    const state = useContext(appContext);
    const [isWalletShwon, setIsWalletShown] = useState(false);
    return (
    <div>
      {/* <div>
      Suppose you have 100 years to live your life.
      What would you do to fulfil your life?
      </div> */}
      {isWalletShwon &&
          <div className="modal-wallet-detail">
            <WalletDetails setIsWalletShown={setIsWalletShown} handleDeleteItem={handleDeleteItem}/>
          </div>}
      <div  className={`modal-container ${isWalletShwon?'hidden':''}`}>
          <div className="modal-wallet">
            <Wallet setIsWalletShown={setIsWalletShown} handleAddNewItem={handleAddNewItem}/>
          </div>
          {Object.values(state.market).map((item)=>(
             <MarketModal key={item.id}
             handleBuy={handleBuy}
             handleDeleteMarketItem={handleDeleteMarketItem}
             properties={{
                id:item.id,
                name:item.name, 
                timeProfit:item.timeProfit,  
                healthProfit:item.healthProfit, 
                happinessProfit:item.happinessProfit, 
                moneyProfit:item.moneyProfit, 
                valueProfit:item.valueProfit, 
                timeCost:item.timeCost, 
                healthCost:item.healthCost, 
                happinessCost:item.happinessCost, 
                moneyCost:item.moneyCost, 
                valueCost:item.valueCost, 
                stock:item.stock, 
                provider:item.provider,
                buyerCount:item.buyerCount,
             }}
             />
          ))}
      </div>
    </div>
  )
}

export default Teenager

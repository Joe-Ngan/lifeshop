import React, { useContext, useState } from 'react'
import appContext from '../Context/appContext';
import Baby from "./Baby.jsx";
import Toddler from "./Toddler.jsx";
import Kid from "./Kid.jsx";
import Popup from "./Popup.jsx";
import Teenager from "./Teenager.jsx";
import congrats from "../Images/congrats.png";
import hintbaby from "../Images/hint-baby.png";
import hinttoddler from "../Images/hint-toddler.png";
import hintkid from "../Images/hint-kid.png";

function MainInterface({ handleGrow, handleGetItems, handleBuy, handleDeleteItem, handleAddNewItem, handleDeleteMarketItem }) {
    const state = useContext(appContext);
    const [isShown, setIsShown] = useState(true);
    const [isToddlerShown, setIsToddlerShown] = useState(true);
    const [isKidShown, setIsKidShown] = useState(true);
    const [isTeenagerShown, setIsTeenagerShownIsToddlerShown] = useState(true);
    const gameStartTitleBaby =`Welcome!${state.username}`
    const gameStartTitleToddler =`Congrats!${state.username}`
    const gameStartTitleKid =`You got it!${state.username}`
    const gameStartTitleTeenager =`Finally!${state.username}`
    const gameStartBaby =`Welcome. Before you have access to the shop, you are required to start as a baby and go through three challenges in your childhood period first.`
    const gameStartToddler =`Great to have mommy care helping you survive the initial stage of human being. Now you need to learn how to connect this world...`
    const gameStartKid =`Language is the first bridge to the world. Now more is what you need to learn about the greatness of the universe.`
    const gameStartTeenager =` You have the access to the shop now. Feel free to ideal your life here.`

    return (
      <>
        {isShown && state.status.age===0 && <Popup mainbody={gameStartBaby} title={gameStartTitleBaby} picture={hintbaby} before={true} handleClick={()=>{setIsShown(!isShown)}}/>}
        {isToddlerShown && state.status.age===1 && <Popup mainbody={gameStartToddler} title={gameStartTitleToddler} picture={hinttoddler} before={true} handleClick={()=>{setIsToddlerShown(!isToddlerShown)}}/>}
        {isKidShown && state.status.age===6 && <Popup mainbody={gameStartKid} title={gameStartTitleKid} picture={hintkid} before={true} handleClick={()=>{setIsKidShown(!isKidShown)}}/>}
        {isTeenagerShown && state.status.age===18 && <Popup mainbody={gameStartTeenager} title={gameStartTitleTeenager} picture={congrats} before={true} handleClick={()=>{setIsTeenagerShownIsToddlerShown(!isTeenagerShown)}}/>}
        {state.status.age===0 && (<Baby handleGrow={handleGrow}/>)}
        {state.status.age===1 && (<Toddler handleGrow={handleGrow}/>)}
        {state.status.age===6 && (<Kid handleGrow={handleGrow}/>)}
        {state.status.age>=18 && (<Teenager handleGrow={handleGrow} handleGetItems={handleGetItems} handleBuy={handleBuy} handleDeleteItem={handleDeleteItem} handleAddNewItem={handleAddNewItem} handleDeleteMarketItem={handleDeleteMarketItem}/>)}
      </>
    )
}

export default MainInterface

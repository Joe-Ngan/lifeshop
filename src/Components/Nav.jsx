import React, { useContext, useState } from 'react'
import appContext from '../Context/appContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "../Images/logo.png";
function Nav({handleLogout, handleClickLogo, handleSearchMarketItem}) {
    const state = useContext(appContext);
    const username = state.username;
    const age = state.status.age;
    const [keyWord, setKeyWord] = useState("");
   
  return (
    <div className="navigation">
      {age>6 && <>
          <div className="navigation-img">
            <img onClick={handleClickLogo} className="navigation-logo" alt="logo" src={logo}/>
          </div>
          <div className="greeting-info">
            <div>Hi, <span className="username">{username}</span>.</div>
          </div>
          <div className="nav-search-form">
            <input type="text" className="search-input" value={keyWord} onChange={(e)=>{setKeyWord(e.target.value)}}placeholder="Search Item You Like"/>
            <button className="search-button" onClick={()=>{handleSearchMarketItem(keyWord)}}>
            <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          </>}
            <button className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket}/>
            </button>
    </div>
  )
}

export default Nav

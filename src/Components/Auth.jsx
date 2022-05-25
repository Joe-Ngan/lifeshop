import React, { useState, useContext } from "react";
import appContext from "../Context/appContext";
import Nav from "../Components/Nav";
import logo from "../Images/logo.png";
function Auth({ handleLogin, handleLogout, handleClickLogo, handleSearchMarketItem }) {
  
  const [input, setInput] = useState("");
  const state = useContext(appContext);

  return (
    <>
      {!state.isLoggedIn ? (
        <div className="login">
          <img className="login-logo" src={logo} alt="logo"/>
          
          <div className="login-interface">
          <input
            className="login-input"
            value={input}
            placeholder="Type your name to start"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setInput("");
                handleLogin(input);
              }
            }}
          />
          <button
            className={`${input ? "" : "hidden"} login-button`}
            onClick={() => {
              setInput("");
              handleLogin(input);
            }}
          >
            login
          </button>
          </div>
          {/* <div className="login-greeting">
          Buy your ideal life
          </div> */}
        </div>
      ) : (
        (state.status.age>=6 && 
        <Nav handleLogout={handleLogout} handleClickLogo={handleClickLogo} handleSearchMarketItem={handleSearchMarketItem}/>
        )
      )}
    </>
  );
}

export default Auth;

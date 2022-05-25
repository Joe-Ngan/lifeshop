import React, { useEffect, useReducer } from "react";
import Auth from "./Components/Auth";
import Error from "./Components/Error";
import MainInterface from "./Components/MainInterface.jsx";
import appContext from "./Context/appContext";
import { reducer, initState } from "./Reducer/reducer";
import {
  fetchLogin,
  fetchSession,
  fetchLogout,
  fetchGrow,
} from "./Services/authServices";
import "./App.css";
import {
  fetchMarket,
  fetchAddMarketItem,
  fetchDeleteMarketItem,
} from "./Services/marketServices";
import { fetchBuyItem, fetchDeleteItem } from "./Services/userServices";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    checkForSession();
  }, []);

  //auth
  function checkForSession() {
    fetchSession()
      .then((res) => {
        handleLogin(res.username);
      })
      .catch(() => {
        handleLogout();
      });
  }
  function handleClickLogo() {
    checkForSession();
  }
  function handleLogin(username) {
    if (username === "Author") {
      dispatch({ type: "ERROR", payload: "Forbidden username." });
      console.log("Forbidden username");
      return;
    }
    fetchLogin(username)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res });
        handleGetItems();
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err.error });
        console.log("Something went wrong during log in, please try again.");
      });
  }

  function handleLogout() {
    fetchLogout()
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log("Something went wrong during log out, but never mind. Forget about it.");
        dispatch({ type: "ERROR", payload: err.error });
      });
  }

  function handleClickError() {
    dispatch({ type: "UNERROR" });
  }
  //user: enter next phase
  function handleGrow(username, age, health, money, happiness, value) {
    fetchGrow(username, age, health, money, happiness, value)
      .then((res) => {
        dispatch({ type: "GROW", payload: res });
      })
      .catch((err) => {
        console.log("Something went wrong during log in, please try again.");
        dispatch({ type: "ERROR", payload: err.error });
      });
  }
  //market: get items
  function handleGetItems() {
    fetchMarket()
      .then((res) => {
        dispatch({ type: "GETMARKET", payload: Object.values(res)[0] });
      })
      .catch((err) => {
        console.log("fetching market items failed");
        dispatch({ type: "ERROR", payload: err.error });
    });
  }
  //market: new item
  function handleAddNewItem(newItem, username) {
    fetchAddMarketItem(newItem, username)
      .then((res) => {
        dispatch({ type: "ADD", payload: res });
      })
      .catch((err) => {
        console.log("adding new market item failed");
        dispatch({ type: "ERROR", payload: err.error  });
      });
  }

  function handleDeleteMarketItem(itemId, username) {
    fetchDeleteMarketItem(itemId, username)
      .then((res) => {
        dispatch({ type: "DELETEMARKETITEM", payload: res });
        handleGetItems();
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err.error  });
      });
  }

  function handleSearchMarketItem(keyWord){
    fetchMarket()
      .then((res) => {
        const searchItems = Object.values(Object.values(res)[0]).filter((item)=>(item.name.toLowerCase().includes(keyWord.toLowerCase())));
        dispatch({ type: "SEARCH", payload: searchItems});
      })
      .catch((err) => {
        console.log("fetching market items failed");
        dispatch({ type: "ERROR", payload: err.error  });
    });
  }
  //user: buy item
  function handleBuy(itemId, username) {
    fetchBuyItem(itemId, username)
      .then((res) => {
        const { userData, theMarket } = res;
        dispatch({
          type: "BUY",
          status: userData.status,
          possessions: userData.possessions,
          market: theMarket,
        });
      })
      .catch((err) => {
        console.log('buy items failed');
        dispatch({ type: "ERROR", payload: err.error });
      });
  }

  function handleDeleteItem(itemId, username) {
    fetchDeleteItem(itemId, username)
      .then((res) => {
        dispatch({ type: "DELETE", possessions: res });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err.error });
      });
  }

  return (
    <appContext.Provider value={state}>
      <div>
        {state.isError && <Error handleClickError={handleClickError} />}
        <Auth
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          handleClickLogo={handleClickLogo}
          handleSearchMarketItem={handleSearchMarketItem}
        />
        {state.isLoggedIn && (
          <MainInterface
            handleGrow={handleGrow}
            handleBuy={handleBuy}
            handleDeleteItem={handleDeleteItem}
            handleAddNewItem={handleAddNewItem}
            handleDeleteMarketItem={handleDeleteMarketItem}
          />
        )}
      </div>
    </appContext.Provider>
  );
}

export default App;

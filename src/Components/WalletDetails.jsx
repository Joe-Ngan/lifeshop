import React, { useContext } from "react";
import appContext from "../Context/appContext";
import WalletModal from "./WalletModal";

function WalletDetails({ setIsWalletShown, handleDeleteItem }) {
  const state = useContext(appContext);
  const possessions = state.possessions;
  return (
    <div className="wallet-details-interface">
      <div className="wallet-details-buttons">
        <div className="wallet-details-title">My possessions</div>
        <button
          className="wallet-details-closeButton"
          onClick={() => {
            setIsWalletShown(false);
          }}
        >
          ❌
        </button>
      </div>
      {Object.values(possessions).map((possession) => (
        <WalletModal
          id={possession.id}
          name={possession.name}
          time={possession.time}
          health={possession.health}
          money={possession.money}
          happiness={possession.happiness}
          value={possession.value}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default WalletDetails;

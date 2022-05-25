import React, { useContext } from 'react';
import appContext from '../Context/appContext';

function Error({handleClickError}) {
  const state = useContext(appContext);
  return (
    <div className="error">
      Error! {state.errMsg}
      <button className="error-button" onClick={handleClickError}>ok</button>
    </div>
  )
}

export default Error

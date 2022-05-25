import React from 'react';

const appContext = React.createContext({
    default: "Overriden by provider value"
});

export default appContext;
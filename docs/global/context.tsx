import React, {createContext, useState} from 'react';

interface IPageContext {
    theme: "light" | "dark"
}

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}: any) => {
    const [globalState, setGlobalState] = useState({});

    const updateGlobalState = (newState: IPageContext) => {
        setGlobalState({...globalState, ...newState});
    };

    return (
        <GlobalContext.Provider value={{globalState, updateGlobalState}}>
            {children}
        </GlobalContext.Provider>
    );
};


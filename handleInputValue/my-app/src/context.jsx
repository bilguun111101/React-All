import { useEffect, createContext, useContext, useState } from 'react'


const ButtonContext = createContext();

export const ButtonProvider = (props) => {
    const { children } = props;
    const [isClicked, setIsClicked] = useState({});


    return (
        <ButtonContext.Provider value={{isClicked, setIsClicked}}>
            {children}
        </ButtonContext.Provider>
    )
}

export const useButtonContext = () => useContext(ButtonContext);
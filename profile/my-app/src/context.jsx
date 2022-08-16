import { useEffect, createContext, useContext, useState } from 'react'
import customData from './data.json'

// const ButtonContext = createContext();

const ButtonContext = createContext();

export const ButtonProvider = (props) => {
    const { children } = props;
    let arr = Array.from(customData).fill(false);
    const [isClicked, setIsClicked] = useState(arr)
    // useEffect(() => {
    //     customData.forEach(el => {
    //         arr.push(false)
    //         setIsClicked([...isClicked, arr])
    //     })
    //     // for(let j = 0; j < customData.length; j++)
    // }, [])
    // console.log(isClicked)


    return (
        <ButtonContext.Provider value={{isClicked, setIsClicked}}>
            {children}
        </ButtonContext.Provider>
    )
}

export const useButtonContext = () => useContext(ButtonContext);
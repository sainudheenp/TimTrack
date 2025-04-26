import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    const [isShowing, setIsShowing] = useState(false)
    const [isCreatingProject, setIsCreatingProject] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    const [duration, setDuration] = useState(0)
    const [intervalId, setIntervalId] = useState(null)

    const handleControll = () => {
        console.log("Am handleControll")
        if (isRunning) {
            clearInterval(intervalId)
            setIntervalId(null)
        } else {
            const id = setInterval(() => {
                setDuration(prev => prev + 1)
            }, 1000)
            setIntervalId(id)
        }
        setIsRunning(prev => !prev)
    }

    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu, isClicked, setIsClicked, screenSize, setScreenSize, handleClick,
            isShowing, setIsShowing, isCreatingProject, setIsCreatingProject,
            isRunning, setIsRunning, handleControll,
            duration, setDuration, intervalId, setIntervalId
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)
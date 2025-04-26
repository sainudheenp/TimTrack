import { useState, useEffect } from 'react'
import { useStateContext } from '../context/ContextProvider'

const useTimer = () => {

  const { isRunning, setIsRunning } = useStateContext()
  const [duration, setDuration] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  const handleControll = () => {
    if (isRunning) {
      clearInterval(intervalId)
      setIntervalId(null)
    } else {
      const id = setInterval(() => {
        setDuration(prev => prev + 1)
      }, 1000);
      setIntervalId(id)
    }
  }
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);


  return (
    duration,
    isRunning,
    handleControll,
    setDuration)
}

export default useTimer
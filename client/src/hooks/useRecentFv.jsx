import { useEffect, useState } from 'react'
import { getRecentActivity } from '../api/apiServices'



export default function setRecentActivites(){
    const [activities, setActivities] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const data = await getRecentActivity()
            setActivities(data.data.data)
        }
        fetchData()
    }, [])
    return {activities}
}
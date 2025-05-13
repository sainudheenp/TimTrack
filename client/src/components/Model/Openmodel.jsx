import React, { useState } from 'react'
import { joinRoom } from '../../api/apiServices'
import { toast } from 'react-toastify'
const API_BASE = import.meta.env.VITE_API_URL
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Openmodel = () => {
    const [modal, setModal] = useState(false)

    const [roomName, setRoomName] = useState('')
    const [roomId, setRoomId] = useState('')

    const toggleModal = () => {
        setModal(!modal)
    }
    const queryClient = useQueryClient();

    const joinRoomMutation = useMutation({
        mutationFn: async (data) => await joinRoom(data),
        onSuccess: (result) => {
            setModal(false);
            queryClient.invalidateQueries(['RoomData']);
            toast.success(result.status === 'success' ? 'Joined successfully.' : result.status);
        },
        onError: (error) => {
            console.error("openModel error", error);
            toast.error("Failed to join room.");
        }
    })

    const handleJoin = () => {
        joinRoomMutation.mutate({ roomName, roomId })
    }

    // const handleJoin = async () => {
    //     const data = {
    //         roomName: roomName,
    //         roomId: roomId
    //     }
    //     try {
    //         //  const result = await fetch(`${API_BASE}/api/v1/room`)
    //         const result = await joinRoom(data);
    //         setModal(!modal)

    //         toast.success(result.status == "success" ? "Joined successfully." : result.status);
    //     } catch (error) {
    //         console.log("opoenModel", error)
    //     }
    // }

    return (
        <div>
            {!modal && (
                <button onClick={toggleModal} className="btn-modal cursor-pointer hover:font-medium">
                    Leave / Join Room
                </button>
            )}

            {modal && (
                <div className="bg-white   p-2 rounded-2xl max-w-md w-full">
                    {/* <h2 className="text-xl font-semibold mb-4">Are you sure?</h2> */}
                    {/* <p className="mb-6">Do you want to leave or join the room?</p> */}
                    <div className='flex bg-green-50 border-1 border-amber-400 focus-within:border-black  p-2 rounded-2xl' >
                        <input className='outline-0' type="text" placeholder='Enter Room Id' value={roomId} onChange={((e) => setRoomId(e.target.value))} />
                        <button className='font-bold text-2xl text-gray-500 cursor-pointer hover:text-black '><i className="fa-solid fa-check  "></i></button>
                    </div>
                    <div className="flex justify-between space-x-4 mt-5">
                        <button onClick={toggleModal} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                            Cancel
                        </button>
                        <button onClick={handleJoin} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Openmodel
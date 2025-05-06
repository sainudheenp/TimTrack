import React, { useState } from 'react'

const Openmodel = () => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            {!modal && (
                <button onClick={toggleModal} className="btn-modal">
                Leave / Join Room
            </button>
            )}

            {modal && (
                <div className="bg-white rounded-lg  p-2 rounded-2xl max-w-md w-full">
                    {/* <h2 className="text-xl font-semibold mb-4">Are you sure?</h2> */}
                    {/* <p className="mb-6">Do you want to leave or join the room?</p> */}
                    <div className='flex bg-green-50 border-1 border-amber-400 focus-within:border-black  p-2 rounded-2xl' >
                        <input className='outline-0' type="text" placeholder='Enter Room Id' />
                        <button className='font-bold text-2xl text-gray-500 cursor-pointer hover:text-black '><i className="fa-solid fa-check  "></i></button>
                    </div>
                    <div className="flex justify-between space-x-4 mt-5">
                        <button onClick={toggleModal} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                            Cancel
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Openmodel
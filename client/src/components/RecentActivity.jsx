import React from 'react'

const ImgTitleCard = ({ ActivityName }) => {
    return (<div className=' overflow-hidden relative'>
        <img className=' rounded-xl ' src="https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282053.jpg" alt="" />
        {/* <img className="rounded-xl" src={`https://dummyimage.com/400x400/000/fff&text=${ActivityName}`} alt="" /> */}

        <span className='  overflow-auto truncate text-black font-bold bg-gray-50'>{ActivityName}</span>
    </div>)
}


const RecentActivity = () => {
    return (
        <div className='grid grid-cols-3 gap-4 mt-4'>
            <ImgTitleCard ActivityName={"NodeJS Setup"} />
            <ImgTitleCard ActivityName={"VS Code Setup"} />
            <ImgTitleCard ActivityName={"Debugging"} />
            <ImgTitleCard ActivityName={"UI/UX "} />
            <ImgTitleCard ActivityName={"NodeJS Setup"} />

        </div>
    )
}

export default RecentActivity
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRoomData } from './../api/apiServices';
import formatTime from './../utils/formatTime';


const MembersTile = ({ UserName, Email, TodaysWork, WeeklyTIme }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-sm rounded p-4 mt-2">
      <div className="flex gap-3 flex-col md:flex-row items-center text-center sm:text-left w-full sm:w-auto">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
          alt="user"
        />
        <div>
          <h5 className="font-semibold text-lg">{UserName}</h5>
          <p className="text-gray-500 text-sm truncate  overflow-hidden">{Email}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3 sm:mt-0 text-center sm:text-right w-full sm:w-auto">
        <div>
          <p className="text-sm text-gray-500">Today's Work</p>
          <p className="font-medium">{TodaysWork}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Weekly Time</p>
          <p className="font-medium">{WeeklyTIme}</p>
        </div>
      </div>
    </div>
  );
};

const MembersCard = () => {
  const { data: RoomData, isLoading, isError } = useQuery({
    queryKey: ['RoomData'],
    queryFn: getRoomData,
    select: (res) => res.users.slice(0, 3)
  })
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos</div>;
  console.log("ROOM 3 data :", RoomData)
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {RoomData.map((usr) => (
        <MembersTile
          UserName={usr.name}
          Email={usr.email}
          TodaysWork={formatTime(usr.todaysHours)}
          WeeklyTIme={formatTime(usr.totalHours)}
        />
      ))}

     
    </div>
  );
};

export default MembersCard;

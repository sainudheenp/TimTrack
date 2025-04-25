import React from 'react';

const MembersTile = ({ UserName, Email, TodaysWork, WeeklyTIme }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-sm rounded p-4 mt-2">
      {/* User Info */}
      <div className="flex gap-3 items-center text-center sm:text-left w-full sm:w-auto">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
          alt="user"
        />
        <div>
          <h5 className="font-semibold text-lg">{UserName}</h5>
          <p className="text-gray-500 text-sm">{Email}</p>
        </div>
      </div>

      {/* Work Info */}
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
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <MembersTile
        UserName="John"
        Email="John@gmail.com"
        TodaysWork="00:20:00"
        WeeklyTIme="40:00:00"
      />
      <MembersTile
        UserName="Jane"
        Email="Jane@gmail.com"
        TodaysWork="02:10:00"
        WeeklyTIme="38:00:00"
      />
    </div>
  );
};

export default MembersCard;

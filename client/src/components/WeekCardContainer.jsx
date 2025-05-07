import React from 'react'
import useWeeklyStats from '../hooks/useWeeklyStats'
import { TbArrowsSplit2 } from "react-icons/tb";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
import { userStore } from '../store/userStore';

const WeekCard = ({ title, progress, icon }) => {
  return (
    <div className='w-full bg-white rounded-xl p-6 flex flex-col justify-between'>
      <div className='flex justify-between'>
        <span className='text-xl font-medium '>{title}</span>
        <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
      </div>
      <div className='flex justify-between items-center mt-12'>
        <span className='text-4xl font-medium' >{progress}</span>
        <div className='bg-amber-100 rounded-2xl text-amber-400 font-bold p-3 text-5xl'>
          {icon}
        </div>
      </div>
    </div>
  )
}


//cardConfig

const cardConfig = [
  {
    title: "Daily Average",
    keyV: "WeekAvg",
    icon: <TbArrowsSplit2 className="rotate-90 text-5xl" />,
  },
  {
    title: "Worked This Week",
    keyV: "TotalTime",
    icon: <RxCounterClockwiseClock className="text-5xl" />,
  },
  {
    title: "Projects Worked",
    keyV: "ProjectsCount",
    icon: <FaRegFolder className="text-5xl" />,
  }
];

const WeekCardContainer = () => {
  const { data, isLoading, error } = useWeeklyStats();

  console.log("Tim project opt", data?.weekData)

  // isLoading ? (<div className="flex flex-col md:flex-row justify-between gap-6 mt-12 " >
  //   <WeekCard
  //     title="Daily Average "
  //     progress={'Loading..'}
  //     icon={<TbArrowsSplit2 className="rotate-90 text-5xl" />}
  //   />
  //   <WeekCard
  //     title="Worked This Week"
  //     progress={'Loading..'}
  //     icon={<RxCounterClockwiseClock className="text-5xl" />}
  //   />
  //   <WeekCard
  //     title="Projects Worked"
  //     progress={'Loading..'}
  //     icon={<FaRegFolder className="text-5xl" />}
  //   />
  // </div >)
  //   : error ? (
  //     <div className="mt-12 text-center text-red-500">Error loading Weekly stats. Try again later.</div>
  //   ) : data ? (<div className="flex flex-col md:flex-row justify-between gap-6 mt-12 ">
  //     <WeekCard
  //       title="Daily Average "
  //       progress={data.WeekAvg}
  //       icon={<TbArrowsSplit2 className="rotate-90 text-5xl" />}
  //     />
  //     <WeekCard
  //       title="Worked This Week"
  //       progress={data.TotalTime}
  //       icon={<RxCounterClockwiseClock className="text-5xl" />}
  //     />
  //     <WeekCard
  //       title="Projects Worked"
  //       progress={data.ProjectsCount}
  //       icon={<FaRegFolder className="text-5xl" />}
  //     />
  //   </div>) : null

  if (isLoading) {
    return (
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-12 " >
        {cardConfig.map((card, idx) => (
          <WeekCard
            key={idx}
            title={card.title}
            progress="Loading..."
            icon={card.icon}
          />
        ))}
      </div>
    )
  }

  if (error) {
    console.log(error.message)
    return <div className="mt-12 text-center text-red-500">Error loading weekly stats. Try again later. </div>;
  }

  if (data) {
    userStore.getState().setRecentProject(data?.weekData)

    return (
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-12 " >
        {cardConfig.map((card, idx) => (
          <WeekCard
            key={idx}
            title={card.title}
            progress={data?.[card.keyV] ?? 'N/A'} icon={card.icon}
          />
        ))}
      </div>
    )
  }


}

export default WeekCardContainer
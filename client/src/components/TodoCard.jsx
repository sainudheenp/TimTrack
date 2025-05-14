import React from 'react'
import ProgressTile from './ProgressTile'
import { getTodos } from './../api/apiServices';
import { useQuery } from '@tanstack/react-query';
import formatTime from './../utils/formatTime';
const TodoCard = () => {
  const { data: todos = [], isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    select: (res) => res.data.data.slice(0, 4),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos</div>;
  console.log(todos)
  return (
    <div>
      {todos.map((tod) => (

        <ProgressTile name={tod.activityName} time={formatTime(tod.activityDuration)} value={(tod.activityDuration * tod.expectedTime)/100} />

      ))}
       </div>
  )
}

export default TodoCard
import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Openmodel from '../../components/Model/Openmodel';
import { useQuery } from '@tanstack/react-query';
import { getRoomData } from '../../api/apiServices';
import formatTime from '../../utils/formatTime';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];





const Team = () => {


  const { data: RoomData, isLoading, isError } = useQuery({
    queryKey: ['RoomData'],
    queryFn: getRoomData,
    select: (res) => res.users
  })
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos</div>;
  console.log("ROOM data :", RoomData)
  return (
    <div className="bg-gray-200 rounded-md p-8 md:p-12 h-full">

      <div className='flex flex-col gap-3 md:flex-row  justify-between'>
        <h1 className='text-3xl font-bold' >Team Members</h1>
        {/* <div className='flex bg-green-50 border-1 border-amber-400 focus-within:border-black  p-2 rounded-2xl' >
          <input className='outline-0' type="text" placeholder='Enter Room Id' />
          <button className='font-bold text-2xl text-gray-500 cursor-pointer hover:text-black '><i className="fa-solid fa-check  "></i></button>
        </div> */}
        <Openmodel />
      </div>

      <div className='mt-10'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >Name</StyledTableCell>
                <StyledTableCell >Email</StyledTableCell>
                <StyledTableCell align="center" >Todays Active Hours</StyledTableCell>
                <StyledTableCell align="center" >Total Active Hours </StyledTableCell>
                <StyledTableCell align="center" >No Of Projects</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RoomData.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell >{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{formatTime(row.todaysHours)}</StyledTableCell>
                  <StyledTableCell align="center">{formatTime(row.totalHours)}</StyledTableCell>
                  <StyledTableCell align="center">{row.numberOfProj}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>


    </div>


  )
}

export default Team
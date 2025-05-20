import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
TablePagination
} from '@mui/material';

import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import { useQuery } from '@tanstack/react-query';
import { getRecentActivity } from '../../api/apiServices';
import formatTime from '../../utils/formatTime';

const RecentActivities = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['recentAct'],
        queryFn: getRecentActivity
    })


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
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 3),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 4.3),
        createData('Gingerbread', 356, 16.0, 3.9),
    ];

    if (isLoading) {
        return <div>loading...</div>
    }
    let activities = data?.data?.data;
    console.log("data act all", data.data.data)
    // data.data.data.map((row)=>console.log(row.activityName))
    return (
        <div className='mt-80 md:mt-0'>
            <h2 className='text-2xl font-medium mb-7'>Recent activities :</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Activity name</StyledTableCell>
                            <StyledTableCell align="right">Duration</StyledTableCell>
                            <StyledTableCell align="right">Project Name</StyledTableCell>
                            <StyledTableCell align="right">Time</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activities.map((row, idx) => (
                            <StyledTableRow key={idx}>
                                <StyledTableCell component="th" scope="row">
                                    {row.activityName}
                                </StyledTableCell>
                                <StyledTableCell align="right" scope="row">
                                    {formatTime(row.activityDuration)}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.projectName}</StyledTableCell>
                                <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default RecentActivities
import React from 'react'
import PageHeader from "./PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff',
        minHeight: 600
    },
    table: {
        minWidth: 700,
      },
     
}))
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('001','Frozen Zey', '1011, Metropolitan Ave, 1200 Metro Manila', '+91834528452','+919563425454'),
    createData('002','Jhone sandwich', '92A Lubowitz Haven Suite 547, Borongan City 8389 Bataan', '+96742346421', '+91956342345'),
    createData('003','Sam Eclair', '76A/85 Effertz Orchard, Poblacion, Santa Rosa 5837 Sultan Kudarat', '+99762534123', '+11762395623'),
    createData('004','Flaer Khan', '55/24 Nitzsche Village, Tagudin 1036 Compostela Valley', '+91643285643', '+77453498144'),
    createData('005','Ross Taykz', '67/33 Erdman Plains Suite 423, San Pascual 2177 Surigao del Norte', '+91956342555', '+97236341933'),
  ];
  
 

function ViewBooking() {
    const classes = useStyles();
    
    return (
        <>
            <PageHeader
                title="View Booking"
                subTitle="Mapfreight"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper elevation={0} square className={classes.root}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Id</StyledTableCell>
            <StyledTableCell  align="right">Shipper name</StyledTableCell>
            <StyledTableCell align="right">Shipper address</StyledTableCell>
            <StyledTableCell align="right">Shipper telephone</StyledTableCell>
            <StyledTableCell align="right">Receiver telephone</StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              
             
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Paper>
        </>
    )
}

export default ViewBooking

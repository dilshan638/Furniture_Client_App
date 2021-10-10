import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import DiscountForm from "../Master/Discount/DiscountForm";
import DiscountPopup from "../Master/Discount/DiscountPopup";

import * as DiscountServices from '../Master/Discount/Service'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TableBody, TableCell, TableRow, Table,  TableHead,makeStyles } from '@material-ui/core';
import Notifications from '../Master/Discount/Notifications'
import ConfimDialog from '../Master/Discount/ConfimDialog';

import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import PageHeader from "../Master/Discount/PageHeader";

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: true
        }
    },

   
})

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(0.8),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    },

    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}))

  
const headCellsTech =[
    {id:'discount_code', label:'Discount Code'},
    {id:'discount_name', label:'Discount Name'},
    {id:'status', label:'Status'},
    {id:'actions', label:'Actions'},
  ]

function Discount() {
    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false)
    const [records, setRecords] = useState(DiscountServices.getAllInformation());
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfGialog] = useState({ isOpen: false, title: '', subTitle: '' });


    const addOrEdit = (discount, restForm) => {
        if (discount.id == 0)
        DiscountServices.insertInformation(discount)
        else
        DiscountServices.updateInformation(discount)
        restForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(DiscountServices.getAllInformation())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })


    }

    const onDelete = id => {
        setConfGialog({
            ...confirmDialog,
            isOpen: false 
        })
        DiscountServices.deleteInformation(id);
        setRecords(DiscountServices.getAllInformation())

        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })

    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const TblContainerTech =props=>(
        <Table className={classes.table} >
               {props.children}
         </Table>
      )
           const TblheadTech = props=>{ 
            return(<TableHead>
           <TableRow>
           {
           headCellsTech.map(headCellsTech=>(<TableCell key={headCellsTech.id}>
               {headCellsTech.label}
           </TableCell>))
           }
           </TableRow>
      </TableHead>)
      }

    return (
        <>
         <PageHeader
                title="Discount List"
                subTitle="Sandamali Furniture Brands"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
        <ThemeProvider theme={theme}>
            <Button variant="outlined" onClick={() => { setOpenPopup(true) }}>Discount Add</Button>

           
            <Paper className={classes.pageContent}>

                <TblContainerTech>
                <TblheadTech/>
                  
                <TableBody>
               {
                 records.map(item=>(
                   <TableRow key={item.id}>
                     <TableCell> {item.discount_code} </TableCell>
                     <TableCell> {item.discount_name} </TableCell>
                     <TableCell> {item.status_discount} </TableCell>
                     
                    <TableCell>
                      <EditOutlinedIcon
                      frontSize="small"
                      onClick={()=>{openInPopup(item)}}
                      />
                      
                      <CloseIcon 
                     frontSize="small"
                      onClick={()=>{setConfGialog({
                      isOpen:true,
                      title:'Are You Sure To Delete This Record? ',
                      subTitle:"You Can't undo this Operation",
                      onConfirm:()=>{onDelete(item.id)}
                     })}}
                     />
                   
                      </TableCell>
                   
                  </TableRow> ))
               }
            </TableBody>
                </TblContainerTech>

              </Paper>
            <DiscountPopup
                title="Brand Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <DiscountForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </DiscountPopup>
            <Notifications
                notify={notify}
                setNotify={setNotify}
            />
            <ConfimDialog
                confirmDialog={confirmDialog}
                setConfGialog={setConfGialog}
            />


            <CssBaseline />
        </ThemeProvider>
        </>
    )

}

export default Discount

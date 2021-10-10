import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import CetegoryForm from "../Master/Cetegory/CetegoryForm";
import CetegoryPopup from "../Master/Cetegory/CetegoryPopup";
import * as CetegoryServices from '../Master/Cetegory/Service'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TableBody, TableCell, TableRow, Table, TableHead, makeStyles } from '@material-ui/core';
import Notifications from '../Master/Cetegory/Notifications'
import ConfimDialog from '../Master/Cetegory/ConfimDialog';

import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import PageHeader from "../Master/Cetegory/PageHeader";

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


const headCellsTech = [
    { id: 'category_code', label: 'Cetegory Code' },
    { id: 'category_name', label: 'Cetegory Name' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Actions' },
]

function Cetegory() {
    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false)
    const [records, setRecords] = useState(CetegoryServices.getAllInformation());
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfGialog] = useState({ isOpen: false, title: '', subTitle: '' });


    const addOrEdit = (cetegory, restForm) => {
        if (cetegory.id == 0)
        CetegoryServices.insertInformation(cetegory)
        else
        CetegoryServices.updateInformation(cetegory)
        restForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(CetegoryServices.getAllInformation())
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
        CetegoryServices.deleteInformation(id);
        setRecords(CetegoryServices.getAllInformation())

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
                title="Cetegory List"
                subTitle="Sandamali Furniture Brands"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
        <ThemeProvider theme={theme}>
            <Button variant="outlined" onClick={() => { setOpenPopup(true) }}>Cetegory Add</Button>

           
            <Paper className={classes.pageContent}>

                <TblContainerTech>
                <TblheadTech/>
                  
                <TableBody>
               {
                 records.map(item=>(
                   <TableRow key={item.id}>
                     <TableCell> {item.category_code} </TableCell>
                     <TableCell> {item.category_name} </TableCell>
                     <TableCell> {item.status_category} </TableCell>
                     
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
            <CetegoryPopup
                title="Brand Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <CetegoryForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </CetegoryPopup>
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

export default Cetegory

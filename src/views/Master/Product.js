import React ,{useState} from 'react'
import { Button } from "@material-ui/core";
import ProductForm from "../Master/Product/ProductForm";
import ProductPopup from "../Master/Product/ProductPopup";


import * as ProductServices from '../Master/Product/Service'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TableBody, TableCell, TableRow, Table,  TableHead,makeStyles } from '@material-ui/core';
import Notifications from '../Master/Product/Notifications'
import ConfimDialog from '../Master/Product/ConfimDialog';

import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import PageHeader from "../Master/Product/PageHeader";

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
    {id:'item_code', label:'Item Code'},
    {id:'item_name', label:'Item Name'},
    {id:'brand_id', label:'Brand Id'},
    {id:'category_id', label:'Category Id'},
    {id:'retail_price', label:'Retail Price'},
    {id:'status_product', label:'Status'},
    {id:'actions', label:'Actions'},
  ]

function Product() {
    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false)
    const [records, setRecords] = useState(ProductServices.getAllInformation());
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfGialog] = useState({ isOpen: false, title: '', subTitle: '' });


    const addOrEdit = (product, restForm) => {
        if (product.id == 0)
        ProductServices.insertInformation(product)
        else
        ProductServices.updateInformation(product)
        restForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(ProductServices.getAllInformation())
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
        ProductServices.deleteInformation(id);
        setRecords(ProductServices.getAllInformation())

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
                title="Product List"
                subTitle="Sandamali Furniture Brands"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
        <ThemeProvider theme={theme}>
            <Button variant="outlined" onClick={() => { setOpenPopup(true) }}>Product Add</Button>

           
            <Paper className={classes.pageContent}>

                <TblContainerTech>
                <TblheadTech/>
                  
                <TableBody>
               {
                 records.map(item=>(
                   <TableRow key={item.id}>
                     <TableCell> {item.item_code} </TableCell>
                     <TableCell> {item.item_name} </TableCell>
                     <TableCell> {item.brand_id} </TableCell>
                     <TableCell> {item.category_id} </TableCell>
                     <TableCell> {item.retail_price} </TableCell>
                     <TableCell> {item.status_product} </TableCell>
                     
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
            <ProductPopup
                title="Brand Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <ProductForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </ProductPopup>
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

export default Product

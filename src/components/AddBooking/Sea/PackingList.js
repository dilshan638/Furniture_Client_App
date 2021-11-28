import React, { useState } from 'react'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MuiPhoneNumber from 'material-ui-phone-number';
import Controls from '../DatePacker/Controls';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff',
        minHeight: 600
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    },
    formControl: {
        margin: theme.spacing(1),
        // minWidth: 420,
        marginTop: 30

    },
    btn: {
        marginLeft: 217,
        minWidth: 400,
        marginTop: 10
    },
    isSea: {
        // marginLeft: 317,
        // content:'center' 
        // contain:'center'

    },
    txtField: {
        minWidth: 400,
    },
    txtpcs: {
        minWidth: 40
    },
    h2cal: {
        marginTop: 10
    }
}))
//Air
const initialFValuesSea = {
    id: 0,
    shipperName: '',
    shipperAddress: '',
    receiverName: '',
    receiverAddress: '',
    seaDate: new Date()
    

}
function PackingList() {
    const classes = useStyles();
    const [state, setstate] = useState(false);

    //Air
    const [values, setvalues] = useState(initialFValuesSea);
    const [valuesTelOne, setvaluesTelOne] = useState();
    const [valuesTelTwo, setvaluesTelTwo] = useState();
    //const [errors, setErrors] = useState({});
    

    const handleInputChangeOne = e => {
        // const {name, value} = e.target
        setvaluesTelOne({
            phone: e
        });



    }
    const handleInputChangeTwo = e => {
        // const {name, value} = e.target
        setvaluesTelTwo({
            phone: e
        });



    }

    const handleInputChangeTextField = e => {
        const { name, value } = e.target
        setvalues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setstate(true)
        console.log(valuesTelOne)
        console.log(values)

    }
    const restForm = () => {
        setvalues(initialFValuesSea);
        setvaluesTelOne('')
        setvaluesTelTwo('')
        // setErrors({})
    }
    return (
        <div>
            <form>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Shipper name" name="shipperName" value={values.shipperName} variant="outlined" onChange={handleInputChangeTextField}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField fullWidth label="Shipper address" name="shipperAddress" value={values.shipperAddress} variant="outlined" onChange={handleInputChangeTextField} />
                                </Grid>


                                <Grid item xs={4}>
                                    <MuiPhoneNumber fullWidth defaultCountry={'us'} name="valuesTelOne" value={valuesTelOne} label="Shipper telephone" variant="outlined" onChange={handleInputChangeOne} />

                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Receiver name" name="receiverName" value={values.receiverName} variant="outlined" onChange={handleInputChangeTextField} />
                                </Grid>
                                <Grid item xs={4}>
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField fullWidth label="Receiver's address" name="receiverAddress" value={values.receiverAddress} variant="outlined" onChange={handleInputChangeTextField} />
                                </Grid>
                                <Grid item xs={4}>
                                    <MuiPhoneNumber fullWidth defaultCountry={'us'} name="valuesTelTwo" value={valuesTelTwo} label="Receiver's telephone" variant="outlined" onChange={handleInputChangeTwo} />
                                </Grid>
                                <Grid item xs={4}>
                                </Grid>
                                <Grid item xs={4} >
                              

                              <Controls.DatePicker 
                                  name="Date"
                                  label="seaDate"
                                  onChange={handleInputChangeTextField}
                                  value={values.seaDate}

                                    />
                              </Grid>
                              <Grid item xs={8} >

                                  </Grid>

                                <Grid item xs={4} >
                                    <Button variant="contained" color="text" fullWidth onClick={restForm} >
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item xs={4} >
                                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} >
                                        Submit
                                    </Button>
                                </Grid>


                            </Grid>
                        </form>
        </div>
    )
}

export default PackingList

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
import Box from '@material-ui/core/Box';

//PackingList
import PackingList from './PackingList'
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
        minWidth: 420,
        marginTop: 30
    },
    btn: {
        marginLeft: 217,
        minWidth: 400,
        marginTop: 10
    },
    isSea: {
        marginLeft: 317,
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
const initialFValuesSea = {
    id: 0,
    shipperName: '',
    shipperAddress: '',
    //shipperTel: '',
    receiverName: '',
    receiverAddress: '',
    //receiverTel:'',
    calOne: 0,
    calTwo: 0,
    calThree: 0,
    calTotal: 0

}

function Sea() {
    const classes = useStyles();
    const [values, setvalues] = useState(initialFValuesSea);
    const [valuesTelOne, setvaluesTelOne] = useState();
    const [valuesTelTwo, setvaluesTelTwo] = useState();
    //const [errors, setErrors] = useState({});
    const [state, setstate] = useState(false);


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
    }

    // const validate = (fieldValues = values) => {
    //     let temp = { ...errors }
    //     if ('shipperName' in fieldValues)
    //         temp.shipperName = fieldValues.shipperName ? "" : "This dssd field is required."
    //     setErrors({
    //         ...temp
    //     })

    //     if (fieldValues == values)
    //         return Object.values(temp).every(x => x == "")
    // }
    // const handleSubmit = e => {
    //   //  e.preventDefault()
    //     if (validate()) {

    //     }
    // }
    const restForm = () => {
        setvalues(initialFValuesSea);
        setvaluesTelOne('')
        setvaluesTelTwo('')
        // setErrors({})
    }
    return (
        <>
            {
                state == false ?
                    <div className={classes.pageHeader}>
                        <form >
                            <Grid item container spacing={2}>
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
                                <Grid item xs={4}>
                                    <FormLabel>Number of pcs</FormLabel>
                                </Grid>
                                <Grid item xs={8}>
                                </Grid>

                                <Grid item xs={2} >
                                    <TextField fullWidth name="calOne" label="Length" value={values.calOne} variant="outlined" onChange={handleInputChangeTextField} />
                                </Grid>
                                {/* <Grid item xs={1} >
                <h2 style={{marginTop:'15px', marginLeft:'-53px'}}>*</h2>
            </Grid> */}
                                <Grid item xs={2}>
                                    <TextField fullWidth name="calTwo" label="Width" value={values.calTwo} variant="outlined" onChange={handleInputChangeTextField} />

                                </Grid>
                                {/* <Grid item xs={1} >
                <h2 style={{marginTop:'15px', marginLeft:'-167px'}}>*</h2>
            </Grid> */}
                                <Grid item xs={2}>
                                    <TextField fullWidth name="calThree" label="Height" value={values.calThree} variant="outlined" onChange={handleInputChangeTextField} />

                                </Grid>
                                {/* <Grid item xs={1} >
                <h2 style={{marginTop:'15px', marginLeft:'-267px'}}>=</h2>
            </Grid> */}
                                <Grid item xs={2}>
                                    <TextField fullWidth name="calTotal" label="Volume" value={values.calTotal} variant="outlined" onChange={handleInputChangeTextField} />

                                </Grid>
                                <Grid item xs={4} >

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
                    : <div></div>
            }
            {
                state == true ?

                    <div className={classes.pageHeader}>
                        <PackingList/>
                    </div>
                    : <div></div>
            }
        </>

    )
}

export default Sea

import React, { useState } from 'react'
import PageHeader from "./PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import Sea from "./Sea/Sea";
import Air from "./Air/Air";
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
       // margin: theme.spacing(1),
        minWidth: 420,
        marginTop: 15
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
    shipperName:'',
    shipperAddress:'',
    //shipperTel: '',
    receiverName:'',
    receiverAddress:'',
    //receiverTel:'',
    calOne:0,
    calTwo:0,
    calThree:0,
    calTotal:0

}

function AddBooking() {
    const classes = useStyles();
    const [freightOption, setFreightOption] = React.useState('');
    const [state, setstate] = useState('')
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
    const handleChange = (event) => {
        setFreightOption(event.target.value);
        if (event.target.value == 'Sea') {
            setstate('Sea')
        }
        if (event.target.value == 'Air') {
            setstate('Air')
        }
        if (event.target.value == '') {
            setstate('')
        }
    };
    const handleInputChangeTextField=e=>{
        const {name, value} = e.target
        setvalues({
            ...values,
            [name]: value
        }) 
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

    return (
        <>
            <PageHeader
                title="Add Booking"
                subTitle="Mapfreight"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />

            <Paper elevation={0} square className={classes.root}>
                <div className={classes.pageHeader}>

                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                        <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Freight Option</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={freightOption}
                                    name="freightOption"
                                    onChange={handleChange}
                                    label="Freight Option"
                                    
                                >
                                    <MenuItem value="">
                                        <em>Select Freight Option </em>
                                    </MenuItem>
                                    <MenuItem selected="selected" value="Sea">Sea</MenuItem>
                                    <MenuItem value="Air">Air</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>

                </div>

                {
                    state == 'Sea' ?
                        <div>
                            <Sea/>
                        </div>
                        : <div></div>
                }
                {
                    state == 'Air' ?

                  <div>
                      <Air/>
                  </div>
                        : <div></div>
                }
            </Paper>
        </>
    )
}

export default AddBooking

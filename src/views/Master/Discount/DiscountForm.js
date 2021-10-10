import React ,{useState, useEffect} from 'react'
import { Grid, } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";


const useStyles = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1)
        }
    },

    rootButton:{
        margin:theme.spacing(0.5),
       marginLeft:'10rem'
    },
    
    rootGride: {
        flexGrow: 1,
      },
     
}))


const initialFValues ={
    id :0,
    discount_code: '',
    discount_name: '',
    status_discount: '',
   
    }
function DiscountForm(props) {
    const classes = useStyles();
    const {addOrEdit, recordForEdit} =props
 //   const {children, ...other} =props;
  //  const history = useHistory();
  const validate =(fieldValues= values)=>{
    let temp ={...errors}
    if('discount_code' in fieldValues )
      temp.discount_code=fieldValues.discount_code ? "" : " Brand code is required"
      if('discount_name' in fieldValues )
      temp.discount_name=fieldValues.discount_name ? "" : " Brand code is required"
      if('status_discount' in fieldValues )
      temp.status_discount=fieldValues.status_discount ? "" : " Brand code is required"
    

      setErrors({
        ...temp
    })
    if(fieldValues== values)
    return Object.values(temp).every(x => x == "")
 }

    
const handleSubmit = e => {
e.preventDefault()
if(validate()){
 addOrEdit(values,restForm);

   
}
}


useEffect(()=>{
if(recordForEdit!=null)
setvalues({
    ...recordForEdit
  
})
},[recordForEdit])


const[values, setvalues]= useState(initialFValues);
const[errors, setErrors]= useState({});  


const handleInputChange=e=>{
const {name, value} = e.target
setvalues({
    ...values,
    [name]: value
}) 

// if(validateOnChange)
// validate({[name]:value})
}

const restForm =()=>{
    setvalues(initialFValues);
    setErrors({})
}

    return (
       <form onSubmit={handleSubmit}  autoComplete="off" className={classes.root} style={{marginLeft:'8rem'}}>
           <Grid container >
               <Grid item xs={12}>
               <TextField
                       label="Discount Code"
                       variant="outlined"
                       name="discount_code"
                        value={values.discount_code}
                        onChange={handleInputChange}
                        error={errors.discount_code}
                    />
                   
               </Grid>
               <Grid item xs={12}>
               <TextField
                       label="Discount Name"
                       variant="outlined"
                       name="discount_name"
                        value={values.discount_name}
                        onChange={handleInputChange}
                        error={errors.discount_name}
                    />
                   
               </Grid>
             
               <Grid item xs={12}>
               <TextField
                       label="Status"
                       variant="outlined"
                       name="status_discount"
                        value={values.status_discount}
                        onChange={handleInputChange}
                        error={errors.status_discount}
                    />
                   
               </Grid>
              
           </Grid>
           <Button
                type="submit"
                 variant="contained"
                 color="primary"
                 className={classes.rootButton}

                >
                 Submit
                 </Button>

                 <Button
                 variant="contained" 
                  color="red"
                  className={classes.rootButton}
                  type="reset"
                  onClick={restForm}>
                Reset
                </Button>
       </form>
    )
}


export default DiscountForm

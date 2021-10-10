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
    brand_code: '',
    brand_name: '',
    status_brand: '',
   
    }
function BrandForm(props) {
    const classes = useStyles();
    const {addOrEdit, recordForEdit} =props
 //   const {children, ...other} =props;
  //  const history = useHistory();
  const validate =(fieldValues= values)=>{
    let temp ={...errors}
    if('brand_code' in fieldValues )
      temp.brand_code=fieldValues.brand_code ? "" : " Brand code is required"
      if('brand_name' in fieldValues )
      temp.brand_name=fieldValues.brand_name ? "" : " Brand code is required"
      if('status_brand' in fieldValues )
      temp.status_brand=fieldValues.status_brand ? "" : " Brand code is required"
    

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
console.log(values)

   
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
                       label="Brand Code"
                       variant="outlined"
                       name="brand_code"
                        value={values.brand_code}
                        onChange={handleInputChange}
                        error={errors.brand_code}
                    />
                   
               </Grid>
               <Grid item xs={12}>
               <TextField
                       label="Brand Name"
                       variant="outlined"
                       name="brand_name"
                        value={values.brand_name}
                        onChange={handleInputChange}
                        error={errors.brand_name}
                    />
                   
               </Grid>
             
               <Grid item xs={12}>
               <TextField
                       label="Status"
                       variant="outlined"
                       name="status_brand"
                        value={values.status_brand}
                        onChange={handleInputChange}
                        error={errors.status_brand}
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

export default BrandForm

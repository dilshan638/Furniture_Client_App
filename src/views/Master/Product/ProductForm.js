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
    item_code: '',
    item_name: '',
    brand_id: '',
    category_id: '',
    retail_price: '',
    status_product: '',
   
    }
function ProductForm(props) {
    const classes = useStyles();
    const {addOrEdit, recordForEdit} =props
 //   const {children, ...other} =props;
  //  const history = useHistory();
  const validate =(fieldValues= values)=>{
    let temp ={...errors}
    if('item_code' in fieldValues )
      temp.item_code=fieldValues.item_code ? "" : " Brand code is required"
      if('item_name' in fieldValues )
      temp.item_name=fieldValues.item_name ? "" : " Brand code is required"
      if('brand_id' in fieldValues )
      temp.brand_id=fieldValues.brand_id ? "" : " Brand code is required"
      if('category_id' in fieldValues )
      temp.category_id=fieldValues.category_id ? "" : " Brand code is required"
      if('retail_price' in fieldValues )
      temp.retail_price=fieldValues.retail_price ? "" : " Brand code is required"
      if('status_product' in fieldValues )
      temp.status_product=fieldValues.status_product ? "" : " Brand code is required"
    

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
                       label="Item Code"
                       variant="outlined"
                       name="item_code"
                        value={values.item_code}
                        onChange={handleInputChange}
                        error={errors.item_code}
                    />
                   
               </Grid>
               <Grid item xs={12}>
               <TextField
                       label="Item Name"
                       variant="outlined"
                       name="item_name"
                        value={values.item_name}
                        onChange={handleInputChange}
                        error={errors.item_name}
                    />
                   
               </Grid>
             
               <Grid item xs={12}>
               <TextField
                       label="Brand id"
                       variant="outlined"
                       name="brand_id"
                        value={values.brand_id}
                        onChange={handleInputChange}
                        error={errors.brand_id} 
                    />
                   
               </Grid>
               <Grid item xs={12}>
               <TextField
                       label="Category id"
                       variant="outlined"
                       name="category_id"
                        value={values.category_id}
                        onChange={handleInputChange}
                        error={errors.category_id} 
                    />
                   
               </Grid>
               <Grid item xs={12}>
               <TextField
                       label="Retail price "
                       variant="outlined"
                       name="retail_price"
                        value={values.retail_price}
                        onChange={handleInputChange}
                        error={errors.retail_price} 
                    />
                   
               </Grid>
               <Grid item xs={12}>
               <TextField
                       label="Status"
                       variant="outlined"
                       name="status_product"
                        value={values.status_product}
                        onChange={handleInputChange}
                        error={errors.status_product} 
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

export default ProductForm

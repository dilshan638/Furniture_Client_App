import React ,{useState, useEffect} from 'react'
import { Grid, } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from 'axios'

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
    category_code: '',
    category_name: '',
    status_category: '',
   
    }
function CetegoryForm(props) {
    const classes = useStyles();
    const {addOrEdit, recordForEdit} =props
 //   const {children, ...other} =props;
  //  const history = useHistory();
  const validate =(fieldValues= values)=>{
    let temp ={...errors}
    if('category_code' in fieldValues )
      temp.category_code=fieldValues.category_code ? "" : " Brand code is required"
      if('category_name' in fieldValues )
      temp.category_name=fieldValues.category_name ? "" : " Brand code is required"
      if('status_category' in fieldValues )
      temp.status_category=fieldValues.status_category ? "" : " Brand code is required"
    

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
 

//  axios.post('https://supunsam-001-site1.btempurl.com/api/Category/GetCategories',values)
//  .then(res=>{
//      console.log("Yes")
//      console.log(res)
//  })
// .catch(err=>{
//     console.log(err)
// })
   

// axios.get('http://supunsam-001-site1.btempurl.com/api/Category/GetCategories')
// .then(response =>{
//     console.log(response)
// })
// .catch(err=>{
//     console.log(err)
// })

// Post With Body

var data = {
    
   Category_Code:"Test1",
   Category_Name :"Test2",
   
  };

  let hed = {
    headers: {
    
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  };
  axios.post(
    "http://supunsam-001-site1.btempurl.com/api/Category/GetCategories",
    data,
    hed
  )
  .then(res=>{
    console.log("Yes")
    console.log(res)
})
.catch(err=>{
   console.log(err)
})
//console.log(response)

//







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
                       label="Category Code"
                       variant="outlined"
                       name="category_code"
                        value={values.category_code}
                        onChange={handleInputChange}
                        error={errors.category_code}
                    />
                   
               </Grid>
               <Grid item xs={12}>
               <TextField
                       label="Category Name"
                       variant="outlined"
                       name="category_name"
                        value={values.category_name}
                        onChange={handleInputChange}
                        error={errors.category_name}
                    />
                   
               </Grid>
             
               <Grid item xs={12}>
               <TextField
                       label="Status"
                       variant="outlined"
                       name="status_category"
                        value={values.status_category}
                        onChange={handleInputChange}
                        error={errors.status_category}
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

export default CetegoryForm

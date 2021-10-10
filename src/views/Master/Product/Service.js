
const KEYS ={
    product:'product',
    productId:'productId'
}




export function insertInformation(data){
    let product=getAllInformation();
    data['id']= generateInformationId() 
    product.push(data)
    localStorage.setItem(KEYS.product,JSON.stringify(product))
}


export function updateInformation(data){ 
    let product=getAllInformation();
   let recordIndex =product.findIndex(x=>x.id==data.id);
   product[recordIndex]={...data}
    localStorage.setItem(KEYS.product,JSON.stringify(product))
}

export function deleteInformation(id){
    let product=getAllInformation();
    product =product.filter(x=>x.id != id)
    localStorage.setItem(KEYS.product,JSON.stringify(product));
  
}


export function generateInformationId(data){
    if(localStorage.getItem(KEYS.productId)==null)
    localStorage.setItem(KEYS.productId,'0')
    var id= parseInt(localStorage.getItem(KEYS.productId))
    localStorage.setItem(KEYS.productId,(++id).toString())
    return id;
}


export function getAllInformation(){
    if(localStorage.getItem(KEYS.product)==null)
     localStorage.setItem(KEYS.product,JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.product));
 
}


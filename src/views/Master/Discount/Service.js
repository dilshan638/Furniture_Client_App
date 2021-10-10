
const KEYS ={
    discount:'discount',
    discountId:'discountId'
}




export function insertInformation(data){
    let discount=getAllInformation();
    data['id']= generateInformationId() 
    discount.push(data)
    localStorage.setItem(KEYS.discount,JSON.stringify(discount))
}


export function updateInformation(data){
    let discount=getAllInformation();
   let recordIndex =discount.findIndex(x=>x.id==data.id);
   discount[recordIndex]={...data}
    localStorage.setItem(KEYS.discount,JSON.stringify(discount))
}

export function deleteInformation(id){
    let discount=getAllInformation();
    discount =discount.filter(x=>x.id != id)
    localStorage.setItem(KEYS.discount,JSON.stringify(discount));
  
}


export function generateInformationId(data){
    if(localStorage.getItem(KEYS.discountId)==null)
    localStorage.setItem(KEYS.discountId,'0')
    var id= parseInt(localStorage.getItem(KEYS.discountId))
    localStorage.setItem(KEYS.discountId,(++id).toString())
    return id;
}


export function getAllInformation(){
    if(localStorage.getItem(KEYS.discount)==null)
     localStorage.setItem(KEYS.discount,JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.discount));
 
}


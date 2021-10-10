


const KEYS ={
    cetegory:'cetegory',
    cetegoryId:'cetegoryId'
}




export function insertInformation(data){
    let cetegory=getAllInformation();
    data['id']= generateInformationId() 
    cetegory.push(data)
    localStorage.setItem(KEYS.cetegory,JSON.stringify(cetegory))
}


export function updateInformation(data){
    let cetegory=getAllInformation();
   let recordIndex =cetegory.findIndex(x=>x.id==data.id);
   cetegory[recordIndex]={...data}
    localStorage.setItem(KEYS.cetegory,JSON.stringify(cetegory))
}

export function deleteInformation(id){
    let cetegory=getAllInformation();
    cetegory =cetegory.filter(x=>x.id != id)
    localStorage.setItem(KEYS.cetegory,JSON.stringify(cetegory));
  
}


export function generateInformationId(data){
    if(localStorage.getItem(KEYS.cetegoryId)==null)
    localStorage.setItem(KEYS.cetegoryId,'0')
    var id= parseInt(localStorage.getItem(KEYS.cetegoryId))
    localStorage.setItem(KEYS.cetegoryId,(++id).toString())
    return id;
}


export function getAllInformation(){
    if(localStorage.getItem(KEYS.cetegory)==null)
     localStorage.setItem(KEYS.cetegory,JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.cetegory));
 
}




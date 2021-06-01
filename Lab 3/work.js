/* 
Name: Preet Dabhi
CWID:10459151
*/

const axios = require('axios');
const people = require("./people");

async function getWork(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json')
   // const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
     return data;  // this will be the array of people objects
   }
   async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
   // const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
     return data;  // this will be the array of people objects
   }   
 
 async function listEmployees(){
    const work = await getWork();
    const people = await getPeople();
    let myaar=[];
    let emparrobj={};
    try{
        for (i in work){
           let emparr1=work[i].employees;
           for (j in emparr1){
                for (k in people){
                    if(people[k].id === emparr1[j]){
                        emparrobj={ first_name: people[k].first_name ,last_name: people[k].last_name}; // I'm only able to print the name of last emp in the employee array
                        
                    }
                }
            }
            let listobj ={ company_name: work[i].company_name, employees : emparrobj}
            myaar.push(listobj);
        }
        return myaar;
    }catch(e){

    }
}
async function fourOneOne(phoneNumber){
    //let myobj=[];
    const work = await getWork();
    if(typeof phoneNumber != "string") throw "Input parameter can only be a string."
    

    try{
        for(i in work) {  
        if(phoneNumber === work[i].company_phone ){
            let myobj= { company_name : work[i].company_name, company_address: work[i].company_address };
            return myobj;
        }
        }
    }catch(e){
        console.log(e);
    }
}
async function whereDoTheyWork(ssn){
    const people = await getPeople();
    const work = await getWork();
    if(typeof ssn != "string") throw "Input parameter can only be a string."
//     function is_socialSecurity_Number(ssn){
//  regexp = /^\d{3}-?\d{2}-?\d{4}$/;
//         if (regexp.test(ssn)) throw "Enter proper SSN Number"
// }
    try{
        for (i in people){
            if(ssn === people[i].ssn){
                    let empid= people[i].id;
                    for (j in work){
                        let arr = work[j].employees;
                        for( k in arr){  
                            if(empid === arr[k]) {  
                            return `${people[i].first_name} ${people[i].last_name} works at ${work[j].company_name}`;
                            }
                        }
                    }
            }
        }
    }catch(e){
        console.log(e);
    }
}
module.exports ={
    listEmployees,fourOneOne,whereDoTheyWork

}
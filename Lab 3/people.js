/* 
Name: Preet Dabhi
CWID:10459151
*/


const axios = require('axios');

async function getPeople(){
   const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
  // const parsedData = JSON.parse(data) // parse the data from JSON into a normal JS Object
    return data;  // this will be the array of people objects
  }

function checkid(num){
    if(num<0) throw "ID cannot be a negative number, Please CHECK.";
    if(num === undefined) throw "Id cannot be empty";
    if(typeof num != 'number') throw "ID should be a numeric value";
}

async function getPersonById(id){
    checkid(id);
    const getPersonByIdData = await getPeople();
    if (id > getPersonByIdData.length) throw "Such ID does not exist."
    try {  
    for (i in getPersonByIdData) {     
        if(getPersonByIdData[i].id ===id){  
         return getPersonByIdData[i];
        }
      }
    }catch(e){
        console.log(e);
    }
}

async function howManyPerState(stateAbbrv){
    const data = await getPeople();
    let cityCount=0;
    if(stateAbbrv === null || stateAbbrv === undefined) throw "Input parameter cannot be empty."
    if(typeof stateAbbrv != 'string') throw "Input parameter can only be a string"
    try{  
   for (i in data) {   
    if(data[i].address.state === stateAbbrv) {
        cityCount++;      
    }
   }
}catch(e){
    console.log(e);
}
if (cityCount === 0) throw `There are no people living in ${stateAbbrv}`
return cityCount;   
}

async function personByAge(index){
    const data = await getPeople();
    if(index === null || index === undefined) throw "Input parameter cannot be empty."
    if(typeof index != "number") throw "Input parameter can only be a number"
    if (index > data.length) throw "Such person does not exist."

    data.sort(function(a,b){
        let date1 = new Date(a.date_of_birth) 
        let date2 = new Date(b.date_of_birth)
        return date1- date2;
    });
    let agevar= getAge(data[index].date_of_birth);
    let ageobj = { first_name:data[index].first_name,last_name:data[index].last_name,date_of_birth:data[index].date_of_birth,age:agevar }
    return ageobj;
}

function vowelsCount(val){
    let vowels = 0;
    for (let i=0;i<val.length; i++){
        let ch= val.charAt(i);
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
        vowels++;
      }
    }
    return vowels;
}

function findFreqState(arr){
    let a=1,b=0,item;
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]===arr[j]){
                b++;
                if(b>a){
                    a=b;
                    item=arr[i];
                }
            }
        }
        b=0;
    }
    return item;
}
function getAge(birthDateString) {
    const today = new Date();
    const bd = new Date(birthDateString);

    const yearsDiff = today.getFullYear() - bd.getFullYear();
  
    if (
      today.getMonth() < bd.getMonth() ||
      (today.getMonth() === bd.getMonth() && today.getDate() < bd.getDate())
    ) {
      return yearsDiff - 1;
    }
    return yearsDiff;
    
  };
  
async function peopleMetrics(){
    const data = await getPeople();
    let name ="", shortestName=data[0].first_name, longestName="" ,ranarr=[],total=0,avg=0;
    let arr = [];
    for(i in data){
        
        arr.push(data[i].address.state);
        let result = (data[i].first_name).concat(data[i].last_name)
       // console.log(result);
        if(result.length>longestName.length){
            longestName=result;
        }
        if(result.length<shortestName.length){
            shortestName=result;
        }
        name += data[i].first_name + data[i].last_name;
         ranarr.push(getAge(data[i].date_of_birth)) ;
    }
    for(let j in ranarr){
        total+= ranarr[j];
     }
     avg =total/ranarr.length;
    let vowels = vowelsCount(name);
    let opObj={
        "totalLetters" :name.length,
        "totalVowels" : vowels,
        "totalConsonants":name.length - vowels, 
        "longestName": longestName,
        "shortestName":shortestName,
        "mostRepeatingCity":findFreqState(arr),
        "averageAge":avg,
    }
    return opObj;
}

module.exports ={
   getPersonById,howManyPerState,personByAge,peopleMetrics
}
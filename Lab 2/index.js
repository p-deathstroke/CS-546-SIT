/* 
Name: Preet Dabhi
CWID:10459151
*/

const myarr = require("./arrayUtils");
const mysrt =require("./stringUtils");
const myobj=require("./objUtils");
const { medianSquared, fill, countRepeating, isEqual } = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const { mashUp } = require("./stringUtils");

console.log("-------------------- Mean Testing Case Start----------------------");
//------------------- Mean Testing-------------------
try {                                                       
 const meanone = myarr.mean([1,2,3,4]); 
 console.log(meanone);
console.log('mean passed successfully.')
} catch(e)
{
    console.log(e);
    console.error('mean failed test case.');
}

try {  
    const meantwo = myarr.mean();   // throws error
    console.log(meantwo);
    console.log('mean did not error')
    } catch(e)
    {
        console.log(e);
        console.log('mean failed sucessfully.');
    }
console.log("-------------------- Median Testing Case Start----------------------");
//------------------- median squared testing-------------------

try {                                                       
 const mediansqrone = myarr.medianSquared([1,2,3,4]);
 console.log(mediansqrone);
console.log('median passed successfully.')
} catch(e)
{
    console.log(e);
    console.error('meadian failed test case.');
}

try {  
    const mediansqrtwo = myarr.medianSquared([]);   // throws error
    console.log(mediansqrtwo);
    console.log('median did not error')
    } catch(e)
    {
        console.log(e);
        console.log('median failed sucessfully.');
    }

    console.log("-------------------- Max Element Testing Case Start----------------------");
//------------------- max element testing -------------------

try {                                                      
 const maxnumberone = myarr.maxElement([6,9,3,1,2,11]);   // 
 console.log(maxnumberone);
console.log('max element passed successfully.')
} catch(e)
{
    console.log(e);
    console.error('max element failed test case.');
}

try {  
    const maxnumbertwo = myarr.maxElement("");   // throws error
    console.log(maxnumbertwo);
    console.log('max element did not error')
    } catch(e)
    {
        console.log(e);
        console.log('max element failed sucessfully.');
    }   

console.log("-------------------- Fill Testing Case Start----------------------");
//------------------- fill testing -------------------
try {                                                      
 const fillone = myarr.fill(5,'flush');  
 console.log(fillone);
console.log('fill  passed successfully.')
} catch(e)
{
    console.log(e);
    console.error('fill failed test case.');
}

try {  
    const filltwo = myarr.fill('preet');  // throws error
    console.log(filltwo);
    console.log('fill did not error')
    } catch(e)
    {
        console.log(e);
        console.log('fill failed sucessfully.');
    }       

    console.log("-------------------- Count Testing Case Start----------------------");
//------------------- count repeating testing -------------------

 try {                                                     
 const countrepone = myarr.countRepeating([1,2,1]);  
 console.log(countrepone);
console.log('count repeat  passed successfully.')
} catch(e)
{
    console.log(e);
    console.error('count repeat failed test case.');
}

try {  
    const countreptwo = myarr.countRepeating([1,2,3,4,1,2]);  // throws error
    console.log(countreptwo);
    console.log('count repeat did not error')
    } catch(e)
    {
        console.log(e);
        console.log('count repeat failed sucessfully.');
    }      

console.log("-------------------- Equal Testing Case Start----------------------");
//------------------- equal repeating testing -------------------
try {                                                   
 const equalone = myarr.isEqual([1,2,3],[3,2,1]); 
 console.log(equalone);
console.log('isequal passed successfully.')
} catch(e)
{
    console.log(e);
    console.error('isequal failed test case.');
}

try {  
    const equaltwo = myarr.isEqual([1,2,3,4],[1,2,3,4,5]);  // throws error
    console.log(equaltwo);
    console.log('isequal did not error')
    } catch(e)
    {
        console.log(e);
        console.log('isequal failed sucessfully.');
    }       
let strtest=mysrt.camelCase("");
console.log(strtest);

console.log("-------------------- Camel Case Testing Case Start----------------------");
//------------------- camel string testing -------------------

try {                                                      
    const camelstrone = mysrt.camelCase("THiS iS cAmEl CaSe TesTING");  
    console.log(camelstrone);
   console.log('camel string passed successfully.')
   } catch(e)
   {
       console.log(e);
       console.error('camel string failed test case.');
   }
   
   try {  
       const camelstrtwo = mysrt.camelCase("");  // throws error
       console.log(camelstrtwo);
       console.log('Camel string did not error')
       } catch(e)
       {
           console.log(e);
           console.log('Camel string failed sucessfully.');
       } 

       console.log("-------------------- replace *$ Testing Case Start----------------------");
       //------------------- Replace with *$ testing -------------------
try {                                                      
    const repcharone = mysrt.replaceChar("bubblelle");  
    console.log(repcharone);
   console.log('replace*$ passed successfully.')
   } catch(e)
   {
       console.log(e);
       console.error('replace*$ failed test case.');
   }
   
   try {  
       const repchartwo = mysrt.replaceChar([]);  // throws error
       console.log(repchartwo);
       console.log('replace*$ did not error')
       } catch(e)
       {
           console.log(e);
           console.log('replace*$ failed sucessfully.');
       }

       console.log("-------------------- Mash up Testing Case Start----------------------");
//------------------- mashup testing -------------------

try {                                                      
    const mashone = mysrt.mashUp("preet","dabhi");  
    console.log(mashone);
   console.log('mashup passed successfully.')
   } catch(e)
   {
       console.log(e);
       console.error('mashup failed test case.');
   }
   
   try {  
       const mashtwo = mysrt.mashUp("","");  // throws error
       console.log(mashtwo);
       console.log('mashup did not error')
       } catch(e)
       {
           console.log(e);
           console.log('mashup failed sucessfully.');
       }

console.log("-------------------- make array Testing Case Start----------------------");
//------------------- make array testing -------------------  

const firstmakearr = { x: 2, y: 3};
const secondmakearr = { a: 70, x: 4, z: 5 };
const thirdmakearr = { x: 0, y: 9, q: 10 };
try {                                                      
    const firstSecondThird = myobj.makeArrays([firstmakearr, secondmakearr, thirdmakearr]);  
    console.log(firstSecondThird );
   console.log('make array passed successfully.')
   } catch(e)
   {
       console.log(e);
       console.error('make array failed test case.');
   }
   
   try {  
       const secondThird  = myobj.makeArrays([secondmakearr, thirdmakearr]);  // throws error
       console.log(secondThird );
       console.log('make array did not error')
       } catch(e)
       {
           console.log(e);
           console.log('make array failed sucessfully.');
       } 

console.log("-------------------- deep equal Testing Case Start----------------------");
//------------------- deep equal testing -------------------
const firstdeepequal = {a: 2, b: 3};
const seconddeepequal = {a: 2, b: 4};
const thirddeepequal = {a: 2, b: 3};
const forthdeepequal = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
const fifthdeepequal  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
try {                                                      
    const deepqualone = myobj.isDeepEqual(firstdeepequal,seconddeepequal);  
    console.log(deepqualone);
   console.log('deep equal passed successfully.')
   } catch(e)
   {
       console.log(e);
       console.error('deep equal failed test case.');
   }
   
   try {  
       const deepequaltwo = myobj.isDeepEqual(forthdeepequal,fifthdeepequal);  // throws error
       console.log(deepequaltwo);
       console.log('deep equal did not error')
       } catch(e)
       {
           console.log(e);
           console.log('deep equal failed sucessfully.');
       }

console.log("-------------------- compute obj Testing Case Start----------------------");
//------------------- compute obj testing -------------------
try {                                                      
    const comobjone = myobj.computeObject({ a: 3, b: 7, c: 5 }, n => n * 2);  
    console.log(comobjone);
   console.log('compute obj passed successfully.')
   } catch(e)
   {
       console.log(e);
       console.error('computer obj failed test case.');
   } 
   try {  
       const comobjtwo = myobj.computeObject({ a: 10, b: 8, c: 9 });  // throws error
       console.log(comobjtwo);
       console.log('compute obj did not error')
       } catch(e)
       {
           console.log(e);
           console.log('compute obj failed sucessfully.');
       }
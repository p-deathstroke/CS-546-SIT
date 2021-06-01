/* 
Name: Preet Dabhi
CWID:10459151
*/

const people = require("./people");
const mywork = require("./work");

async function main(){
    console.log("-------------------------Get Person by ID Testing--------------------------------")
    try{
        const peopledata = await people.getPersonById(199);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    console.log("-------------------------How many Per State Testing--------------------------------")
    try{
        const peopledata = await people.howManyPerState('NY')
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    console.log("-------------------------Person by Age Testing--------------------------------")
    try{
        const peopledata = await people.personByAge(12);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    console.log("-------------------------People Metrices Testing--------------------------------")
    try{
        const peopledata = await people.peopleMetrics();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    console.log("-------------------------List Employees Testing--------------------------------")
    try{
        const workdata = await mywork.listEmployees();
        console.log (workdata);
    }catch(e){
        console.log (e);
    }
    console.log("-------------------------Four one one Testing--------------------------------")
    try{
        const workdata = await mywork.fourOneOne('915-260-3504');
        console.log (workdata);
    }catch(e){
        console.log (e);
    }
    console.log("-------------------------Where DO they work Testing--------------------------------")
    try{
        const workdata = await mywork.whereDoTheyWork('748-27-5234');
        console.log (workdata);
    }catch(e){
        console.log (e);
    }
}

//call main
main();
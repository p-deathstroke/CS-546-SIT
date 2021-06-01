/*
Name : Preet Dabhi
CWID:10459151
*/

const axios = require('axios');
const express = require('express');
const router =  express.Router();

 async function getShows(){
     const { data } = await axios.get('http://api.tvmaze.com/shows');
      return data;
    }
 
router.get('/',async (req,res)=>{
       try {
        const getAllShows = await getShows();
           res.json(getAllShows);
       } catch (error) {
           res.status(500).send();
       }
   })
   async function getShowsById(id){
       //var reg = /^(?:[1-9]\d*|\d)$/;                 // regex pattern to check if the input id is a number or not
       
       const test = parseInt(id);
       if(typeof test !="number") throw 'Show not found'
    const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    return data;    
}
router.get('/:id', async (req,res)=>{
   // const check = parseInt(req.params.id) ;
       try {
          // if( check<0 || check%1!=0 ) throw "ID input incorrect."
         // if(NaN(check)) throw "Input id incorrect"
        const test = await getShowsById(req.params.id);
        res.json(test);
       }catch(error){
        res.status(404).json({message : 'Show data not found.'});
       }
   })
module.exports = router;   
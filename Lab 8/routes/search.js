const express = require('express');
const router = express.Router();
const data = require('../data');
const showsData = data.shows;

router.get('/', async (req, res) => {
    try {
      res.render('screen/form', { title: "Show Finder" });
    } catch (e) {
      res.sendStatus(500);
    }
  }),

router.post('/search', async (req, res) =>{
    let test = req.body   
    if(test.yolo.trim().length === 0) {
      res.render('screen/error',{ title: "No Such Page Found" });
      retrun;
    }
    try {
       let showData = await showsData.getShowsBySearch(test.yolo);
       //console.log(showData);
       if(showData.length ===0){
        res.render('screen/shownotfound' ,{searchTerm:test.yolo});
        return
       }
        res.render('screen/search', {showData:showData, search:test.yolo, title:"Shows Found"})
    } catch (error) { 
        res.render('screen/error',{ title: "No Such Page Found" });
    }
});
  module.exports = router;
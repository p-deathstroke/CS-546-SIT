const express = require('express');
const router = express.Router();
const data = require('../data');
const showsData = data.shows;

router.get('/:id', async (req, res) => {
    try {
        let show = await showsData.getShowsById(req.params.id)
       let summary1 = show.summary.replace(/<[^>]*>/g, " ").replace(/\s{2,}/g, " ").trim(); // regex pattern from stackoverflow 
        res.render('screen/showdetails',{show:show ,title:show.name,summary:summary1})
    } catch (error) {
        res.render('screen/error',{ title: "No Such show Found" });
        retrun;
    }
});

module.exports = router;
  
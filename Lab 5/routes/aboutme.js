/*
Name : Preet Dabhi
CWID:10459151
*/
const express = require('express');
const router =  express.Router();
let myObj ={
  "name": "Preet Dabhi",
  "cwid": "10459151",
  "biography": "Hi I am Preet Dabhi, I am from Mumbai, India. I moved to Jersey City in Jan 2021 . I am Computer Science grad student at stevens. I have done my Undergrad from Mumbai University in Information Technology.\n I have taken CS 546 for this semester. Trying to do my assignments on time, but LOL cannot help but procrastinate and finish at the end moment. Please give me Good Grades Professor, LOL just Kidding, But please do give me !!!",
  "favoriteShows": ["House Of Cards", "Rick and Morty", "The Office", "Dark", "Justice League Unlimited", "Bojack Horseman"]
}
router.get('/',async (req,res)=>{
  try {
    res.json(myObj);
  } catch (error) {
    res.status(500).send();
  }
})
module.exports = router;


const express = require('express');
const router = express.Router();
const booksData = require("../data/books")
const reviewsData = require("../data/reviews")

router.post('/:id', async (req, res) => {
  const reviewInfo = req.body;
  // if (!reviewInfo) {
  //   res.status(400).json({ error: 'Please provide data to create a review' });
  //   return;
  // }
  // if (!reviewInfo.title) {
  //   res.status(400).json({ error: 'Please Provide review title' });
  //   return;
  // }
  // if (!reviewInfo.reviewer) {
  //   res.status(400).json({ error: 'Please Provide Reviewer Name' });
  //   return;
  // }
  // if (!bookInfo.rating) {
  //   res.status(400).json({ error: 'Please Provide a Proper Rating' });
  //   return;
  // }
  // if (!bookInfo.dateOfReview) {
  //   res.status(400).json({ error: 'Please Provide date of review' });
  //   return;
  // }
  // if (!bookInfo.review) {
  //   res.status(400).json({ error: 'Please Provide the  review' });
  //   return;
  // }
  try {
    const bookwithReview = await reviewsData.createReview(req.params.id,reviewInfo)
    res.json(bookwithReview)
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get('/:id', async (req, res) => {
  try {

    const allReviewsFromBookWithBookId = await reviewsData.getSpecificReviewByBookId(req.params.id);
    res.json(allReviewsFromBookWithBookId);
  } catch (e) {
    res.status(404).json({ error: 'Reviews not found' });
  }
}); 

router.get('/review/:id', async (req, res) => {
  try {
    const  aSpecificReviewByReviewIdFromBook = await reviewsData.getASpecificReviewByReviewId(req.params.id);
    res.json(aSpecificReviewByReviewIdFromBook);
  } catch (e) {
    res.status(404).json({ error: 'Review not found' });
  }
}); 

router.delete('/:id', async (req, res) => {
  try {
    await reviewsData.deleteReview(req.params.id);
    let delObj ={
      reviewId : req.params.id,
      deleted : true
    }
    res.json(delObj);
  } catch (e) {
    res.status(500).json({ error: e });
  }
  });


module.exports= router;
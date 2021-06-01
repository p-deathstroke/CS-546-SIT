const mongoCollections = require('../config/mongoCollections');
const books = mongoCollections.books;
const { ObjectId } = require('mongodb');
const bookInfo = require("../data/books")

const exportedMethods ={
 
async createReview(id,reviewData){
    let idlen = id.trim();
    if(!id || idlen.length ===0) throw "Please provide a valid id"
    if(!reviewData) throw "Please provide proper review data"
    const bookCollections = await  books();
    newId = ObjectId(id)
    // const newReview ={
    //     _id:ObjectId(),
    //     title:  reviewData.title,
    //     reviewer:reviewData.reviewer,
    //     rating: reviewData.rating ,
    //     dateOfReview: reviewData.dateOfReview,
    //     review: reviewData.review
    // }
    await bookCollections.updateOne(
        {_id:newId},
        {$addToSet:{reviews:{_id:ObjectId(),
            title:  reviewData.title,
            reviewer:reviewData.reviewer,
            rating: reviewData.rating ,
            dateOfReview: reviewData.dateOfReview,
            review: reviewData.review}}}
    );
    return await this.getAllReviewByBookId(newId.toString());
},    
async getAllReviewByBookId(id){
    newId = ObjectId(id)
    const bookCollections = await  books();
    const bookbyid = await bookCollections.findOne({_id: newId});

    return bookbyid;
    
},
async getSpecificReviewByBookId(id){
    newId = ObjectId(id)
    const bookCollections = await  books();
    const bookbyid = await bookCollections.findOne({_id: newId});

    return bookbyid.reviews;   
},
async getASpecificReviewByReviewId(id){
    newId = ObjectId(id)
    const bookCollections = await  books();
    //const reviews = bookCollections.reviews;
    const bookbyid = await bookCollections.findOne(    
        {'reviews._id': newId},
        
        //{ reviews: {$in:newId} }, 
        //{},
       //{projection :{reviews:1} }//'reviews._id':1, 'reviews.title':1, 'reviews.reviewer':1,'reviews.rating':1,'reviews.dateOfReview':1,'reviews.review':1} }
    )
       // let item = bookbyid.find(item => item._id===id)
      //const test= bookbyid.findOne({'reviews._id':id});
    return bookbyid.reviews;   
},
async deleteReview(id){
    newId = ObjectId(id)
    const bookCollections = await  books();
    // const deletionInfo = await bookCollections.removeOne({reviews._id:newId}) 
    const deletionInfo = await bookCollections.updateOne(
        {'reviews._id': newId},
        { $pull: { reviews: { _id:newId} } }
        );
        // let delObj ={
        //     reviewId : newId,
        //     deleted :  true
        // }
        // return delObj;
}

}
module.exports = exportedMethods;
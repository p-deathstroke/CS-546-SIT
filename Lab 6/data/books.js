const mongoCollections = require('../config/mongoCollections');
const books = mongoCollections.books;
const { ObjectId } = require('mongodb');

const exportedMethods ={
    async createBook(title, authorFirstName, authorLastName,genre, datePublished, summary){
        if(!title || title.trim()===null) throw `Please Provide the book title`
        if(!authorFirstName) throw `Please Provide Authors First Name`
        if(!authorLastName) throw `Please Provide Authors last Name`
        if(!datePublished) throw `Please Provide Date Published on`
        if(!summary) throw `Please Provide a Summary`
        if(!genre) throw "Please provide genre"
    
        const bookCollections =await books();
    
        if (!Array.isArray(genre)) {
          genre = [];
        }
        let newbook = {
           
            title:title,
            author: {
                authorFirstName: authorFirstName,
                authorLastName: authorLastName
              },
              genre:genre,
            datePublished:datePublished,
            summary:summary,
            reviews:[],
            
        }
        const insertInfo = await bookCollections.insertOne(newbook);
        if (insertInfo.insertedCount === 0) throw 'Cannot create a new Book';
    
        const newId = insertInfo.insertedId;
        const book = await this.getBookById(newId);
        return book;
    
    },
    async getAllBooks(){
        const bookCollections = await books();
        const booksList = await bookCollections.find({},{ projection: { _id: 1, title: 1}}).toArray();
        if(!booksList) throw "No Books in the System."
        return booksList;
    },
    async getBookById(id){
     // let idlen = id.trim();
       // if (!id || idlen.length ===0) throw 'Please provide an ID';
        newId = ObjectId(id)
        const bookCollections = await  books();
        const bookbyid = await bookCollections.findOne({_id: newId});
        //if (!bookbyid) throw `No book exsits with this ID :${id}`;
        return bookbyid;
    },
    async updateBook(id, updatedBook){
      let idlen = id.trim();
        if(!id|| idlen.length ===0) throw "Please provide an ID"
        if(!updatedBook) throw "Please provide proper values"
       newId = ObjectId(id)
        const bookCollections = await books();
        const updatedBookData = {};
        updatedBookData.author={}

        if (updatedBook.title) {
            updatedBookData.title = updatedBook.title;
          }
        if (updatedBook.authorFirstName) {
            updatedBookData.author.authorFirstName = updatedBook.authorFirstName;
          }
        if (updatedBook.authorLastName) {
            updatedBookData.author.authorLastName = updatedBook.authorLastName;
          } 
        if (updatedBook.genre) {
            updatedBookData.genre = updatedBook.genre;
          }     
        if (updatedBook.datePublished) {
            updatedBookData.datePublished = updatedBook.datePublished;
          }   
        if (updatedBook.summary) {
            updatedBookData.summary = updatedBook.summary;
          }  
          await bookCollections.updateOne({ _id: newId }, { $set: updatedBookData });

          return await this.getBookById(newId.toString());  
    },
    async deleteBook (id){
      let idlen = id.trim();
      newId = ObjectId(id)
        if (!id || idlen.length===0) throw 'Please provide an ID';
        const bookCollections = await books();
        const deletionInfo = await bookCollections.removeOne({_id: newId});
        if (deletionInfo.deletedCount === 0) {
            throw ` Cannot delete book with id of ${newId}`;
          }
     }
}
module.exports = exportedMethods;

const express = require('express');
const router = express.Router();
const data = require('../data');
const booksData = data.books
const { ObjectId } = require('mongodb');


router.get('/', async (req, res) => {
    try {
      let booksList = await booksData.getAllBooks();
      res.json(booksList);
    } catch (e) {
      res.sendStatus(500);
    }
  });

router.post('/', async (req, res) => {
    const bookInfo = req.body;
    if (!bookInfo) {
      res.status(400).json({ error: 'Please provide data to create a Book' });
      return;
    }
    if (!bookInfo.title || bookInfo.title.trim() === null ) {
      res.status(400).json({ error: 'Please Provide book title' });
      return;
    }
    if (!bookInfo.authorFirstName) {
      res.status(400).json({ error: 'Please Provide Authors First Name' });
      return;
    }
    if (!bookInfo.authorLastName) {
      res.status(400).json({ error: 'Please Provide Authors Last Name' });
      return;
    }
    if (!bookInfo.datePublished) {
      res.status(400).json({ error: 'Please Provide a date when Book was Published' });
      return;
    }
    if (!bookInfo.summary) {
      res.status(400).json({ error: 'Please Provide the Book summary.' });
      return;
    }
    

    try {
      const { title, authorFirstName,authorLastName,genre,datePublished,summary } = bookInfo;
      const newBook = await booksData.createBook(title, authorFirstName,authorLastName,genre,datePublished,summary);
      res.json(newBook);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

  router.get('/:id', async (req, res) => {
    try {

      const bookgetid = await booksData.getBookById(req.params.id);
      res.json(bookgetid);
    } catch (e) {
      res.status(404).json({ error: 'Book not found' });
    }
  });  


  router.put('/:id', async (req, res) => {
    const updatedData = req.body;
    if (!updatedData.title || !updatedData.authorFirstName || !updatedData.authorLastName || !updatedData.genre || !updatedData.datePublished || !updatedData.summary) {
      res.status(400).json({ error: 'You must Supply All fields' });
      return;
    }
    try {
      await booksData.getBookById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }
  
    try {
      const updatedBook = await booksData.updateBook(req.params.id, updatedData);
      res.json(updatedBook);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });
  
  router.patch('/:id', async (req, res) => {
    
    const requestBody = req.body;
    let updatedObject = {};
   // updatedObject.author ={}
    try {
      const oldBook = await booksData.getBookById(req.params.id);
      if (requestBody.title && requestBody.title !== oldBook.title)
        updatedObject.title = requestBody.title;
      if (requestBody.authorFirstName && requestBody.authorFirstName !== oldBook.authorFirstName)
        updatedObject.authorFirstName = requestBody.authorFirstName;
      if (requestBody.authorLastName && requestBody.authorLastName !== oldBook.authorLastName)
        updatedObject.authorLastName = requestBody.authorLastName;
      if (requestBody.genre && requestBody.genre !== oldBook.genre)
        updatedObject.genre = requestBody.genre;
      if (requestBody.datePublished && requestBody.datePublished !== oldBook.datePublished)
        updatedObject.datePublished = requestBody.datePublished;
      if (requestBody.summary && requestBody.summary !== oldBook.summary)
        updatedObject.summary = requestBody.summary;  
    } catch (e) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }
    if (Object.keys(updatedObject).length !== 0) {
      try {
        const updatedBook = await booksData.updateBook(
          req.params.id,
          updatedObject
        );
        res.json(updatedBook);
      } catch (e) {
        res.status(500).json({ error: e });
      }
    } else {
      res.status(400).json({
        error:
          'No fields have been changed from their inital values, so no update has occurred'
      });
    }
  });

  router.delete('/:id', async (req, res) => {
    if (!req.params.id) {
      res.status(400).json({ error: 'You must Supply and ID to delete' });
      return;
    }
    try {
      await booksData.getBookById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }
    try {
      await booksData.deleteBook(req.params.id);
      res.sendStatus(200);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });  

module.exports= router;
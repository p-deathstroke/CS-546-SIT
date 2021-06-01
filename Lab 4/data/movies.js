const { ObjectID } = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const mongoConnection = require('../config/mongoConnection');
const movies = mongoCollections.movies;

let exportedMethods = {
    async create(title, plot, rating, runtime, genre, cast, info){
        if(!title || typeof title != "string" || title.trim() ==="") throw "You must provide a title and should be a string"
         if(!plot || typeof plot != "string" || plot.trim() === "") throw "You must provide a plot and should be a string"
         if(!rating || typeof rating != "string" || rating.trim() === "") throw "You must provide a rating and should be a string"
        if(!runtime || typeof runtime != "string" || runtime.trim() === "") throw "You must provide a runtime and should be a string"
        if(!genre || typeof genre != "string" || genre.trim() === "") throw "You must provide a genre and should be a string"
        if(!cast || !Array.isArray(cast) ) throw "You must provide a cast and should be an array"
        if(!info) throw "You must provide a info"
        if(!info.director || typeof info.director != "string" || (info.director).trim() === "") throw "You must provide director name and should be a string."
        if(!info.yearReleased ) throw "You must provide the year released"
        const currentYear = new Date().getFullYear() + 5;
        if(info.yearReleased<1930 || info.yearReleased>currentYear) throw "Please provide Proper Release Year"
        
        const movieCollection = await movies();

        let newMovie={
            title:title,
            plot:plot,
            rating:rating,
            runtime:runtime,
            genre:genre,
            cast:cast,
            info:info
        }
        const insertInfo = await movieCollection.insertOne(newMovie);
        if (insertInfo.insertedCount === 0) throw 'Could not add movie';
    
        const newId = insertInfo.insertedId;

        
        const movie = await this.get(newId);
        return JSON.parse(JSON.stringify(movie));;

    },
    async getAll(){

        const moviesCollection = await movies();

        const movieList = await moviesCollection.find({}).toArray();
    
        return JSON.parse(JSON.stringify(movieList));
    },

    async get(id){
        if (!id || id === null ) throw 'You must provide a proper Id for get function';
        //if(typeof id != "string") throw "Id must be a string (get function)"
        const movieCollection = await movies();
        let testIdGet
        try {
            
            testIdGet= ObjectID(id);
        } catch (error) {
            throw `error cant create object with ${id} cause of ${error}`
                }
        const movie = await movieCollection.findOne({ _id : testIdGet });
        if (movie === null) throw 'No movie exists with that id';
        
            return JSON.parse(JSON.stringify(movie));
        
    
        
    },
    async remove(id){
        if(!id) throw 'You must provide a proper Id for remove function'
        //if(typeof id != "string") throw "Id must be a string (remove function)"
        let testIdRemove
        try {
            
            testIdRemove= ObjectID(id)
        } catch (error) {
            throw `error cant create object with ${id} cause of ${error}`
                }

        const moviesCollection = await movies();
        const deletionInfo = await moviesCollection.removeOne({_id: testIdRemove});

        if (deletionInfo.deletedCount === 0) {
            throw `Cannot delete movie with id of ${id} as it does not exist`;
          }

    },
    async rename(id, newTitle){
        if(!id) throw 'You must provide a proper Id for rename function'
       // if(typeof id != "string") throw "Id must be a string (rename function)"
        if(!newTitle) throw 'You must provide a proper new Title'
        let testIdRename
        try {
            
            testIdRename= ObjectID(id)
        } catch (error) {
            throw `error cant create object with ${id} cause of ${error}`
                }
        const moviesCollection = await movies();

        const rename={
            title:newTitle
        };
        const updatedInfo = await moviesCollection.updateOne({_id: testIdRename}, {$set: rename});
        if (updatedInfo.modifiedCount === 0) {
          throw 'could not update movie title as the movie with this ID does not exist.';
        }   
        return await this.get(id);
    }
}
module.exports = exportedMethods;
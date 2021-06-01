const movies = require('./data/movies');
const connection = require('./config/mongoConnection');

const main = async () => {  
          //Step 1  - Creating a movie of Choice
          
    const billAndTed = await movies.create("Bill and Ted Face the Music","Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.","PG-13", "1hr 31min","Comedy",["Keanu Reeves","Alex Winter"],{director: "Dean Parisot", yearReleased: 2020});
          
          //Step 2 - log newly created movie
          
    console.log(billAndTed);
          
          //Step 3 - Create a 2nd movie of choice  
          
    const zackSnydersJusticeLeague = await movies.create("Justice League Zack Snyder","Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists newfound ally Diana Prince to face an even greater threat. Together, Batman and Wonder Woman work quickly to recruit a team to stand against this newly awakened enemy. Despite the formation of an unprecedented league of heroes -- Batman, Wonder Woman, Aquaman, Cyborg and the Flash -- it may be too late to save the planet from an assault of catastrophic proportions.","R-Rated", "4hr 41min","Action/DC",["Henry Cavill","Ben Afflec","Gal Gadot"],{director: "Zack Synder", yearReleased: 2021});
         
          // step 4 - query all movies created till now 
          
    const allMoviesS4 = await movies.getAll();
    console.log(allMoviesS4);
          // step 5 - create 3rd movie of choice 
          
    const inception = await movies.create("Inception","A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","PG-13", "2hr 28min","Sci-Fi",["Leonardo DiCaprio","Tom Hardy"],{director: "Christopher Nolan", yearReleased: 2010});
          // step 6 - log the 3rd movie created
          
    const getamovieS6 = await movies.get(inception._id); //replace with inception id from mongodb  for testing i have used inception._id
    console.log(getamovieS6);
          // Step 7 - Rename 1st movie
          
    const renamedBillAndTed = await movies.rename(billAndTed._id, 'Bill And Ted Updated to New Bill And Ted'); //replace with billandted id from mongodb  for testing i have used billandted._id
          // Step 8 - Log 1st movie renamed title
          
    console.log(renamedBillAndTed);
          // Step 9 - Remove 2nd Movie Created
          
    const removeS9 = await movies.remove(zackSnydersJusticeLeague._id);  //replace with zzackSnydersJusticeLeague id from mongodb  for testing i have used zackSnydersJusticeLeague._id
          console.log(zackSnydersJusticeLeague.title + "has been successfully deleted")
          // Step 10 - query all movies
          
          
    const allMoviesS10 = await movies.getAll();
    console.log(allMoviesS10);

          // Step 11 - Create a movie with bad input paramertes
          try {
           await movies.create("yolo","When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","test-remove", "2hr 32min","Action",["Christian Bale","Heath Ledger"],{director: "Christopher Nolan", yearReleased: 2027});
          }catch(e){
            console.log(e);
          }
          // Step 12 - removing a movie that does not exists
          try{
            await movies.remove('604005436ac12637704c8f65'); 
          }catch(e){
            console.log(e);
          }
          //step 13 -rename a movie that deos not exist
          try{
             await movies.rename('604005436ac12637704c8f65', 'Bill And Ted Updated to New Bill And Ted');
          }catch(e){
            console.log(e);
          }
          // Step 14 - rename a movie with bad input parameter
          try{
            await movies.rename('', 'Bill And Ted Updated to New Bill And Ted');
          }catch(e){
            console.log(e);
          }
          // step 15 - getting a movie with id that does not exist
          try {
             await movies.get('604005436ac12637704c8f65');
          }catch(e){
            console.log(e);
          }
  
    const db = await connection();
  await db.serverConfig.close();
}
main().catch(err => console.log("error", err))
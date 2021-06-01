const axios = require('axios');


let exportedMethods = {
    async  getShowsById(id){
        const showId = parseInt(id);
        if(typeof showId !="number") throw 'Show not found'
     const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);
     return data;    
 },
 
 async getShowsBySearch(search){
    if(search===undefined|| search === null) throw "Search field value not provided."
    const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${search}`);
        return data;

}
}
module.exports = exportedMethods;
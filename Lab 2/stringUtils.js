/* 
Name: Preet Dabhi
CWID:10459151
*/


module.exports={

    camelCase:(string)=>{
        string.trim();
        if (string === undefined || string === null ) throw "Input is not a string"
        if(typeof string != "string") throw "Data input needs to be a string"
  
       return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(x,y)   // regex taken from github
        {
            return y.toUpperCase();
        }); 
    },
    replaceChar:(string)=>{
        if (string === undefined || string === null ) throw "Input is not a string"
        if(typeof string != "string") throw "Data input needs to be a string"
        if(string.length===0) throw "string cannot be empty"
        if(!string.trim().length) throw "String cannot be without Characters"

        let firstchar = string.charAt(0).toLowerCase(),starsymb=false,dollarsymb=false;
        for(i=1;i<string.length;i++){
            if(string.charAt(i).toLowerCase() == firstchar){
            if (starsymb == false && dollarsymb == false){
                string = string.substring(0, i) + "*" + string.substring(i + 1);
                starsymb = true;
            }
            else if(starsymb == false && dollarsymb == true){   
                string = string.substring(0, i) + "*" + string.substring(i + 1);
                starsymb = true;
            }
            else if(starsymb == true && dollarsymb == false){
                string = string.substring(0, i) + "$" + string.substring(i + 1);
                dollarsymb = true;
            }
            if(starsymb == true && dollarsymb == true){
                starsymb = false; 
                dollarsymb = false;
            }
        }
    }
       return string; 
    },

    mashUp:(string1, string2)=>{
        if(string1.trim().length==0 || string2.trim().length==0) throw "String cannot be black or empty"
        if(string1.length<2 || string2.length<2) throw "String needs to be minimum 2 character" 
        let part1 =string2.substring(0,1) + string1.substring(1,string1.length);
        let part2 =string1.substring(0,1) + string2.substring(1,string2.length);
        return part1+" "+part2;
    } 
}
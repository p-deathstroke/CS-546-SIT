/* 
Name: Preet Dabhi
CWID:10459151
*/


module.exports={

    makeArrays:([objects])=>{

       if(!Array.isArray(arguments[0])) throw "Input should be array of Objects";
       if(arguments[0].length < 2) throw "Provide two input array";
        arguments[0].forEach(args => {if(Array.isArray(args) == true || typeof args !== "object") throw "Check the data provided as one or more data inside the array is not an object!!!"});
        arguments[0].forEach(args => {if(Object.keys(args).length === 0) throw "Arrays are Empty,Please check"});
    
        let combarr = [],finarr = [];
        const argsct = arguments[0];
    
        for (let i=0; i<argsct.length;i++)
        {
            combarr = Object.entries(argsct[i]);
            for(let j=0; j<combarr.length;j++){
    
                finarr.push(combarr[j]);
            }
        }
    
        return finarr;
    },
    
    isDeepEqual:(obj1, obj2)=>{
        if( typeof obj1 !== "object") throw "Check if the 1st parameter passed is an argument or not ";
        if( typeof obj2 !== "object") throw "Check if the 2nd parameter passed is an argument or not";
        if(arguments.length <2) throw "one of the parameter is missing,Please CHECK";
    
        const key_of_obj1 = Object.keys(obj1);
        const key_of_obj2 = Object.keys(obj2);
        
        if (key_of_obj1.length !== key_of_obj2.length) {
          return false;
        }
        
        for (const object_key in key_of_obj1) {
    
          const objtypeone = (typeof obj1[object_key] === 'object' && Array.isArray(obj1[object_key]) == false && obj1[object_key] != null);
    
          const objtypetwo = (typeof obj2[object_key] === 'object' && Array.isArray(obj2[object_key]) == false && obj2[object_key] != null);
          
          if ((objtypeone&&objtypetwo) && !isDeepEqual(obj1[object_key], obj2[object_key]) || !(objtypeone&&objtypetwo) && obj1[object_key] !== obj2[object_key]) {
            return false;
          }
        }
      
        return true;
    },
    computeObject:(object, func)=>{      
      
        if(typeof object !== "object") throw "Argument passed in as a parameter is not an object,Please CHECK";
        if(typeof func !== "function") throw "Second Argument is not a function,Please CHECK";
        if(Object.keys(object).length === 0) throw "Object is Empty,Please CHECK";
        Object.values(object).map(num => {if(isNaN(num)) throw "The value for key needs to be a Number only,Please CHECK"});
        
        
        let myobj = {};
        for(let x in object){
            myobj[x] = func(object[x]);
        }
        return myobj;
    }
}
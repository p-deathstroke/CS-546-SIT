/* 
Name: Preet Dabhi
CWID:10459151
*/

function checkIsProperNumner(num){
    if(typeof num !='number') throw `${num} is not a number`
    if(isNaN(num)) throw `${num} is not a number`
}


module.exports={
    mean :(array)=> {
        let sum=0,val=0;     
        if(array== undefined || array == null) throw `input parameter is empty`
        if (array.length==0) throw `array is empty`
    array.forEach(element => {
            checkIsProperNumner(element)
            sum= sum+element;         
        });
        val= sum/array.length;
        return val;
    },
    medianSquared : (array)=>{

        let sort =array.sort();
        let mid=Math.floor(sort.length/2),cal=0;
        if(sort.length%2===0){
            cal=sort[mid-1]+sort[mid]/2;
            return Math.pow(cal,2);
        }
        return Math.pow(mid,2)
    },
    maxElement: (array) =>{
        let obj={};
        let max=array[0];
        let maxIndex=0;
        if(array== undefined || array == null) throw `input parameter is empty`
        if (array.length==0) throw `array is empty`

        for (i=0;i<array.length;i++){
            if(array[i]>max){
                checkIsProperNumner(i);
                maxIndex=i;
                max=array[i];
            }       
        }
        obj[max]=maxIndex;
        return obj;
    },
    fill: (end,value)=>{
        let fillarray=[];
            if(end<=0 || end==null ||end==String|| end == undefined) throw `input parameter is empty`
            else {
                for(i=0;i<end;i++){
                    if(value==null){ 
                    fillarray.push(i);
                    }
                    else{
                        fillarray.push(value);
                    }
                }
            }
        return fillarray;

    },
    countRepeating: (array) =>{
        if(array==null) throw "Input array cannot be null";
        if(!Array.isArray(array)) throw "Input cannot be anything other than array";
        array.forEach(element =>{if(typeof element!=="string") throw "input needs to be a string or number"});
        array.forEach(element =>{if(typeof element!=="number") throw "input needs to be a string or number"});

        let countrepobj = {};
        let finobj = {};
    
        if(array.length == 0){
            finobj = {};
        }
    
        else{
            for(let i=0;i<array.length;i++){
                if(countrepobj[array[i]]){
                    countrepobj[array[i]] += 1;
                }else{
                    countrepobj[array[i]] = 1;
                }
            }
            
            for (const property in countrepobj) {
                if(countrepobj[property] > 1){
                    finobj[property] = countrepobj[property];   
                }
                
            }
        }
    
        return finobj;

        },


    isEqual: (arrayOne, arrayTwo)=>{
        Array.isArray(arrayOne);
        Array.isArray(arrayTwo);
        arrayOne.sort();
        arrayTwo.sort();
        if(arrayOne==undefined|| arrayTwo==undefined) throw "Need two Arrays"
        if(arrayOne.length!==arrayTwo.length) return false;
        if(arrayOne==null || arrayTwo==null) return false;
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]){   
            return false;
            }
        }
        return true;   
    }
}
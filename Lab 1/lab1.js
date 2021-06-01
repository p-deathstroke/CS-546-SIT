
const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let obj={};
    let myPrime = (num)=>{
        for(let i = 2; i < num; i++){
          if(num % i == 0){
            return false;
          }
        }
        return true;          
    } 
    if (arr == null || arr.length==0 || arr== undefined){ 
      return obj;
    }
    else {  
        for (i=0;i<arr.length;i++){
            if(arr[i]==0 || arr[i]==1){
                obj[arr[i]]=false;
            }
            else {
                obj[arr[i]]= myPrime(arr[i]);
            }            
        }
        return obj;
        }
}


const questionTwo = function questionTwo(arr) { 
    // Implement question 2 here
    let sum=0;
    if(arr.length==0){
        return 0;
    }
    else {  
    for( let i=0; i< arr.length ;i++ ){
        sqr = arr[i]*arr[i];
        sum = sum +sqr;
        sumpow= Math.pow(sum,5);
        sumsqr=Math.sqrt(sumpow);
    }
    return (parseFloat(sumsqr.toFixed(2)));
}
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let consonants=0,numbers=0,vowels=0,spaces=0,punctuation=0,specialCharacters=0;
    for (let i=0;i<text.length; i++){
        let ch= text.charAt(i);

        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
            vowels++;
          }
        else if((ch>='0') && (ch<='9')){
            numbers++;
        }
        else if((ch>='a' && ch<='z')||(ch>='A' && ch<='Z')){
            consonants++;
        }
        else if(ch==' '){
            spaces++;
        }
        else if(ch=='.' || ch== ',' || ch=='?'|| ch=='!' || ch=="'" || ch=='"'|| ch==':'|| ch==';'){
            punctuation++;
        }
        else if(ch=='#' || ch=='$' || ch=='%' || ch=='&' || ch=='^'){
            specialCharacters++;
        }
        else return 0;
    }
        let myObj={'consonants':consonants,'vowels':vowels,'numbers':numbers,'spaces':spaces,'punctuation':punctuation,'specialCharacters':specialCharacters};
        return myObj;
}


const questionFour = function questionFour(num1, num2,num3) {
    // Implement question 4 here
    let i=num2/1200;                                 // Formula = [PVi(i+1)^n]/[((i+1)^n)-1]
    let iadd=i+1;
    let term=num3*12;
    let ipow=Math.pow(iadd,term);
    let num=num1*i*ipow;
    let dem=ipow-1;
    let final = num/dem;
    return (parseFloat(final.toFixed(2)));
}

module.exports = {
    firstName: "PREET", 
    lastName: "DABHI", 
    studentId: "10459151",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
}
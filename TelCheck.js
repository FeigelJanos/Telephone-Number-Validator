function telephoneCheck(str) {
  //make a varible with the input
  let phoneNum=str;
  
  //Possible phone number patterns
  let pattern1=/^(1)( |\()(\()?\d{3}(\))?( |\)|-)\d{3}( |-)\d{4}$/;
  let pattern2=/\d{10}$/;
  let pattern3=/^(\()?\d{3}(\))?(\s|-)?\d{3}(\s|-)\d{4}$/;
 //Create a counter
  let counter=0;
//Create an array from the input
const phoneNumArr=str.split("");
//Run through the input array wether there are braces in it. If yes, add 1 to counter  
for(let i=0; i<phoneNumArr.length; i++){
  if(phoneNumArr[i]=="("||phoneNumArr[i]==")"){
    counter++;
  }
}
  //If there are odd number of braces, number is invalid
  if(counter>0&&counter%2!=0){
    return false;
  }
  //If it starts with a 1 and continues with a space or braces check the first pattern
  else if (phoneNumArr[0]=="1"&&phoneNumArr[1]==" "||phoneNumArr[1]=="("){
  
   if(pattern1.test(phoneNum)){
  
     return true;             
     }
    else{
     
      return false;
    }
  }
//If it is exactly 10 char long, check the 2. pattern
   else if(phoneNumArr.length==10){
   
   if(pattern2.test(phoneNum)){

     return true;             
     }
     else{

       return false;
     }
  }
  
  //If the second character is not a space or brace and it is longer than 10 chars 
else if(phoneNumArr[1]!=" "||phoneNumArr[1]!="("&&phoneNumArr.length>10){
 
   if(pattern3.test(phoneNum)){
     return true;             
     }
     else {
       return false;
     }
  }
//If it is in any other format return false
  else{
    return false;
  }
}

function telephoneCheck(str) {
  let phoneNum=str;
  let pattern1=/^(1)( |\()(\()?\d{3}(\))?( |\)|-)\d{3}( |-)\d{4}$/;
  let pattern2=/\d{10}$/;
  let pattern3=/^(\()?\d{3}(\))?(\s|-)?\d{3}(\s|-)\d{4}$/;
  let counter=0;

const phoneNumArr=str.split("");

for(let i=0; i<phoneNumArr.length; i++){
  if(phoneNumArr[i]=="("||phoneNumArr[i]==")"){
    counter++;
  }
}
  if(counter>0&&counter%2!=0){
    return false;
  }
  
  else if (phoneNumArr[0]=="1"&&phoneNumArr[1]==" "||phoneNumArr[1]=="("){
  
   if(pattern1.test(phoneNum)){
  
     return true;             
     }
    else{
     
      return false;
    }
  }

   else if(phoneNumArr.length==10){
   
   if(pattern2.test(phoneNum)){

     return true;             
     }
     else{

       return false;
     }
  }
else if(phoneNumArr[0]!="1"&&phoneNumArr.length>10){
 
   if(pattern3.test(phoneNum)){
     return true;             
     }
     else {
       return false;
     }
  }

  else{
    return false;
  }
}

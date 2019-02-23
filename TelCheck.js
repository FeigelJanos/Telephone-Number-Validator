function telephoneCheck(str) {
  let phoneNum=str;
  let answerArr=[];
  let answer="";
  let pattern1=/^(1)( |\()(\()?\d{3}(\))?( |\)|-)\d{3}( |-)\d{4}$/;
  let pattern2=/\d{10}$/;
  let pattern3=/^(\()?\d{3}(\))?(\s|-)?\d{3}(\s|-)\d{4}$/;
  
const phoneNumArr=str.split("");
  
  if (phoneNumArr[0]=="1"&&phoneNumArr[1]==" "||phoneNumArr[1]=="("){
    answerArr=phoneNum.match(pattern1);
    answer=answerArr.join("");
   if(answer==phoneNum){
     return true;             
     }
    
  }
  else if(phoneNumArr.length==10){
    answerArr=phoneNum.match(pattern2);
    answer=answerArr.join("");
   if(answer==phoneNum){
     return true;             
     }
  }
  else{
  answerArr=phoneNum.match(pattern3);
    answer=answerArr.join("");
   if(answer==phoneNum){
     return true;             
     }
  }
  return false;
}

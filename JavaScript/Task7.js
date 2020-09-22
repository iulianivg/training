//Write a function called that takes a string of parentheses, and determines 
//if the order of the parentheses is valid. The function should return true 
//if the string is valid, and false if it's invalid.

// Examples
//"()"              =>  true
//")(()))"          =>  false
//"("               =>  false
//"(())((()())())"  =>  true


// solution

function validParentheses(parens){
   
  let p1 = 0;
  parens = parens.split("");
  for(let i=0; i<parens.length; i++)
  {
    if(parens[i] === "("){
      p1++
    } else {
      p1--
    }
    
    if(p1 < 0){
      return false;
    }
  }
  
  if(p1 > 0){
    return false;
  }
  
  return true;
}

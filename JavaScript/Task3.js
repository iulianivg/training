//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// SOLUTION

function count (string) {  

let finalResult = {};
   if(string.length === 0){
     return {};  
   } else {
     let string2 = string.split("");
     for(let i=0; i<string2.length; i++){
       let x = string.split(string2[i]).length-1;
       finalResult[string2[i]] = x;
     }
     return finalResult;
   }
   
}

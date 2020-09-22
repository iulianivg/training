//Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// solution("camelCasing")  ==  "camel Casing"

// SOLUTION

function solution(string) {
  string = string.split("");
  let storedIndex = [];
  let extraN = 0;
  
  for(let i=0; i<string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      storedIndex.push(i);
    }
  }
  
  // to do => add space
  for(let i=0; i<storedIndex.length; i++){
    string[storedIndex[i]] = " "+string[storedIndex[i]];
    extraN++;
  }
  return string.join("");
}

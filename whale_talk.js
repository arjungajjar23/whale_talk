let input = 'turpentine and turtles'; //declare an input variable with what ever you want to say and convert into whale talk!
const vowels = ['a','e','i','o','u']; //whales talks in vowels only
let resultArray = []; 

for (let i=0; i< input.length; i++){
  if(input[i]==='e'){
    resultArray.push(input[i]); //whales doubles e's and u's in their language.
  } else if (input[i]==='u'){
    resultArray.push(input[i]);
  }
  for(let j=0; j<vowels.length;j++){
    if(input[i]===vowels[j]){
      //console.log(input[i]);
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray);
let resultString = (resultArray.join('')).toUpperCase(); //join array elements together as a string without "," in between and convert them to uppercase only!
console.log(resultString);
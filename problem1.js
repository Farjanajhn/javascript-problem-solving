function revString(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--){
    newString = newString + str[i];

  }
  return newString;
  
}

const result = revString("hello world")
console.log(result)
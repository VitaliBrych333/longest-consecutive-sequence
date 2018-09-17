module.exports = function longestConsecutiveLength(array) {
  let length = array.length;
  let tempArray = [];
  let lengthSequence = 0;
  
  for (let i = 0; i < length; i++) { 
    tempArray[array[i]] = array[i];
  }
  
  for (let i = 0; i < length; i++) {	    
      if (tempArray[array[i] - 1] === undefined ) {
        let tempNum = array[i];      
        while (tempArray[tempNum]) tempNum++;

        if (lengthSequence < tempNum - array[i]) lengthSequence = tempNum - array[i];
      }  
  } 

  return lengthSequence;
}  

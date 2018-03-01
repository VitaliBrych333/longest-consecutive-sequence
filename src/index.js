module.exports = function longestConsecutiveLength(array) {
  
  var n = array.length;
  var S = new Array();
  var k =0;
  
  for (var i=0; i<n;i++) { 
	  S[array[i]]=array[i];}
  
  for ( var i=0; i<n; i++) {
	    
	  if(S[array[i]-1] === undefined ) {
		  var j= array[i];
		  while (S[j]) j++

		  if (k<j-array[i]) k = j-array[i];
	  }
  
  } return k;
}  

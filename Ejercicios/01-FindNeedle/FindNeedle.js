function FindNeedle (haystack, needle) {
  // Your code here:
 //solucion con fuerza bruta
// for(let i = 0; i < haystack.length; i++) {
//   for(let j = 0; j < needle.length; i++) {
//     if(needle[j] !== haystack[i + j] ) break;
//     if(j === needle.length - 1) return i;
//   }
// }
// return -1

// Complejidad alta >>> O(n*m) un for recore n veces y el otro m veces
// console.log(FindNeedle('react-redux', 'redux'))

// Solucion refactor
for(let i = 0; i < haystack.length; i++) { //recorre n veces
  const sliced = haystack.slice(i, i + needle.length); // corta n veces
  if(sliced === needle) return i;
}
return -1;

//otra solucion misma complejidad mas optimo
// for(let i = 0; i < haystack.length; i++) { 
//   if(needle[0] === haystack [i]) {
//     const sliced = haystack.slice(i, i + needle.length); 
//     if(sliced === needle) return i;
//   }
// }
// return -1;

//los if no suman complejidad, solo los iterativos 
}


module.exports = FindNeedle

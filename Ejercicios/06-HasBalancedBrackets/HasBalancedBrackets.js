function HasBalancedBrackets (string) {
  // Your code here:
  // //solucion fuerza bruta
  // const validOpeningBrackets = ['{', '[', '('];
  // const validClosingBrackets = ['}', ']', ')'];
  // const openBrackets = [];

  // for (let i = 0; i < array.length; i++) {
  //   const bracket = string[i];

  //   if(validOpeningBrackets.includes(bracket)) openBrackets.push(bracket);

  //   if(validClosingBrackets.includes(bracket)) {
  //     const index = validClosingBrackets.indexOf(bracket);
  //     const brother = validOpeningBrackets[index];
  //     const lastOpen = openBrackets[openBrackets.length - 1];

  //     if(lastOpen === brother) openBrackets.pop()
  //     else return false;
  //   }
  // }
  // if(openBrackets.length) return false;
  // return true;
  
  // //solucion refactor
  // const openBrackets = [];
  // const validBrackets = {
  //   '{':'}',
  //   '[':']',
  //   '(':')'
  // }
  // for (let i = 0; i < string.length; i++) {
  //   const bracket = string[i];

  //   if(validBrackets[bracket]) openBrackets.push(bracket);
  //   else{
  //     const lastOpen = openBrackets[openBrackets.length - 1];
  //     if(validBrackets[lastOpen] === bracket) openBrackets.pop();
  //     else return false;
  //   }
  // }
  // if(openBrackets.length) return false;
  // return true;

  //solucion re-refactor
  const openBrackets = [];
  const validBrackets = {
    '{':'}',
    '[':']',
    '(':')'
  }

  for(const bracket of string){
    if(validBrackets[bracket]) openBrackets.push(bracket);
    else if(validBrackets[openBrackets.pop()] !== bracket) return false;
  }
  return !openBrackets.length;
  //complejidad O(n) todos tienen la misma complejidad aunque otros tenga mas lineas de codigo 

}

module.exports = HasBalancedBrackets

function MaxValue (shares) {
  // Your code here:
  // // solucion fuerza bruta
  // // ej: [4,3,2,5,11] shares
  // let maxProfit = -Infinity // -1

  // for(let i=0; i < shares.length - 1; i++) {
  //   const buy = shares[i]; // 4

  //   for(let j = i+1; j < shares.length; i++) {
  //     const sell = shares[j] // 2
  //     const actualProfit = sell - buy; // 
  //     if (actualProfit > maxProfit) maxProfit = actualProfit
  //   }
  // }
  // return maxProfit
  // //complejidad O(n^2)
  let maxProfit = -Infinity;
  let minValue = shares[0];

  for(let i=1; i < shares.length; i++) {
    const sell = shares[i];
    const actualProfit = sell - minValue;
    if(actualProfit > maxProfit) maxProfit = actualProfit;
    // ternario 
    //maxProfit= actualProfit > maxProfit ? actualProfit : maxProfit; 
    if(sell < minValue) minValue = sell;
  }
  return maxProfit
}

module.exports = MaxValue

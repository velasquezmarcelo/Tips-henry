function DecimalToBynary (num) {
  // Your code here:
  // //fuerza bruta
  // const binary = [];
  // while (num > 0) {
  //   const module = num % 2;
  //   binary.push(module);
  //   num = Math.floor(num/2);
  // }
  // return binary.reverse().join('');

  // //recaftor
  // const binary = [];
  // while (num > 0) {
  //   const module = num % 2;
  //   binary.unshift(module);
  //   num = Math.floor(num/2);
  // }
  // return binary.join('');

  // //re-refactor
  // let binary = '';
  // while (num > 0) {
  //   binary = num % 2 + binary;
  //   num = Math.floor(num/2);
  // }
  // return binary;

  // //solucion recursion
  // const module = num % 2;
  // if(num) return DecimalToBynary(Math.floor(num/2)) + module;
  // return ''

  //refactor de recursion
  return num ? DecimalToBynary(Math.floor(num/2)) + num % 2 : '';
}

module.exports = DecimalToBynary

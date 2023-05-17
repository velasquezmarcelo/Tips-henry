function BinaryToDecimal (binary) {
  // Your code here:
  //todo metodo iterativo puede transformarse en un metodo recursivo
  // //solucion fuerza bruta
  // //'110' >>> num  * 2 ** i
  // binary = binary.split('').reverse();
  // console.log(binary); //011

  // let result = 0;

  // for (let i = 0; i < binary.length; i++) {
  //   const num = binary[i];
  //   result += num * 2 ** i;
  // }
  // return result;

  // //solicion refactor
  // binary = binary.split('').reverse();
  // let result = 0;

  // binary.forEach((num, i) => {
  //   result += num * 2 ** i
  // });
  // return result;

  // //solucion re-refactor
  // return binary = binary.split('').reverse().reduce((result, num, i) => (result += num * 2 ** i), 0);
  // //se agrega el 0 al final del cb para que js entienda que es una suma de numeros y no de string

  // //con recursion con fuerza bruta
  // const num = binary[0]; //'1'
  // const result = num * 2 ** (binary.length - 1); //'1' * 2 ** (3 - 1) >>> 4
  // const rest = binary.slice(1);

  // if(rest) return result + BinaryToDecimal(rest);
  // return result;

  //solucion refactor de la recurcion
  const result = binary[0] * 2 ** (binary.length - 1);
  const rest = binary.slice(1);

  return rest ? result + BinaryToDecimal(rest) : result;
}

module.exports = BinaryToDecimal

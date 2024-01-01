// function sum(x, y, z) {
//   return x + y + z;
// }

//

function sum(x) {
  return function sumY(y) {
    return function sumZ(z) {
      return x + y + z;
    };
  };
}
const result = sum(100)(20)(18);

console.log(result);

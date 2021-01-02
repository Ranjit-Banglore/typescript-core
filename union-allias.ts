type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable): Combinable {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let combineResult = combine("Ranjit", "Patel");

console.log("combine result of two strings: " + combineResult);

combineResult = combine(4, 5);

console.log("combine result of two numbers: " + combineResult);

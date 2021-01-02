function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineResult = combine("Ranjit", "Patel");
console.log("combine result of two strings: " + combineResult);
combineResult = combine(4, 5);
console.log("combine result of two numbers: " + combineResult);

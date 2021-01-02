function add(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineFunction: (a: number, b: number) => number;

function print1(a: number): void {
  console.log("The result is " + a);
}

//add(3, 4, console.log);

add(4, 5, print1);

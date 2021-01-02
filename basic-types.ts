function add(n1: number, n2: number, printResult: boolean) {
  const result = n1 + n2;
  if (printResult) {
    console.log("this is addition result: " + result);
  }

  return result;
}

add(3, 4, true);

let number1 = add(2, 3, false);

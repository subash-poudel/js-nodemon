const add = (num1, num2) => {
  const data = {a: num1, b: num2}
  const sum = num2 + num1;
  return {...data, ...{sum}};
}

console.log(add(1, 2));

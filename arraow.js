const Calculator = (x, y) => {
  const add = x + y;
  console.log(add);
  const sub = x - y;
  console.log(sub);
  const multi = x * y;
  console.log(multi);
};
Calculator(2, 3);
console.log(Calculator);

const new_numbers = (x, y) => {
  return x * y;
};

const ans = new_numbers(2, 3);
console.log(ans);

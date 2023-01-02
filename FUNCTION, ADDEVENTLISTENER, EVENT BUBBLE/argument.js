function add_number(num1, num2) {
  console.log(arguments);
  var sum = num1 + num2;

  return sum;
}

var sum = add_number(3, 14, 8, 2);
console.log(sum);

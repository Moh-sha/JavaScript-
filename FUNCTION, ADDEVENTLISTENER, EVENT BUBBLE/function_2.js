function verify(n) {
  var result;
  if (n % 2 == 0) {
    result = n;
  } else {
    result = n;
  }

  return result;
}

var result = verify(10);
var square = result * result;
console.log(result);
console.log(square);

function analyze(nums) {
  for (var i = 0; i < nums.length; i++) {
    const n = nums[i];

    verify(n);
  }
}

nums = [5, 10, 2, 3, 4, 5, 6];
analyze(nums);

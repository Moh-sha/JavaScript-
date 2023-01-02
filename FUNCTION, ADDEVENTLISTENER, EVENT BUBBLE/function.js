function verify(n) {
  if (n % 2 == 0) {
    console.log(n, "number is even :");
  } else {
    console.log(n * 2, "number is odd :");
  }
}

function analyze(nums) {
  for (var i = 0; i < nums.length; i++) {
    const n = nums[i];

    verify(n);
  }
}

nums = [5, 10, 2, 3, 4, 5, 6];
analyze(nums);

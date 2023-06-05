var x = 4;

try {
  if (x == "") {
    throw "empty";
  }
  if (x > 5) {
    throw "too high";
  }
  if (x < 5) {
    throw "too low";
  }
} catch (err) {
  console.error(err);
}

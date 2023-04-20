function loadtime() {
  console.log(200);
}
console.log(100);
setTimeout(loadtime, 3000);
console.log(100);
console.log(100);
console.log(100);
console.log(100);

setInterval(function () {
  console.log("class ei jai na ");
}, 3000);

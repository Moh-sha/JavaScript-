function expire_callback(name, age, work) {
  console.log("hello", name);
  console.log("your age is", age);
  work();
}

function ek_kaj() {
  console.log("tmi saban diya hat dhu");
}

function arek_kaj() {
  console.log("tmi saban diya hat dhuis na ");
}

expire_callback("shafin", 17, ek_kaj);

//expire_callback("rafi", 19, arek_kaj);

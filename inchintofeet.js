function inctofet(inch) {
  var feet = inch / 12;
  return feet;
}

var nanainch = inctofet(100);
console.log(nanainch);

var naniinch = inctofet(200);
console.log(naniinch);

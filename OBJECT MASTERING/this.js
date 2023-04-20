const obj = {
  name: "shafin",

  get_functions: function () {
    console.log(this);
    console.log(this.name);
  },
};

const obj_2 = {
  name: "alamin",
};

obj_2.get_functions = obj.get_functions;

//obj_2.get_functions();
//obj.get_functions();
function add(num1, num2) {
  console.log(this);
  return num1 + num2;
}

add(2, 3);
obj.add = add;
obj.add();

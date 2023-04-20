const Human = {
  first_name: "shafin", //object create
  last_name: "ahmed",
  salary: 1500,
  get_fucntion: function () //anoymones function
  {
    this.first_name = first_name;
    this.last_name = last_name;
    console.log(this.first_name, this.last_name);
  },

  salary_function: function (ammount) {
    this.salary = this.salary - ammount;
    console.log(this.salary);
  },
};

console.log(Human.first_name, Human.last_name);

Human.salary_function(250);
console.log(Human.salary);

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
    console.log(this);
    this.salary = this.salary - ammount;
    return this.salary;
  },
};
const Human_pro = {
  first_name: "hero",
  last_name: "alom",

  salary: 2000,
};

Human.salary_function.call(Human_pro, 900);//call method 
console.log(Human_pro.salary);

Human.salary_function.apply(Human_pro, [500]);//apply method 
console.log(Human_pro.salary);

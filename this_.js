const person = {
  first_name: "shafin",
  last_name: "ahmed",
  get_full_name: function () {
    return this.first_name + " " + this.last_name;
  },
  get: function () {
    return this;
  },
};

console.log(person.get());

console.log(person.get_full_name());

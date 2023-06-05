const car = {
  name: "alien",
  model: 5400,
  weight: 350,
  color: "blue",

  start: function () {
    this.stop();
    console.log(this.name);
    console.log(this.model);
  },

  stop: function () {
    console.log(this.color);
    this.change("red");
  },

  change: function (string) {
    this.color = string;
    console.log(this.color);
  },
};

var show = car.start();
console.log(show);

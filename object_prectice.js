//object is alwayes declear in const not let

const car = {
  name: "alien",
  model: 5400,
  weight: 350,
  color: "blue",
  start: function () {
    this.stop();
    console.log("Starting");
  },
  stop: function () {
    console.log("stopping" + " " + this.name);
  },
  break: function (name) {
    console.log("break" + "  " + name);
  },
};

//access part

console.log(car.model);

car.break("blue");
car.start();

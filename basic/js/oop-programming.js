class Person {
  name;
  age;
  energy;

  constructor(name, age, energy) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }
    
  doSomethingFun() {
    this.energy -= 10;
  }
}

class Worker extends Person {
  xp;
  hourlyWage;

  constructor(name, age, energy, xp, hourlyWage) {
    super(name, age, energy);
    this.name = name;
    this.age = age;
    this.energy = energy;
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

function intern() {
  const worker = new Worker("Bob", 21, 110, 0, 10);
  worker.goToWork();
  return worker;
}

function manager() {
  const manager = new Worker("Alcie", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}

console.log(intern());
console.log(manager());
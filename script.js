//Q1
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getDetails = function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
}
const car1 = new Car("BMW", "M3", 2009);
const car2 = new Car("Hyundai", "Accent", 1994);
const car3 = new Car("Chevrolet", "Cruze", 2011);
const cars = [car1, car2, car3];

for (const car of cars) {
    console.log(car.getDetails());
}

//Q2
const persons = {
    person1: { firstName: "Ahmad", lastName: "Al-Hasan" },
    person2: { firstName: "Rami", lastName: "Al-Harbi" },
    person3: { firstName: "Anas", lastName: "Momoni" }
  };
  
  function firstName(personsObj) {
    const arr = [];
    let index = 0;
    for (const key in personsObj) {
      arr[index] = personsObj[key].firstName;
      index++;
    }
    return arr;
  }
console.log(firstName(persons));


//Q3
function objectToArray(obj) {
  return Object.entries(obj).flat();
}

console.log(objectToArray({ firstName: "Hasan", age: 22 }));

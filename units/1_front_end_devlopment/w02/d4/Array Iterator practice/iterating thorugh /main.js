const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];


const newInstructors = instructors.map(elem => elem + " is awesome ");
    
 const nums = [25, 6, 100, 3];
 
 let total = nums.reduce((acc, num) => acc + num) 

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ]

 let firstCar = cars.find(car => car.color === 'white');

const myRoom = ["evil monkey", "bed", "lamp"];

let chrisBedroom = myRoom.some(closet => closet === 'evil monkey');


const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const nicePeople = people.filter(person => person !== "jerks")

console.log(nicePeople)

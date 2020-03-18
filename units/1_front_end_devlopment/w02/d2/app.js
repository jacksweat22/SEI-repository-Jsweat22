function add(a, b){
    return a + b;
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return a * b; 
}

function compute(a, b, op){
    return op(a, b);
}

let result1 = compute(5,2, multiply);

const cars = [
    { make: 'Toyota', yrsOld: 5, mileage: 92399 },
    { make: 'Ford', yrsOld: 12, mileage: 255005 },
    { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
    { make: 'Subaru', yrsOld: 9, mileage: 111266 },
    { make: 'Toyota', yrsOld: 2, mileage: 41888 },
    { make: 'Tesla', yrsOld: 3, mileage: 57720 }]

    const mileage = cars.filter(car => car.mileage > 20000);
    const age = cars.filter(car => car.yrsOld > 5);




function getFriends(cb){
    setTimeout(() => cb(['Fred', 'Barney']), 1000)
} 
  getFriends((friends) => {
      friends.forEach((friend) => {
    console.log(friend);
      });
  });

console.log('hello World')

class Pet {
    constructor(owner, name){
      this.owner = owner;
      this.name = name;
      this.walk = false;
    }
    start() {
      this.walk = true;
      console.log('walka walka');
    }
  }
  
  let dog = new Pet ('Jack', 'Simba');
  console.log(dog.start());

  class Dog extends Pet{
      constructor(owner, name, price){
      super(owner,name)
      this.price = price 
  }
  bark(){
      console.log('bark')
  }
  chaseTail(){
      console.log('oh boy oh boy oh boy')
  }
  getPrice(){
      return this.price;
  }
}

let doggo =  new Dog ('Jack', 'Gunner', 20)
console.log(doggo);

class Cat extends Pet{
    constructor(owner, name, price,){
    super(owner, name,)
    this.price = price
    }
    purr(){
        console.log('purrr');
    }

    clean(){
        console.log("cleaning");
    }
    getPrice(){
        return this.price
    }
    walk(){
        console.log('strut strut')
    }
}

let cat = new Cat ('Jack', 'Cheetah', 10);
    console.log(cat)


// console.log(cat.purr());
// console.log(cat.clean());
// console.log(cat.getPrice());
// console.log(cat.walk());
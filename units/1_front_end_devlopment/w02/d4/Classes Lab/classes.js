class Pet {
    constructor(owner, name){
      this.owner = owner;
      this.name = name;
      this.walk = false;
    }
    start() {
      this.walk = true;
      console.log(‘walka walka’);
    }
  }
  let dog = new Pet (‘Jack’, ‘Simba’);
  console.log(dog.start());
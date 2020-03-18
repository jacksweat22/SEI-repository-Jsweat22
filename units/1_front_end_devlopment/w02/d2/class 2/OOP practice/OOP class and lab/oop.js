class Vehicle{
    constructor(vin, make, model){
        this,vin = vin;
        this.make = make;
        this.model = model;
        this.running = false;
    }


    Start() {
    this.running = true;
    console.log('running...');
    }

    stop () {
        this.running = false;
        console.log("stopped...")
     };

}

let v1 = new Vehicle('asdk', 'Tesla', 'X');
let v2 = new Vehicle('asdf', 'volvo', 'xc90')
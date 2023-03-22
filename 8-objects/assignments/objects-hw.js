// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const dreamCar = {
    Make: "Bmw",
    Year: 2023,
    Model: "M3",
    Color: "Red",
    topSpeed: 200,
    features: ["flies", "electrical", "self parking","self driving"]

}

// 2.   Using dot-notation Log to the console 3 properties from the previous object
        console.log(dreamCar.Make)
        console.log(dreamCar.Model)
        console.log(dreamCar.Color)

// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(dreamCar["Make"])
console.log(dreamCar["Model"])
console.log(dreamCar["topSpeed"])

// 4.   Try and log a property that doesn't already exist - what output do we get?

console.log(dreamCar.engine)
// 5.   Add a new key-value pair to the vehicle. 
dreamCar.engine; "V10",

// 6.   Using bracket-notation update a property on the vehicle. 
dreamCar["Color"] = "Baby sky blue",
console.log(dreamCar)

// 7.   Using dot-notation update a property on the vehicle. 
dreamCar.topSpeed = "400"

// 8.   Create a method for turning your vehicle on
const dreamCar = {
    Make: "Bmw",
    Year: 2023,
    Model: "M3",
    Color: "Red",
    topSpeed: 200,
    features: ["flies", "electrical", "self parking","self driving"]
    start: function(){
        console.log("Turning on")
    }
}


// 9.   Create a method for turning your vehicle off
const dreamCar = {
    Make: "Bmw",
    Year: 2023,
    Model: "M3",
    Color: "Red",
    topSpeed: 200,
    features: ["flies", "electrical", "self parking","self driving"]
    isOn:false;
    start: function(){
        console.log("Turning on")
    }
    turnOff: function(){
        console.log("Powering down")
    }
}


//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)




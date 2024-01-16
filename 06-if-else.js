let attendance = 16;

if (attendance < 15) {
    console.log("You are here!");
} else if (attendance > 15){
    console.log("Full!")
} else {
    console.log("Perfect Attendance");
}

const car = {
    price: 2000,
    color: "red",
    numDoors: 4
};

if (car.price < 2000 || car.color === "red" || car.numDoors === 4) {
    console.log("This is the car")
} else {
    console.log ("Find another car")
}
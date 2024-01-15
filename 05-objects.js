// Define a cookie object with properties and a method
const cookie = {
   // Property: name of the cookie
   name: "Chocolate Chip",
   // Property: taste of the cookie
   taste: "Sweet",
   // Property: whether the cookie is gluten-free or not
   isGlutenFree: false,
   // Property: a flag indicating if the cookie is yummy
   '+Yummy' : true,
   // Method: to eat the cookie
   eatCookie() {
       console.log("I'm eating a delicious " + this.name);
   }
}

// Update the name of the cookie
cookie.name = "Chip Chocolate";

// Update the gluten-free status of the cookie
cookie.isGlutenFree = true;

// Log the value of the "Yummy" property
console.log(cookie["+Yummy"]);

// Log the entire cookie object
console.log(cookie);

// Call the eatCookie method
cookie.eatCookie();

// Define a Cookie class with constructor and method
class Cookie {
   constructor(name, isGlutenFree) {
       // Set the name and gluten-free status of the cookie
       this.name = name;
       this.isGlutenFree = isGlutenFree;
   }

   // Method: to eat the cookie
   eatCookie() {
       console.log(`Eating ${this.name}...`);
   }
}

// Create a new instance of the Cookie class
const myCookie = new Cookie("Double Chocolate Chip", false);

// Log the newly created cookie object
console.log(myCookie)
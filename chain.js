let users = [{ id: 1, name: "John", job: "Leader" }];

let usersJob = users[0].job;
console.log(usersJob);

let data = {
  count: 1000,
  data: [
    { id: 1, name: "Susan", job: "Doctor" },
    { id: 2, name: "Emilia", job: "Engineer" },
  ],
};
let secondPersonJob = data.data[1].job;
console.log(secondPersonJob);

let user = {
  id: 1,
  name: "Tomas",
  address: {
    street: {
      first: "40/A Kochukhet",
      second: "Fourth Floor",
      third: "Left Side",
    },
  },
  postOffice: "cantonment",
  city: "Dhaka",
};
// let userFloor = user.address?.stret.second;//through error
// let userFloor = user.address?.stret?.second;//through undefined
let userFloor = user.address?.street?.second; //Fourth Floor
console.log(userFloor);

const customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // Detailed address is unknown
  },
};
const customerCity = customer.details?.address?.city;
console.log(customerCity);
// This also works with optional chaining function call
const customerName = customer.name?.getName?.(); // Method does not exist, customerName is undefined
console.log(customerName);

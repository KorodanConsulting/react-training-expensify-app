
// const person = {
// 	name: 'Abe',
// 	age: 31,
// 	location: {
// 		city: 'Ada',
// 		temp: 45
// 	}
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
// 	console.log(`It's ${city} in ${temperature}.`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// }

// const {name: publisherName = "Self-published"} = book.publisher

// console.log(`${publisherName}`);

// Array destructuring

const addresses = ['348 Springreene SE', 'Ada', 'Michigan', '49301'];
const [street, city, yourState="New York"] = addresses;

const item = ['coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [itemName,, medium,] = item;

console.log(`A medium ${itemName} costs ${medium}.`)

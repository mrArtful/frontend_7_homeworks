// Добавьте в массив 'fullNames' имя и фамилию
// из массивов 'names' и 'surnames'
const names = ['Jack', 'Samantha', 'Bob', 'Mary', 'Simon', 'Jessie', 'Derek'];
const surnames = ['Smith', 'Green', 'Summers', 'Wilson', 'Rose', 'Smart', 'Jones'];

const fullNames = [];

names.forEach(name => {
    fullNames.push(name + ' ' + surnames[names.indexOf(name)])
});

console.log(fullNames);


// Используйте forEach чтобы найти сумму всех чисел в массиве
const numbers = [6, 4, 2, 1, 8, 9];
let sum = 0;

numbers.forEach(num => sum += num);
console.log(sum);


// Используйте forEach чтобы в массив 'upperWords'
// добавить те же слова, но в верхнем регистре
const words = ['hello', 'people', 'javascript', 'frontend'];
const upperWords = [];

words.forEach(word => upperWords.push(word.toUpperCase()));
console.log(upperWords);


// Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversedNumberRow = [];

numberRow.forEach(num => reversedNumberRow.unshift(num));
console.log(reversedNumberRow);


// Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    } 
]

cars.forEach(car => console.log(`This is ${car.color} ${car.make}. It costs ${car.price}€.`));
console.log(Object.keys(cars));
console.log(Object.values(cars));
console.log(Object.entries(cars));
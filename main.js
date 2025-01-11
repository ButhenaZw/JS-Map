////////////////Task1/////////////
// function cleanNames(names) {
//     return names.map(name => name.trim());
//   }
  
//   const result = cleanNames(['injustice', " SuperMan", "Batman ", " flash "]);
//   console.log(result);
  /////////////Task2///////////////////
//   function convert(milees) {
//     const kilometers = milees.map(miles => miles * 1.60934);
//       const totals = kilometers.reduce((total, km) => total + km, 0);
//     return { kilometers, totals };
//   }
//   const miles = [10, 20, 30, 40];
//   const result = convert(miles);
//   console.log(result.kilometers);
//   console.log(result.totals);
/////////////Task3////////////////////////
// const square = (squares) => {
//     const sum = squares.map(num => num ** 2).reduce((sum, square) => sum + square, 0);
//       const average = sum / squares.length;
//       return average;
//   };
//   const numbers = [1, 2, 3, 4, 5];
//   const result = square(numbers);
//   console.log(result);
/////////////Task4/////////////
// const added = (numm) => numm.map(num => num + 4);
// const numbers = [1, 2, 3, 4, 5];
// const plus4 = added(numbers);
// console.log(plus4);
/////////////Task5/////////////
// const double = (numbers) => {
//     const evenNumbers = numbers.filter(num => num % 2 === 0);
//     const even = evenNumbers.map(num => num * 2);
//       const sum = even.reduce((total, num) => total + num, 0);
//     return sum;
//   };
//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(double(numbers));
///////////////Task6//////////////
// const fruits = ['apple', 'banana', 'cherry', 'date'];
// const uppercase = fruits.map( fruit => fruit.toUpperCase());
// console.log(uppercase)
//////////////Task7//////////////////////
// const heros = [
//     { name: 'Iron Man', power: 'Tech' },{ name: 'Spider-Man', power: 'Spider abilities' },
//     { name: 'Thor', power: 'Godly powers' },{ name: 'Hulk', power: 'Super strength' }
//   ];
//   const update = heros.map((hero, index) => ({
//     hero: hero.name,
//     power: hero.power,
//     id: index
//   }));
//   console.log(update);
///////////////////////////Task8///////////////////
// function words(word) {
//     return wordss.filter(word => word.length >= 7);
// }
// const wordss = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const result = words(wordss);
// console.log(result);
  ///////////////////Task9/////////////////////////
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const oddNumbers = numbers.filter(num => num % 2 !== 0);
//   console.log(oddNumbers);
//   const divisibleBy2or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
//   console.log(divisibleBy2or5);
//   const divisibleBy3Squared = numbers.filter(num => num % 3 === 0).map(num => num ** 2);
//   console.log(divisibleBy3Squared);
//   const sumSquaredDivisibleBy5 = numbers.filter(num => num % 5 === 0)
//  .map(num => num ** 2).reduce((acc, num) => acc + num, 0);
//   console.log(sumSquaredDivisibleBy5);
////////////////////Task10////////////////
// let nums = [11, 22, 33, 46, 75, 86, 97, 98];
// const squaredEvenNums = nums.filter(num => num % 2 === 0).map(num => num ** 2);
// const sum = nums.reduce((acc, num) => acc + num, 0);
// console.log(`squaredEvenNums: ${squaredEvenNums}`);
// console.log(`Sum of array elements: ${sum}`);
//////////////////Task11////////////////////////
// let country = ['India', 'United States', 'Russia', 'Japan', 'China'];
// const filter = country.filter(country => !country.startsWith('U') && !country.startsWith('R'));
// const upperCase = filter.map(country => country.toUpperCase());
// const total = upperCase.reduce((acc, country) => acc + country.length, 0);
// console.log(filter);
// console.log(upperCase);
// console.log(total);
///////////Tas12//////////////////////////
// const numbers = [12, 45, 67, 89, 23, 56, 73, 99, 100];
// const Greater = numbers.filter(num => num > 50);
// console.log(Greater);



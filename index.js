 //This is my first JavaScript code!
 console.log('Hello World');
 let name = 'Jude'; // String Literal
 console.log(name);

 // Variable rules;
 // Cannot be a reserved keyword
 // Should be meaningful and descriptive
 // Cannot start with a number
 // Cannot contain a space or hyphen
 // They are case-sensitive
 let firstName = 'Fuon';
 let lastName = 'Uneng';
 console.log(firstName, lastName);
 let interestRate = 0.5;
 interestRate = 1.5;
 console.log(interestRate);
 const compoundInterest = 3.7;
 console.log(compoundInterest);
 let age = 98; // Number Literal
 console.log(age); 
 let isApproved = true; // Boolean Literal
 console.log(isApproved);
 let middleName = undefined; // Undefined
 console.log(middleName);
 let releasedResults = null; // Null
 console.log(releasedResults);
 console.log(age * interestRate);

 let Name = 'Jude';
 let Age = 98;
 let Occupation = 'Teacher'
 // To define an Object in JS
 let person = {
    Name: 'Jude',
    Age: 98,
    Occupation: 'Teacher'
 };
 console.log(person.Age);
 // To change Object Property
 // Dot Notation
 person.Name = 'James';
 // Bracket Notation
 person['Name'] = 'Mary';
 console.log(person.Name);
 console.log(person);

 // Arrays in JS for making Lists
 let selectedColors = ['red', 'purple'];
 console.log(selectedColors);
 selectedColors[2] = 1;
 console.log(selectedColors);
 console.log(selectedColors.length);
 
 // Function
 // Functions have PARAMETER that enter into the rounded brackets
 // The value inside 'greet' function is called an ARGUMENT!
 // Performing a task
 function greet() {
    console.log('Hello World');
 }
 greet();

 // Or
 function greet(name){
    console.log('Hello ' + name + ' ' + lastName);
 }
 greet('Judith', '');

 // Calculating a value
 function square(number) {
    return number * number;
 }
 let number = square(6);
 console.log(number);
 //Or
 function square(number) {
    return number * number;
 }
 console.log(square(6));

 function timesTwo(number) {
    return number * 2;
 }
 console.log(timesTwo(6));

 //24th Oct, 2022
 let Price;
 Price = 50+"USD";
 console.log(Price);
 let Size= 25+"cm";
 //Nested 25th Oct., 2022
 { let Weight= 350+ " "+"Newtons";
   console.log(Weight);
   {
      let Height= 3+"m";
      console.log(Height);
      console.log(Weight);
      console.log(Size);
   }
 }
 console.log(Size);

 var Black= 25+"cm";
 //Nested 
 { var White= 350+ " "+"Newtons";
   console.log(White);
   {
      var Purple= 3+"m";
      console.log(Purple);
      console.log(White);
      console.log(Black);
   }
 }
 console.log(Black);
 console.log(White);
 console.log(Purple);
 //function 26th Oct., 2022
 console.log("Let's begin:");
 console.log('Hello');
 console.log('World');
 console.log('and again:');
 console.log('Hello');
 console.log('World');
 console.log('and once more:');
 console.log('Hello');
 console.log('World');//Cumbersome repitition
 // Now, Function Proper
 function testFunction() {
   console.log("Hello");
   console.log("World");
 }
 console.log("Let's begin:");
 testFunction();
 console.log('and again:');
 testFunction();
 console.log('and once more:')
 testFunction();
 //Data types 28th Oct., 2022
 let myName;
 myName="Lawrence";
 console.log(myName);
 //To embed a variable inside a variable
 console.log(`Hello, ${myName}!`);
 /*alert(`The result is....${6 * 8}`);
alert(`Hi, ${myName}....!`);*/
//To embed an expression inside a string
console.log(`The result is ${1 + 2}`);
/*alert(`Print as ${4*7}`);*/
let oldMean;
oldMean=10.3;
console.log(oldMean);
let newMean;
newMean=10.7;
console.log(newMean);
let meanDiff;
meanDiff=(newMean - oldMean);
console.log(meanDiff);
console.log("I am a programming guru!")
let catchPhrase;
catchPhrase='I deliver codes like the Hebrew women.';
console.log("catchPhrase");
console.log(catchPhrase); 
console.log(`The mean is ${15/4}`);
console.log(`Note: ${3*35} is an expression embedded in a string`);
let ageOfJohn=null;
console.log(ageOfJohn);
console.log(ageOfJohn * 8);
let ageOfSamuel;
ageOfSamuel=5;
console.log(`ageOfSamuel*${3*35}`);
console.log(ageOfSamuel);
console.log(`105 + ${3*35}`);
//To write a 'Prompt Interaction'
/*let favoriteColor=prompt('What is your favorite color?, Example: Red');
alert(`${favoriteColor} is my favorite color!`);*/
//To write a 'Confirm Interaction'
/*let isEnglishTeacher = confirm("Are you the English Teacher?");
alert(isEnglishTeacher);*/
console.log('I am the boss!');
const isMan = true;
console.log(isMan);
//Object
/*let myFirstName = 'Jose';
let myLastName = 'Guardiola'; 
let myAge = 58;
let gender = 'Male';
let maritalStatus = 'Single';
let myStateOfOrigin = 'Cross River';
let occupation = 'Software Developer';*/
let Person = {myFirstName:'Jose',
myLastName: 'Guardiola', 
myAge: 58,
gender: 'Male',
maritalStatus: 'Single',
myStateOfOrigin: 'Cross River', 
occupation: 'Software Developer'};
console.log(Person);
console.log(Person.myAge);
Person.myAge = 125;
console.log(Person.myAge);
Person['myAge'] = 96;
console.log(Person.myAge);
Person.occupation = 'Data Analyst';
console.log(Person.occupation);
Person.occupation = 'Sophrologist';
console.log(Person.occupation);
console.log(Person);
//30th September, 2022
//Variable shadowing
let points = 175;
console.log(points);//global variable, declared outside block
{
   let points = 250;
   console.log(points);//local variable, declared inside block
}
console.log(points);
//No variable shadow
let point = 125;
console.log(point);
{
   point = 230;
   console.log(point);
}
point = 278;
console.log(point);
//
var Counter = 163.12;
function testFunction() {
var Counter = 207.35
console.log(Counter);
}
console.log(Counter);
testFunction();
console.log(Counter);
//
let initialResult = 1957;
function initialFunction() {
   let initialResult = 1973;
   console.log(initialResult);
}
console.log(initialResult);
initialFunction();
//console.log(initialResult);
initialFunction();
//
var finalResult = 1977;
function finalFunction() {
   let finalResult = 1980;
   console.log(finalResult);
}
console.log(finalResult);
finalFunction();
finalFunction();
console.log(finalResult - initialResult);
{finalFunction() - initialFunction()};
//
var printedCopies = 350+'copies';
function printedFunction() {
var printedCopies = 382+'copies'; 
console.log(printedCopies);
}
console.log(printedCopies);
printedFunction();
//
let totalResult = initialResult + finalResult;
function totalResultFunction() {
   let totalResult = initialResult + finalResult - 2;
   console.log(totalResult);
}
console.log(totalResult);
totalResultFunction();
//
let roseUnitPrice = 8;
let roseQuantity = 70;
let roseValue = roseUnitPrice * roseQuantity;
console.log(roseUnitPrice, roseQuantity, roseValue);
let lilyUnitPrice = 10;
let lilyQuantity = 50;
let lilyValue = lilyUnitPrice * lilyQuantity;
console.log(lilyUnitPrice, lilyQuantity, lilyValue);
let tulipUnitPrice = 2;
let tulipQuantity = 120;
let tulipValue = tulipUnitPrice * tulipQuantity;
console.log(tulipUnitPrice, tulipQuantity, tulipValue);
let totalValue = roseValue + lilyValue + tulipValue;
console.log(totalValue);
// 
let flowerInventory = {
   roseUnitPrice: 8, quantity: 70, value: 560,
   lilyUnitPrice: 10, quantity: 50, value: 500,
   tulipUnitPrice: 2, quantity: 120, value: 240,
   Total: 1300
};
console.log(flowerInventory);
//
console.log("Rose - unit price: 8, quantity: 70, value: 560");
console.log("Lily - unit price: 10, quantity: 50, value: 500");
console.log("Tulip - unit price: 2, quantity: 120, value: 240");
console.log("Total: 1300");
//
/*const unitPriceRose = 8;
const unitPriceLily = 10;
const unitPriceTulip = 2;
console.log(unitPriceRose, unitPriceLily, unitPriceTulip);*/
roseUnitPrice;
roseQuantity = 70 - 20;
roseValue = roseUnitPrice * roseQuantity;
console.log(roseValue);
//
lilyUnitPrice;
lilyQuantity = 50 - 30;
lilyValue = lilyUnitPrice * lilyQuantity;
console.log(lilyValue);
//
tulipUnitPrice;
tulipQuantity;
tulipValue = tulipUnitPrice * tulipQuantity;
console.log(tulipValue);
//
console.log(roseUnitPrice, roseQuantity, roseValue);
console.log(lilyUnitPrice, lilyQuantity, lilyValue);
console.log(tulipUnitPrice, tulipQuantity, tulipValue);
//Arrays for Lists
let popularCarBrands = ['Subaru', 'Suzuki', 'Isuzu', 
'Mitsubishi', 'Toyota', 'Lexus', 
'Hyundai', 'Honda', 'Mercedes-Benz', 'Audi', 'Rolls-Royce',
'BMW', 'IVM', 'GMC', 'JAC', 'Dodge', 
'Daimler', 'Ferrari', 'Land Rover', 
'Larazi', 'Bugatti', 'Pro Force', 'VW', 'Porsche', 
'Kia', 'Nissan', 'GAC', 'Peugeot', 'Chrysler', 
'Chevrolet', 'Cadillac', 'Kantanka', 
'Volvo', 'Joy Long', 'Maserati', 'Ford', 
'Jeep', 'Lamborghini', 'Opel', 'Mazda'];
console.log(popularCarBrands);
//
let wrightName = "Maxwell Wright";
let wrightPhone = "(0191)7196495";
let wrightEmail = "Curabitur.egestas.nunc@nonummyac.co.uk";
console.log(wrightName, ' ', wrightPhone, ' ', wrightEmail);
let rajaName = "Raja Villareal";
let rajaPhone = "08663982895";
let rajaEmail = "poseure.vulputate@sed.com";
console.log(rajaName, ' ', rajaPhone, ' ', rajaEmail);
let helenName = "Helen Richards";
let helenPhone = "08001111";
let helenEmail = "libero@conallis.edu";
console.log(helenName, ' ', helenPhone, ' ', helenEmail);
//13th Nov., 2022
let morePopularCarBrands = [
   'Aston Martin', 'Fiat', 'Lotus', 'Genesis', 'Mini', 
   'Citroen', 'Pontiac', 'Lincoln', 'Infiniti', 
   'Saab', 'McLaren', 'Acura', 'Buick', 'Alfa Romeo',
   'Ford Mustang', 'Jaguar', 'Chevrolet Corvette',
   'Tesla', 'Peterbilt', 'BMW M', 'Saturn', 'GM', 'KTM',
   'Kenworth', 'Maybach', 'Mercury', 'Oldsmobile', 
   'Renault', 'Dodge Viper', 'Scion', 'Koenigsegg',
   'Skoda', 'Daewoo', 'Holden', 'Smart', 'Alpine', 'DS',
   'Navistar', 'Nissan Nismo', 'Pagani', 'Rover', 
   'Vauxhall', 'Ariel', 'Paccar', 'Tata', 'Abarth', 
   'Hummer', 'SEAT', 'Karma', 'Lucid', 'Saleen', 
   'Studebaker', 'Mercedes-AMG', 'Hennessey', 'Dacia',
   'Audi Sport', 'Daihatsu', 'Fisker', 'Geo', 'MACK'
];
console.log(morePopularCarBrands);





 


 
 





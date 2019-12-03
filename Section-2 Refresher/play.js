var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){ //pure functions everything is found inside the function not dependent on outside environment.
    return ( 'Name is ' + userName + ', age is ' + userAge + ', and the user has hobbies: ' + userHasHobby );
}

//console.log(summarizeUser(name, age, hasHobbies));


//Next gen JS Syntax-----------------------------------------------------------------------------------------------------------------------------------------------------------
const add = (a,b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

//console.log(addRandom());
//console.log(addOne(1));
//console.log(add(1,2));


//JS Objects 
const person = {
    name: 'Rachel',
    age: 35,
    // greet: () => {
    //     console.log('Hi, I am ' + this.name); // inside object use this, it refers to the surrounding objects 
    // } // this prints "Hi, I am undefined" as this refers to the global scope and not only to the object

// use the syntax below for the function to have "this" refer to the scope of the object
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

//person.greet();

//JS Array
const hobbies = ['Sports', 1, 'Cooking'];
// for (let hobby of hobbies){
//     console.log(hobby);
// }

//console.log(hobbies.map( hobby => 'Hobby is: ' + hobby));
//console.log(hobbies);

//hobbies.push(['Eating', 'Dancing']); //even though hobbies is a const we added a new item, How?? It is a Reference Type, only store address of the memory location 
                                     //where they don't store actual data, here we changed actual data but the address is the same.
//console.log(hobbies); 

//---------------------------------------Modern JS => Rest and Spread operator------------------------------------------------------------------------------------------

//const copiedArray = hobbies.slice(); //exact copy of the array
//const copiedArray = [hobbies]; // nested array [[ .... ]]
const copiedArray = [...hobbies]; //spread operator => extracts whatever is present in the operand infront of it and puts it in the surrounding operators.  
//console.log(copiedArray);

const copiedPerson = {...person};
//console.log(copiedPerson);


const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

const toArrayRest = (...args) => args; //Rest operator any number of arguments 

//console.log(toArray(1,2,3));
//console.log(toArrayRest(1,2,3,4,5));

//----------------------------------------------Destructuring in JS-------------------------------------------------------------------------------------------------------------
//used to drop the data we don't need in an array or object.

const transport = {
    name: 'AutoBus',
    type: 'Public',
    count: 187
};

//const printName = (dataObject) => transport.name;
const printName = ({ name, count, rounds }) => transport.name + " has " + transport.count ; //destructuring of an object 

console.log(printName(transport)); 
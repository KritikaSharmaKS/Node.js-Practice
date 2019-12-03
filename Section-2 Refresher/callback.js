//callback function asynchronous code as it waits for some time before executing
setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
},1); //1 milliseconds

console.log("Heyaaaaa");
console.log("How are you?");


//nested async callbacks example
const fetchData = callback => {
    setTimeout(() => {
        callback("Done!");
    },1500); //1.5 seconds
}; 


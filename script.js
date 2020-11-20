// Question 1
var petArray = ['cat','cow','dog'];

//Question 2
console.log(1);

// Question 3
petArray.push('sheep');

// Question 4
console.log(petArray.length);

// Question 5
var catObject = {
    name: 'Milli',
    colour: 'white',
    age: 12
};

// Question 6
console.log(catObject.age);

// Question 7
var catArray = [
    {
    name: 'Milli',
    colour: 'white',
    age: 12
    }
];

// Question 8. Which of these two methods are correct? 
for(var i = 0; i < catArray.length; i++) { 
    console.log(catArray[i]);
}


for(var i = 0; i <catArray.length; i++) {

    console.log(catArray[i].name);

    console.log(catArray[i].colour);

    console.log(catArray[i].age);

    
}

// Question 9 
function logToConsole(hobby){
    console.log('surfing');
}

// Question 10 
logToConsole('donkey'); 







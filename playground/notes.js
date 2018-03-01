// An example way to run debugger without placing debuggers manually

// Also shows how a function can take a function as a parameter or argument

// High-Order-Functions

function runWithDebugger (functionToDebug) {
    debugger;
    functionToDebug();
}

function functionToDebug () {
    console.log('This thing to be said')
}

// FUNCTIONS THAT TAKE OTHER FUNCTIONS

// forEach is a method on ALL arrays. Will run the functoin on every item in the array.

// can be done instead of a for loop

var students = ['jonathan', 'jenny', 'elliot'];

function logName (name) {
    console.log(name);
};

students.forEach(logname)

// OR

students.forEach(function logname(name){
    console.log(name)
})

// forEach method broken down example

function forEach (myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        mufunction(myArray[i]);
    }
}



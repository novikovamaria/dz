//1 task
// Example:
/*    var makeFunction = function () {
        var addOne = function (x) {
            return x + 1;
        };
        return addOne; // return the function
    };
// makeFunction is a function with no arguments
var f = makeFunction();
// f is a function that takes one argument
var y = f(3);*/
// now y is 4

//Create a function that will always return a number multiply on 3!

var multOnThreeFact = function(x){
    return x*2*3
}

//Write a JavaScript program to calculate the factorial of a number using 1 task,
// but ask user for a number to get factorial from using prompt() function.
// Then give an answer to user after calculation is finished using alert(number);

function calcFactorial (){
    var num = +prompt('Please enter number to calculate factorial')
    var factorial = multOnThreeFact(num)
    if (num===1 ||num===2){
        alert(num);
        return num;
    }
    if (num===3){
        alert(factorial/num);
        return factorial/num;
    }
    for (var n =4; n<num; n++){
        factorial *=n;
    }
    alert(factorial);
    return factorial;
}
console.log(calcFactorial ())


//2 task - Don't understand
//Make this syntax possible: var a = add(2)(3); //5 
var add = function () {
};
var a = add(2)(3)
console.log(a)
//console.log(add(2)(3)); // 5


//3 task
// Transform array of numbers to array of functions that will alert that digits:
var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
var transformedArray = numberArray.map(function(number){
    return alert(number)
})

// in result we will have: [function (){...}, function (){...}, function (){...}, function (){...}]

//4 task
// Please write a function "double" and "doubleTripple" so the following code will be true. To create a "doubleTripple" function please use double function inside.
var double =function (num){
    return num*2
}
var doubleTripple=function(num){
    return double(num)*3
}
double(9); // 18
double(3); // 6

doubleTripple(3); // 18 = 3 * 3 * 2
doubleTripple(2); // 12 = 2 * 3 * 2
doubleTripple(5); // 30 = 5 * 3 * 2

//5 task
//Please write a function "makeCount" so the following code will be true.
    function createCount () {
        var num = 1;
        var startCount = function(){
            return num++
        };
        return startCount;
    }

var makeCount = createCount();

makeCount(); // 1
makeCount(); // 2
makeCount(); // 3
makeCount(); // 4
makeCount(); // 5
makeCount(); // 6

//6 task
// Please write a function "makeCount" so the following code will be true. Use the previous function.

function createCount (startFrom) {
    var start = startFrom+1
    var startCount = function(){
        return start++
    };
    return startCount;
}
var makeCount = createCount(4);

makeCount(); // 5
makeCount(); // 6
makeCount(); // 7
makeCount(); // 8
makeCount(); // 9
makeCount(); // 10

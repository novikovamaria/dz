//1 task
// Create function "getName" that ask user his name with promt window and alerts his name to him in format: "Hello, <his_name>".
function getName() {
    var name = prompt('Please enter your name')
    alert("Hello, "+name)
}
getName(); // if I put "Lily" in prompt I will see in alert: "Hello, Lily";

//2 task
// Create function double(x) that returns the number passed to it as an argument, multiply with 2
function double(x) {
    console.log(x*2)
}

double(6); // logs in console => 12

//3 task
//Create function range(x, y) that returns a sum of digits in the range of numbers [x, y];
function range(x, y) {
    var res = 0;
    for (i=x; i<=y; i++){
    res +=i
    }
    console.log(res)
}
range(1,3); // logs in console => 6

//4 task
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению. Пример работы:


//5 task
//Create a function that returns true if number is odd, and false if even;
function isOdd(x){
    if (x%2!==0){
        return true
    }else{
        return false
    }
}
console.log(isOdd(12))
console.log(isOdd(9))

//6 task
//Create a function that returns all odd numbers in range, use the previous function inside this one;
function allOddInRange(x,y){
    for (i=x; i<=y; i++){
        if (isOdd(i)){
            console.log(i)
        }
    }
}
allOddInRange(5,10)

//7 task
// Create a function that will call prompt window that will ask for a number to user, until he enters 9;
function askMeAboutNine(){
    var answer = +prompt('Please input 9')
    if (answer !== 9) {
        return askMeAboutNine()
    }
    return alert('Congratulations!')
    }
askMeAboutNine()

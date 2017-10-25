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
    // функция должна возвращать значение умноженнное на 2 а не просто выводить в консоль
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
    // функция должна возвращать значение 
}
range(1,3); // logs in console => 6

//4 task
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению.

function getPrimesSumBelow(){
    var x = +prompt('Please enter your number')
    if (x ===2){
        alert('Sum is equal 2')
    }else{
        num = 2
        sum = 0
        while(num<x){
            if (checkIfNumberIsPrime(num)){
                sum+=num
            }
            num++
        }
        alert(sum)
    }
    // функция должна возвращать значение 
}

function checkIfNumberIsPrime(num){
    // ? а если num=1?
    if (num===2){
        return true        
    }else{
        for (i = 2; i <num; i++){
            if (num%i===0)return false                
        }
        return true
    }
}
getPrimesSumBelow()

//5 task
//Create a function that returns true if number is odd, and false if even;
function isOdd(x){
    if (x%2!==0){
        return true
    }else{
        return false
    }
    
    // или просто можно return x%2!==0;        
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

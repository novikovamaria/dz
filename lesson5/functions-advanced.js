//Мы можем обьявить функцию 3 способами:

//function isNimble(){ return true; } - функция может быть сначала вызвана, а потом объявлена
//var canFly = function(){ return true; }; - функция должна быть объявлена перед вызовом
//window.isDeadly = function(){ return true; }; - функция является глобальной, методом окна window.
//Чем они отличаються друг от друга?
//http://ejohn.org/apps/learn/#5 - Посмотрите и пройдите задания по функциям!

// 1 задание
// Написать функцию color(), которая будет генерировать случайный цвет в RGB формате.

function createColor(){
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    var createRGB = [r,g,b].join(',')
    return createRGB
}
console.log(createColor())

//2 задание
// Напишите функцию, генерирующую массив с N количеством элементов товара вида «Товар N»,
//где N номер товара который вы будете передавать в функцию. Выведите на экран массив.

function getProducts (n){
    var itemArr=[]
    for(var i=1; i<=n; i++){
        itemArr.push('Product '+i)
    }
    return itemArr
}
console.log(getProducts(50)); // ["Products 1", "Prodcuts 2" ... ] and etc.

//3 задание
// Write function that will get the 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

function getPow(pow){
    if (pow===0){return 1}
    var twoPow = 2
    for (var i=2;i<=pow;i++){
        twoPow*=2
    }
    return twoPow
}
function getSum(pow){
    var num = getPow(pow).toString()
    var sum=0
    for (var j=0;j<num.length;j++){
        sum+=+num[j]
    }
    return sum
}
console.log(getSum(100))

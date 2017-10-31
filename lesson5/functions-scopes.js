//1 task
// Hoisting или "поднятие переменных"? Что произойдет при выполнении следующего куска кода?
myname = "global";
function func() {
    console.log(myname);
    var myname = "local";
    console.log(myname);
}
func();//undefined, local

//2 task
// Какие языковые конструкции в javascript создают scope? Что произойдет при выполнении следующего куска кода?

var a = 90100;
function someFunc(){
    if(false){
        var a = 1;
    } else {
        var b = 2;
    }
    console.log(b);
    console.log(a);
}
someFunc();// Только функции создают области видимости, 2, undefined

//3 task
// На что ссылаеться this в следующем фрагменте кода?

    function test() {
        this;
    }
    test();// на глобальный объект

//4 task
// Что такое глобальные переменные ? Как они создаются ? Какие проблемы связаны с использованием глобальных переменных?

//Глобальные переменные - это переменные которые доступны во всей программе, а локальные - только внутри функции.
// Глобальные переменные создаются вне функции и могут быть изменены в любом месте программы.

//5 task
// Почему вызов a(); происходит успешно, а вызов b(); выдает ошибку?
a(); //ok
b(); //error
var b = function(){
    alert( 'function b');
}

function a(){
    alert( 'function a' );

}//Случай а: функции, объявленные как function func(), создаются сразу работающими, а переменные – равными undefined. Во втором случае функцию можно вызвать только после того, как она объявлена

//6 task
// Что выведет в консоль следующий код:

var i = 0;
for (; i< 10; i ++) {
    console.log(i)
}//i от 0 до 10
// от 0 до 9 10 не включено

//7 task
// Напишите функцию подсчета факториала числа, но каждый раз возвращая факториал умножайте его на 2 если число четное.

function getFactorial(num){
    var i =1;
    var fact=1
    while(i<=num){
        fact*=i;
        i++
    }
    if (num%2===0){
        return fact*2
    }else{
        return fact
    }
}
console.log(getFactorial(2))

//8 task
// Напишите скрипт, который генерирует случайную строку. В строке должны быть маленькие и большие латинские буквы, цифры и подчеркивание.

//10 task
// Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром.
// Пример: union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2, 3, 101, 10].

function union(arr1, arr2, arr3) {
    var new_arr =[]
    new_arr = new_arr.concat(arr1,arr2,arr3)
    var union_arr =[]
    new_arr.forEach(function(i){
        if (union_arr.indexOf(i)===-1){
            union_arr.push(i)
        }
    })
    return union_arr
}
console.log(union([1, 2, 3], [101, 2, 1, 10], [2, 1]))

//11 task
// Реализуйте функцию flatten, которая в случае, если массив обладает уровнями вложенности, приведёт его к элементарному виду (вложенность может быть любой глубины).
// Пример: flatten([1, [2], [3, [[[4]]]]]) вернёт [1, 2, 3, 4].

var arr = ['l', ['a','h'], ['g', 'h', [['m',['f','n']]]]]
function flatten(arr) {
    new_arr = arr.join(',')    
    return new_arr.split(',')
}
console.log(flatten (arr))

// !СУПЕР вариант решения =)

//12 task
// Реализуйте функцию unique, которая будет удалять дубли из массива.

function unique(arr){
    var unique_arr = []
    arr.forEach(function(i){
        if(unique_arr.indexOf(i)===-1){
            unique_arr.push(i)
        }
    });
    return unique_arr
}
console.log(unique([1,3,1,4,3,5,5,7,6,8,8,1]))

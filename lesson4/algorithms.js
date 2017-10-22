//1 задание
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

for(x=2; x<10; x++){
    if (isPrime(x)){
        console.log(x)
    }
}
function isPrime(num) {
    if (num === 2) {
        return true
    } else {
        for (i = 2; i < num; i++) {
            if (num % i === 0) return false
        }
        return true
    }
}
isPrime(100)

//2 задание
// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом.
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
// alert( obj.className ); // "open menu new me"
// P.S. Ваша функция не должна добавлять лишних пробелов.

var obj = {
    className: 'open menu'
}
function addClass(obj, cls) {
    cls = cls.toLowerCase()
    arrClasses = obj.className.split(' ')
    for (i = 0; i < arrClasses.length; i++) {
        if (arrClasses[i] === cls) {
            return obj;
        }
    }
    obj.className += ' '+cls
    return obj
}
console.log(addClass(obj,'ME'))

//3 задание
// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами.
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке.

    var obj = {
    className: 'open menu menu menu menu open'
};
    function removeClass(obj,cls){
        cls = cls.toLowerCase()
        arrClasses = obj.className.split(' ')
        for(i=0; i<arrClasses.length; i++){
            while(arrClasses[i]===cls){
                if (arrClasses[i]===cls){
                    arrClasses.splice(i,1)
                }
            }
        }
        obj.className = arrClasses.join(' ')
        return obj
    }
    console.log(removeClass(obj,'open'))

//4 задание
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число. Выводит сумму всех значений массива когда ввод прекращен.

var arrNumbers = []
var sum = 0
function calcSum() {
    var num = prompt('Enter number')
    if ((!isNaN(+num))&&num!==null&&num!==''){
        sum+=+num
        arrNumbers.push(+num)
        calcSum()
        return sum
    }else{
        return sum
    }
}
console.log(calcSum())

//5 задание
// Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2).
// В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.
// Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
// Например:
//console.log(fib(3)); //2
//console.log(fib(7)); //13
//console.log(fib(77)); //5527939700884757

function fib (n){
    var i=2
    var xn2=0
    var xn1=1
    while(i<=n){
        var xn = xn2+xn1;
        xn2=xn1
        xn1=xn
        i++
    }
    console.log(xn)
    return xn
}
fib(3)
fib(7)
fib(77)

//6 задание
// Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
// Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'

function cutStr(str){
    if (str.length<=20){
        return str
    }else{
        str = str.substr(0,20)+"..."
        return (str)
    }
}
console.log(cutStr('asdfghjklzxcvbnmqwer'))

//7 задание
// Напиште код который выведет сотрудника который выполнил больше всех задач.

var tasksCompleted = {
    'Anna': 99,
    'Serg': 35,
    'Elena': 1,
    'Anton': 9
};
var max=0
for (var key in tasksCompleted){
    if (tasksCompleted[key]>max){
        max = tasksCompleted[key]
    }
}
console.log(max)

//1 задание
// Напишите функцию которая будет выводить текст на екран: "Как ваше имя?";
// После ввода имя запишите как свойство "name" для ссылки внутри функции this;
// Создайте пустой объект и вызовите эту функцию для объекта и просто для окна и посмотрите изменился ли объект,
// и создалась ли переменная name в окне браузера?

function askName(){
    name = prompt('Как ваше имя?')
    this.name = name
}
var obj = new askName()
console.log(obj)
console.log(askName())

//2 задание
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

function sumTo(n){
    sum = 0;
    for (var i=n; i>0; i--){
        sum+=i
    }
    return sum
}
console.log(sumTo(6))

//3 задание
// Напишите код, который отсортирует массив объектов people по полю age, для сортировки используем метод массива sort.
//Выведите список имён в массиве после сортировки.

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var people = [vasya , masha ,vovochka];
function compare(a,b) {
    if (a.age > b.age) return 1
    if (b.age > a.age) return -1
}
console.log(people.sort(compare))

//4 задание
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).

var arr = ['asd', 'fgd', 'asd', 'fgd', 'asd', 'fg']
function unique(arr){
    for (i=0; i<arr.length-1; i++){
        var compare = arr [i]
        for (j=1; j<arr.length; j++){
            if (compare===arr[j]){
                arr.splice(j,1)
            }
        }
    }
    return arr
}
console.log(unique(arr))

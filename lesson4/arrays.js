//1 задание
// Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
// Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того
// является ли строка палиндромом или нет.
function isPal(str){
    var arr =str.toLowerCase().split('')
    for (var i=0; i<arr.length; i++){
        if (arr[i]===' '){
            arr.splice(i,1);
            i--;
        }
    }
    return arr.join()===arr.reverse().join()
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false*/

//2 задание
// Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке.
// Например:воз - зов, киборг - гробик, корсет - костер - сектор,
// Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер','сектор']
function anClean(arr){
    for (i=0; i<arr.length; i++){
        for (j=i+1;j<arr.length; j++){
            if(arr[i].toLowerCase().split('').sort().join('')===arr[j].toLowerCase().split('').sort().join('')){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return (arr)
}
console.log(anClean(arr))

//3 задание
//Создайте программу которая соеденит массив в строку, поменяет местами буквы в словах и порядок следования слов в массиве:

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
for (i=0; i<arr.length; i++){
    new_arr = arr[i].split('').reverse().join('')    
    arr[i]=new_arr
}
arr = arr.reverse().join(' ')
console.log(arr)

//4 задание
// Найти сумму целых чисел от 1 до 100
// Найти сумму четных чисел от 0 до 100.

sum =0
for (i=1; i<=100; i++){
    sum+=i
}
console.log(sum)

i=0
sum_even = 0
while(i<=100){
    if (i%2===0){
        sum_even+=i
    }
    i++
}
console.log(sum_even)

//5 задание
// Напишите функцию callMe которая будет принимать 3 аругумента, это будут цыфры, потом она будет суммировать их
// и выводить на екран результат их суммы!
// Если в нее передели не числа то она должна выводить сообщение об ошибке в консоль и возвращать null;
// (вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") )

function callMe(){
    var num1 = prompt('Введите первое число')
    var num2 = prompt('Введите второе число')
    var num3 = prompt('Введите третье число число')
    // в данном случае  было бы здорово создать фнукцию например checkIf number которая бы проверяла все условия допустим:
    
    /* 
    function checkIfNumber(number) {
        return !(isNaN(+number)) && number !== null && number != '';
    }
    checkIfNumber(num1) && checkIfNumber(num2) && checkIfNumber(num3) 
    */
    
    // получеться не так громоздко и для этого и нужны функции где код может быть переиспоьзован
    if (!(isNaN(+num1))&&num1!==null &&num1!=''
        &&!(isNaN(+num2))&&num2!==null &&num2!=''
        &&!(isNaN(+num3))&&num3!=null&&num3!=''){
        var sum = +num1+(+num2)+(+num3)
        alert(sum)
    }else{
        console.error('Error!')
        return null
    }
}
callMe()

//6 задание
// Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом.
// Она должна возвращать массив соедененный через запятые и отсортированный по алфавиту (Array.join(','));

function callMeAgain(arr){
    return arr.sort().join(',')    
}
console.log(callMeAgain(['d', 'c', 'a', 'gh', 'df']))

//7 задание
// Дан массив объектов:
//Отсортируйте массив по полю age

var arr = [
        {name: "L1", age: 45},
        {name: "L1", age: 20},
        {name: "L1", age: 10},
        {name: "L1", age: 78},
        {name: "L1", age: 41},
        {name: "L1", age: 10}
];
function compareAge(a, b){
    if (a.age>b.age) return 1
    if (b.age>a.age) return -1
}
arr.sort(compareAge)
console.log(arr)

//8 задание
// Через prompt узнайте у пользователя его имя и возраст, и запишите в отсортированный массив с 8 задания в правильную позицию,
// чтобы все элементы в массиве остались отсортированные по полю age
// Если такой пользователь уже существует в массиве верните пользователю сообщение: "Такой пользователь уже существует"

var obj={}
obj.name=prompt('Enter name')
obj.age=+prompt('Enter age')

// тут можно было бы просто добавить новый обьект в массив arr а потом снова его отсортировать через arr.sort(compareAge)

function addUser(arr,obj) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].name === obj.name && arr[i].age === obj.age) {
            console.log('User already exists')
            return
        }
    }
    for (i=0; i<arr.length;i++){
        if(obj.age<=arr[i].age){
            arr.splice(i,0,obj)
            return arr
        }
    }
    arr.push(obj)
    return arr
    }
console.log(addUser(arr,obj))

//9 task
// Дан массив с числами. Подсчитайте количество цифр 3 в данном массиве.
// Пример: [13, 35, 3, 443] - в массиве 4 цифры 3.

var arr = [13, 35, 3, 443]
function countNumbers(arr, num){
    counter = 0
    str = arr.join('')
    for (i = 0; i<str.length;i++){
        if (str[i]==num){
            counter+=1
        }
    }    
    return counter
}
console.log(countNumbers(arr, 4))

//10 task
// Дан массив ['1', '2', '3', '4', '5', '6']. Сделайте из него строку '16-25-34'. Массив, конечно же, может быть любым.

var arr = ['1', '2', '3', '4', '5', '6','7','8']
str =[]
while (arr.length>1){
    new_arr = [arr[0],arr[arr.length-1]].join('')
    str.push(new_arr)
    arr.pop()
    arr.shift()
}
if (arr.length>0){
    str.push(arr)
}  
str = str.join('-')
console.log(str)

//11 task
// Даны два массива, к примеру
//    [1,2,3]
//    [4,5,6]
// Создайте новый массив, заполненный суммами соответствующих элементов, то есть [1+4, 2+5, 3+6] = [5, 7, 9].
//    Скрипт должен работать для любых массивов, даже если их длина не одинакова (подумайте, что делать в этом случае).

var arr1 = [1,2,3]
var arr2 = [4,5,6,9,8,10]
var arr_sum =[]
for (i=0; i<arr1.length; i++){
    if (arr1[i]!=undefined && arr2[i]!=undefined){
        arr_sum.push(arr1[i]+arr2[i])
    }
}
console.log(arr_sum)

//12 task
// Дан массив. Напишите функцию, которая будет удалять элемент из массива по его тексту.
//    Пример: arr = [1,2,3,4,3,3]. Удалим все элементы с содержимым 3: func(arr, 3).

var arr = [1,3,3,5,3,4,4,3]
function deleteNumbers (arr, num){
    for (i=0; i<arr.length; i++){
        while (arr[i]===num){
            arr.splice(i,1)
        }
    }
    return arr
}
console.log(deleteNumbers(arr, 3))

//13 task
// Реализуйте функцию intersection, вернёт массив из элементов, встречающихся в каждом из переданных массивов.
//    Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2].

function intersectionArray(arr1,arr2,arr3){
    interArr=[]
// i j всегда обьявляем через var
    for (i=0; i<arr1.length; i++){
        for (j=0; j<arr2.length; j++){
            if (arr1[i]==arr2[j]){
                for (k=0; k<arr3.length; k++){
                    if (arr2[j]==arr3[k]){
                        interArr.push(arr3[k])
                    }
                }
            }
        }
    }
    console.log(interArr)
    return interArr
}
intersectionArray([1, 2, 3], [101, 2, 1, 10], [2, 1])

//14 task
// Дан массив с числами, к примеру [2, 3, 1, 4]. Сделайте из него массив [2, 2, 3, 3, 3, 1, 4, 4, 4, 4].
// В массиве могут быть только целые положительные числа.

var arr = [2, 3, 1, 4]
function addToArray(arr){
    new_arr =[]
    for (var i=0;i<arr.length;i++){
        for(var j =arr[i];j>0;j--){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
addToArray(arr)

//15 task
// Реализуйте функцию, которая будет дополнять массив заданными элементами до заданного размера.
// Пример: [1,2,3] дополним нулями до размера 6 - [1,2,3,0,0,0].

function addToArray(arr,size,num){
    arr_length = arr.length
    while(arr_length<size){
        arr.push(num)
        arr_length++
    }
    return arr
}
console.log(addToArray([1,2,3,5],6,1))

//16 task
// Дан массив с числами. Не используя цикл, выведите:
// Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы).
// Первые 3 отрицательных числа в массиве (по порядку следования).

//1 Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы).
var arr = [2, 3, -3, 1, -4, 4, 6, 5, 5, 2]
function theSmallest(arr){
    new_arr=[]
    arr.forEach(function(i){
        if (new_arr.indexOf(i)==-1){
            new_arr.push(i)
        }
    });
    var compareNumeric= function(a,b){
        return a-b;
    }
    new_arr.sort(compareNumeric)
    return new_arr.slice(0,3)
}
console.log(theSmallest(arr))

//2 Первые 3 отрицательных числа в массиве (по порядку следования).
function negatives(arr){
    var new_arr2=arr.filter(function(number){
        return number<0
    });
    return (new_arr2.slice(0,3))
}
console.log(negatives(arr))

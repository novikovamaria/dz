//2-cycles

//task 1: Выведите столбец чисел от 1 до 50.
for (i=1; i<=50; i++){
    console.log(i)
}

//task 2: Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
var arr = [1,2,3,4,5]
for (i=0; i<arr.length; i++){
    console.log(arr[i])
}

//task 3: Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
var arr = [2,3,4,5]
var mult = 1
for (i=0; i<arr.length; i++){
    mult *=arr[i]
}
console.log(mult)

//task 4: Дан объект obj с ключами 'Минск', 'Москва', 'Киев' и значениями соответственно: 'Беларусь', 'Россия', 'Украина'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

var obj = {'Минск':'Белорусь','Москва':'Россия', 'Киев':'Украина'}
for (var key in obj){
    alert(key +' - это '+obj[key])
}

//task 5: Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
// Посчитайте количество итераций, необходимых для этого (итерации - это количество проходов цикла), и запишите его в переменную num.
var n = 1000;
var num = 0;
while (n/2>50){
    n/=2;
    num++
}
console.log(n)
console.log(num)

//task 6: Дан массив с элементами 2, 5, 9, 15, 0, 4.
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
var arr = [2, 5, 9, 15, 0, 4]
for (i=0;i<arr.length; i++){
    if (arr[i]>3&&arr[i]<10){
        console.log(arr[i])
    }
}

//task 7: Составьте массив месяцев. С помощью цикла for выведите все месяцы, а текущий месяц выведите жирным.
// Текущий месяц должен храниться в переменной month.

var arr = ['январь','февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
var date = new Date()
var month = date.getMonth()
for (i=0; i<arr.length; i++){
    if (i!== month) {
        document.write(arr[i]+' ')
    }else{
        document.write(arr[i].bold()+' ')
    }
}
month = arr[month];// текущий месяц

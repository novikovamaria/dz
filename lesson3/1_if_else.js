//task 1: Если переменная a равна нулю, то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a = +prompt('Введите число')
if (a===0){
    console.log('Верно!')
}else{
    console.log('Неверно!')
}

// ??Проверьте работу скрипта при a, равном 1, 0, -3.

//task 2: Если переменная a равна 'test', то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
var a = prompt('Введите слово test')
if (a === 'test'){
    console.log('Верно!')
}else{
    console.log('Неверно!')
}
// ?? Проверьте работу скрипта при a, равном 'test', 'тест', 3.

/*task 3: Если переменная test равна true, то выведите 'Верно!', иначе выведите 'Неверно!'.
 Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.*/

//вариант 1
var test = confirm('true or false')
if (test === true){
    // или просто if(test)
    console.log('Верно!')
}else{
    console.log('Неверно!')
}
//вариант 2
test === true ? console.log('Верно!'):console.log('Неверно!')

// ?? Проверьте работу скрипта при test, равном true, false.

//task 4: Создайте переменные a и b. Просуммируйте их, а результат запишите в переменную result. Если result больше 5, то присвойте переменной result значение 5.
// Если же она меньше 5-ти - то умножьте ее на 10. Выведите на экран значение переменной result. Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.
var a = +prompt('Input first number')
var b = +prompt('Input second number')
var result = a+b
if (result>=5){
    result=5
}else{
   result*=10
}
console.log(result)
//?? Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.


//task 5: Если переменная a равна нулю или равна двум, то поделите ее на 10, иначе прибавьте к ней 7 и выведите ее на экран.
//Проверьте работу скрипта при a, равном 5, 0, -3, 2.
var a = +prompt('Input number')
if (a ===0 || a===2){
    a/=10
}else{
    a+=7
}
console.log(a)
// ??? Проверьте работу скрипта при a, равном 5, 0, -3, 2.

//task 6: Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите 'Неверно!'.
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
var a = +prompt('Input first number')
var b = +prompt('Input second number')
if (a<=1 && b>=3){
    console.log(a+b)
}else{
    console.log('Неверно!')
}

//task7: Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-х и меньше 14-ти, то увеличьте a на 2, иначе прибавьте к a число 5.
// Выведите новое значение перенной на экран. Проверьте работу скрипта самостоятельно.
var a = +prompt('Input first number')
var b = +prompt('Input second number')
if ((a>2 && a<11) || (b>=6&&b<14)){
    a+=2
}else{
    a+=5
}
console.log(a)

//task8: Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'лето' и так далее. Решите задачу через switch-case.
var a = +prompt('Please input number from 1 to 4')
switch(a){
    case 1: a='зима'
        console.log(a)
        break;
    case 2: a= 'лето'
        console.log(a)
        break;
    case 3: a= 'зима'
        console.log(a)
        break;
    case 4: a='лето'
        console.log(a)
        break;
    default: console.log('lalala')
        break;
   }

//task 9: Переменная lang может принимать три значения: 'ru', 'en', 'de'. Если она имеет значение 'ru',
// то в переменную arr запишем массив дней недели на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком.
// Решите задачу через 3 if, через switch-case и через многомерный массив

// все массивы arr можно было обьявить 1 раз а потом использовтаь их как переменные тоже и для многомерного массива

var lang = prompt('Please choose language: ru, en, de')
if (lang==='ru'){
    var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
}
else if (lang==='en'){
    var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
else if (lang==='de'){
    var arr = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Sonnabend (Samstag)', 'Sonntag']
}
else{
    console.log('blablabla')
}
console.log(arr)

//2 способ - через switch-case
var lang = prompt('Please choose language: ru, en, de')
switch(lang) {
    case 'ru':
        var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        console.log(arr)
        break;
    case 'en':
        var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        console.log(arr)
        break;
    case 'de':
        var arr = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Sonnabend (Samstag)', 'Sonntag']
        console.log(arr)
        break;
    default:
        console.log('foo')
}

//3 способ - используя многомерный массив
var lang = prompt('Please choose language: ru, en, de')
var arr_mult = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
       ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
       ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Sonnabend (Samstag)', 'Sonntag']]
if (lang==='ru'){
    var arr = arr_mult[0]
    console.log(arr)
}else if (lang==='en'){
    var arr = arr_mult[1]
    console.log(arr)
}else if (lang==='de') {
    var arr = arr_mult[2]
    console.log(arr)
}else{
    console.log('foo')
}

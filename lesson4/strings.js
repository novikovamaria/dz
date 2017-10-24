//1 task
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

var str = 'aaa@bbb@ccc'
var regexp = /@/g
str=str.replace(regexp,'!')
console.log(str)

//2 task
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

var str = 'aaa bbb ccc'
//str = str.substr(4,3)
//str = str.substring(4,7)
str = str.slice(4,7)
console.log(str)

//3 task
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

var str = '2025-12-31'
arr = str.split('-')
arr.reverse()
str = arr.join('/')
console.log(str)

//4 task
// Дана строка 'js'. Сделайте из нее строку 'JS'.

var str ='js'
str = str.toUpperCase()
console.log(str)

//5 task
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

var str = 'я учу javascript!'
console.log(str.length)

//6 task
// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.

var str = 'texttexttexttext';
function cutText(str,n){
    if (str.length>n){
        result = str.substr(0,n)+'...'
        return result
    }else{
        result=str
        return result
    }
}
console.log(cutText(str,12))

//7 task
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
var str = 'я учу javascript!'
var arr = str.split(' ')
console.log(arr)

//8 task
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

var arr = ['я', 'учу', 'javascript', '!']
var str = arr.join('+')
console.log(str)

//9 task
// Преобразуйте первую букву строки в верхний регистр.

var str = "привет!"
str = str.replace(str[0],str[0].toUpperCase())
console.log(str)

//10 task
// Преобразуйте первую букву каждого слова строки в верхний регистр.

var str = "привет мир как дела"
str = str.replace(str[0],str[0].toUpperCase())

var pos = 0;
while(true){
    var foundSpace = str.indexOf(' ',pos)
    if (foundSpace==-1) break;
    str= str.replace(str[foundSpace+1],str[foundSpace+1].toUpperCase())
    pos = foundSpace+1
}
console.log(str)

//11 task
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

var str = 'var_text_text_test'
var arr = []
for (i = 0; i<str.length; i++){
    while (str[i]==='_'){
        new_substr = str.substr(0,i)
        arr.push(new_substr)
        str = str.slice(i+1)
        str = str.replace(str[0], str[0].toUpperCase())
    }
}
arr.push(str)
str = arr.join('')
console.log(str)

//12 task
// Преобразуйте строку 'varTestText' в 'var_test_text'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

var str = 'varTestTextNestTestNext'
str = str.split('')
for (i = 0; i<str.length; i++){
    if (str[i]===str[i].toUpperCase()){
        str[i]=str[i].toLowerCase()
        str.splice(i,0,'_')
        i++
    }
}
str = str.join('')
console.log(str)


//13 task
// Дано число, например '12345678'. Отделите пробелом каждую тройку чисел с конца.
// То есть у нас должно получится '12 345 678'. Число, конечно же, может быть любым.

var str = '111123457678'
var arr = []
while(str.length>3){
    new_str = str.slice(-3)
    str = str.substr(0, str.length-3)
    arr.unshift(new_str)
}
arr.unshift(str)
str = arr.join(' ')
console.log(str)

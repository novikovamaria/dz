//1 task
//Опишите как выглядит структура дом дерева в файле index.html - см. IMG_1398.JPG

//2 task
//Возле каждого узла ДОМ элемента укажите тип этого узла - см. index.html

//3 task
// Выведите количество тегов form на странице
document.getElementsByTagName('form')//(4) [form, form#main, form, form, main: form#main]

//4 task
// Выведите количество дочерних элементов у тега form#main
document.getElementById('main').children//(3) [div, div, div]
// просила количество то есть length

//5 task
// Read first: https://developer.mozilla.org/ru/docs/Web/API/Element/tagName
// Проверьте является ли form#main дочерним элементом для тега body
document.body.children//[div#anchor, anchor: div#anchor] //нет, не является
// тебе не просто вывести нужно все дочерние элементы и посмотреть яляется или нет, а еще как то это проверить черех код тут

//6 task
document.body.bgColor = '#008000'

//7 task
// Закрасьте body документа в черный цвет, а цвет текста сделайте белым)
document.body.bgColor = '#000000'
document.body.style.color='#FFFFFF'

//8 task
// Выведите через консоль background цвет body и цвет текста через запятую. Используйте встроенные JS методы
console.log(document.body.bgColor + ','+document.body.style.color)

//1 задание
//Создать функцию которая будет создавать html таблицу с цветом фона подобным шахматной доске.
// Функция будет принимать три аргумента:
//    fcolor – первый цвет таблицы
// scolor – второй цвет ячеек таблицы
// contents – массив, содержимое которого может выводиться в таблице.
// для закрашивания цветом ячейки воспользуйтесь своством style.backgroundColor, например document.body.style.backgroundColor = 'red' закрасит цвет body в красный цвет то же самое и для ячейки

var arr = ['blue','red','green','yellow','purple','black','grey','orange','pink','white']
function createTable (fcolor,scolor,contents){
    var createTab = document.createElement('table')
    document.body.appendChild(createTab)
    var rowsNumber = Math.ceil(contents.length/3)
    for (var i=1; i<=rowsNumber;i++){
        var new_row = document.createElement('tr')
        createTab.appendChild(new_row)        
        for (var j = 1; j<=3; j++){
            var new_cell = document.createElement('td')
            new_row.appendChild(new_cell)
            if ((i%2==0&&j%2==0)||(i%2!=0&&j%2!=0)){
                new_cell.style.backgroundColor=fcolor
            }else{
                new_cell.style.backgroundColor=scolor
            }
        }
    }
    var alltd = document.getElementsByTagName('td')
    k=0
    while(k<contents.length){
        alltd[k].innerHTML=contents[k]
        k++
    }
    }
createTable ('yellow','green',arr)

//2 задание
// Напишите функцию которая вовращает html код таблицы размером NхM.
//    Каждая ячейка будет заполняться случайной буквой русского алфавита и случайным цветом фона
// P.S. Для выполнения задания, воспользуйтесь методом random() объекта Math;
// кроме того создайте массив в элементами – буквами алфавита)

var arr =  ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я']

function createColor(){
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    var createRGB = [r,g,b].join(', ')
    return createRGB
}

function createColorfulTable(N,M){
    var rows_number = N
    var cells_number = M
    var createTab = document.createElement('table')
    document.body.appendChild(createTab)
    for (var i=1; i<=rows_number;i++){
        var new_row = document.createElement('tr')
        createTab.appendChild(new_row)
        for (var j = 1; j<=cells_number; j++) {
            var new_cell = document.createElement('td')
            new_row.appendChild(new_cell)
            var new_color = createColor()
            new_cell.style.backgroundColor="rgb("+new_color+")";
            new_cell.innerHTML=arr[Math.floor(Math.random()*(arr.length-1))]
        }
    }
}
createColorfulTable(4,7)

//3 task
// Here is a sample html file with a submit button.
// Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

var arr = document.getElementsByTagName('a')
var findElement = arr[0]

function getAttributeValues(findElement){
    obj={
        getHref: function(){
            return findElement.getAttribute('href')
        },
        getHrefLang: function() {
            return findElement.getAttribute('hreflang')
        },
        getRel: function () {
            return findElement.getAttribute('rel')
        },
        getTarget: function () {
            return findElement.getAttribute('target')
        },
        getType: function(){
            return findElement.getAttribute('type')
        }
    }
    return obj;
}
var inspectElement = getAttributeValues(findElement)
console.log(inspectElement.getHref(),inspectElement.getHrefLang(), inspectElement.getRel(), inspectElement.getTarget(),inspectElement.getType())

//4 task
// Here is a sample html file with a submit button. Modify the style of the paragraph text through javascript code.

var a = document.getElementById('text')
a.style.color = 'red'

////5 task
//Придумайте самый короткий код для проверки, пуст ли элемент elem. «Пустой» — значит нет дочерних узлов, даже текстовых.

var elem = document.getElementById('elem')
if (!elem.hasChildNodes())  {
    console.log('Элемент пустой')
};

//7 задание
// Создайте функцию createCloneNode(block) которая которая будет клонировать передаваемый ей элемент и добавять его в конец страницы!
// P.S.: Для клонирование элемента используйте метод cloneNode (в презентации есть примеры)

function createCloneNode(block){
    var arrEl = document.getElementsByTagName(block)
    var myEl = arrEl[0]
    var newNode = myEl.cloneNode()
    document.body.appendChild(newNode)
}

createCloneNode('p')

//8 задание
// Создайте функцию addChildrenTo(block, count, type) которая будет создавать внутри block count количество детей типа type
// ( type это будет тип блока например 'span, ul, li, div' и т.д. )

function addChildrenTo(block, count, type){
    var findElement = document.getElementsByTagName(block)
    var myEl = findElement[0]
    for (var i=1; i<=count;i++){
        var newChild = document.createElement(type)
        myEl.appendChild(newChild)
    }
}
addChildrenTo('p', 3, 'ul')

//10 задание
// Создайте пару элементов с классом 'www'.
// Добавьте каждому элементу в название класса еще дополнительно название его тега в нижнем регистре.

var newEl1 = document.createElement('p','class')
document.body.appendChild(newEl1)
newEl1.setAttribute('class','www')
var newEl2 = document.createElement('div')
document.body.appendChild(newEl2)
newEl2.setAttribute('class','www')
newEl1.setAttribute('class','www '+newEl1.tagName.toLowerCase())
newEl2.setAttribute('class','www '+newEl2.tagName.toLowerCase())

//12 task
// Создайте ol. Вставьте ему в конец li с текстом 'пункт'.

var newOl = document.createElement('ol')
document.body.appendChild(newOl)
var newlI = document.createElement('li')
newOl.appendChild(newlI)
newlI.innerHTML='пункт'

//13 task
// Создайте функцию которая принимает массив с элементами, создайте на странице список ul
// и выведите все элементы массива в отдельный элемент списка li&

function addList(arr){
    var newUL= document.createElement('ul')
    document.body.appendChild(newUL)
    for (var i=0; i<arr.length; i++){
        var newLI = document.createElement('li')
        newUL.appendChild(newLI)
        newLI.innerHTML=arr[i]
    }
}

addList(['tea','coffee','coca-cola'])

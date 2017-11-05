/*task form lesson

  <form action="">
    <div>
      <input type="text">
      <!-- here is text -->
    </div>
    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <!-- here is text -->
    </div>
    <div>
      <input type="checkbox">
      <!-- this is checked = true -->
    </div>
    <button>Submit</button>
  </form>
  <script>
    document.querySelector('form').addEventListener('submit', function (evt) {
      // if all the conditions true do noting
      // else if something is false we should do this:
      // evt.preventDefault();
    });
  </script>*/
  
var firstInput = document.querySelector('form').children[0].firstElementChild
var secondInput = document.querySelector('textarea')
var checkBox = document.querySelector('form').children[2].firstElementChild

document.querySelector('form').addEventListener('submit', function(evt) {
    if (firstInput.value === '' || secondInput.value === '' || checkBox.checked === false) {
        evt.preventDefault()
    }
});

//1 task
// Write a JavaScript function that accept row,
// column, (to identify a particular cell) and a string to update the content of that cell.

//HTML - index.html (task 1)
function changeContent(){
    var row =+prompt('Please input row number')
    var cell = +prompt('Please input cell number')
    var text = prompt('Please input text to insert')
    document.getElementsByTagName('tr')[row-1].children[cell-1].innerHTML=text
}

//2 task
// Write a JavaScript program to remove selected item from a dropdown list.

//HTML- index.html (task 2)
function removecolor(){
    var color = document.querySelector('select')
    color.remove(color.selectedIndex)
}

//3 task
// Write a JavaScript program to highlight the bold words with yellow background of the following paragraph,
// on mouse over on it.Text example:
//<strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
function highlight(){
    this.style.backgroundColor='yellow'
}
function removeHighlight(){
    this.style.backgroundColor='white'
}
var strong = document.getElementsByTagName('strong')
for(var i=0;i<strong.length;i++){
    strong[i].addEventListener('mouseover',highlight)
    strong[i].addEventListener('mouseout',removeHighlight)
}

//4 task
//Write a JavaScript function to add rows to a table.

//HTML- index.html (task 4)
function insert_Row(){
    var newRow = document.querySelector('tr').cloneNode(true)
    newRow.firstElementChild.innerHTML='Row'+(document.getElementsByTagName('tr').length+1)+' cell1'
    newRow.lastElementChild.innerHTML='Row'+(document.getElementsByTagName('tr').length+1)+' cell2'
    document.querySelector('table').appendChild(newRow)
}

//5 task Напишите функцию showNotification(options), которая показывает/скрывает уведомление. Элемент уведомление (попап) создайте с помощью html,css и добавьте на страницу, по началу он будет невидимый.
// Создайте также 2 кнопки при нажатии на 1 = мы показываем елемент, при нажатии на 2 - скрываем
/**
 * Показывает или прячет уведомление
 *
 * @param options.show {boolean} показать.скрыть элемент
 */
/*function showNotification(options) {
  // ваш код
}*/
//Example of usage:

/*// покажет элемент справа-сверху окна
    showNotification({
        show: true
    });

// прячет элемент
showNotification({
    show: false
});

//Решение :(Не понимаю, как написать функцию showNotification :(

/*HTML:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="events.css" rel =stylesheet>
</head>
<body>
<div>
    Some text here
</div>
<div class="modalwin" id="popup">
     <div>Popup text</div>
</div>
<button id="close">Close</button>
<button id="show">Show again</button>
<script src="events.js"></script>
</body>
</html>

CSS:
.modalwin {
    height: 200px;
    width: 300px;
    background: cadetblue;
    top: 20%;
    right: 0;
    left: 0;
    font-size: 14px;
    margin: 0 auto;
    z-index:2;
    display: none;
    position: fixed;
    padding: 15px;
    border: 1px solid black;
}
*/
setTimeout(function () {
    document.getElementById('popup').style.display='initial'
}, 1000);

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('popup').style.display='none'
});
document.getElementById('show').addEventListener('click',function(){
    document.getElementById('popup').style.display='initial'
});

//6 task
// На html странице создайте input[type=text].
// Запретите водить в инпут символы a, b, c, d, e. Любые другие символы должны вводится.

function notAllowed(evt){
    var arr =['a','b','c','d','e']
    var charStr = String.fromCharCode(evt.charCode||evt.keyCode);
    for (var i=0;i<arr.length;i++){
        if (charStr===arr[i]){
            evt.preventDefault()
        }
    }
}
document.querySelector('input').addEventListener('keypress',notAllowed)

//7 task
// Дан инпут. При введени в него числа он должен отделять тройки чисел точкой (по мере ввода).
// Например, если я ввожу число: 1 = без изменений 10 = без изменений 100 = без изменений 1000 = число измениться на 1.000

document.querySelector('input').addEventListener('input',function(){
    var input = document.querySelector('input').value
    for (var i=0;i<input.length;i++) {
        if (input[i] === '.') {
            input = input.split('.').join('')
        }
    }
    input = input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    document.querySelector('input').value=input
})

//8 task
//На html странице создайте 4 input[type=text]
// Сделайте так, чтобы, в инпут можно было вводить не более 2 символов,
// когда в инпут ввели 2 или более символов, фокус ввода переносился на следующий инпут, и так со всеми остальными.
// Если это полседний инпут фокус переноситься на 1 = если у него длинна символов < 2, или по аналогии на 2-3 и тд.
// Если во всех инпутах длинна символов превишает 2 то тогда мы просто убираем фокус с инпута
// и говорим пользователю через alert("Вы ввели все данные")

//HTML- index.html (task 8)
var arr= document.getElementsByTagName('input')// Все элементы input

for (var i=0;i<arr.length;i++){
    arr[i].addEventListener('keypress',function(evt){
        if (this.value.length>1){
            evt.preventDefault()// запрет на ввод более 2х элементов в строке
            finishInputs(arr)//конец ввода-все элементы заполнены
        }
    });
}
function finishInputs(arr){
    for (j=0;j<arr.length;j++) {
        if (arr[j].value.length < 2) {
            return
        }
    }    
    alert('Вы ввели все данные')
}

function changeFocus() {//функция переноса фокуса
    var defLen=2;
    if (this.value.length < defLen) return;
    if (this.value === arr[arr.length-1].value){
        for (var n=0; n<arr.length-1;n++){
            if (arr[n].value.length<defLen){
                arr[n].focus()
                return;
            }
        }
    }else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].value === this.value) {
                if (arr[i + 1].value.length < defLen) {
                    arr[i + 1].focus();
                    return;
                }
            }
        }
    }
}

for (var t=0;t<arr.length;t++){
    arr[t].addEventListener('keyup',changeFocus)
}

//9 task
// Сделайте два поля ввода, в которые пользователь будет вводить ширину и высоту.
// Сделайте блок, который будет менять свои размеры когда вы будете менять данные в input которые отвечают за ширину и высоту.

//HTML- index.html (task 9)
var block = document.querySelector('textarea')//блок, который будет менять размер
var myWidth = document.getElementById('width')
var myHeight = document.getElementById('height')

myWidth.addEventListener('input',function () {
    block.style.width=+myWidth.value+'px'
})
myHeight.addEventListener('input',function () {
    block.style.height=+myHeight.value+'px'
})
myWidth.addEventListener('keypress',function(evt){//В поле нельзя вводить буквы
    var char = String.fromCharCode(evt.charCode||evt.keyCode)
    if (isNaN(+char)){
        evt.preventDefault()
    }
})
myHeight.addEventListener('keypress',function(evt){//В поле нельзя вводить буквы
    var char = String.fromCharCode(evt.charCode||evt.keyCode)
    if (isNaN(+char)){
        evt.preventDefault()
    }
})

//10 task
// Дана таблица произвольного размера.
// По нажатию на ячейку таблицы эта ячейка красится красным фоном ("активируется").
// Сделайте так, чтобы, если активировано 5 ячеек подряд по горизонтали или по вертикали, таблица блокировалась
// (то есть нельзя больше будет активировать ячейки) и выводилось сообщение "завершение активаций".

//HTML- index.html (task 10)
function activator(){//ячейка красится красным фоном, если не активировано 5 ячеек подряд
    if(horizontalCheck()){return}//по горизонтали
    if(verticalCheck()){return}// или по вертикали
    this.style.backgroundColor='red'
}

for (var i=0;i<document.getElementsByTagName('td').length;i++){
    document.getElementsByTagName('td')[i].addEventListener('click',activator)
}
function verticalCheck() {//проверка всех вертикалей
    var cells = document.getElementsByTagName('tr')[0].children
    for (var i = 0; i < cells.length; i++) {
        if (checkOneColumn(i)) {//вызов проверки одной вертикали
            return true
        }
    }
}

function checkOneColumn(i){//проверка одной вертикали
    var count=1
    var j=0
    var rows = document.getElementsByTagName('tr')
    for (j=0;j<rows.length;j++){
        if (count===5){
            alert('Activation is finished')
            return true
        }else{
            if (rows[j].children[i].style.backgroundColor==='red'){
                if(rows[j].children[i]!==rows[rows.length-1].children[i]){
                    if(rows[j].children[i].style.backgroundColor===rows[j+1].children[i].style.backgroundColor){
                        count++
                    }else{
                        count=0
                    }
                }
            }
        }
    }
    return false
}

function horizontalCheck() {//проверка всех горизонталей
    var rows = document.getElementsByTagName('tr')
    for (var i = 0; i < rows.length; i++) {
        if (checkOneRow(i)) {//вызов проверки одной горизонтали
            return true
        }
    }
}
function checkOneRow(i){//проверка одной горизонтали
    var count = 1
    var cell = document.getElementsByTagName('tr')[i].children
    for (var j=0;j<cell.length;j++){
        if (count===5){
            alert('Activation is finished')
            return true
        }else{
            if(cell[j].style.backgroundColor==='red'){
                if(cell[j]!==cell[cell.length-1]){
                    if(cell[j].style.backgroundColor===cell[j+1].style.backgroundColor){
                        count++
                    }else{
                        count=0
                    }
                }
            }
        }
    }
    return false
}

//11 task
// Дан инпут. В него разрешено вводить N символов.
// При введение текста справа появляется счетчик такого типа - "Осталось ввести 10 символов".
// После того, как предел достигнут - текст все равно разрешено вводить,
// только надпись будет типа "Лимит превышен на 10 символов". Вместо 10-ти, конечно же, число в вашем конкретном случае.

//HTML- index.html (task 11)
var textInput = document.querySelector('input')
textInput.addEventListener('keyup',function(){
    var n=10
    if (textInput.value.length<=n){
        document.getElementById('counter').innerHTML='Осталось ввести '+(n-textInput.value.length)
    }else{
        document.getElementById('counter').innerHTML='Лимит превышен на '+(textInput.value.length-n)
    }
});

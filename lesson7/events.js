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

/*<!DOCTYPE html>  
<html>
 <head>
 <meta charset=utf-8 />  
 <title>Change the content of a cell</title>  
 </head>
 <body>  
  <table id="myTable" border="1">  
  <tr><td>Row1 cell1</td>  
  <td>Row1 cell2</td></tr>  
  <tr><td>Row2 cell1</td>  
  <td>Row2 cell2</td></tr>  
  <tr><td>Row3 cell1</td>  
  <td>Row3 cell2</td></tr>  
  </table><form>  
  <input type="button" onclick="changeContent()" value="Change content">  
  </form>
 </body>
</html> */

function changeContent(){
    var row =+prompt('Please input row number')
    var cell = +prompt('Please input cell number')
    var text = prompt('Please input text to insert')
    document.getElementsByTagName('tr')[row-1].children[cell-1].innerHTML=text
}

//2 task
// Write a JavaScript program to remove selected item from a dropdown list.
/*<!DOCTYPE html>  
<html>
 <head>  
  <meta charset=utf-8 />  
  <title>Remove items from a dropdown list</title>  
 </head>
 <body>
  <form>  
   <select id="colorSelect">  
    <option>Red</option>  
    <option>Green</option>  
    <option>White</option>  
    <option>Black</option>  
   </select>
   <input type="button" onclick="removecolor()" value="Select and Remove">
  </form>
 </body>
</html>*/

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
/*<!DOCTYPE html>  
<html>
    <head>
        <meta charset=utf-8 />  
        <title>Insert row in a table - w3resource</title>  
    </head>
    <body>  
        <table id="sampleTable" border="1">  
        <tr><td>Row1 cell1</td>  
        <td>Row1 cell2</td></tr>  
        <tr><td>Row2 cell1</td>  
        <td>Row2 cell2</td></tr>  
        </table>
        
        <input type="button" onclick="insert_Row()" value="Insert row">   
    </body>
</html> */

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

//Решение :(Не понимаю, как написать функцию showNotification :((

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

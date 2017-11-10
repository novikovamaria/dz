//1 задание
// Запросите у пользователя на сколько пикселей он бы хотел прокрутить данное окно по X и Y!
// После получения данных от пользователя прокрутите окно на заданные значения!

var scroll = prompt('Please input px to scroll like x,y')
scroll = scroll.split(',')
window.scrollBy(scroll[0],scroll[1])

//2 задание
// Создайте документ в котором будет 4 ifame элемента.
// Выведите все iframe документа в консоль через методы доступа у window! (через цыкл можно например)

for (var i=0; i<window.length;i++){
    console.log(window.frames[i])
}

//3 задание
// Создайте iframe в документе и еще пару элементов в body, в переменной сохраните ссылку на iframe,
// и через iframe удалите все элементы которые есть в DOM body кроме iframe

function removeAllExceptFrame(){
    var myFrame = window.frames[0]
    var documentBody = myFrame.parent.document.firstElementChild.lastElementChild
    var allBodyElements = documentBody.children
    for (var i=0;i<allBodyElements.length;i++) {
        if (allBodyElements[i].id !== 'remove') {
            documentBody.removeChild(allBodyElements[i])
            i--
        }
    }
}

//4 задание
// На события загрузки контента в iframe создайте новый div элемент через JS и добавьте его в конец документа,
// в нем должен быть текст: "Iframe загрузился!"

var myFrame = window.frames[0]
myFrame.onload=function(){
    new_div = document.createElement('div')
    new_div.innerHTML="Iframe загрузился!"
    document.body.appendChild(new_div)
}

//5 задание
// Создайте новый документ (через window.open) который будет шириной в 400, высота 500, без строки url адреса, с видимым статусом,
// окно должно иметь возможность растягиватся по ширине и высоте и в нем должны присутствовать полосы прокурутки!

var newWin = window.open("https://www.google.com.ua", "hello", "width=400,height=500,status=yes,location=no,resizable=yes,scrollbars=yes");

//6 задание
// Откройте новое окно (через window.open) в котором откройте google поиск и через 5 секунд
// закройте вкладку и выдайте сообщение пользователю что у вас было 5 секунд но вы не успели ничего найти и окно закрылось!)

newWin =window.open("https://www.google.com.ua","hello", "width=200,height=200");

setTimeout(function(){
    newWin.close()
    alert('у вас было 5 секунд но вы не успели ничего найти и окно закрылось!')
},5000)

//7 задание
// В документе создайе блок в котором вы будете заполнять информацию о браузере и платформе пользователя.
// Выведите пользователю информацию о его браузере и о платформе на которой он работает.

var new_div=document.createElement('div')
new_div.innerHTML=navigator.userAgent
document.body.appendChild(new_div)

//8 задание
// Создайте в документе 5 блоков div в которых будет записано названия браузеров (Chrome, Safari, FireFox, Opera, IE)
// И в зависимости от того каким браузером пользуется клиент вы должны показывать только тот блок который соответствует
// браузер пользователя. Все остальные блоки должны быть скрыты!

var userInfo = navigator.userAgent

function checkMyBrowserVersion(){
    if(userInfo.indexOf('Firefox')!==-1){
        document.getElementById('firefox').style.display='block'        
    }else if(userInfo.indexOf('Trident')!==-1){
        document.getElementById('ie').style.display='block'        
    }else if (userInfo.indexOf('Edge')!==-1){
        document.getElementById('edge').style.display='block'        
    }else if(userInfo.indexOf('Opera')!==-1||userInfo.indexOf('OPR')!==-1){
        document.getElementById('opera').style.display='block'
    }else if(userInfo.indexOf('Chrome')!==-1){
        document.getElementById('chrome').style.display='block'
    }else if (userInfo.indexOf('Safari')!==-1){
        document.getElementById('safari').style.display='block'
    }
}
checkMyBrowserVersion()

//9 задание
// Проверьте подключены ли у пользователя Cookie? Если да то выведите:
// "Вы используете cookie, вы молодец", а если нет выведите: "Для посещения страницы сайта подключите cookie"

if (navigator.cookieEnabled) {
    alert("Вы используете cookie, вы молодец");
}else{
    alert("Для посещения страницы сайта подключите cookie");
}

/10 задание
// Проверьте версию браузера пользователя,
// если версия последняя ничего не делайте если версия не последняя выведите окно с ссылкой на скачивание новой версии браузера!

var userInfo = navigator.userAgent
var browserVersion =checkMyBrowserVersion()
var browserName=browserVersion.split('/')[0]

var linksWithUpdate = {Chrome:'https://support.google.com/chrome/answer/95414?hl=uk&ref_topic=7438008',
    Firefox: 'https://support.mozilla.org/ru/kb/obnovlenie-firefox-do-poslednej-versii',
    Opera:'http://help.opera.com/Linux/11.01/ru/autoupdate.html',
    OPR:'http://help.opera.com/Linux/11.01/ru/autoupdate.html'}

var linkToUpdateUserBrowser = linksWithUpdate[browserName]

function checkMyBrowserVersion(){//Определяем версию браузера; IE, Edge, Safari обновляются автоматически
    if(userInfo.indexOf('Firefox')!==-1){
        return getVersion('Firefox')
    }else if(userInfo.indexOf('Trident')!==-1){
        return
    }else if (userInfo.indexOf('Edge')!==-1){
        return
    }else if(userInfo.indexOf('Opera')!==-1||userInfo.indexOf('OPR')!==-1){
        if(userInfo.indexOf('Opera')!==-1){
            return getVersion('Opera')
        }else{
            return getVersion('OPR')
        }
    }else if(userInfo.indexOf('Chrome')!==-1){
        return getVersion ('Chrome')
    }else if (userInfo.indexOf('Safari')!==-1){
        return
    }
}

function getVersion(browser){
    var version = userInfo.substr(userInfo.indexOf(browser)).split(' ')
    version=version[0]
    return version
}

var latestVersions=['Chrome/62.0.3202.79','Firefox/56.0','Opera/49.0','OPR/49.0']


function suggestUpdate(){
    for (var i=0;i<latestVersions.length;i++){
        if (latestVersions[i]===browserVersion){
            return
        }
    }
    var newWin =window.open("newwindow.html","hello", "width=200,height=500")
    newWin.onload = function(){
        var newLink = newWin.document.createElement('a')
        newLink.setAttribute('href',linkToUpdateUserBrowser)
        newLink.innerHTML = 'Click to update your browser'
        newWin.document.body.appendChild(newLink)
    }
}
suggestUpdate()

//11 задание
// Проверьте высоту и ширину экрана пользователя!
// Если она меньше чем 1366х800 то подставьте в body класс "little-screen", в другом случае добавьте класс "big-screen"!

if(document.documentElement.clientWidth<1366&&document.documentElement.clientHeight<800){
    document.body.setAttribute('class', 'little-screen')
}else{
    document.body.setAttribute('class', 'big-screen')
}

//12 - папка task12

//13 задание
// Выведите в документе информацию пользователю: "Page hostname is " + hostname ( вы тут должны вывести номер порта )

document.writeln("Page hostname is "+window.location.hostname+window.location.port)

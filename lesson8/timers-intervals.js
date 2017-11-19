//1 task
// Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20,
// с интервалом между числами 100мс. То есть, весь вывод должен занимать 2000мс,
// в течение которых каждые 100мс в консоли появляется очередное число. (используйте setTimeout)

var i=1
var printNumbersInterval =setTimeout(function number(){
    console.log(i++)
    if(i<=20){
        printNumbersInterval=setTimeout(number,100);
    }
},100);

//2 task
// Выполните 1 задание используя только setInterval

var i=1
var printNumbersInterval = setInterval(function(){
    console.log(i++)
    if (i>20){clearInterval(printNumbersInterval)}
},100);

//3 task
// Создайте страницу с блоком таймера и 2 кнопки - Стоп, Старт и Пауза.
// При нажатии на Старт - Создайте отсчет от 0 до бесконечности.
// При нажатии на Стоп остновите отсчет и обнулите его.
// При нажатии на Пауза остновите отсчет и поменяйте текст кнопки на Продолжить.
// При нажатии на Продолжить возобновите отсчет.

//HTML - timers-intervals.html (task3)
var i=0
var timer
var timer_state=0

function createTimer(){
    document.getElementById('timer').innerHTML=i
    i++
    timer=setTimeout(createTimer,1000)
}
// лучше document.getElementById('timer') и document.getElementById('start') сохранить в переменных извне таймера потому что так каждый 
// раз идет поиск по дереву это не очень эффективно
function startTimer(){
    if (timer_state===0){
        timer_state=1
        createTimer()
        document.getElementById('start').innerHTML='Pause'
    }
}

function pauseTimer() {
    if (timer_state === 1) {
        clearTimeout(timer)
        timer_state = 0
        document.getElementById('start').innerHTML = 'Continue'

    }
}
function startPauseTimer(){
    if (timer_state===0){
        startTimer()
    }else{
        pauseTimer()
    }
}

function stopTimer(){
    clearTimeout(timer)
    timer_state=0
    document.getElementById('timer').innerHTML=0
    document.getElementById('start').innerHTML='Start'
    i=0
}

document.getElementById('start').addEventListener('click',startPauseTimer)
document.getElementById('stop').addEventListener('click',stopTimer)

//4 task
// Создайте тикающие часики
//HTML - timers-intervals.html (task4)-Created only one div to display time

var createClock=setInterval(function(){
    var hours=new Date().getHours()
    var minutes =new Date().getMinutes()
    var seconds =new Date().getSeconds()
    if (hours<10){
        hours='0'+hours
    }
    if (minutes<10){
        minutes='0'+minutes
    }
    if (seconds<10){
        seconds='0'+seconds
    }
    document.getElementById('time').innerHTML=hours+':'+minutes+':'+seconds
},1000)

// 5 task
// Создайте таймер обратного отсчета c той же логикой что и во 2 задании. С кнопками и действиями на них.

//HTML - timers-intervals.html (task3)
var iStart=10
var i=iStart
var timer_state=0
var timer

function createTimer(){
    i--
    document.getElementById('timer').innerHTML=i
    timer = setTimeout(createTimer,1000)
    if (i===0){
        clearTimeout(timer)
        timer_state=0
        i=iStart
        document.getElementById('timer').innerHTML='Count is finished'
        document.getElementById('start').innerHTML='Start'
    }
}
function startTimer(){
    createTimer()
    timer_state=1
    document.getElementById('start').innerHTML='Pause'
}

function pauseTimer(){
    clearTimeout(timer)
    timer_state=0
    document.getElementById('start').innerHTML='Continue'
}

function stopTimer(){
    clearTimeout(timer)
    timer_state=0
    i=iStart
    document.getElementById('timer').innerHTML='Count is stopped'
    document.getElementById('start').innerHTML='Start'
}
 function startPauseTimer(){
    if (timer_state===0){
        startTimer()
    }else{
        pauseTimer()
    }
 }

document.getElementById('start').addEventListener('click',startPauseTimer)
document.getElementById('stop').addEventListener('click',stopTimer)

//6 task
// Создайте отсчет до полуночи.

//HTML - timers-intervals.html (task4)-Created only one div to display time
var midnightCount =setInterval(function(){
    var secToMidnight=60-new Date().getSeconds()
    var minToMidnight = 59-new Date().getMinutes()
    var hoursToMidnight=23-new Date().getHours()
    if (hoursToMidnight===1 ||hoursToMidnight===21){
        document.getElementById('time').innerHTML=hoursToMidnight+' час '+minToMidnight+' минут '+secToMidnight+' секунд'
    }else if(hoursToMidnight<5 || hoursToMidnight>21){
        document.getElementById('time').innerHTML=hoursToMidnight+' часа '+minToMidnight+' минут '+secToMidnight+' секунд'
    }else{
        document.getElementById('time').innerHTML=hoursToMidnight+' часов '+minToMidnight+' минут '+secToMidnight+' секунд'
    }
},1000)

//7 task
//Создайте галерею с картинкаи - 4 фотографии в подряд которые будут меняться как в слайдере каждые 4 секунды
// (соотвественно html css должен быть такой чтобы было вижно как они меняються)

//HTML - timers-intervals.html (task7)
var i=0
var myPhoto = document.getElementsByClassName('photo')

function changePhoto(){
    var currentPhoto = myPhoto[i]
    currentPhoto.style.display='block'
    if (i===myPhoto.length-1){
        i=0
    }
    setTimeout(function(){
        currentPhoto.style.display='none'
    },4000)
    i++
    setTimeout(changePhoto,4000)
}
changePhoto()

//8 task
// Create function testNum() that will take 1 param: phone number string and define whether it have more than 8 symbols,
// contain only numbers (no slashes and spaces, if have replace them to empty string).
// After that create an html page with input field and button,
// where user will write his/her phone number,
// after user press enter button on the right your function testNum()
// will check the phone number he enters and return to user ok
// (create span under the input field (color of text must be green)) - if pattern match,
// or error (the same create span with "error" text under (color of text must be red));
// After 4 seconds delete the span and the input field should be empty again an the user can try again later.

//HTML - timers-intervals.html (task8)
function testNum(number){
    if (number.length<8){
        return false
    }
    number=number.split('')
    for(var i=0;i<number.length;i++){
        if(number[i]==='-'||number[i]===' '||number[i]==='('||number[i]===')'){
            number.splice(i,1)
        }
    }
    number.join('')
    for(var j=0;j<number.length;j++){
        if(isNaN(number[j])){
            return false
        }
    }
    return number
}

document.getElementById('btn').addEventListener('click', function(){
    var num = document.getElementById('txt').value
    if (num.length>0){
        if (document.getElementById('spn')===null){
            if (!testNum(num)){
                var new_span = document.createElement('span')
                document.body.appendChild(new_span)
                new_span.setAttribute('id','spn')
                new_span.innerHTML='Error!'
                new_span.style.color='red'
            }else{
                var new_span = document.createElement('span')
                document.body.appendChild(new_span)
                new_span.setAttribute('id','spn')
                new_span.innerHTML='Ok!'
                new_span.style.color='green'
            }
            setTimeout(function(){
                document.body.removeChild(document.getElementById('spn'))
                document.getElementById('txt').value=''
            },4000)
        }
    }
})

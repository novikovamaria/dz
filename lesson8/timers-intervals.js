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

//4 task
// Создайте тикающие часики

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

//6 task
// Создайте отсчет до полуночи.

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

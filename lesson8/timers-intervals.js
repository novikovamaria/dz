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

//1 task
// 1. Add remove on li element on click on remove link.

var ul = document.getElementsByClassName('list-unstyled')[0]
var allLi =ul.children
for(var i=0;i<allLi.length;i++){
    allLi[i].firstElementChild.addEventListener('click',removeItem)
}

function removeItem(){
    this.parentNode.remove()
}

//2. On click on button please add a new element with right index text (eg: if there are 3 elements, the new one should be Element 4)

document.getElementsByClassName('btn btn-success')[0].addEventListener('click',addItem)
function addItem() {
    var newLi = allLi[allLi.length - 1].cloneNode(true)
    ul.appendChild(newLi)
    newLi.firstChild.nodeValue='Element '+allLi.length+' '
}

//2 task
//1.If persons click button add User please check the form inputs, they all are required and should be not empty,
// if something is empty give user info about it
// (add div after button with text please follow all the fields, and add red border to all the fields that are empty)
// After 3 seconds delete the info div from page

document.getElementsByClassName('btn btn-warning')[0].addEventListener('click',showInfo)

function showInfo(){
    var inputs=document.getElementsByTagName('input')
    for (var i=0;i<inputs.length;i++){
        if (inputs[i].value===''){
            if(document.getElementById('warning')===null){
                var newDiv=document.createElement('div')
                document.getElementsByClassName('container')[1].insertBefore(newDiv,document.getElementsByTagName('hr')[0])
                newDiv.setAttribute('id','warning')
                newDiv.innerHTML='please follow all the fields'
                inputs[i].style.borderColor='red'
            }
        }
    }
    setTimeout(function(){
        if(document.getElementById('warning')===null){return}
        document.getElementById('warning').remove()
        for (var i=0;i<inputs.length;i++){
            inputs[i].style.borderColor=''
        }
    },3000);
}

//2.If user clicks the button and all fields is not empty,
// push the new User to UserArray variable, and in block Users print the result fields with new user description, then clear all fields

document.getElementsByClassName('btn btn-warning')[0].addEventListener('click',addUser)

function addUser(){
    var userArray=[]
    var inputs=document.getElementsByTagName('input')
    for (var i=0;i<inputs.length;i++){
        if(inputs[i].value===''){return}
    }
    var gender=document.getElementById('select').selectedIndex
    if (gender===0){
        gender='male'
    }else{
        gender='female'
    }
    userArray.push({name:inputs[0].value,age:inputs[1].value,gender:gender})
    var new_p = document.createElement('p')
    document.getElementsByClassName('container')[1].appendChild(new_p)
    new_p.innerHTML='Name: '+userArray[userArray.length-1].name+';'+' Age: '+userArray[userArray.length-1].age+';'+
        ' Gender: '+ userArray[userArray.length-1].gender
    for (var i=0;i<inputs.length;i++){
        inputs[i].value=''
    }
}

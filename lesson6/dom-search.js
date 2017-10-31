//Task

//1.Please find all inputs using 4 DOM methods, e.g. getElementsByTagName and etc.

var arrInputs = document.getElementsByTagName('input')//1st
var arrInputs = document.getElementsByClassName('form-control')//2d
var arrInputs = document.querySelectorAll('input')//3d


//2.Clone the last block with label and input
// (using cloneNode JS DOM method: https://developer.mozilla.org/ru/docs/Web/API/Node/cloneNode)
// and add the this block (.input-group) to the end of form before button, but first change label text to Age

var form = document.querySelector('form')
var lastName = form.firstElementChild.nextElementSibling
var button = form.lastElementChild
var newForm = lastName.cloneNode(true)
console.log(newForm)
form.insertBefore(newForm,button)

//3.Add class 'input-lg' to all inputs on the page, including new created

var all_inputs = document.getElementsByTagName('input')
for (i=0;i<all_inputs.length;i++){
    all_inputs[i].setAttribute('class','input-lg')
}

//4.Add to each input unique id, e.g. 'age' for age field and etc.,

all_inputs[0].setAttribute('id','name')
all_inputs[1].setAttribute('id','last_name')
all_inputs[2].setAttribute('id','age')

//5.and to the label that is upper add 'for' attribute with the same value as id

all_inputs[0].previousElementSibling.setAttribute('for','name')

//6.Add placeholders for each input, e.g. for 'age' field, 'Please enter your age'

all_inputs[0].setAttribute('placeholder','First name')
all_inputs[1].setAttribute('placeholder','Last name')
all_inputs[2].setAttribute('placeholder','New')

//7.Please add this last block before submit button using JS

/*<div class="input-group col-xs-12 marg">
    <label for="">Gender</label>
    <select class="form-control">
    <option value="male">Male</option>
    <option value="female">Female</option>
    </select>
    </div>*/

var new_div = document.createElement('div')
form.insertBefore(new_div,button)
new_div.setAttribute('class','input-group col-xs-12 marg')
var new_label = document.createElement('label')
new_div.appendChild(new_label)
new_label.setAttribute('for','')
new_label.innerHTML='Gender'
var select = document.createElement('select')
new_div.appendChild(select)
select.setAttribute('class','form-control')
var option_male = document.createElement('option')
select.appendChild(option_male)
option_male.setAttribute('value','male')
option_male.innerHTML='Male'
var option_female = document.createElement('option')
select.insertBefore(option_female,option_male)
option_female.setAttribute('value','female')
option_female.innerHTML='Female'

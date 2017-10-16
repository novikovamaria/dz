//task1
var str = "Have a good day!"
console.log(str)
//task2
var age = 25
var age = console.log(age)
console.log(age)
//task3
var info = {name: 'Masha', age: 27}
console.log(info.name)
console.log(info.age)
var name = info.name
console.log(name)
//task4
delete info.age
console.log(name)
var customArray =[5,6,7]
console.log(customArray)
customArray =0
console.log(customArray)
//task5
var student = 'Masha'
console.log(student)
student='Novikova '+student
console.log(student)
//task6
var complex=[]
complex[0]="My name is:"
complex[1]=7
complex[2]=null
complex[3]={name: 'Masha', age: 27}
console.log(complex[2])
//task7
var complexObj = {}
complexObj.name = 'Masha'
complexObj.age = 27
complexObj.friends = ['Olya','Anya','Natasha']
complexObj.soc_links = {facebook:'fb_link', googlePlus:'googlePlus_link'}
console.log(`My name is ${complexObj.name}
    I am ${complexObj.age} years old
    I have a lot of friends, but the best one is: ${complexObj.friends[0]}
    You can find me on facebook: ${complexObj.soc_links.facebook}
    or on google groups: ${complexObj.soc_links.googlePlus}`)

// 1 task

// Create a function called: multiplyArray, that using map method (don't use cycles)
// will return all elements of array multiplied to passed value% e.g:

function multiplyArray(array, number) {
    var multArray = array.map(function(i){
        return i*number;
    })
    return multArray
}
console.log(multiplyArray([1,2,3], 6)); // [ 6, 12, 18 ]

//Please create function that will create object's with the same properties, eg:

function createPersonsGetter( data ) {
    var obj={
        getName: function(){
            return data.name;
        },
        getLastName: function(){
            return data.lastName
        },
        getAge: function(){
            return data.age
        },
        getGender: function(){
            return data.gender
        },
    };
    return obj;
}

createPersonsGetter({ name: "Lily", lastName: "Karpenko", age: 24, gender: "female" });

// will return obj with methods:
// {
//  getName: function => will return name property,
//  getLastName: function => will return lastName property,
//  getAge: function => will return age property,
//  getGender: function => will return age property,
// }

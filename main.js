const school = {
    girls : 30,
    boys : 20,
// this refers to the global object scope
// method give the action of the object which you have pass
// changes the base of how function is called
    sum (){
        // console.log (this.girls + this.boys)
        return this
    },
   
} 

const total = { girls : 10};
total.sum = school.sum


console.log(school.sum());

// school.sum()


// sort array
let fruits = [ 'mangos', 'pinnaple', 'quavas', 'oranges'];
fruits.sort();
console.log(fruits)



function ageCalculator(){
    let birthyr = 2003;
    let inDays = (2023-birthyr)*365;
    let dob = '1990-11-14'
    let calculator = new Date(dob)
  
  
    let h1 = document.createElement('h1');
    let text = document.createTextNode(`your age is ${inDays} in days.Born on ${calculator} `)
    h1.setAttribute('id', 'inDays');
    h1.appendChild(text);
    document.getElementById('flex-result').appendChild(h1)
}
ageCalculator()




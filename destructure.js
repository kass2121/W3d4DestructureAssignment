/*Write the destructuring assignment that reads:
name property into the variable name .
years property into the variable age .
isAdmin property into the variable isAdmin (false, if no such property)*/

//#1
function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}
//#2
let user = {
    name: "John Smith",
    age: 35
};
let (typeof user) = JSON.parse(user);
let (typeof user) = JSON.stringify(user);



//# array
let total = [1, 2, 3, 4, 5, 6, 7];

let result = total.reduce((previous, current) => previous + current, 0);
console.log(result);


let peopleArray = [{ name: "Kassa", age: 33 }, { name: "alex", age: 16 }, { name: "John", age: 22 }, {
    name: "Sara",
    age: 50
}]

let result1 = peopleArray.map((item) => item.age * 2)
return peopleArray.age * 2;

/*
 map :
 - double numbers
 - double age
filter:
 - filter all even numbers
 - filter all age > 10
 - find even, include even
 - find age > 10, include age > 10
 reduce
 - find sum of numbers
*/

let ageGreater10 = numberArray.filter(age => age > 10);
let result4 = numberArray.filter(numbers => numbers % 2 == 0);
let found = numArray.find(element => element % 2 == 0);
let found = numberArray.find(element => element % 2 == 0);
let get1 = peopleArray.find(age => age > 10);

// find average of numbers
let average = numberArray.reduce(function(avg, value, _, { length }) {
    return avg + value / length;
}, 0);

//----------------------- find max of numbers---------------------------
function numMax(items) {
    let numberArray = items.reduce(
        (accumulator, currentValue) => {
            return (accumulator < currentValue ? accumulator : currentValue);
        }
    );

    return numberArray;
}

//------------- find max for ages----------------------

function numMaxAge(items) {
    let peopleArray = age.reduce(
        (accumulator, currentValue) => {
            return (accumulator < currentValue ? accumulator : currentValue);
        }
    );
    return peopleArray;
}

let ages = data;
peopleArray.reduce((sum, age) => {
    let averageAge = (sum += age) / age.length
    return averageAge.age;
});

peopleArray.filter(() => {
    return averageAge == averageAge % 2 == 0;
});
peopleArray.map((averageAge) => {
    return averageAge;

});
peopleArray.reduce((sum, age) => {
    let averageAge = (sum += age) / age.length
    return averageAge.age;
});

peopleArray.filter(() => {
    return averageAge == averageAge % 2 != 0;
});
peopleArray.map((averageAge) => {
    return averageAge;
});
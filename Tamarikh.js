
function GroupNumber (m,n) {
    if (m>n) {
    return m}
    else if  (n>m) {
        return n
    }
    else {
        return 0; 
    }
}


function AddNumber (a,b) {
 return (a+b);
}
console.log(AddNumber(5,6));


function printName() {
  console.log("Tamari Khintkiria");
}
printName();



function getFullName(firstname, lastname) {
  return firstname + " " + lastname;
}
let fullName = getFullName("Tamari", "Khintkiria");
console.log(fullName);


const student = {
  firstName: 'Tamari',
  lastName: 'Khintkiria',
  age: 30,
  scores: [4, 7, 5, 3, 2],
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(student.fullname());



const student = {
  firstName: 'Tamari',
  lastName: 'Khintkiria',
  age: 30,
  scores: [4, 7, 5, 3, 2],
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
function sumScores(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum;
}
console.log(sumScores(student.scores));


const student = {
  firstName: 'Tamari',
  lastName: 'Khintkiria',
  age: 30,
  scores: [4, 7, 5, 3, 2],
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(student.fullName());
console.log( student.age);

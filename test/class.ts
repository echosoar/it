class PersonClass {
  firstName:String;
  constructor(firstName:String, public lastName:String) {
    this.firstName = firstName;
  }
}

interface Person {
  firstName: String;
  lastName: String;
}

function printName(person: Person) {
  return person.firstName  + " " + person.lastName;
}

let username:String = printName(new PersonClass("echo", "soar"));

console.log(username);
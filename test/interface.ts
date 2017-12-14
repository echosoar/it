interface Person {
  firstName: String;
  lastName: String;
}

function printName(person: Person) {
  return person.firstName  + " " + person.lastName;
}

let username: String = printName({
  firstName: "123",
  lastName: "abc"
});

console.log(username);

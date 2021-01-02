enum role {
  ADMIN,
  USER,
  READ_ONLY,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  roles: [string, number];
  role: role;
} = {
  name: "Ranjit",
  age: 15,
  hobbies: ["Reading", "Movies", "Running"],
  roles: ["Admin", 2],
  role: role.ADMIN,
};

person.hobbies.push("Music");
person.roles.push("Read only user");

console.log(person.hobbies);
console.log(person.roles);

if (person.role === role.ADMIN) {
  console.log("This is admin role.");
}

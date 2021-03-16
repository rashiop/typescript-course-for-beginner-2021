enum Gender {
  MALE = 0,
  FEMALE = 1,
  UNKNOWN = 'unknown',
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  gender: Gender;
} = {
  name: 'Poppy',
  age: 28,
  hobbies: ['Sleeping', 'Reading'],
  role: [0, 'admin'],
  gender: Gender.MALE,
};

person.role.push('adminaa');
person.role.push(3);
person.role[0] = 10;
console.log(person.role);

let favoriteActivites: string[];
favoriteActivites = ['Sports', 'Sleeping'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// =============================================================
// Level 1 · Task 2 — Variables
// =============================================================
// const name = value;   → a box that can never get a new value
// let   name = value;   → a box whose value can change later
//
// Naming rule: camelCase. Start lowercase, and each new word
// starts with a capital: firstName, totalPrice, isLoggedIn


// TODO 1: const firstName = ...your first name (a string)
const firstName = "Zeina";

// TODO 2: const lastName = ...
const lastName = "Kallaji";

// TODO 3: let age = ...a number (no quotes!)
let age = 22;

// TODO 4: const fullName = a template literal with firstName, a space, lastName
//         Hint: `${firstName} ${lastName}`
console.log(`${firstName} ${lastName}`);

// TODO 5: Birthday! Add 1 to age. Either of these works:
//         age = age + 1;
//         age++;

age ++;

// TODO 6: const intro = `Hi, I'm ... and I'm ... years old.`
//         Use fullName and age inside ${ }. Then console.log(intro)
console.log(`Hi! I am ${firstName} ${lastName} and I'm ${age} years old.`);


// TODO 7: Remove the // at the start of the next line, save, refresh.
//         Read the red error. What is it telling you?
firstName = "Someone else";
// TypeError: Assignment to constant variable.
// because "firstName" is const

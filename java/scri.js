const number = 21;

const nameUser = prompt("Scrivi il tuo nome")
console.log(nameUser);
const lastName = prompt("scrivi il tuo cognome")
console.log(lastName);
const colorUser = prompt("scrivi il tuo colore preferitto")
console.log(colorUser);

const passwordUser = nameUser + lastName + colorUser + number
console.log(passwordUser);

document.getElementById('la-pass').innerHTML = passwordUser;
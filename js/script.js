//chiedere all'utente il suo nome
const firstName = prompt("Qual'è il tuo nome?");
console.log(firstName);

//chiedere all'utente il suo cognome
const lastName = prompt("Ed il tuo cognome?");
console.log(lastName);

//chiedere all'utente il suo numero preferito
const favColor = prompt("Qual'è il tuo colore preferito?");
console.log(favColor);

//settare un numero casuale in una variabile
const randomNumber = 21

//elaborare password: nome+cognome+numeropreferito+numerocasuale
const password = firstName+lastName+favColor+randomNumber;
console.log(password);

//stampare password su html
document.getElementById('user-password').innerHTML = password
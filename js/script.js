// Pari e Dispari:


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt('Pari o Dispari?')
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumberAi (minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }
    const randomNumber = randomNumberAi (1, 5)
    console.log('L\'utente ha scelto ' + userNumber)
    console.log('L\'IA ha scelto ' + randomNumber)

// Sommiamo i due numeri
let sum = userNumber + randomNumber
    console.log(sum)

 // Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
function oddOrEven(){
    if(sum % 2 === 0){
        return 'pari'
    } else {
        return 'dispari'
    }
}
const result = oddOrEven()
console.log('Il risultato della somma è ' + result)

// Dichiariamo chi ha vinto.
function winner (){
    if(result === userChoice){
        return 'Vince l\'utente'
    } else {
        return 'Vince l\'intelligenza artificiale'
    }
}
const finalWinner = winner()
console.log(finalWinner)



// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.


// program to check if the string is palindrome or not

function checkPalindrome(word) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);
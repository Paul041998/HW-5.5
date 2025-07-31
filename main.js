let userNumber = parseInt(prompt("Введіть ціле число"));
let power = 1;
let numberToThePowerOfThree = false;

for (let i = 0; i <= userNumber; i++) {
  if (power === userNumber) {
    alert((userNumber + "можна отримати як 3 у ступені " + i + "."));
    numberToThePowerOfThree = true;
    break;
  }
  power *= 3;
}
if (!numberToThePowerOfThree) {
  alert(userNumber + " не можна отримати як 3 у ступені.");
}

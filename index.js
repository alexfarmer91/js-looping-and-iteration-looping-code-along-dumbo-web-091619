// Code your solutions in this file

function writeCards(nameArray, eventName) {
 let newArray = [];
    for (let i = 0; i < nameArray.length; i++) {
      newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return newArray;
  }

function countDown(startingNumber) {
 let counter = startingNumber
   while (counter >= 0) {
   console.log(counter--);
 }
}

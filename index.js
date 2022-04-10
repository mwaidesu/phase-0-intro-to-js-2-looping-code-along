
function writeCards(names, event) {
  let myArray = []
  for (let i = 0; i < names.length; i++) {
    myArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }

  console.log(myArray)
  return myArray;
}





function countDown(int) {
  let countDown = int;
  while (countDown >= 0) {
    console.log(countDown--);
  }
}

countDown(10)

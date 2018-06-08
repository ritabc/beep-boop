function pushBeep(output) {
  output.push("Beep")
  return output
}

function pushBoop(output) {
  output.push("Boop")
  return output
}

function pushApology(output, name) {
  output.push("I'm sorry, " + name + ". I'm afraid I can't do that.")
  return output
}

function lookForZeroOrOne(number, output) {
  arrayOfDigits = number.toString().split("")
  // arrayOfDigits = ["1", "4"]
  // loop and check for any O's
  for (let i = 0; i < arrayOfDigits.length; ++i) {
    if (parseInt(arrayOfDigits[i]) === 1) {
      pushBoop(output)
      break
    } else if (parseInt(arrayOfDigits[i]) === 0) {
      pushBeep(output)
      break
    } // else if it finds neither a 1 or 0, what should it do? Nothing? Or Break out of if-statement and then return output.push(number)?
  }
  return output
}

function updateIfDivisibleByThree(number, output, name) {
  if (number % 3 === 0) {
    pushApology(output, name)
    return output
  }
}

function makeUpToArray(highestNumber) {
  upToArray = []
  for (let number = highestNumber; number >= 0; --number) {
    upToArray.push(number)
  }
  return upToArray
}

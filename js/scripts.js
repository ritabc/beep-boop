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

function hasNoZerosOrOnes(number) {
  arrayOfDigits = number.toString().split("")
  for (let i = 0; i < arrayOfDigits.length; ++i) {
    if (parseInt(arrayOfDigits[i]) === 1) {
      return 1
    } else if (parseInt(arrayOfDigits[i]) === 0) {
      return 0
    }
  } return true
}

function updateIfDivisibleByThree(number, output, name) {
  if (number % 3 === 0) {
    pushApology(output, name)
    return output
  }
}

function makeUpToArray(highestNumber) {
  var upToArray = []
  for (let number = highestNumber; number >= 0; --number) {
    upToArray.push(number)
  }
  return upToArray
}

function applyFuncsToArray(highestNumber) {
  var outputArray = []
  upToNumbersArray = makeUpToArray(highestNumber)
  upToNumbersArray.forEach(function(number){
    return true
  })
}

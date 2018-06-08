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
    // if (parseInt(arrayOfDigits[i]) % 3 === 0) {
    //   console.log("reached")
    //   pushApology(output, name)
    //   break
    if (parseInt(arrayOfDigits[i]) === 1) {
      pushBoop(output)
      break
    } else if (parseInt(arrayOfDigits[i]) === 0) {
      pushBeep(output)
      break
    }
  }
  return output
}

// lookForZeroOrOne(20, [])

function isDivisibleByThree(number, output, name) {
  if (number % 3 === 0) {
    pushApology(output, name)
    return output
  }
}

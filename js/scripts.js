function pushBeep(output) {
  output.push("Beep")
  return output
}

function pushBoop(output) {
  output.push("Boop")
  return output
}

function lookForZero(number, output) {
  arrayOfDigits = number.toString().split("")
  // arrayOfDigits = ["1", "4"]
  // loop and check for any O's
  for (let i = 0; i < arrayOfDigits.length; ++i) {
    if (parseInt(arrayOfDigits[i]) === 0) {
      pushBeep(output);
      return output
    }
  }
}

lookForZero(20, [])

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

function isDivisibleByThree(number) {
  // if number === 0 we want it to return false
  if (number === 0) {
    return false
  }
  else if (number % 3 === 0) {
    return true
  }
}

function makeUpToArray(highestNumber) {
  var upToArray = []
  // treat positive and negative numbers differently
  if (highestNumber > 0) {
    for (let number = 0; number <= highestNumber; ++number) {
      upToArray.push(number)
    }
  } else if (highestNumber < 0) {
    for (let number = highestNumber; number <= 0; ++number) {
      upToArray.push(number)
    }
  }
  return upToArray
}

function applyFuncsToArray(highestNumber, name) {
  var outputArray = []
  var upToNumbersArray = makeUpToArray(highestNumber)
  upToNumbersArray.forEach(function(number){
    var checkForZeroOrOne = hasNoZerosOrOnes(number)
    if (isDivisibleByThree(number)) {
      pushApology(outputArray, name)
    } else if (checkForZeroOrOne === 1) {
      pushBoop(outputArray)
    } else if (checkForZeroOrOne === 0) {
      pushBeep(outputArray)
    } else {
      outputArray.push(number)
    }
  })
  return outputArray
}

$(document).ready(function(){
  $("#submit").click(function(e) {
    e.preventDefault()
    $(".input").hide()
    let name = $("#name").val()
    let highestNumber =  parseInt($("#favorite-number").val())
    let outputArray = applyFuncsToArray(highestNumber, name)
    $(".results-space").after("<p>" + outputArray + "</p>")
    $(".results").show()
  })
  $("#refresh").click(function() {
    location.reload()
  })
})

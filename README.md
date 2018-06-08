# Beep Boop

#### Epicodus Intro to Programming: Beep Boop, June 8th, 2018

#### By Rita Bennett-Chew

#### Description:
Takes a user's name and favorite number (n) from the user and returns a range of numbers from 0 to n with the following exceptions:
  * Any number divisible by 3 is replaced with "I'm sorry, \_entered name\_. I'm afraid I can't do that."
  * Then any other numbers that contain a 1 are replaced with "Boop!"
  * Then any other numbers that contain a 0 are replaced with "Beep!"

## Setup/Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Specifications

* This program will print 'Beep' when a zero is entered
  * **Example Input:** 0
  * **Example Output:** ["Beep"]
* This program will print 'Boop' when a 1 is entered
  * **Example Input:** 1
  * **Example Output:** ["Boop"]
* This program will print 'Beep' when any number containing a zero is entered
  * **Example Input:** 10
  * **Example Output:** ["Beep"]
* This program will print 'Boop' when any number containing a 1 is entered
  * **Example Input:** 14
  * **Example Output:** ["Beep"]
* This program will print "I'm sorry, Dave. I'm afraid I can't do that." if any number is given that is divisible by 3
  * **Example Input:** 27
  * **Example Output:** ["I'm sorry, Dave. I'm afraid I can't do that."]
* This program will print an array with all the numbers leading up to a given number
  * **Example Input:** 5
  * **Example Output:** [0, 1, 2, 3, 4, 5]
* For each number in the array, it will first apply isDivisibleByThree, then hasNoZerosOrOnes, and take the appropriate action as necessary
* **Example Input:** [30, ..., 10, 11, ... 1, 0]
* **Example Output:** ["apology", ..., "boop", "boop", ... "boop", "beep"]

## Technologies Used

* Bootstrap x.x.x
* jQuery 3.3.1

## Links

* Here is a link to [the repository](https://github.com/ritabc/beep-boop).

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Rita Bennett-Chew**

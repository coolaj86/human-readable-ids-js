'use strict';

var fs = require('fs')
  , path = require('path')
  , shuffle = require('knuth-shuffle').knuthShuffle
  , animalsFile = path.join(__dirname, 'animals.txt')
  , adjectivesFile = path.join(__dirname, 'adjectives.txt')
  , animals = []
  , animalsMaster
  , adjectives = []
  , adjectivesMaster
  , numbers = []
  , i = 0
  , k = 0
  , id
  ;

animalsMaster = fs.readFileSync(animalsFile, 'utf8').split('\n');
adjectivesMaster = fs.readFileSync(adjectivesFile, 'utf8').split('\n');

function genNumbers() {
  numbers.push(0);
  i = 2;
  // 1 is not plural, so we skip it
  while (i <= 100) {
    numbers.push(i);
    i += 1;
  }

  return shuffle(numbers);
}

for (k = 0; k < 100; k += 1) {
  if (!adjectives.length) {
    adjectives = shuffle(adjectivesMaster.slice(0));
  }
  if (!animals.length) {
    animals = shuffle(animalsMaster.slice(0));
  }
  if (!numbers.length) {
    numbers = genNumbers();
  }

  id = adjectives.pop()
    + '-' + animals.pop()
    + '-' + numbers.pop()
    ;

  console.log(id);
}

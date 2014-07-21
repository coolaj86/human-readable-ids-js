'use strict';

var fs = require('fs')
  , path = require('path')
  , shuffle = require('knuth-shuffle').knuthShuffle
  , animalsFile = path.join(__dirname, 'animals.txt')
  , adjectivesFile = path.join(__dirname, 'adjectives.txt')
  , animals
  , adjectives
  , numbers = []
  , i = 0
  , id
  ;

animals = fs.readFileSync(animalsFile, 'utf8').split('\n');
adjectives = fs.readFileSync(adjectivesFile, 'utf8').split('\n');
while (i <= 101) {
  numbers.push(i);
  i += 1;
}

for (i = 0; i < 1000; i += 1) {
  i += 1;

  id = shuffle(adjectives)[0]
    + '-' + shuffle(animals)[0]
    + '-' + shuffle(numbers)[0]
    ;

  console.log(id);
}

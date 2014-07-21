human-readable-ids-js
=====================

Use JavaScript to generate human-readable ids from a lists of nouns and adjectives.

Generate ids in the format of `adjective-noun-#` such as

* silly-goose-37
* quick-cobra-15
* tricky-chicken-23
* brave-ladybug-90

My problem is that I often want ids that I can type without having to
look at twice (nor telling someone else twice).

I should be able to shout one of these ids across the room to a co-worker
or spouse and have them be able to enter it without any confusion.

Currently the id space is about 100,000 ids (100 * 100 * 100).

The goal is to have several billion possible combinations by adding
more words as well as expanding the ids to have verbs and adverbs.

Usage
=======

### npm

```bash
npm install --save human-readable-ids
```

```javascript
'use strict';

var hri = require('human-readable-ids').hri
  , i
  ;

// generate 100 random ids
for (i = 0; i < 100; i += 1) {
  console.log(hri.random());
}
```

### bower / browser

```
bower install --save human-readable-ids
```

```jade
html
  head
    script(src="bower_components/knuth-shuffle/index.js")
    script(src="bower_components/human-readable-ids/assets/animals.js")
    script(src="bower_components/human-readable-ids/assets/adjectives.js")
    script(src="bower_components/human-readable-ids/index.js")
```

```html
    <script src="bower_components/knuth-shuffle/index.js"></script>
    <script src="bower_components/human-readable-ids/assets/animals.js"></script>
    <script src="bower_components/human-readable-ids/assets/adjectives.js"></script>
    <script src="bower_components/human-readable-ids/index.js"></script>
```

```javascript
;(function (exports) {
  'use strict';

  var hri = exports.humanReadableIds || require('human-readable-ids').hri
    , i
    ;

  for (i = 0; i < 100; i += 1) {
    console.log(hri.random());
  }
}('undefined' !== typeof exports && exports || new Function('return this')()));
```

Contributing
============

Please add more words that fit these criteria

  * Easy-to-spell - such that even my redneck dad can manage
  * Phonetically distinct - no words like bore/boar
  * Few syllables
  * Well-known

All of the words are sorted alphabetically (`sort -u`) and stored in
the `*.txt` files.
The pre-publish script outputs the formatted javascript.

### Bad Examples

  * wednesday, hamster, ostrich (difficult to spell)
  * grey, gray, bore, boar (two ways of spelling the same word or sound)
  * prawn (not well-known)

TODO
====

Acheive 1 trillion ids with a combination such as

`number adjective noun verb adverb`

`42-red-foxes-run-quickly`

And allow choosing various formats based on the desired
number of ids.

  * `adjective noun number`
  * `number adjective noun verb`

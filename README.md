NOT YET PUSHED
====

I got tired last night and didn't finish the npm publish script.
Will do in the morning...

human-readable-ids-js
=====================

Use JavaScript to generate human-readable ids from a lists of nouns and adjectives.

Generate ids in the format of `adjective-noun-#` such as

* silly-goose-37
* quick-cobra-15
* tricky-chicken-23
* brave-ladybug-90

My problem is that I often want ids that I can type without having to
look at it twice (nor telling someone else twice).

I should be able to shout one of these ids across the room to a co-worker
or spouse and have them be able to enter it in without any confusion.

Currently the id space is aboutt 100 * 100 * 100.
The goal is to have several billion possible combinations.

Install
=======

```
npm install --save human-readable-ids
```

```
bower install --save human-readable-ids
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

TODO
====

Acheive 1 trillion ids with a combination such as

`number adjective noun verb adverb`

And allow choosing various formats based on the desired
number of ids.

  * `adjective noun number`
  * `number adjective noun verb`

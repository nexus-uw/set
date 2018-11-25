set
===============

### What is this?

a (dumb) implementation of the game of set in Typescript


### How to run
1. install nodejs
2. npm install -g typescript
3. tsc
4. node build/index.js

### what is set?
[wikipedia does a good job of explaining it](https://en.wikipedia.org/wiki/Set_(card_game))

### why is this implementation dumb?
I constantly rescan the board looking at cards. If I were to build up a hash map of the current state of the board, I believe I could make sets faster. While the game can be completed in 20ms on a macbook pro (2017), it only matches 92% of cards into sets when the deck is not shuffled. Expanding the paramters of the game to have an arbitray number of properties to compare and arbritary size of sets, would bog down the machine running it. 

### Why did I do this?
I wanted a nice 'computer science' type project to get my brain to sweat a bit. Also, playing this game is hard and frustrating, it is a job for computers.

### How long did it take to code up? 
about 6hrs over a period of a day

### next steps
allow for arbiratry set size and properties to match on
switch from single threaded execution to parrallel  (and maybe even distributed)
get smart with the matching algorithim 
try to match all cards into sets (ie: 100%)

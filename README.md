<!-- 1.THE GAME -->

The "JOHN WICK BONTO" game.

This game aims to provide a streesful experience to players and calls speed skills out. Making decision quikly is the key.

<!-- 2.STORY TELLING -->

HELP JOHN WICK FIND HIS DOG BEFORE THE GONG !!!

As you all know, John Wick's dog means everything to our beloved hero, upon all that exists and breaths on this planet. Bromance cannot be explained, man !

Since once not the norm, bad guys had kidnapped John Wick's dog and took the pet in Paris, hidding it in a shady casino, in order to move our hero far away from US !

That's terrible news, feel bad for them right now.

As John Wick never came in Paris before, here is your mission :
you will have to give him a hand to retreive his dog, and bring it back to his owner.

To succeed, you must face up to a Bonto game.
But notice that you have to figure it out before a final countdown !

Else, if you fail, John Wick could be very pissed of, and remove you from earth.

So...good luck !!!

<!-- 3. Game rules -->

BONTO game, also known as Three-Card Monte, is a classic casino gambling game that is played with a set of three cards. The objective of the game is to correctly identify the location of a specific card among a flush of three.

In JOHN WICK BONTO game, you bet John Wick's dog.

Therefore, you'll have to track John Wick dog's card as the target card inside a shuffled set of three mistery cards.

When the dealer stops shuffling the cards, you will be asked to identify the target card. If you correctly identify the target card, you win the bet and get the dog. If you choose incorrectly, you will lose it.

But if you fail picking the right card, you could try again before the 00:30'' countdown timer ends.

No score and health bar.

If you don't succeed, the game is over !

<!-- 4. Development process -->

Took me one day to define game structure (drawning it on paper sheets) and game logic.

Took me three days of round trips to code the structure and the logic of the game, using HTML and JavaScript tools.

Took me one day to design game style using CSS tools (finding backgrounds, photos, GIF / creating pop-up windows / imagine a stressful timer).

Took me a morning to write the READ ME file down and clean my code out.

<!-- 5. Behind the scenes -->

Making this game playable was not as easy as we could imagine, despite of childish rules.

The tricky part was to make the different elements of the Homepage and Gamepage, live together.

For instance, inside Gamepage, when you click the Start Game Button, Timer must start,cards must be shuffled and the flush of cards appears at the same time.

The solution was to create the parent function startGame() gathering/linking Start Game button with the Timer and add an child function() inside the parent one in order to set the flush of three cards. Then, add a last child function() inside the parent function() to shuffle cards.

Also, when you win the game, or when the game is over because running out of time, we've created pop-up windows which ones have a "Return Homepage" button.

Here, the tricky thing was to stop the Timer countdown using a clearInterval() method when pop-up window shows up, go back to Homepage clicking on the "Return Homepage" button of the pop-up, and then enter the game to reach Gamepage clicking on the "Enter the Game" button which is setting a new 00:30'' Timer before restart.

 <!-- 6. Design consideration -->

Regarding game design, the idea was on one hand to create an retro gaming ambiance, and on the other hand stick with JOHN WICK's dark world.

 <!-- 7. Next Add-on -->

With the upcoming part II, JOHN WICK "THE BONTO REVENGE", we will surely add different levels of difficuly, audio mode (mixing Keanu Reeves narrator voice in progress), and easter eggs !

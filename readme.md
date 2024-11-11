# Hanafuda in React

[Run The App](https://massimilianodelliubaldini.github.io/hanafuda-react/)

Hanafuda (jp. 花札) are traditional Japanese playing cards. A standard deck contains 48 cards. Each card belongs to suit and a category. There are 12 suits, each representing a month and a flower. Each suit contains 4 cards. There are 4 categories: Light (jp. 光, "Hikari"), Seed (jp. タネ, "Tane"), Slip (jp. 短冊, "Tanzaku"), and Chaff (jp. カス, "Kasu"). Not every suit contains one of each category. There are a total of 5 Lights, 9 Seeds, 10 Slips, and 24 Chaff.

## Koi Koi

Koi Koi is a game played with Hanafuda cards. It is a 2-player trick taking game, where each player captures cards on the board using cards of a matching suit in their hand. If a player forms any of several predefined sets with their captured cards, they can choose to end the round and win points, or they can call "Koi Koi!" which gives them the opportunity to form more sets and earn more points. However, it also allows their opponent to form a set and win double their score. The game is over after 12 rounds, and the player with the highest total score wins.

## Why did I build this? 

Angular and React are currently the two preeminent Javascript frameworks for building web applications, but I've never used either one. In order to have a reason to learn them and just to do something fun, I came up with a challenge: build the same web app in both frameworks. More specifically, I wanted to build a simple game in them. Tabletop games are fairly suitable candidates for that purpose, but I specifically chose Koi Koi for a few reasons. First, I am already familiar with the game and I enjoy playing it. Second, I wanted to work on something unique and unconventional, so I avoided games like Poker or Blackjack that probably already have plenty of sample implementations I would be tempted to look at first. Third, Koi Koi has enough complexity to keep me engaged but not too much that would make it daunting to implement. It's neither Concentration nor is it Magic The Gathering.

So this is my first web app with React, and I plan to make a companion app in Angular identical to this one, so I can evaluate and compare the two frameworks.

## How did I build this? 

As in my last web development effort, my goal is to build a web app with the fewest number of additional packages possible that still accomplishes my task. Last time, because I was loading content from JSON files, CORS policies prohibited me from testing my work locally by just loading the HTML file in the browser. So I relied on Github pages to host and test my work, but that required me to push my code first and "test in production" so to speak.

This time around, I was able to keep all the game objects and game logic in a single JavaScript file, so I could test locally by loading the HTML file in a browser. At some point I will have to install and learn Node.js and npm, but that is a project for another day. It also lets me keep my "fewest number of additional packages" goal. Yes, this prevented me from using JSX because I would have needed Babel, but that is *also* a project for another day.

## Pros and Cons

At first it seemed like everything I was trying to do in React was the wrong way to go about it. Learning React reminds me of learning JavaScript itself. Coming from a sequential, object-oriented background, JavaScript seems duplicitous in its asynchronous nature. You write two function calls back-to-back but they don't *run* back-to-back, they run *simultaneously.* What the code *says* and what the code *does* are two different things. 

Likewise, React didn't behave the way I expected. When you set a state variable in React, that value doesn't update immediately. Instead, it queues up your commands to be executed on the next render. And if you "queue up" multiple changes to that state variable, only the last update survives. Admittedly, React did *have* a solution to everything I needed to do, and in an easily manageable feature set to boot. The entire game was programmed with a functional component, some useStates, and some useEffects. Everything else was just vanilla JavaScript functions and arrays. Once I knew how to use the hooks, using them was not difficult, it only became a question of how many I needed.

It turns out that number was far more than I was hoping to use. One boolean state became two because I needed to describe whether the active player was playing from their hand or the deck, but resetting it at the start of every turn was allowing the opponent to make moves during the player's turn. One state was created just because of a behavior unique to Firefox, when prompting the user to Koi Koi with a confirmation modal. This behavior breaks React, is a known issue, but hasn't been prioritized but the developers yet. I had to ditch the confirmation modal and replace it with 2 more buttons and a new state.

## Challenges

> Your async program is like something from a 19th century Gothic horror story. 
>
> Drunk with your own sense of power, you reassemble pieces of code that were once coherent, stitching them together with event loops and callback functions, until your monster, grotesque and menacing, is ready to be brought to life in a JavaScript VM. You throw the switch and the hideous creature awakes, rises, and lurches forward. You're simultaneously elated and terrified that something so unnatural could work at all. When you realize what you've unleashed, your creation reaches out with its bloody mangled arms and strangles you.

> But it's fast as hell.

Each turn of Koi Koi is a static sequence of events: play a card from your hand, play the top card of the deck, and maybe call Koi Koi. When you play a card, you can either capture a card on the board with it, or surrender it to the board. Once you complete one action, you automatically transition to the next. But in React, I cannot simply call the function that handles the second phase after I've completed the first, because the state of the board hasn't updated yet. It won't update until the first phase has totally resolved from user input. But because the transition should be automatic, creating another button just so the user can trigger the next phase is not a strong solution.

So I turned to useEffects, which trigger whenever the supplied state is changed... the next time it is changed, that is. So at the end of the function that handles the first phase of a turn, I set a state variable marking its completion. This triggers an effect that runs the function handling the second phase of the turn. But I need to make sure it doesn't trigger every time the variable gets *reset* at the start of a new turn, only when it gets *set* during a turn. So I need states describing Game Areas (eg. Your Hand, Opponent's Hand, etc.) and which cards they contain, but I **also** need states describing the events in a turn, whose turn it is, who called Koi Koi, who wins the round, etc. I **also** need effects to transition between those non-Game Area states, which end up calling **themselves** multiples times due to state changes, so they need conditional checking to know what to do and when. 

This is how I chopped up a linear sequence of events just to stitch them back together using React hooks. 

> You may recall sequential code: that's the code you can read.

## Lessons and What's Next

React seems to be best suited for news feeds, advertisements, and online surveys. Using it to build a game seems like a strange exercise and a poor fit. But I'm happy with the work, even if I'm not happy with the framework. 

I imagine I would be able to re-use a good amount of the game logic and card collection for Angular, but I have no intention of simply copy-pasting this project and throwing Angular on top. Rather, I'd like to start Angular from the ground up, and then copy in what I need to save time.

# heads-up-poker.github.io
Thank you for visiting Heads-Up Poker, an action-packed game that will keep you hooked with its interactive and fresh gameplay. Below I outline the instructions for playing the game as well as my 
experience building the bot for the game.

## How to Play
Heads-Up Poker has all the essential elements of traditional Texas Hold’Em. To begin, press the ‘Start’ button. This will display the table, your cards, the computer’s cards, face down, and options to 
fold, check, call, or raise, depending on the situation. Once you are familiarized with the game and your cards, click one of the buttons at the bottom of the screen to submit your action. After this, 
either the flop cards will be displayed, or the computer will take its turn. When this is finished, the computer will alert you that it is your turn. The rest of the game will follow a similar structure 
and will be intuitive, making it easy to follow.
	
 As a personal touch to the game, I made a couple of slight changes to the rules. Most importantly, the user and computer are not able to raise to an amount greater than either one of their chip stacks. 
 In other words, the user and computer will be able to call each other’s raise every time. This maintains the integrity of the game while making the gameplay and code more efficient. Second, if there is a 
 tie and the pot has an odd amount of chips, the extra chip will go to the big blind. This adds a little more merit to being the big blind. Ultimately, the game figures to be entertaining and consistently 
 enjoyable, which is complemented by my personal touches.
 
 ## Building the Bot
 The poker bot was one of my major focuses coming into the project. As a result, I followed a detailed process when considering my options. My first idea was to look at existing poker AI that I could 
 integrate into my project. However, I could not find any options that worked sufficiently with p5.js, and I ultimately decided against using existing AI. Looking back, I am happy with this decision as it 
 allowed me to gain experience building and testing my bot. Next, I looked at APIs, but the only one that worked would eventually become paid. With no success with open-source AI or APIs, I decided that I 
 wanted to rely on my capabilities and creativity, which gave way to an interesting idea. I discovered the potential of a win probability calculator. I imagined that I could use pokersolver.js, an open-
 source project that I had been using to calculate winning hands, in order to perform a Monte Carlo simulation that would yield the win percentage of a hand after 1,000 or so simulations. However, 
 pokersolver.js was not iterable, which meant that I could not use it in any sort of loop. I attempted to use object.keys and object.entries to make it work, but I could not find success. After this, I 
 decided on my best remaining option and choose to use randomization and essential poker knowledge. I built the bot and its algorithm completely from scratch. I made it unexploitable and unpredictable, 
 and it soon became an exciting opponent to play. In the end, my experience building the bot for Heads-Up Poker was extremely valuable and an overall success. Even though I had to move on from various 
 options, my research on each of them helped me produce an improved bot and taught me more about the essentials of AI.

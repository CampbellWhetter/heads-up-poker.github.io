//Intialize the deck array and fill it with the 52 cards.
const deck = [
  "2h",
  "2d",
  "2s",
  "2c",
  "3h",
  "3d",
  "3s",
  "3c",
  "4h",
  "4d",
  "4s",
  "4c",
  "5h",
  "5d",
  "5s",
  "5c",
  "6h",
  "6d",
  "6s",
  "6c",
  "7h",
  "7d",
  "7s",
  "7c",
  "8h",
  "8d",
  "8s",
  "8c",
  "9h",
  "9d",
  "9s",
  "9c",
  "Th",
  "Td",
  "Ts",
  "Tc",
  "Jh",
  "Jd",
  "Js",
  "Jc",
  "Qh",
  "Qd",
  "Qs",
  "Qc",
  "Kh",
  "Kd",
  "Ks",
  "Kc",
  "Ah",
  "Ad",
  "As",
  "Ac",
];

/*Intialize the deckImages array and fill it with the variable name
 *of each card in string format.*/
const deckImages = [
  "twoH",
  "twoD",
  "twoS",
  "twoC",
  "threeH",
  "threeD",
  "threeS",
  "threeC",
  "fourH",
  "fourD",
  "fourS",
  "fourC",
  "fiveH",
  "fiveD",
  "fiveS",
  "fiveC",
  "sixH",
  "sixD",
  "sixS",
  "sixC",
  "sevenH",
  "sevenD",
  "sevenS",
  "sevenC",
  "eightH",
  "eightD",
  "eightS",
  "eightC",
  "nineH",
  "nineD",
  "nineS",
  "nineC",
  "tenH",
  "tenD",
  "tenS",
  "tenC",
  "jackH",
  "jackD",
  "jackS",
  "jackC",
  "queenH",
  "queenD",
  "queenS",
  "queenC",
  "kingH",
  "kingD",
  "kingS",
  "kingC",
  "aceH",
  "aceD",
  "aceS",
  "aceC",
];

//Intialize the shortenedDeck array
let shortenedDeck = [];

//Intialize the card images variable names
let tenC;
let tenD;
let tenH;
let tenS;

let twoC;
let twoD;
let twoH;
let twoS;

let threeC;
let threeD;
let threeH;
let threeS;

let fourC;
let fourD;
let fourH;
let fourS;

let fiveC;
let fiveD;
let fiveH;
let fiveS;

let sixC;
let sixD;
let sixH;
let sixS;

let sevenC;
let sevenD;
let sevenH;
let sevenS;

let eightC;
let eightD;
let eightH;
let eightS;

let nineC;
let nineD;
let nineH;
let nineS;

let aceC;
let aceD;
let aceH;
let aceS;

let jackC;
let jackD;
let jackH;
let jackS;

let kingC;
let kingD;
let kingH;
let kingS;

let queenC;
let queenD;
let queenH;
let queenS;

//Intialize the variable for the image of the back of a card
let backOfCard;
//Intialize the variable for the images of the table
let table;

/*Intialize the gameRound and set it to zero to signify the start
 *screen.*/
let gameRound = 0;
/*Intialize the sectionCounter and set it to zero to signigy the
 *start screen. This variable is distinct from the gameRound
 *variable as it needs to be changed before gameRound.*/
let sectionCounter = 0;

//Intialize the handUser array and the handComputer array
let handUser = [];
let handComputer = [];

//Intialize the first user card and its corresponding image variable
let userCard1;
let userCard1Img;

/*Intialize the second user card and its corresponding image
 *variable.*/
let userCard2;
let userCard2Img;

/*Intialize showComputerCards. When this is equal to zero, the
 *images for the computer cards will show the back of the cards.
 *When this is set to zero, the images will show the front of the
 *cards.*/
let showComputerCards = 0;

/*Intialize the first computer card and its corresponding image
 *variable.*/
let computerCard1;
let computerCard1Img;

/*Intialize the second computer card and its corresponding image
 *variable.*/
let computerCard2;
let computerCard2Img;

//Intialize the first flop card and its corresponding image variable
let flopCard1;
let flopCard1Img;

/*Initialize the second flop card and its corresponding image
 *variable*/
let flopCard2;
let flopCard2Img;

/*Initialize the third flop card and its corresponding image
 *variable*/
let flopCard3;
let flopCard3Img;

//Intialize the turn card and its corresponding image variable
let turn;
let turnImg;

//Intialize the river card and its corresponding image variable
let river;
let riverImg;

//Intialize the flopCards, turnCards, and riverCards arrays
let flopCards = [];
let turnCards = [];
let riverCards = [];

//Intialize the user chips and computer chips and set them to 100
let chipsUser = 100;
let chipsComputer = 100;

/*Intialize the chips that the user and computer have contributed
 *this round of a hand and set them to 0.*/
let chipsUserRound = 0;
let chipsComputerRound = 0;

/*Intailize the big blind. If this is equal to zero, the computer
 *will be the big blind. If this is equal to one, the user will be
 *the big blind.*/
let bigBlind = 0;

//Intialize the canvas and its sizing and position variables.
let canvas;
let canvasWidth;
let canvasHeight;
let canvasX;
let canvasY;

//Intialize the width and height of the card
let cardWidth;
let cardHeight;

//Intialize the x-position variables for the two cards in a hand
let handPositionX1;
let handPositionX2;

/*Intialize the y-positon variables for the computer cards and user
 *cards.*/
let computerPositionY;
let userPositionY;

//Intialize x-position variables for the five board cards.
let boardPositionX1;
let boardPositionX2;
let boardPositionX3;
let boardPositionX4;
let boardPositionX5;

//Initialize the y-position variable for the five board cards
let boardPositionY;

//Intialize the variable for the loading screen image
let loadingScreenImg;

//Intialize the opening screen buttons
let startButton;
let howToPlayButton;

//Intialize the action buttons
let foldButton;
let checkCallButton;
let raiseAllInButton;

/*Intialize the raiseAmountSlider. This lets the user choose the
 *amount of their raise.*/
let raiseAmountSlider;

//Intialize the sizing variables for the action buttons
let actionButtonWidth;
let actionButtonHeight;

/*Intialize the x-position variables for the action buttons. Left
 *means that the button will be to the left of the user cards and
 *right means that the button will be to the right of the user
 *cards.*/
let actionButtonXLeft;
let actionButtonXRight;

/*Intialize the y-position variables for the action buttons. First
 *means that the button will be first vertically and so on.*/
let actionButtonYFirst;
let actionButtonYSecond;

/*Intialize raiseAmountIndicatorRect and its corresponding sizing
 *and positioning variables. raiseAmountIndicatorRect acts as a text
 *box for raiseAmountIndicatorText.*/
let raiseAmountIndicatorRect;
let raiseAmountIndicatorRectX;
let raiseAmountIndicatorRectY;

let raiseAmountIndicatorText;
let raiseAmountIndicatorTextBox;
let raiseAmountIndicatorTextBoxWidth;
let raiseAmountIndicatorTextBoxHeight;
let raiseAmountIndicatorTextContents;
let raiseAmountIndicatorTextX;
let raiseAmountIndicatorTextY;
let raiseAmountIndicatorTextSize;

//Intialize the raise amount and call amount
let raiseAmount;
let callAmount;

//Intialize the computer raise amount
let computerRaiseAmount;

/*Intialize callAmountIndicatorRect and its corresponding sizing
 *and positioning variables. raiseAmountIndicatorRect acts as a text
 *box for callAmountIndicatorText.*/
let callAmountIndicatorRect;
let callAmountIndicatorRectX;
let callAmountIndicatorRectY;

let callAmountIndicatorText;
let callAmountIndicatorTextBox;
let callAmountIndicatorTextBoxWidth;
let callAmountIndicatorTextBoxHeight;
let callAmountIndicatorTextContents;
let callAmountIndicatorTextX;
let callAmountIndicatorTextY;
let callAmountIndicatorTextSize;

/*Intialize userStackAmountIndicatorRect and its corresponding
 *sizing and positioning variables. userStackAmountIndicatorRect
 *acts as a text box for userStackAmountIndicatorText.*/
let userStackAmountIndicatorRect;
let userStackAmountIndicatorRectX;
let userStackAmountIndicatorRectY;

let userStackAmountIndicatorText;
let userStackAmountIndicatorTextBox;
let userStackAmountIndicatorTextBoxWidth;
let userStackAmountIndicatorTextBoxHeight;
let userStackAmountIndicatorTextContents;
let userStackAmountIndicatorTextX;
let userStackAmountIndicatorTextY;
let userStackAmountIndicatorTextSize;

/*Intialize computerStackAmountIndicatorRect and its corresponding
 *sizing and positioning variables. computerStackAmountIndicatorRect
 *acts as a text box for computerStackAmountIndicatorText.*/
let computerStackAmountIndicatorRect;
let computerStackAmountIndicatorRectX;
let computerStackAmountIndicatorRectY;

let computerStackAmountIndicatorText;
let computerStackAmountIndicatorTextBox;
let computerStackAmountIndicatorTextBoxWidth;
let computerStackAmountIndicatorTextBoxHeight;
let computerStackAmountIndicatorTextContents;
let computerStackAmountIndicatorTextX;
let computerStackAmountIndicatorTextY;
let computerStackAmountIndicatorTextSize;

/*Intialize gameRoundIndicatorRect and its corresponding
 *sizing and positioning variables. gameRoundIndicatorRect
 *acts as a text box for gameRoundIndicatorText.*/
let gameRoundIndicatorRect;
let gameRoundIndicatorRectX;
let gameRoundIndicatorRectY;

let gameRoundIndicatorText;
let gameRoundIndicatorTextBox;
let gameRoundIndicatorTextBoxWidth;
let gameRoundIndicatorTextBoxHeight;
let gameRoundIndicatorTextContents;
let gameRoundIndicatorTextX;
let gameRoundIndicatorTextY;
let gameRoundIndicatorTextSize;

//Intialize the pot
let pot = 0;

/*Intialize potIndicatorRect and its corresponding
 *sizing and positioning variables. potIndicatorRect
 *acts as a text box for potIndicatorText.*/
let potIndicatorRect;
let potIndicatorRectX;
let potIndicatorRectY;

let potIndicatorText;
let potIndicatorTextBox;
let potIndicatorTextBoxWidth;
let potIndicatorTextBoxHeight;
let potIndicatorTextContents;
let potIndicatorTextX;
let potIndicatorTextY;
let potIndicatorTextSize;

/*Intialize botDecisionIndicatorRect and its corresponding
 *sizing and positioning variables. botDecisionIndicatorRect
 *acts as a text box for botDecisionIndicatorText.*/
let botDecisionIndicatorRect;
let botDecisionIndicatorRectX;
let botDecisionIndicatorRectY;

let botDecisionIndicatorText;
let botDecisionIndicatorTextBox;
let botDecisionIndicatorTextBoxWidth;
let botDecisionIndicatorTextBoxHeight;
let botDecisionIndicatorTextContents;
let botDecisionIndicatorTextX;
let botDecisionIndicatorTextY;
let botDecisionIndicatorTextSize;

/*Intialize turnIndicatorRect and its corresponding
 *sizing and positioning variables. turnIndicatorRect
 *acts as a text box for turnIndicatorText.*/
let turnIndicatorRect;
let turnIndicatorRectX;
let turnIndicatorRectY;

let turnIndicatorText;
let turnIndicatorTextBox;
let turnIndicatorTextBoxWidth;
let turnIndicatorTextBoxHeight;
let turnIndicatorTextContents;
let turnIndicatorTextX;
let turnIndicatorTextY;
let turnIndicatorTextSize;

//Intialize the decision variable that will hold a number corresponding to the action of the bot. 1 means check/call. 2 means fold. 3 means raise.
let decision;

//Intialize the variables for the second and third randomization.
let r3;
let r2;

/*Intialize bluff. If this is equal to 1, the bot will be bluffing 
 *and will be more likely to continue and be more aggresive in a 
 hand.*/
let bluff;

/*Intialize allIn and set it to 0. If this is equal to 0, no one has
 *gone all in. If this is equal to 1, the user was the first to go
 *all in, meaning the computer needs to call for the hand to
 *continue. If this is equal to 2, the computer was the firt to go
 *all in, meaning the user needs to call for the hand to continue*/
let allIn = 0;

//Intialize the variables for the two fonts.
let bebasNeue;
let wixMadeFor;

/*Intialize handComputerRank. This will be used in the bot's
 *decision.*/
let handComputerRank;

/*Intialize callCounter. This will ensure that hand proceeds to the
 *next section once the user has called and the game state is
 *appropriate.*/
let callCounter = 0;

/*Intialize callCounterComputer. This will ensure that hand proceeds
 *to the next section once the computer has called and the game
 *state is appropriate.*/
let callCounterComputer = 0;

/*Intialize raiseCounter. This will determine whether the computer
 *can check or if it must call.*/
let raiseCounter = 0;

//All of the above variables are global. This is by design.

function preload() {
  //Preload all of the card images so that they are when the user is
  tenC = loadImage("cards/10c.png");
  tenD = loadImage("cards/10d.png");
  tenH = loadImage("cards/10h.png");
  tenS = loadImage("cards/10s.png");

  twoC = loadImage("cards/2c.png");
  twoD = loadImage("cards/2d.png");
  twoH = loadImage("cards/2h.png");
  twoS = loadImage("cards/2s.png");

  threeC = loadImage("cards/3c.png");
  threeD = loadImage("cards/3d.png");
  threeH = loadImage("cards/3h.png");
  threeS = loadImage("cards/3s.png");

  fourC = loadImage("cards/4c.png");
  fourD = loadImage("cards/4d.png");
  fourH = loadImage("cards/4h.png");
  fourS = loadImage("cards/4s.png");

  fiveC = loadImage("cards/5c.png");
  fiveD = loadImage("cards/5d.png");
  fiveH = loadImage("cards/5h.png");
  fiveS = loadImage("cards/5s.png");

  sixC = loadImage("cards/6c.png");
  sixD = loadImage("cards/6d.png");
  sixH = loadImage("cards/6h.png");
  sixS = loadImage("cards/6s.png");

  sevenC = loadImage("cards/7c.png");
  sevenD = loadImage("cards/7d.png");
  sevenH = loadImage("cards/7h.png");
  sevenS = loadImage("cards/7s.png");

  eightC = loadImage("cards/8c.png");
  eightD = loadImage("cards/8d.png");
  eightH = loadImage("cards/8h.png");
  eightS = loadImage("cards/8s.png");

  nineC = loadImage("cards/9c.png");
  nineD = loadImage("cards/9d.png");
  nineH = loadImage("cards/9h.png");
  nineS = loadImage("cards/9s.png");

  aceC = loadImage("cards/Ac.png");
  aceD = loadImage("cards/Ad.png");
  aceH = loadImage("cards/Ah.png");
  aceS = loadImage("cards/As.png");

  jackC = loadImage("cards/Jc.png");
  jackD = loadImage("cards/Jd.png");
  jackH = loadImage("cards/Jh.png");
  jackS = loadImage("cards/Js.png");

  kingC = loadImage("cards/Kc.png");
  kingD = loadImage("cards/Kd.png");
  kingH = loadImage("cards/Kh.png");
  kingS = loadImage("cards/Ks.png");

  queenC = loadImage("cards/Qc.png");
  queenD = loadImage("cards/Qd.png");
  queenH = loadImage("cards/Qh.png");
  queenS = loadImage("cards/Qs.png");

  //Preload the backOfCard, table, and loadingScreenImg images.
  backOfCard = loadImage("backOfCard.png");
  table = loadImage("table.png");
  loadingScreenImg = loadImage("loadingScreenImg.jpg");

  //Preload the fonts. These fonts are from Google Fonts.
  bebasNeue = loadFont("fonts/BebasNeue-Regular.ttf");
  wixMadeFor = loadFont("fonts/WixMadeforText-Regular.ttf");
}

function setup() {
  //Set the canvas width and height
  canvasWidth = windowWidth * 0.75;
  canvasHeight = windowWidth * 0.38;

  //Set the canvas x and y
  canvasX = windowWidth / 2 - canvasWidth / 2;
  canvasY = windowHeight / 2 - canvasHeight / 2;

  //Create the canvas, size it, and position it.
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(canvasX, canvasY);

  /*Specify the parent of the canvas. This allows to adjust the z-
   *index and positioning style.*/
  canvas.parent("sketch-container");

  //Set the background image to the loadingScreenImg.
  background(loadingScreenImg);

  //Set the card width and height.
  cardWidth = canvasHeight * 0.275 * 0.689;
  cardHeight = canvasHeight * 0.275;

  //Set the y-position of the board
  boardPositionY = canvasHeight / 2 - cardHeight / 2;

  //Create button
  startButton = createButton("Start");
  //Add a class to the button to allow styling with CSS
  startButton.addClass("openingScreenButtons");
  //Position the button
  startButton.position(
    canvasX + canvasWidth / 2 - startButton.size().width / 2,
    canvasY + canvasHeight / 1.25
  );
  //Assign a function to the button.
  startButton.mousePressed(deal);

  //Follow the process of the start button with the howToPlayButton
  howToPlayButton = createButton("How To Play");
  howToPlayButton.addClass("openingScreenButtons");
  howToPlayButton.position(
    canvasX + canvasWidth / 2 - howToPlayButton.size().width / 2,
    canvasY + canvasHeight / 1.195 + startButton.size().height / 2
  );
  howToPlayButton.mousePressed(openHowToPlay);

  //Specify the action button width and height.
  actionButtonWidth = canvasWidth * 0.07;
  actionButtonHeight = canvasWidth * 0.0266;

  //Specify the x-postion of the left side action buttons
  actionButtonXLeft =
    canvasX +
    (width / 2 - cardWidth * 1.025) -
    canvasWidth * 0.01 -
    actionButtonWidth;
  actionButtonXRight =
    canvasX + (width / 2 + cardWidth * 0.025) + cardWidth + canvasWidth * 0.01;

  //Specify the y-position of the top and bottom action bottoms
  actionButtonYFirst = canvasY + canvasHeight / 1.4;
  actionButtonYSecond = canvasY + canvasHeight / 1.275;

  //Create button
  checkCallButton = createButton("Call");
  /*Add a class to the button to allow for styling with CSS. This
   *class is actionButtons, which is used for the buttons within the
   *actual game.*/
  checkCallButton.addClass("actionButtons");
  //Size the button
  checkCallButton.size(actionButtonWidth, actionButtonHeight);
  //Position the button
  checkCallButton.position(actionButtonXLeft, actionButtonYSecond);
  //Assign a function to the button
  checkCallButton.mousePressed(checkCall);
  /*Hide the button so that it does not appear over the opening
   *screen. The button will be shown when the user presses start.*/
  checkCallButton.hide();

  /*Follow the process of the checkCallButton with the foldButton
   *and the raiseAllInButton.*/
  foldButton = createButton("Fold");
  foldButton.addClass("actionButtons");
  foldButton.size(actionButtonWidth, actionButtonHeight);
  foldButton.position(actionButtonXLeft, actionButtonYFirst);
  foldButton.mousePressed(fold);
  foldButton.hide();

  raiseAllInButton = createButton("Raise");
  raiseAllInButton.addClass("actionButtons");
  raiseAllInButton.size(actionButtonWidth, actionButtonHeight);
  raiseAllInButton.position(actionButtonXRight, actionButtonYFirst);
  raiseAllInButton.mousePressed(raiseAllIn);
  raiseAllInButton.hide();

  /*Create the raiseAmountSlider. Set the minimum to 0, the maximum
   *to the value of the user chips, and the default value to 0.*/
  raiseAmountSlider = createSlider(0, chipsUser, 0);
  //Position the slider
  raiseAmountSlider.position(actionButtonXRight, actionButtonYSecond);
  //Size the slider
  raiseAmountSlider.size(actionButtonWidth, actionButtonHeight);
  /*Hide the slider so that it does not appear over the opening
   *screen. The slider will be shown when the user presses start.*/
  raiseAmountSlider.hide();

  print(deck);
}

/*draw() is short as the game needs to be done systematically from
 *one part to the next. The looping nature of draw() would make this
 *difficult.*/
function draw() {
  //Call the updateText() function when the slider is moved.
  raiseAmountSlider.input(updateText);

  /*A player can only raise at most to the amount of the smallest
   *stack. Therefore, test for the smallest stack.*/
  if (chipsUser <= chipsComputer) {
    /*If the user stack is the smallest, set the max of the slider
     *to the amount of the user stack.*/
    raiseAmountSlider.attribute("max", chipsUser);
  } else {
    /*If the computer stack is the smallest, set the max of the
     *slider to the amount of the computer stack.*/
    raiseAmountSlider.attribute("max", chipsComputer);
  }

  /*If the value of the raiseAmountSlider is equal to the value of
   *chipsUser, the user wants to go all in. Therefore, change the
   *raiseAllInButton to say 'All In'. If this is not the case, the
   *user wants to raise or can only raise. Therefore, ensure that
   *the button says 'Raise'.*/
  if (raiseAmountSlider.value() == chipsUser) {
    raiseAllInButton.html("All In");
  } else {
    raiseAllInButton.html("Raise");
  }

  /*If the game is past the openingScreen, always display the user
   *stack amount, computer stack amount, game round, and pot.*/
  if (sectionCounter != 0) {
    drawUserStackAmount();
    drawComputerStackAmount();
    drawGameRound();
    drawPot();
  }
}

/*This function is used to reset the canvas so that they game
 *indicators can be updated. It is also used in the windowResize()
 *function to redraw the background and the appropriate cards.*/
function redrawElements() {
  if (sectionCounter == 0) {
    background(loadingScreenImg);
  } else {
    background(table);
  }

  if (sectionCounter >= 1) {
    dealImages();
  }
  if (sectionCounter >= 2) {
    flopImages();
  }
  if (sectionCounter >= 3) {
    turnImages();
  }
  if (sectionCounter >= 4) {
    riverImages();
  }
}

/*This handles windowResizing. It will update all of variables and
 *redraw the elememts on the screen.*/
function windowResized() {
  canvasWidth = windowWidth * 0.75;
  canvasHeight = windowWidth * 0.38;

  canvasX = windowWidth / 2 - canvasWidth / 2;
  canvasY = windowHeight / 2 - canvasHeight / 2;

  resizeCanvas(canvasWidth, canvasHeight);
  canvas.position(canvasX, canvasY);

  startButton.position(
    canvasX + canvasWidth / 2 - startButton.size().width / 2,
    canvasY + canvasHeight / 1.25
  );
  howToPlayButton.position(
    canvasX + canvasWidth / 2 - howToPlayButton.size().width / 2,
    canvasY + canvasHeight / 1.195 + startButton.size().height / 2
  );

  actionButtonWidth = canvasWidth * 0.07;
  actionButtonHeight = canvasWidth * 0.0266;

  actionButtonXLeft =
    canvasX +
    (width / 2 - cardWidth * 1.025) -
    canvasWidth * 0.01 -
    actionButtonWidth;
  actionButtonXRight =
    canvasX + (width / 2 + cardWidth * 0.025) + cardWidth + canvasWidth * 0.01;

  actionButtonYFirst = canvasY + canvasHeight / 1.4;
  actionButtonYSecond = canvasY + canvasHeight / 1.275;

  checkCallButton.size(actionButtonWidth, actionButtonHeight);
  checkCallButton.position(actionButtonXLeft, actionButtonYSecond);

  foldButton.size(actionButtonWidth, actionButtonHeight);
  foldButton.position(actionButtonXLeft, actionButtonYFirst);

  raiseAllInButton.size(actionButtonWidth, actionButtonHeight);
  raiseAllInButton.position(actionButtonXRight, actionButtonYFirst);

  raiseAmountSlider.position(actionButtonXRight, actionButtonYSecond);
  raiseAmountSlider.size(actionButtonWidth, actionButtonHeight);

  raiseAmountIndicatorRectX =
    width / 2 + cardWidth * 0.025 + cardWidth + canvasWidth * 0.01;
  raiseAmountIndicatorRectY = canvasHeight / 1.16;

  if (sectionCounter >= 1) {
    userDecision();
    drawUserStackAmount();
    drawComputerStackAmount();
    drawGameRound();
  }

  boardPositionY = canvasHeight / 2 - cardHeight / 2;
  cardWidth = canvasHeight * 0.275 * 0.689;
  cardHeight = canvasHeight * 0.275;

  redrawElements();
}

function deal() {
  //Remove the opening screen elements
  startButton.remove();
  howToPlayButton.remove();
  //Set background to the table
  background(table);

  /*If true, the game will have returned to deal from the flop or
   *later. Thus, the hand is over and needs to be reset. If not
   *true, the sectionCounter still needs to equal one.*/
  if (sectionCounter >= 2) {
    resetHand();
  } else {
    sectionCounter = 1;
  }

  //Increase gameRound by one
  gameRound++;

  /*Account for the big blind and small blind. Have the computer
   *tell the user what is happening.*/
  if (allIn < 1) {
    if (bigBlind == 0) {
      drawBotDecisionIndicator("I have the two chip big blind");
      chipsComputer -= 2;
      chipsComputerRound += 2;
      chipsUser -= 1;
      chipsUserRound += 1;
      pot += 3;
      userDecision();
    } else {
      drawBotDecisionIndicator("You have the two chip big blind");
      chipsComputer -= 1;
      chipsComputerRound += 1;
      chipsUser -= 2;
      chipsUserRound += 2;
      pot += 3;
      botDecision();
    }
  }

  //Make shortenedDeck a copy of deck
  shortenedDeck = [...deck];
  //Shuffle shortenedDeck
  shuffle(shortenedDeck, true);
  for (let i = 0; i < 2; i++) {
    /*Take one card from the shortenedDeck and put it in the
     *computer's hand.*/
    handComputer.push(shortenedDeck.pop());

    /*Take another card from the shortenedDeck and put it in the
     *user's hand*/
    handUser.push(shortenedDeck.pop());
  }

  //Assign the first card in the user's hand to userCard1
  userCard1 = handUser[0];
  //Find the index position of userCard1 in the deck array
  userCard1Img = deckImages[deck.indexOf(userCard1)];

  //Assign the second card in the user's hand to userCard2
  userCard2 = handUser[1];
  //Find the index position of userCard2 in the deck array
  userCard2Img = deckImages[deck.indexOf(userCard2)];

  dealImages();
}

function flop() {
  chipsUserRound = 0;
  chipsComputerRound = 0;

  sectionCounter++;

  //Burn a card
  shortenedDeck.pop();
  for (let i = 0; i < 3; i++) {
    /*Take a card from the shortenedDeck and put in the flopCards
     *array*/
    flopCards.push(shortenedDeck.pop());
  }
  /*Add the flop cards to the user's and computer's hand. Do not
   *remove them from the flopCards array.*/
  splice(handComputer, flopCards, 3);
  splice(handUser, flopCards, 3);

  //Assign the first card in the flopCards array to flopCard1
  flopCard1 = flopCards[0];
  //Find the index position of flopCard1 in the deck array
  flopCard1Img = deckImages[deck.indexOf(flopCard1)];

  //Assign the second card in the flopCards array to flopCard2
  flopCard2 = flopCards[1];
  //Find the index position of flopCard2 in the deck array
  flopCard2Img = deckImages[deck.indexOf(flopCard2)];

  //Assign the third card in the flopCards array to flopCard3;
  flopCard3 = flopCards[2];
  //Find the index position of flopCard3 in the deck array.
  flopCard3Img = deckImages[deck.indexOf(flopCard3)];

  flopImages();

  /*Check if anyone is all in. If not and the computer is the big
   *blind, send for the bot's decision. If not and the user is the
   *big blind, send for the user's decision.*/
  if (allIn < 1) {
    if (bigBlind == 0) {
      botDecision();
    } else {
      userDecision();
    }
  }
}

function turnRiver(section) {
  chipsUserRound = 0;
  chipsComputerRound = 0;

  sectionCounter++;

  //Burn one card
  shortenedDeck.pop();

  //Take one card from shortenedDeck and put it in the array of the specified section.
  section.push(shortenedDeck.pop());

  /*Add the card from the appropriate section into the user's hand
   *and the computer's hand. Do not remove the card from the array of   *the section.*/
  splice(handUser, section, 4);
  splice(handComputer, section, 4);

  //Assign the first card in the turnCards array to turn
  turn = turnCards[0];
  //Find the index position of turn in the deck array
  turnImg = deckImages[deck.indexOf(turn)];

  //Assign the first card in the riverCards array to river
  river = riverCards[0];
  //Find the index position of river in the deck array
  riverImg = deckImages[deck.indexOf(river)];

  //Display the appropriate images
  if (section == turnCards) {
    turnImages();
  } else if (section == riverCards) {
    riverImages();
  }

  /*Check if anyone is all in. If not and the computer is the big
   *blind, send for the bot's decision. If not and the user is the
   *big blind, send for the user's decision.*/
  if (allIn < 1) {
    if (bigBlind == 0) {
      botDecision();
    } else {
      userDecision();
    }
  }
}

function evaluate() {
  //Assign the first card in the computer's hand to computerCard1
  computerCard1 = handComputer[0];
  /*Find the index position of computerCard1 in the deck array. Use
   *this index position to get the string of the variable from
   *deckImages for the appropriate card.*/
  computerCard1Img = deckImages[deck.indexOf(computerCard1)];

  //Assign the second card in the computer's hand to computerCard2
  computerCard2 = handComputer[1];
  computerCard2Img = deckImages[deck.indexOf(computerCard2)];
  /*Find the index position of computerCard2 in the deck array. Use
   *this index position to get the string of the variable from
   *deckImages for the appropriate card.*/

  //Redraw the visible elements.
  redrawElements();
  /*Set showComputerCards to one so that dealImages will show the
   *computer's card face up when called.*/
  showComputerCards = 1;
  dealImages();

  /*Use pokersolver.js to solve the user's hand and the computer's
   *hand.*/
  handUser = Hand.solve(handUser);
  handComputer = Hand.solve(handComputer);

  //Compare the hands using pokersolver.js to determine the winner
  let winner = Hand.winners([handUser, handComputer]);

  /*This if-else statement is relatively straight-forward. The function calls are self-evident.*/
  if (winner.includes(handComputer)) {
    //handComputer.descr uses pokersolver.js
    drawBotDecisionIndicator("I win the pot with a " + handComputer.descr);
    chipsComputer += pot;
    pot = 0;
    if (chipsUser == 0) {
      setTimeout(redrawElements, 5000);
      setTimeout(
        drawBotDecisionIndicator,
        5000,
        "Game over. Good effort, but I've beat you."
      );
    } else {
      setTimeout(redrawElements, 5000);
      setTimeout(drawBotDecisionIndicator, 5000, "Next hand...");
      setTimeout(deal, 5000);
    }
  } else if (winner.includes(handUser)) {
    drawBotDecisionIndicator("You win the pot with a " + handUser.descr);
    chipsUser += pot;
    pot = 0;
    if (chipsComputer == 0) {
      setTimeout(redrawElements, 5000);
      setTimeout(
        drawBotDecisionIndicator,
        5000,
        "Game over. I've been outdeuled."
      );
    } else {
      setTimeout(redrawElements, 5000);
      setTimeout(drawBotDecisionIndicator, 5000, "Next hand...");
      setTimeout(deal, 5000);
    }
  } else {
    /*Odd to BB means that the odd chip goes to the big blind. This
     *is one of my personal touches.*/
    drawBotDecisionIndicator(
      "We tied with a " + handUser.name + ". Split pot. Odd to BB."
    );
    chipsComputer += floor(pot / 2);
    chipsUser += floor(pot / 2);
    pot = 0;
    if (bigBlind == 0) {
      chipsComputer += 1;
    } else {
      chipsUser += 1;
    }
    setTimeout(redrawElements, 5000);
    setTimeout(drawBotDecisionIndicator, 5000, "Next hand...");
    setTimeout(deal, 5000);
  }
}

//Draw the user's hand and the computer's hand
function dealImages() {
  /*Update the variable holding the x-positions of the two cards in
   *a hand*/
  handPositionX1 = width / 2 - cardWidth * 1.025;
  handPositionX2 = width / 2 + cardWidth * 0.025;

  /*Update the variable holding the y-position of the computer's
   *cards.*/
  computerPositionY = height / 2 - cardHeight * 1.7;

  /*Update the variable holding the y-position of user's cards.*/
  userPositionY = height / 2 + cardHeight * 0.7;

  if (showComputerCards == 1) {
    /*Eval takes the string for the variable name of the card that
     *was taken from card images and returns its completion value.
     *This can then be used as the variable name.*/
    image(
      eval(computerCard1Img),
      handPositionX1,
      computerPositionY,
      cardWidth,
      cardHeight
    );
    image(
      eval(computerCard2Img),
      handPositionX2,
      computerPositionY,
      cardWidth,
      cardHeight
    );
  } else {
    image(backOfCard, handPositionX1, computerPositionY, cardWidth, cardHeight);
    image(backOfCard, handPositionX2, computerPositionY, cardWidth, cardHeight);
  }

  image(
    eval(userCard1Img),
    handPositionX1,
    userPositionY,
    cardWidth,
    cardHeight
  );
  image(
    eval(userCard2Img),
    handPositionX2,
    userPositionY,
    cardWidth,
    cardHeight
  );
}

//Draw the flop cards
function flopImages() {
  boardPositionX1 = canvasWidth / 2 - cardWidth * 2.7;
  boardPositionX2 = canvasWidth / 2 - cardWidth * 1.6;
  boardPositionX3 = canvasWidth / 2 - cardWidth / 2;

  image(
    eval(flopCard1Img),
    boardPositionX1,
    boardPositionY,
    cardWidth,
    cardHeight
  );
  image(
    eval(flopCard2Img),
    boardPositionX2,
    boardPositionY,
    cardWidth,
    cardHeight
  );
  image(
    eval(flopCard3Img),
    boardPositionX3,
    boardPositionY,
    cardWidth,
    cardHeight
  );
}

//Draw the turn card
function turnImages() {
  boardPositionX4 = canvasWidth / 2 + cardWidth * 1.6 - cardWidth;

  image(eval(turnImg), boardPositionX4, boardPositionY, cardWidth, cardHeight);
}

//Draw the river card
function riverImages() {
  boardPositionX5 = canvasWidth / 2 + cardWidth * 2.7 - cardWidth;

  image(eval(riverImg), boardPositionX5, boardPositionY, cardWidth, cardHeight);
}

/*This function is assigned to the 'How To Play' button. Upon
 *execution, it takes the user to the GitHub repository for this
 *projection, where a how top play section can be found.
 */
function openHowToPlay() {
  window.open("https://github.com/CampbellWhetter/heads-up-poker.github.io#how-to-play");
}

/*The following for drawing indicators and amounts are relatively
 *self-evident. I will note that each one uses a text box to add
 *aesthetically pleasing contrast. In order to do, I have used
 *textBounds, which, most importantly, provides the width of the
 *text.*/
function drawRaiseAmount() {
  raiseAmountIndicatorTextSize = windowWidth * 0.0115;
  raiseAmountIndicatorTextBoxX =
    width / 2 + cardWidth * 0.025 + cardWidth + canvasWidth * 0.01;
  raiseAmountIndicatorTextBoxY = canvasHeight / 1.17;
  raiseAmountIndicatorTextContents = raiseAmountSlider.value() + " chips";
  raiseAmountIndicatorTextBox = wixMadeFor.textBounds(
    raiseAmountIndicatorTextContents,
    raiseAmountIndicatorTextBoxX,
    raiseAmountIndicatorTextBoxY,
    raiseAmountIndicatorTextSize
  );

  raiseAmountIndicatorRectX =
    width / 2 + cardWidth * 0.025 + cardWidth + canvasWidth * 0.01;
  raiseAmountIndicatorRectY = canvasHeight / 1.17;
  if (raiseAmountIndicatorTextBox.w < actionButtonWidth) {
    raiseAmountIndicatorTextBoxWidth = actionButtonWidth;
  } else {
    raiseAmountIndicatorTextBoxWidth = raiseAmountIndicatorTextBox.w * 1.05;
  }

  fill("black");
  rect(
    raiseAmountIndicatorRectX,
    raiseAmountIndicatorRectY,
    raiseAmountIndicatorTextBoxWidth,
    actionButtonHeight
  );
  fill(0);
  noStroke();

  raiseAmountIndicatorTextX =
    raiseAmountIndicatorTextBoxX + raiseAmountIndicatorTextBoxWidth / 2;
  raiseAmountIndicatorTextY =
    raiseAmountIndicatorTextBoxY + raiseAmountIndicatorTextBox.h * 0.3;

  fill("white");
  textFont(wixMadeFor);
  textSize(raiseAmountIndicatorTextSize);
  textAlign(CENTER, TOP);
  raiseAmountIndicatorText = text(
    raiseAmountIndicatorTextContents,
    raiseAmountIndicatorTextX,
    raiseAmountIndicatorTextY
  );
}

function drawCallAmount() {
  callAmountIndicatorTextSize = windowWidth * 0.0115;
  callAmountIndicatorTextBoxX =
    width / 2 - cardWidth * 1.025 - canvasWidth * 0.01 - canvasWidth * 0.07;
  callAmountIndicatorTextBoxY = canvasHeight / 1.17;
  if (callAmount > 1) {
    callAmountIndicatorTextContents = callAmount + " chips";
  } else {
    callAmountIndicatorTextContents = callAmount + " chip";
  }
  callAmountIndicatorTextBox = wixMadeFor.textBounds(
    callAmountIndicatorTextContents,
    callAmountIndicatorTextBoxX,
    callAmountIndicatorTextBoxY,
    callAmountIndicatorTextSize
  );

  if (callAmountIndicatorTextBox.w < actionButtonWidth) {
    callAmountIndicatorTextBoxWidth = actionButtonWidth;
  } else {
    callAmountIndicatorTextBoxWidth = callAmountIndicatorTextBox.w * 1.05;
  }
  callAmountIndicatorRectX =
    width / 2 -
    cardWidth * 1.025 -
    canvasWidth * 0.01 -
    canvasWidth * 0.07 -
    (callAmountIndicatorTextBoxWidth - actionButtonWidth);
  callAmountIndicatorRectY = canvasHeight / 1.17;

  fill("black");
  rect(
    callAmountIndicatorRectX,
    callAmountIndicatorRectY,
    callAmountIndicatorTextBoxWidth,
    actionButtonHeight
  );
  fill(0);
  noStroke();

  callAmountIndicatorTextX =
    callAmountIndicatorTextBoxX +
    callAmountIndicatorTextBoxWidth / 2 -
    (callAmountIndicatorTextBoxWidth - actionButtonWidth);
  callAmountIndicatorTextY =
    callAmountIndicatorTextBoxY + callAmountIndicatorTextBox.h * 0.3;

  fill("white");
  textFont(wixMadeFor);
  textSize(callAmountIndicatorTextSize);
  textAlign(CENTER, TOP);
  callAmountIndicatorText = text(
    callAmountIndicatorTextContents,
    callAmountIndicatorTextX,
    callAmountIndicatorTextY
  );
}

function drawUserStackAmount() {
  userStackAmountIndicatorTextSize = windowWidth * 0.0115;
  userStackAmountIndicatorTextBoxX = canvasWidth * 0.0125;
  userStackAmountIndicatorTextBoxY =
    canvasHeight / 2 + canvasHeight * 0.125 - actionButtonHeight;
  userStackAmountIndicatorTextContents = "User Stack: " + chipsUser + " chips";
  userStackAmountIndicatorTextBox = wixMadeFor.textBounds(
    userStackAmountIndicatorTextContents,
    userStackAmountIndicatorTextBoxX,
    userStackAmountIndicatorTextBoxY,
    userStackAmountIndicatorTextSize
  );

  userStackAmountIndicatorTextBoxWidth =
    userStackAmountIndicatorTextBox.w + canvasWidth * 0.005;
  userStackAmountIndicatorRectX = canvasWidth * 0.0125;
  userStackAmountIndicatorRectY =
    canvasHeight / 2 + canvasHeight * 0.125 - actionButtonHeight;

  fill("black");
  rect(
    userStackAmountIndicatorRectX,
    userStackAmountIndicatorRectY,
    userStackAmountIndicatorTextBoxWidth,
    actionButtonHeight
  );
  fill(0);
  noStroke();

  userStackAmountIndicatorTextX = userStackAmountIndicatorTextBoxX;
  userStackAmountIndicatorTextY =
    userStackAmountIndicatorTextBoxY + userStackAmountIndicatorTextBox.h * 0.3;

  fill("white");
  textFont(wixMadeFor);
  textSize(userStackAmountIndicatorTextSize);
  textAlign(LEFT, TOP);
  userStackAmountIndicatorText = text(
    userStackAmountIndicatorTextContents,
    userStackAmountIndicatorTextX,
    userStackAmountIndicatorTextY
  );
}

function drawComputerStackAmount() {
  computerStackAmountIndicatorTextSize = windowWidth * 0.0115;
  computerStackAmountIndicatorTextBoxX = canvasWidth * 0.0125;
  computerStackAmountIndicatorTextBoxY =
    canvasHeight / 2 - canvasHeight * 0.125;
  computerStackAmountIndicatorTextContents =
    "Computer Stack: " + chipsComputer + " chips";
  computerStackAmountIndicatorTextBox = wixMadeFor.textBounds(
    computerStackAmountIndicatorTextContents,
    computerStackAmountIndicatorTextBoxX,
    computerStackAmountIndicatorTextBoxY,
    computerStackAmountIndicatorTextSize
  );

  computerStackAmountIndicatorTextBoxWidth =
    computerStackAmountIndicatorTextBox.w + canvasWidth * 0.005;
  computerStackAmountIndicatorRectX = canvasWidth * 0.0125;
  computerStackAmountIndicatorRectY = canvasHeight / 2 - canvasHeight * 0.125;

  fill("black");
  rect(
    computerStackAmountIndicatorRectX,
    computerStackAmountIndicatorRectY,
    computerStackAmountIndicatorTextBoxWidth,
    actionButtonHeight
  );
  fill(0);
  noStroke();

  computerStackAmountIndicatorTextX = computerStackAmountIndicatorTextBoxX;
  computerStackAmountIndicatorTextY =
    computerStackAmountIndicatorTextBoxY +
    computerStackAmountIndicatorTextBox.h * 0.3;

  fill("white");
  textFont(wixMadeFor);
  textSize(computerStackAmountIndicatorTextSize);
  textAlign(LEFT, TOP);
  computerStackAmountIndicatorText = text(
    computerStackAmountIndicatorTextContents,
    computerStackAmountIndicatorTextX,
    computerStackAmountIndicatorTextY
  );
}

function drawGameRound() {
  gameRoundIndicatorTextSize = windowWidth * 0.0115;
  gameRoundIndicatorTextBoxX = canvasWidth * 0.0125;
  gameRoundIndicatorTextBoxY = canvasHeight / 2 - canvasHeight * 0.06;
  gameRoundIndicatorTextContents = "Round: " + gameRound;
  gameRoundIndicatorTextBox = wixMadeFor.textBounds(
    gameRoundIndicatorTextContents,
    gameRoundIndicatorTextBoxX,
    gameRoundIndicatorTextBoxY,
    gameRoundIndicatorTextSize
  );

  gameRoundIndicatorTextBoxWidth =
    gameRoundIndicatorTextBox.w + canvasWidth * 0.005;
  gameRoundIndicatorRectX = canvasWidth * 0.0125;
  gameRoundIndicatorRectY = canvasHeight / 2 - canvasHeight * 0.06;

  fill("black");
  rect(
    gameRoundIndicatorRectX,
    gameRoundIndicatorRectY,
    gameRoundIndicatorTextBoxWidth,
    actionButtonHeight
  );
  fill(0);
  noStroke();

  gameRoundIndicatorTextX = gameRoundIndicatorTextBoxX;
  gameRoundIndicatorTextY =
    gameRoundIndicatorTextBoxY + gameRoundIndicatorTextBox.h * 0.3;

  fill("white");
  textFont(wixMadeFor);
  textSize(gameRoundIndicatorTextSize);
  textAlign(LEFT, TOP);
  gameRoundIndicatorText = text(
    gameRoundIndicatorTextContents,
    gameRoundIndicatorTextX,
    gameRoundIndicatorTextY
  );
}

function drawPot() {
  potIndicatorTextSize = windowWidth * 0.0115;
  potIndicatorTextBoxX = canvasWidth * 0.0125;
  potIndicatorTextBoxY =
    canvasHeight / 2 + canvasHeight * 0.06 - actionButtonHeight;
  potIndicatorTextContents = "Pot: " + pot + " chips";
  potIndicatorTextBox = wixMadeFor.textBounds(
    potIndicatorTextContents,
    potIndicatorTextBoxX,
    potIndicatorTextBoxY,
    potIndicatorTextSize
  );

  potIndicatorTextBoxWidth = potIndicatorTextBox.w + canvasWidth * 0.005;
  potIndicatorRectX = canvasWidth * 0.0125;
  potIndicatorRectY =
    canvasHeight / 2 + canvasHeight * 0.06 - actionButtonHeight;

  fill("black");
  rect(
    potIndicatorRectX,
    potIndicatorRectY,
    potIndicatorTextBoxWidth,
    actionButtonHeight
  );
  fill(0);
  noStroke();

  potIndicatorTextX = potIndicatorTextBoxX;
  potIndicatorTextY = potIndicatorTextBoxY + potIndicatorTextBox.h * 0.3;

  fill("white");
  textFont(wixMadeFor);
  textSize(potIndicatorTextSize);
  textAlign(LEFT, TOP);
  potIndicatorText = text(
    potIndicatorTextContents,
    potIndicatorTextX,
    potIndicatorTextY
  );
}

function drawBotDecisionIndicator(botDecisionIndicatorTextContents) {
  botDecisionIndicatorTextSize = windowWidth * 0.0115;
  botDecisionIndicatorTextBoxX =
    width / 2 + cardWidth * 0.025 + cardWidth + canvasWidth * 0.01;
  botDecisionIndicatorTextBoxY = canvasHeight * 0.055;
  botDecisionIndicatorTextBox = wixMadeFor.textBounds(
    botDecisionIndicatorTextContents,
    botDecisionIndicatorTextBoxX,
    botDecisionIndicatorTextBoxY,
    botDecisionIndicatorTextSize
  );

  botDecisionIndicatorRectX =
    width / 2 + cardWidth * 0.025 + cardWidth + canvasWidth * 0.01;
  botDecisionIndicatorRectY = canvasHeight * 0.055;
  if (botDecisionIndicatorTextBox.w < actionButtonWidth) {
    botDecisionIndicatorTextBoxWidth = actionButtonWidth;
  } else {
    botDecisionIndicatorTextBoxWidth = botDecisionIndicatorTextBox.w * 1.05;
  }

  fill("black");
  rect(
    botDecisionIndicatorRectX,
    botDecisionIndicatorRectY,
    botDecisionIndicatorTextBoxWidth,
    actionButtonHeight
  );
  fill(0);
  noStroke();

  botDecisionIndicatorTextX =
    botDecisionIndicatorTextBoxX + botDecisionIndicatorTextBoxWidth / 2;
  botDecisionIndicatorTextY =
    botDecisionIndicatorTextBoxY + botDecisionIndicatorTextBox.h * 0.3;

  fill("white");
  textFont(wixMadeFor);
  textSize(botDecisionIndicatorTextSize);
  textAlign(CENTER, TOP);
  botDecisionIndicatorText = text(
    botDecisionIndicatorTextContents,
    botDecisionIndicatorTextX,
    botDecisionIndicatorTextY
  );
}

function drawTurnIndicator(turnIndicatorTextContents) {
  turnIndicatorTextSize = windowWidth * 0.0115;
  turnIndicatorTextBoxX =
    width / 2 + cardWidth * 0.025 + cardWidth + canvasWidth * 0.01;
  turnIndicatorTextBoxY = canvasHeight * 0.13;
  turnIndicatorTextBox = wixMadeFor.textBounds(
    turnIndicatorTextContents,
    turnIndicatorTextBoxX,
    turnIndicatorTextBoxY,
    turnIndicatorTextSize
  );

  turnIndicatorRectX =
    width / 2 + cardWidth * 0.025 + cardWidth + canvasWidth * 0.01;
  turnIndicatorRectY = canvasHeight * 0.13;
  if (turnIndicatorTextBox.w < actionButtonWidth) {
    turnIndicatorTextBoxWidth = actionButtonWidth;
  } else {
    turnIndicatorTextBoxWidth = turnIndicatorTextBox.w * 1.1;
  }

  fill("black");
  rect(
    turnIndicatorRectX,
    turnIndicatorRectY,
    turnIndicatorTextBoxWidth,
    actionButtonHeight
  );
  fill(0);
  noStroke();

  turnIndicatorTextX = turnIndicatorTextBoxX + turnIndicatorTextBoxWidth / 2;
  turnIndicatorTextY = turnIndicatorTextBoxY + turnIndicatorTextBox.h * 0.3;

  fill("white");
  textFont(wixMadeFor);
  textSize(turnIndicatorTextSize);
  textAlign(CENTER, TOP);
  turnIndicatorText = text(
    turnIndicatorTextContents,
    turnIndicatorTextX,
    turnIndicatorTextY
  );
}

function updateText() {
  drawRaiseAmount();
}

function botDecision() {
  redrawElements();
  //Let the user know that it is the computer's turn
  drawTurnIndicator("My turn...");

  //Call the bot decision algorithm
  algorithm();

  /*Hide the action buttons so that the user cannot play for the
   *time being.*/
  foldButton.hide();
  checkCallButton.hide();
  raiseAllInButton.hide();
  raiseAmountSlider.hide();

  if (decision == 1) {
    if (allIn >= 1) {
      /*If the bot calls the all in by the user, the round should continue until the end. 
       *There are no more opportunities for betting.*/
      
      if (sectionCounter >= 1) {
        flop();
      }
      if (sectionCounter >= 2) {
        turnRiver(turnCards);
      }
      if (sectionCounter >= 3) {
        turnRiver(riverCards);
      }
      if (sectionCounter >= 4) {
        evaluate();
      }
    } else {
      if (chipsUserRound > chipsComputerRound) {
        /*If the bot decision is equal to 1, meaning check/call and there is a difference 
         *between chipsUserRound and chipsComputerRound, the bot will call the amount of 
         *that difference.*/
        
        callAmount = chipsUserRound - chipsComputerRound;

        pot += callAmount;
        chipsComputerRound += callAmount;
        chipsComputer -= callAmount;
        drawBotDecisionIndicator("I call");
      } else {
        /*If the bot decision is equal to 1, meaning check/call and there is no 
        difference between chipsUserRound and chipsComputerRound, the bot will check.*/
        
        drawBotDecisionIndicator("I check");
      }
      if (bigBlind == 0) {
        if (sectionCounter >= 2) {
          if (sectionCounter == 2) {
            setTimeout(userDecision, 1500);
          } else if (sectionCounter == 3) {
            setTimeout(userDecision, 1500);
          } else if (sectionCounter == 4) {
            setTimeout(userDecision, 1500);
          }
        } else {
          setTimeout(flop, 1500);
        }
      } else {
        if (sectionCounter == 1) {
          if (callCounterComputer == 1) {
            setTimeout(flop, 1500);
          } else {
            setTimeout(userDecision, 1500);
          }
          callCounterComputer++;
        } else if (sectionCounter == 2) {
          setTimeout(function () {
            turnRiver(turnCards);
          }, 1500);
        } else if (sectionCounter == 3) {
          setTimeout(function () {
            turnRiver(riverCards);
          }, 1500);
        } else if (sectionCounter == 4) {
          setTimeout(evaluate, 1500);
        }
      }
    }
  } else if (decision == 2) {
    chipsUser += pot;
    redrawElements();
    resetHand();

    drawBotDecisionIndicator("I fold");
    drawTurnIndicator("Next hand...");
    setTimeout(redrawElements, 1500);
    if (bigBlind == 0) {
      setTimeout(function () {
        drawBotDecisionIndicator("I have the two chip big blind");
      }, 1500);
    } else {
      setTimeout(function () {
        drawBotDecisionIndicator("You have the two chip big blind");
      }, 1500);
    }
    setTimeout(deal, 3000);
  } else if (decision == 3) {
    if (
      (chipsUser == 1 && chipsComputer >= 1) ||
      (chipsComputer == 1 && chipsUser >= 1)
    ) {
      computerRaiseAmount = 1;
      print("This is trigerred");
    } else {
      r2 = random(1, 100);
      if (r2 <= 40) {
        r3 = random(0.1, 0.2);
      } else if (r2 > 40 && r2 <= 70) {
        r3 = random(0.2, 0.3);
      } else if (r2 > 70 && r2 <= 90) {
        r3 = random(0.3, 0.5);
      }

      if (r2 > 90) {
        if (chipsUser <= chipsComputer) {
          computerRaiseAmount = chipsUser;
        } else {
          computerRaiseAmount = chipsComputer;
        }
      } else {
        if (chipsUser <= chipsComputer) {
          computerRaiseAmount =
            chipsComputerRound -
            chipsUserRound +
            floor((chipsUser - (chipsComputerRound - chipsUserRound)) * r3);
        } else {
          computerRaiseAmount =
            chipsUserRound -
            chipsComputerRound +
            floor(
              (chipsComputer - (chipsComputerUser - chipsComputerRound)) * r3
            );
        }
      }
    }
    if (computerRaiseAmount == chipsComputer) {
      drawBotDecisionIndicator("All In!");
      allIn = 2;
    } else {
      drawBotDecisionIndicator("I raise " + computerRaiseAmount + " chips");
    }

    pot += computerRaiseAmount;
    chipsComputerRound += computerRaiseAmount;
    chipsComputer -= computerRaiseAmount;
    userDecision();
  }
}

function userDecision() {
  drawTurnIndicator("Your Turn...");
  print("Yes");

  if (bigBlind == 0 && sectionCounter == 1) {
    checkCallButton.html("Call");
    callAmount = chipsComputerRound - chipsUserRound;

    checkCallButton.show();
    foldButton.show();
    raiseAllInButton.show();
    raiseAmountSlider.attribute("min", callAmount + 1);
    raiseAmountSlider.show();
    drawRaiseAmount();
    drawCallAmount(callAmount);
  } else if (bigBlind == 1 && sectionCounter == 1) {
    if (decision == 1) {
      redrawElements();

      foldButton.show();
      checkCallButton.html("Check");
      checkCallButton.show();
      raiseAllInButton.show();
      raiseAmountSlider.show();
      drawRaiseAmount();
    }
    if (decision == 3) {
      foldButton.show();
      checkCallButton.html("Call");
      checkCallButton.show();
      callAmount = chipsComputerRound - chipsUserRound;
      drawCallAmount(callAmount);
      raiseAmountSlider.attribute("min", callAmount + 1);
      raiseAllInButton.show();
      raiseAmountSlider.show();
    }
  } else if (bigBlind == 0 && sectionCounter > 1) {
    if (decision == 1) {
      redrawElements();

      foldButton.show();
      checkCallButton.html("Check");
      checkCallButton.show();
      raiseAllInButton.show();
      raiseAmountSlider.show();
      drawRaiseAmount();
    }
    if (decision == 3) {
      callAmount = chipsComputerRound - chipsUserRound;
      if (allIn == 1) {
        raiseAmountSlider.hide();
        raiseAllInButton.hide();
        foldButton.hide();
        checkCallButton.hide();
      } else if (allIn == 2) {
        raiseAllInButton.hide();
        foldButton.show();
        checkCallButton.html("Call");
        checkCallButton.show();
        drawCallAmount(callAmount);
      } else {
        raiseAmountSlider.attribute("min", callAmount + 1);
        raiseAllInButton.show();
        raiseAmountSlider.show();
        foldButton.show();
        checkCallButton.html("Call");
        checkCallButton.show();
        drawCallAmount(callAmount);
      }
    }
  } else if (bigBlind == 1 && sectionCounter > 1) {
    redrawElements();

    foldButton.show();
    checkCallButton.html("Check");
    checkCallButton.show();
    raiseAllInButton.show();
    raiseAmountSlider.show();
    drawRaiseAmount();
  }
}

function fold() {
  chipsComputer += pot;
  resetHand();

  redrawElements();

  drawBotDecisionIndicator("Next hand...");
  setTimeout(redrawElements, 1500);
  if (bigBlind == 0) {
    setTimeout(drawBotDecisionIndicator, 1500, "I have the two chip big blind");
  } else {
    setTimeout(function () {
      drawBotDecisionIndicator("You have the two chip big blind");
    }, 1500);
  }
  setTimeout(deal, 3000);
}

function checkCall() {
  callAmount = chipsComputerRound - chipsUserRound;

  chipsUser -= callAmount;
  chipsUserRound += callAmount;
  pot += callAmount;
  callCounter++;

  if (chipsUser == 0 || chipsComputer == 0 || allIn == 2) {
    if (sectionCounter == 1) {
      flop();
    }
    if (sectionCounter == 2) {
      turnRiver(turnCards);
    }
    if (sectionCounter == 3) {
      turnRiver(riverCards);
    }
    if (sectionCounter == 4) {
      evaluate();
    }
  } else {
    if (bigBlind == 0) {
      if (sectionCounter == 1) {
        setTimeout(botDecision, 1000);
      } else {
        if (sectionCounter == 2) {
          setTimeout(function () {
            turnRiver(turnCards);
          }, 1000);
        } else if (sectionCounter == 3) {
          setTimeout(function () {
            turnRiver(riverCards);
          }, 1000);
        } else if (sectionCounter == 4) {
          setTimeout(evaluate, 1000);
        }
      }
    } else {
      if (sectionCounter == 1) {
        setTimeout(flop, 1000);
      } else {
        botDecision();
      }
    }
  }
  callCounter = 0;
}

function raiseAllIn() {
  chipsUser -= raiseAmountSlider.value();
  chipsUserRound += raiseAmountSlider.value();
  pot += raiseAmountSlider.value();

  raiseCounter++;

  if (
    raiseAmountSlider.value() == chipsUser ||
    raiseAmountSlider.value() == chipsComputer
  ) {
    allIn = 1;
  }

  if (raiseAmountSlider.value() >= 1) {
    botDecision();
  }
}

function resetHand() {
  handUser = [];
  handComputer = [];
  shortenedDeck = [];
  flopCards = [];
  turnCards = [];
  riverCards = [];
  sectionCounter = 1;
  pot = 0;
  chipsComputerRound = 0;
  chipsUserRound = 0;
  showComputerCards = 0;
  callCounter = 0;
  raiseCounter = 0;
  raiseCounterComputer = 0;
  bluff = 0;
  allIn = 0;

  foldButton.hide();
  checkCallButton.hide();
  raiseAllInButton.hide();
  raiseAmountSlider.hide();

  if (bigBlind == 0) {
    bigBlind = 1;
  } else {
    bigBlind = 0;
  }
}

/*In explaining my bot, I have provided insight into what I want a
 *section of my code to accomplish and then provided the code.
 *Remember decision = 1 means call/check, decision = 2 means fold,
 *and decision = 3 means raise.*/
function algorithm() {
  //Get the index position of computerCard1 in the deck
  let computerCard1Index = deck.indexOf(computerCard1);
  //Get the index position of computerCard2 in the deck
  let computerCard2Index = deck.indexOf(computerCard2);
  //Generate a random number between 1 and 100
  let r = random(1, 100);

  /*pokersolver.js needs at least three cards (hand + board) to
   *work. Therefore, we can only solve the hand when it is the
   *flop or latter.*/
  if (sectionCounter >= 2) {
    handComputerRank = Hand.solve(handComputer);
  }

  if (sectionCounter == 1) {
    /*If it is the deal, the bot is more willing to call or 
     *raise as it will cost less. Therefore, the bot is 
     *measuring for only the equivalent of an two eights.*/
    if (computerCard1Index + computerCard2Index >= 48) {
      /*If the bot is not the big blind, it can either fold, 
       *call, or raise. With a hand of this strength, the bot 
       *will never
       *fold. Most likely, it will call.*/
      if (bigBlind == 1) {
        if (r <= 80) {
          decision = 1;
        } else if (r > 80) {
          decision = 3;
        }
      }

      /*If the bot is the big blind, it should only fold if 
       *there has been a raise or reraise. And folding should 
       *occur infrequently. Most of the time it will call and 
       *some of the time it will raise.*/
      else if (bigBlind == 0) {
        if (r <= 60) {
          decision = 1;
        } else if (r > 60 && r <= 90) {
          if (chipsComputerRound >= chipsUserRound) {
            decision = 1;
          } else {
            decision = 2;
          }
        } else if (r > 90) {
          decision = 3;
        }
      }
    } else {
      /*If the bot has worse than the equivalent of two eights 
       *on the deal, it should be more cautious. In this same 
       *situation with better than the equivalent of
       *two eights, the bot raised about 20% of the time. Now, 
       *the bot only raises about 4% of the time.*/
      if (bigBlind == 1) {
        if (r <= 95) {
          decision = 1;
        } else if (r > 96) {
          decision = 3;
        }
      } else if (bigBlind == 0) {
      /*With a worse hand, the bot should be less willing to 
       *call raises and reraises. Note: calling raises and 
       *resaises is handle by the first else if statement.*/
        if (r <= 40) {
          decision = 1;
        } else if (r > 40 && r <= 90) {
          console.log(chipsUserRound);
          console.log(chipsComputerRound);
          if (chipsComputerRound >= chipsUserRound) {
            decision = 1;
          } else {
            decision = 2;
          }
        } else if (r > 90) {
          decision = 3;
        }
      }
    }
  } else if (sectionCounter >= 2) {
    /*Now that hand is at or the flop, a hand combined with the 
     *board will be larger than three cards. Thus, the bot can 
     *use pokersolver.js to get the rank of its hand, where 
     *higher is better.*/

    if (bigBlind == 1) {
      /*If the raiseCounter is equal to zero, the user has not
       *raised. Therefore, it will cost the bot nothing to 
       *check. If the bot has a poor hand, it will check.*/
      if (raiseCounter == 0) {
        if (handComputerRank <= 4) {
          decision = 1;
        }
      } else {
        if (handComputerRank >= 2) {
          /*If the raiseCounter is not equal to zero, the
           *user has raised. If the bot has better than or equal 
           *to the equivalent of two nines and the hand rank is 
           *better than or equal to two pairs, it will decide 
           *between calling and reraising.*/
          if (computerCard1Index + computerCard2Index >= 56) {
            if (r <= 50) {
              decision = 3;
            } else if (r > 50 && r < 95) {
              decision = 1;
            } else {
              if (chipsComputerRound >= chipsUserRound) {
                decision = 1;
              } else {
                decision = 2;
              }
            }
          } else {
            /*If the raiseCounter is not equal to zero, the 
            *user has raised. If the bot has worse than the 
            *equivalent of two nines and the hand rank is better 
            *than or equal to two pairs, it will decide between 
            *calling and reraising. However, with a worse hand, 
            *it will be less to raise*/
            if (r <= 20) {
              decision = 3;
            } else if (r > 21 && r < 80) {
              decision = 1;
            } else {
              console.log(chipsUserRound);
              console.log(chipsComputerRound);
              if (chipsComputerRound >= chipsUserRound) {
                decision = 1;
              } else {
                decision = 2;
              }
            }
          }
        } else {
          /*If the raiseCounter is not equal to zero, the 
          *user has raised. If the hand rank is worse than two 
          *pairs, it will likely fold*/
          if (r <= 5) {
            decision = 3;
          } else if (r > 21 && r < 80) {
            decision = 1;
          } else {
            console.log(chipsUserRound);
            console.log(chipsComputerRound);
            if (chipsComputerRound >= chipsUserRound) {
              decision = 1;
            } else {
              decision = 2;
            }
          }
        }
      }
    } else {
      /*If the bot is the big blind and the hand is later than 
       *or at the flop, the bot will go first. If the bot goes 
       *first it can more easily decide if it wants to bluff. If 
       *it does, it will raise far more often and will never 
       *fold.*/

      if (bluff == 0) {
        let computerCallAmount = chipsUserRound - chipsComputerRound;
        if (handComputerRank >= 3) {
          if (chipsComputer / computerCallAmount > 0.75) {
            if (computerCard1Index + computerCard2Index >= 80) {
              if (sectionCounter >= 3) {
                /*If the computer's hand is better than or equal 
                 *to a three pair, the two cards are equal to or 
                 *greater than the equivalent of two queees, and 
                 *the amount to call would be more than 75% of 
                 *the user's chips, the bot is very likely to 
                 *call with a good change to raise*/

                if (r <= 70) {
                  decision = 1;
                } else if (r > 71 && r < 95) {
                  decision = 3;
                } else {
                  console.log(chipsUserRound);
                  console.log(chipsComputerRound);
                  if (chipsComputerRound >= chipsUserRound) {
                    decision = 1;
                  } else {
                    decision = 2;
                  }
                }
              } else {
              /*If it is earlier in the game than turn, the bot 
               *will have put less into the pot and will be more 
               *inclined to fold.*/
                if (r <= 50) {
                  decision = 1;
                } else if (r > 51 && r < 65) {
                  decision = 3;
                } else {
                  console.log(chipsUserRound);
                  console.log(chipsComputerRound);
                  if (chipsComputerRound >= chipsUserRound) {
                    decision = 1;
                  } else {
                    decision = 2;
                  }
                }
              }
            }
          } else {
            /*If the computer's hand is better than or equal to
             *a three pair, the two cards are worse
             *than the equivalent of two queees, and the amount
             *to call would be less than or equal to 75% of the
             *user's chips, the bot will be more inclined to 
             *call and less inclined to raise.*/
            if (r <= 10) {
              decision = 1;
            } else if (r > 11 && r < 17) {
              decision = 3;
            } else {
              console.log(chipsUserRound);
              console.log(chipsComputerRound);
              if (chipsComputerRound >= chipsUserRound) {
                decision = 1;
              } else {
                decision = 2;
              }
            }
          }
        } else {
          /*If the computer's hand is worse than
           *a three pair, the two cards are worse
           *than the equivalent of two queees, and the amount
           *to call would be less than or equal to 75% of the
           *user's chips, the bot may want to bluff. If it does 
           *not bluff, it is likely to call.*/
          if (r <= 10) {
            decision = 1;
          } else if (r > 11 && r < 20) {
            decision = 3;
            bluff = 1;
          } else {
            console.log(chipsUserRound);
            console.log(chipsComputerRound);
            if (chipsComputerRound >= chipsUserRound) {
              decision = 1;
            } else {
              decision = 2;
            }
          }
        }
      } else {
        if (r <= 50) {
          decision = 1;
        } else {
          decision = 3;
        }
      }
    }
    if (allIn == 1 && decision == 3) {
      decision = 1;
      print("This was called");
    }
  }
}

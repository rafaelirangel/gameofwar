
//GAME RULES//
// // The goal is to be the first player to win all 52 cards
// // The Deal
// // The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them.
// // The Play
// // Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.
// // If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards).
// // If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.
// // How to Keep Score
// // The game ends when one player has won all the cards.

//Pseudocode
// Create variables to place "suits, rank and score
// Build the main deck of cards with those 3 values. Shuffle the cards and divide it evenly between the two players deck
// Start the game and check who on or if there is a tie (Use if statement to to compare cards value and increase players score.)
// If there is a tie, start the war.
// Check who on and keep going untill the players run out of cards.
// Check who is the winner and ask if they want to play again.

//Use shift() to return the first value of the deck (the first card) then create an array [] to add the value of those cards, check winner, uptade html and update score
//simple way of implementing, don't worry about the tie at first. split the deck, keep looping until one of those arrays are empty, 
//worry about what happens if there is a tye 4 card


//Arrays with suit, rank and score
const suit = ["hearts", "spades", "clubs", "diamonds"]
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

//Arrays
let playerDeck = []
let computerDeck =[]
let playerCard = []
let computerCard = []
let gamePlay =[]
let warDeck = []

//Create the cards, the deck of cards, shuffle it and split it in half.
//build the cards with these three elements together.
class Card{
    constructor(suit, rank, score){
      this.suit = suit
      this.rank = rank
      this.score = score
  }
}

//create an array to hold the deck of cards
class Deck{
  constructor(cards){
    this.cards = []
  }
  
  //going through the arrays and pushing avery single card, rank and suit to the array above (cards)
  deckOfCards() {
    for(let i = 0; i < suit.length; i++){
      for(let j = 0; j < score.length; j++){
       const newCard = new Card(suit[i], rank[j], score[j])
        this.cards.push(newCard)
      }
    }
  }
  
  //shuffling the cards 
  shuffle(){
    for (let i = this.cards.length - 1; i > 0; i--) {
        let randomCard = Math.floor(Math.random() * (i + 1));
        let oldValue = this.cards[randomCard];
        this.cards[randomCard] = this.cards[i];
        this.cards[i] = oldValue;
        }
  
      }
//Spliting DeckofCards between the two players
  dealTheCards(){
    let deckMidPoint = (deck.cards.length / 2)    
    let firstHalf = (deck.cards.slice(0, deckMidPoint));
    let secondHalf = (deck.cards.slice(deckMidPoint, deck.cards.length))
    playerDeck = firstHalf;
    computerDeck = secondHalf
    }
}

//invoking the funcs and creating and an instance for the Deck class
const deck = new Deck()
deck.deckOfCards()
deck.shuffle()
deck.dealTheCards()



let count = 0
while (playerDeck.length > 0 && computerDeck.length > 0) {
  count++;

  playerCard = playerDeck.shift()
  computerCard = computerDeck.shift()

  gamePlayDeck = [playerCard, computerCard]
  

  if(gamePlayDeck[0].score > gamePlayDeck[1].score){
    console.log(`Player plays: ${playerCard.rank},  Computer plays: ${computerCard.rank}, -->  Players wins`)
    playerDeck.push(...gamePlayDeck)
    gamePlayDeck.splice(0, gamePlayDeck.length)
    console.log(`Current Score: Player = ${playerDeck.length}, Computer = ${computerDeck.length}`)
  }
  else if(gamePlayDeck[0].score < gamePlayDeck[1].score){
    console.log(`Player plays: ${playerCard.rank}, Computer plays: ${computerCard.rank}, --> Computer wins`)
    computerDeck.push(...gamePlayDeck)
    gamePlayDeck.splice(0, gamePlayDeck.length)
    console.log(`Current Score: Player = ${playerDeck.length}, Computer = ${computerDeck.length}`)

  }
  else{
    console.log("It is a tie, let's go to war")
    break
  }

}

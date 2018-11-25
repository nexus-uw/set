import { Board, Card, Deck } from './types'
import { SET_SIZE, TOTAL_CARDS_IN_DECK, PROPERTIES } from './constants';

export function shuffleDeck(deck: Deck, times: number = TOTAL_CARDS_IN_DECK) {
    for (let i = 0; i < times; i++) {
        const a = Math.floor(Math.random() * TOTAL_CARDS_IN_DECK)
        const b = Math.floor(Math.random() * TOTAL_CARDS_IN_DECK)
        const tmp = Object.assign({}, deck[b]);
        deck[b] = deck[a]
        deck[a] = tmp;
    }
}

export function generateDeck(): Deck {
    const deck: Deck = [];
    PROPERTIES.forEach(_ => { })

    // this will not scale to new number of props to match on

    for (let colour = 0; colour < SET_SIZE; colour++) {
        for (let shape = 0; shape < SET_SIZE; shape++) {
            for (let count = 0; count < SET_SIZE; count++) {
                for (let pattern = 0; pattern < SET_SIZE; pattern++) {
                    deck.push(<Card>{
                        colour,
                        shape,
                        count,
                        pattern
                    })
                }
            }
        }
    }
    console.assert(deck.length === TOTAL_CARDS_IN_DECK, `expected ${TOTAL_CARDS_IN_DECK} cards in the new deck. got ${deck.length}`)
    return deck;
}

export function generateBoard(deck: Deck, square: number = 3): Board {
    const board: Board = []
    for (let x = 0; x < square; x++) {
        board[x] = [];
        for (let y = 0; y < square; y++) {
            board[x][y] = deck.shift();
        }
    }
    return board;
}

/**
 * take card from deck, and place it on spot on board
 * if no cards exist in the deck, will be set to null
 * @param board modify given board
 * @param x 
 * @param y 
 */
export function replaceCardInBoard(deck: Deck, board: Board, x: number, y: number) {
    board[x][y] = deck.shift() || null;
}


export function increaseBoardSize(deck: Deck, board: Board) {
    const size = board.length;
    board[size] = [];
    // add one card to bottom of all existing columns
    for (let x = 0; x < size; x++) {
        board[x][size] = deck.shift();
    }

    // add new column 
    for (let y = 0; y < size; y++) {
        board[size][y] = deck.shift();
    }
    // add new corner card
    board[size][size] = deck.shift();
}
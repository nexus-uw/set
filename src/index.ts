import { generateDeck, shuffleDeck, generateBoard, replaceCardInBoard, increaseBoardSize } from "./deck";
import { findSet } from "./search";
import { SET_SIZE, TOTAL_CARDS_IN_DECK } from "./constants";

const SIZE = SET_SIZE;


const deck = generateDeck();
shuffleDeck(deck, TOTAL_CARDS_IN_DECK * 5);
let count = 0;
const board = generateBoard(deck, SET_SIZE);
let boardSize = SIZE;
do {

    const set = findSet(boardSize, board)

    if (!set) {
        if (deck.length > boardSize * 2 - 1) {
            increaseBoardSize(deck, board);
            boardSize++;
            console.debug('increased board size to ' + boardSize)
        } else {
            console.log(`found: ${count} sets (${Math.round(count * SET_SIZE / TOTAL_CARDS_IN_DECK * 100)}% cards matched). final board size ${boardSize}`)
            break;
        }
    } else {
        console.log(set)
        count++;
        set.forEach(i => replaceCardInBoard(deck, board, i.x, i.y))
    }
} while (true)


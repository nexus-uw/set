import { Board, Set } from "./types";
import { checkCards } from "./compare";
import { SET_SIZE } from "./constants";

export function findSet(size: number, board: Board, inprogressSet: Set = []): Set {


    if (inprogressSet.length === SET_SIZE) {
        if (checkCards(inprogressSet[0].card, inprogressSet[1].card, inprogressSet[2].card)) {
            // assumes that SET_SIZE = 3
            return inprogressSet;
        }
        else { return null }
    }

    console.assert(inprogressSet.length < SET_SIZE, 'inprogressSet.length > SET_SIZE')


    let startX, startY;
    if (inprogressSet.length > 0) {
        const start = inprogressSet[inprogressSet.length - 1]
        startX = start.x;
        startY = start.y;
    } else {
        startX = 0;
        startY = 0;
    }

    // dumb brut force search, does not remember anything it has looked at
    // todo: need to start at start of column for the next row 
    for (let x = startX; x < size; x++) {

        for (let y = (x === startX ? startY : 0); y < size; y++) {
            if (x === startX && y === startY) {
                continue; // dont compare against self 
            } else if (inprogressSet.length < SET_SIZE) {
                const set = findSet(size, board, [...inprogressSet, { x, y, card: board[x][y] }]);
                if (set) {
                    return set;
                }
            }
        }
    }
    return null; // did not find anything
}
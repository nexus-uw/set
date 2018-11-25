import { Card } from "./types";
import { PROPERTIES } from "./constants";

// note all these assume that SET_SIZE = 3;
// TODO: update functions to handle arbitrary number of cards

// /**
//  * do the cards match on all properties?
//  * @param card1 
//  * @param card2 
//  */
// export function exactMatch(card1:Card, card2:Card):boolean {
//     return card1.colour === card2.colour &&
//     card1.count === card2.count &&
//     card1.shape === card2.shape ;
// }

// /**
//  * do the cards have no matching properties?
//  * @param card1 
//  * @param card2 
//  */
// export function exactOpposite(card1:Card, card2:Card):boolean {
//     return card1.colour !== card2.colour &&
//     card1.count !== card2.count &&
//     card1.shape !== card2.shape ;
// }

/**
 * check if the cards are all the same or all different for the given property
 * @param prop 
 * @param card1 
 * @param card2 
 * @param card3 
 */
function check(prop: string, card1: Card, card2: Card, card3: Card): boolean {
    if (!card1 || !card2 || !card3) {
        // handle checking empty slots on the board just before they fail due to cant read prop on undefined.
        return false;
    }
    const allSame = card1[prop] === card2[prop] && card1[prop] === card3[prop];
    const allDifferent = card1[prop] !== card2[prop] && card1[prop] !== card3[prop] && card2[prop] !== card3[prop];
    return allSame || allDifferent;
}

/**
 * do set check if valid
 * @param card1 
 * @param card2 
 * @param card3 
 */
export function checkCards(card1: Card, card2: Card, card3: Card): boolean {
    return PROPERTIES.reduce((bool, prop) => bool && check(prop, card1, card2, card3), true);
}
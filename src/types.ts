export enum Colour {
    blue = 0,
    green,
    purple
}

export enum Shape {
    square = 0,
    triangle,
    circle
}

export enum Pattern {
    solid = 0,
    outline,
    lines
}

/**
 * must match PROPERTIES constant
 */
export interface Card {
    colour: Colour;
    /**
     * int between 0 and SET_SIZE-1 const
     */
    count: number;
    shape: Shape;
    pattern: Pattern;
}

// array grid of cards
export declare type Board = Array<Array<Card>>;

export interface Selection { x: number; y: number; card: Card };
export declare type Set = Array<Selection>;
export declare type Deck = Array<Card>;
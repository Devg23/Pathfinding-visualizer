export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIGURATION = {
    row: 1,
    col: 1,
    isEnd: false,
    isWall: false,
    isPath: false,
    distance: 0,  // Start tile has distance 0
    isStart: true, // Fix: should be true for start tile
    isTraversed: false,
    parent: null,
};

export const END_TILE_CONFIGURATION = {
    row: MAX_ROWS - 2,
    col: MAX_COLS - 2,
    isEnd: true,   // Fix: should be true for end tile
    isWall: false,
    isPath: false,
    distance: Infinity, // Fix: initially Infinity for end tile
    isStart: false,
    isTraversed: false,
    parent: null,
};

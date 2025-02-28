import { MAX_ROWS, MAX_COLS } from "./constants";
import { GridType, TileType } from "./Types";

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
    const currentRow = [];
    for (let col = 0; col < MAX_COLS; col++) { // Fix: changed "<=" to "<"
        currentRow.push({
            row,
            col,
            isEnd: row === endTile.row && col === endTile.col, // Fix: Ensure endTile is an object
            isWall: false,
            isPath: false,
            distance: Infinity,
            isStart: row === startTile.row && col === startTile.col, // Fix: Ensure startTile is an object
            isTraversed: false,
            parent: null,
        });
    }
    return currentRow;
};

export const createGrid = (startTile: TileType, endTile: TileType) => {
    const grid: GridType = [];
    for (let row = 0; row < MAX_ROWS; row++) { // Fix: changed "<=" to "<"
        grid.push(createRow(row, startTile, endTile));
    }
    return grid;
};

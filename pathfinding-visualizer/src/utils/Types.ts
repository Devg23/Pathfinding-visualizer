export type AlgorithmType = "DIJKSTRA" | "A_star" | "BFS" | "DFS";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export type TileType = {
    row: number;
    col: number;
    isEnd: boolean;  // Fix: Changed from number to boolean
    isWall: boolean; // Fix: Changed from number to boolean
    isPath: boolean;
    distance: number;
    isStart: boolean;
    parent: TileType | null;
};

export type GridType = TileType[][];

import { useState, ReactNode, createContext } from "react";
import { TileType } from "../utils/Types";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";

interface TileContextInterface {
    startTile: TileType;
    setStartTile: (startTile: TileType) => void;
    endTile: TileType;
    setEndTile: (endTile: TileType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined);

export const TileProvider = ({ children }: { children: ReactNode }) => {
    const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIGURATION);
    const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION);

    return (
        <TileContext.Provider
            value={{
                startTile,
                setStartTile,
                endTile,
                setEndTile, // Fix: corrected typo (setendTile → setEndTile)
            }}
        >
            {children}
        </TileContext.Provider>
    );
};

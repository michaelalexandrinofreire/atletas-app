import { AiFillStar } from "react-icons/ai";
import React, { useState } from 'react';

export interface PlayerProps {
    player: {
        player_image: string;
        player_name: string;
        player_age: string;
        team_name: string;
    };
    onFavoriteToggle: (player: PlayerProps["player"]) => void;
}

export default function Player({ player, onFavoriteToggle }: PlayerProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        onFavoriteToggle(player);
    };

    return (
        <div className="w-44 bg-yellow-500 rounded-lg justify-center items-center flex flex-col py-3 relative">
            <div className="relative justify-center items-center">
                <img src={player.player_image} alt={player.player_name} className="w-32 h-32 rounded-full" />
                <button
                    className={`absolute bg-green-400 p-1 rounded-full bottom-5 right-0 ${isFavorite ? 'text-yellow-500' : 'white'}`}
                    onClick={toggleFavorite}
                >
                    <AiFillStar />
                </button>
            </div>
            <div className="justify-center items-start">
                <p className="text-center"> <span className="text-blue-700 font-bold">Nome:</span> {player.player_name}</p>
                <p className="text-center"> <span className="text-blue-700 font-bold">Idade:</span> {player.player_age}</p>
                <p className="text-center"> <span className="text-blue-700 font-bold">Time:</span> {player.team_name}</p>
            </div>
        </div>
    )
}

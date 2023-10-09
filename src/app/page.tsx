"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Player from './components/Player';
import { PlayerProps } from './components/Player';

export default function Home() {
  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState([]);
  const API_KEY = '89216a0f2caa92bc7cfe9a4de79cecbc35feab2955d4f6b88478715113426cc3';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://apiv3.apifootball.com/?action=get_players&player_name=${playerName}&APIkey=${API_KEY}`
      );

      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const [favoritePlayers, setFavoritePlayers] = useState<PlayerProps["player"][]>([]);
  const handleFavoriteToggle = (player: PlayerProps["player"]) => {
    if (favoritePlayers.some((p) => p.player_name === player.player_name)) {
      const updatedFavorites = favoritePlayers.filter((p) => p.player_name !== player.player_name);
      setFavoritePlayers(updatedFavorites);
    } else {
      setFavoritePlayers([...favoritePlayers, player]);
    }
  };


  const [showFavoritePlayers, setShowFavoritePlayers] = useState(false);

  const handleToggleFavoritePlayers = () => {
    setShowFavoritePlayers(!showFavoritePlayers);
  };

  return (
    <div className="flex flex-col items-center pt-8 bg-blue-900 min-h-screen">
      <Navbar onFavoriteToggle={handleToggleFavoritePlayers} />
      <div className='flex flex-col justify-center items-center'>
        <Search onChange={handleInputChange} onSearch={handleSearch} value={playerName}/>
      </div>
      {players.length > 0 && (
        <div className=''>
          <ul className='w-[80vw] flex gap-7 my-10 justify-center flex-wrap'>
            {players.map((player: any) => (
              <li key={player.player_id}>
                <Player onFavoriteToggle={handleFavoriteToggle} player={player}/>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showFavoritePlayers && (
        <div className='bg-slate-200 w-[62vw] p-6 rounded-lg mb-10 absolute top-24'>
          <h2 className='font-bold text-center mb-10 bg-slate-500 py-2 rounded-lg'>Meus jogadores favoritos:</h2>
          <div className='flex flex-wrap gap-7 justify-start'>
            {favoritePlayers.map((player, index) => (
              <Player key={index} player={player} onFavoriteToggle={handleFavoriteToggle}/>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


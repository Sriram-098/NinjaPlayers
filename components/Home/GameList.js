"use client"

import React, { useState, useEffect } from 'react';
import Data from './../../shared/Data';

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames(Data.GameList);
    }, []);

    return (
        <div className="flex justify-between mt-7">
            {games.map((item, index) => (
                <div className="flex flex-col items-center cursor-pointer hover:animate-bounce-once">
  <img src={item.image} alt={item.name} className="hover:animate-bounce transition-all duration-150 "width={45} height={45} />
  <h2 className="text-[14px] text-center">{item.name}</h2>
</div>

            ))}
        </div>
    );
}

export default GameList;

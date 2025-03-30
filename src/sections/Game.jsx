// src/sections/Game.jsx
import React from 'react'
import GuessGame from '../components/GuessGame.jsx'

function Game() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h1 className="font-heading text-blue text-9xl md:text-6xl leading-tight">
            NUMBER
            <br />
            GUESSING
            <br />
            GAME
          </h1>
        </div>

        {/* GuessGame Card */}
        <GuessGame />
      </div>
    </div>
  )
}

export default Game
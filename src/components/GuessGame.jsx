import React, { useState, useEffect } from 'react'

function GuessGame() {
  // State variables
  const [randomNumber, setRandomNumber] = useState(0)
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')
  const [trialsLeft, setTrialsLeft] = useState(10)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    resetGame()
  }, [])

  const handleInputChange = (e) => {
    setGuess(e.target.value)
  }

  const handleGuess = () => {
    if (!guess || isNaN(guess)) return
    const userGuess = parseInt(guess, 10)

    // Validate range
    if (userGuess < 0 || userGuess > 100) {
      setMessage('Invalid input!')
      return
    }

    const newTrialsLeft = trialsLeft - 1
    setTrialsLeft(newTrialsLeft)

    if (userGuess === randomNumber) {
      setMessage('YOU GOT IT!')
      setIsGameOver(true)
    } else if (userGuess < randomNumber) {
      setMessage('TOO LOW!')
    } else {
      setMessage('TOO HIGH!')
    }

    if (newTrialsLeft <= 0 && userGuess !== randomNumber) {
      setMessage('GAME OVER')
      setIsGameOver(true)
    }

    setGuess('')
  }

  const resetGame = () => {
    const newNumber = Math.floor(Math.random() * 101)
    setRandomNumber(newNumber)
    setGuess('')
    setMessage('')
    setTrialsLeft(10)
    setIsGameOver(false)
  }

  const playAgain = () => {
    resetGame()
  }

  const messageColorClass =
    message === 'YOU GOT IT!'
      ? 'text-green-400'
      : (message === 'GAME OVER' || message === 'Invalid input!')
      ? 'text-white'
      : (message === 'TOO LOW!' || message === 'TOO HIGH!')
      ? 'text-blue'
      : ''

  return (
    <div
      className="
        font-body bg-orange text-white 
        w-full max-w-[420px]
        rounded-2xl p-6 sm:p-10 shadow-lg mx-auto
        flex flex-col justify-between
      "
    >
      {/* Top Section (Title + Input) */}
      <div>
        <h1 className="font-heading text-center text-3xl sm:text-4xl mb-4">
          PLAY HERE
        </h1>

        {/* Guess Input */}
        <label className="block text-sm font-bold uppercase mb-1">
          Enter a number from 0 to 100
        </label>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="number"
            value={guess}
            onChange={handleInputChange}
            disabled={isGameOver}
            placeholder="Input here..."
            className="flex-1 rounded px-3 py-2 text-black outline-none"
          />
          <button
            onClick={handleGuess}
            disabled={isGameOver}
            className={`
              px-4 py-2 rounded font-semibold
              ${
                isGameOver
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue text-white hover:bg-bluehovered'
              }
            `}
          >
            GUESS!
          </button>
        </div>

        <hr className="border-white mb-4" />

        {/* System Says */}
        <p className="text-sm font-bold uppercase mb-1 text-left">
          System says...
        </p>
        <div className="mb-4 min-h-[48px] flex items-center justify-center">
          <h2 className={`text-3xl sm:text-4xl font-heading text-center ${messageColorClass}`}>
            {message || '...'}
          </h2>
        </div>
      </div>

      {/* Bottom Section (Trials + Buttons) */}
      <div>
        <hr className="border-white/50 mb-4" />

        {/* Trial & Options Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Trial Left */}
          <div className="text-center">
            <p className="uppercase text-sm font-bold mb-1">Trial Left</p>
            <div className="bg-white text-orange w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl sm:text-3xl font-bold">
                {trialsLeft}{' '}
                <span className="text-xs sm:text-base font-normal">of 10</span>
              </span>
            </div>
          </div>

          {/* More Options */}
          <div className="text-center">
            <p className="uppercase text-sm font-bold mb-2">More Options</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={resetGame}
                className="bg-blue text-white font-semibold px-4 py-2 rounded hover:bg-bluehovered"
              >
                RESET THE GAME
              </button>
              <button
                onClick={playAgain}
                className="bg-white text-blue font-semibold px-4 py-2 rounded hover:bg-gray-100"
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuessGame
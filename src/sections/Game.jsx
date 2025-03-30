import GuessGame from '../components/GuessGame.jsx'

function Game() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-4 sm:px-6 md:px-8">
        {/* Left Text */}
        <div className="text-center lg:text-left">
          <h1 className="font-heading text-blue text-4xl md:text-6xl lg:text-7xl xl:text-7xl leading-tight">
            NUMBER
            <br />
            GUESSING
            <br />
            GAME
          </h1>
        </div>
        {/* GuessGame Card */}
        <div className="w-full lg:w-auto">
          <GuessGame />
        </div>
      </div>
    </div>
  )
}

export default Game
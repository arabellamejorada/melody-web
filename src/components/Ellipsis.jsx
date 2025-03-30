import React from 'react'

function Ellipsis() {
  return (
    <div className="mx-auto my-auto lg:w-[1200px] w-full max-w-5xl h-[600px] sm:h-[500px] bg-blue rounded-[50%] flex items-center justify-center shadow-2xl">
      <div className="text-center">
        <h1 className="font-heading text-yellow md:text-8xl text-6xl">
          hello, world!
        </h1>
        <p className="font-body text-white text-lg mt-2">
          kamusta?
        </p>
      </div>
    </div>
  )
}

export default Ellipsis
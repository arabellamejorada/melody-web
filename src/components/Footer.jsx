import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-blue text-white py-10">
      <div className="text-center">
        {/* Heading */}
        <h2 className="font-heading text-xl mb-6 uppercase tracking-widest">
          connect with me!
        </h2>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/agmejorada/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 no-underline hover:underline text-current"
          >
            <img src="/fb.svg" alt="Facebook" className="w-8 h-8" />
            <span className="font-body">agmmejorada</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/arabellamejorada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 no-underline hover:underline text-current"
          >
            <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
            <span className="font-body">arabellamejorada</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/agmmejorada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 no-underline hover:underline text-current"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 fill-current text-white" />
            <span className="font-body">agmmejorada</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
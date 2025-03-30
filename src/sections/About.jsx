// src/sections/About.jsx
import React from 'react'
import ProfileCard from '../components/ProfileCard.jsx'

function About() {
  return (
    <section
      id="aboutSection"
      className="min-h-screen w-full flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Card on the left */}
        <ProfileCard />

        {/* Welcome message on the right */}
        <div className="md:w-1/2">
          <h1 className="font-heading text-orange text-7xl mb-4">WELCOME!</h1>
          <p className="font-body text-blue text-2xl leading-relaxed">
            It’s Bella! A third-year computer science student and front-end
            developer with a creative edge. I’m also a student leader who loves
            web development, dancing, and staying socially aware (yes, I’m a bit
            of a chismosa). When I’m not coding or working on org deliverables, I
            enjoy journaling, scrolling through Pinterest, and eating. I’m all
            about balance and aesthetics, but I can’t stand unesthetically
            pleasing food, okra, or fish (except bangus), and I have zero
            patience for people who choose to be blind to what’s going on around
            them (aka d** AY).
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
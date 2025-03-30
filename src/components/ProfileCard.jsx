import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BiSolidUserBadge, BiSolidUser } from 'react-icons/bi'
import { FaBirthdayCake } from 'react-icons/fa'

function ProfileCard() {
  return (
    <div className="font-body bg-yellow text-black w-[400px] rounded-2xl p-8 shadow-md mx-auto">
      {/* Profile Image */}
      <img
        src="/pfp.jpg" // Replace with your image URL
        alt="Arabella Mejorada"
        className="w-full h-auto rounded-xl object-cover"
      />

      {/* Name & Pronouns */}
      <h1 className="text-3xl font-semibold">
        Arabella Mejorada <span className="text-sm font-light text-gray-600">• She/her</span>
      </h1>

      {/* Info List */}
      <div className="mt-1 space-y-2 text-base">
        {/* Age */}
        <div className="flex items-center space-x-2">
          <BiSolidUser className="text-blue text-xl" />
          <span>21 years old</span>
        </div>
        {/* Birthday */}
        <div className="flex items-center space-x-2">
          <FaBirthdayCake className="text-blue text-xl" />
          <span>October 21, 2003</span>
        </div>
        {/* Course */}
        <div className="flex items-center space-x-2">
          <BiSolidUserBadge className="text-blue text-xl" />
          <span>BS Computer Science 3A</span>
        </div>
        {/* Email */}
        <div className="flex items-center space-x-2">
          <MdEmail className="text-blue text-xl" />
          <span>agmmejorada@addu.edu.ph</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
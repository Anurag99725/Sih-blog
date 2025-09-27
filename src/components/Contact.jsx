import React from 'react'

const Contact = () => {
  return (

    <footer id="contact" className="bg-gradient-to-r from-[#6d782e] via-[#6b705c] to-[#51544d] text-white py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-3">
        {/* Contact Info */}
        <div className="w-full border-b-2 border-sky-400 mb-4">
  <h1 className="text-center text-2xl font-bold pb-2 text-white">
    Contact Us
  </h1>
</div>

        <p>Leader Name: Swayam Chaurasiya</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@leviathan.com"
            className="underline hover:text-sky-300 transition-colors duration-300"
          >
            support@leviathan.com
          </a>
        </p>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Leviathan Defence Communications. All rights reserved.
      </div>
    </footer>

  )
}

export default Contact

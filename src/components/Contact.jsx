import React from 'react'

const Contact = () => {
  return (
    <footer
      id="contact"
      className="rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Stay Connected
          </p>
          <h2 className="text-3xl font-bold text-[#142015]">Contact Us</h2>
          <p className="text-sm leading-relaxed text-[#2c3a2c]">
            Collaborate with Team Leviathan on Army Chain, our sovereign communication grid for the armed forces.
          </p>
        </div>

        <div className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-[#304733]">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Team Lead
          </p>
          <p className="mt-2 text-xl font-semibold text-[#1c2f1e]">Swayam Chaurasiya</p>
          <p className="mt-1 text-sm">Army Chain &mdash; Leviathan Defence Communications</p>
          <div className="mt-4 text-sm">
            <span className="font-semibold">Email:&nbsp;</span>
            <a
              href="mailto:support@leviathan.com"
              className="font-medium text-emerald-700 underline decoration-emerald-400 underline-offset-4 transition hover:text-emerald-900"
            >
              support@leviathan.com
            </a>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
          &copy; {new Date().getFullYear()} Leviathan Defence Communications. All rights reserved.
        </p>
      </div>
    </footer>

  )
}

export default Contact

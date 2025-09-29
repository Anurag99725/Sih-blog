import React from 'react'

const Video = () => {
  return (
    <section
      id="video"
      className="rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Prototype Walkthrough
          </p>
          <h2 className="text-3xl font-bold text-[#142015]">Video</h2>
          <p className="text-sm leading-relaxed text-[#2c3a2c]">
            Our demo video will walk SIH evaluators through the Army Chain user journey&mdash;from HQ onboarding and trust verification to the secure messaging experience and blockchain-backed audit trails.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-900/5 shadow-inner">
          <div className="relative aspect-video w-full bg-gradient-to-br from-[#13321a] via-[#1e4425] to-[#0b1c10]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center text-emerald-100">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-200 bg-emerald-800/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Demo in Progress</h3>
                <p className="text-sm text-emerald-100/80">
                  Embed the prototype walkthrough once the video is recorded. Until then, this section highlights the narrative and key flows we will cover.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
            <h3 className="text-lg font-semibold text-[#1c2f1e]">HQ Narrative</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#304733]">
              Capture how HQ onboards members, provisions VPN profiles, and anchors trust and policy changes on the blockchain ledger.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
            <h3 className="text-lg font-semibold text-[#1c2f1e]">User Experience</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#304733]">
              Highlight real-world defence use cases: family groups, veteran outreach, and rapid HQ broadcasts secured with device-hardening controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video

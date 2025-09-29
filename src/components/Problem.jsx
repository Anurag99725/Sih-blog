import React from 'react'

const Problem = () => {
  return (
    <section
      id="problem"
      className="rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
            Problem Statement
          </p>
          <h2 className="text-3xl font-bold text-[#142015] sm:text-4xl">
            Why Defence Communication Needs A Sovereign Grid
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#2c3a2c]">
            Reliance on commercial messengers exposes defence communities to surveillance, engineered misinformation, and targeted social attacks. Army Chain originates from the need to protect operational intelligence, families, and veterans with communication infrastructure that the armed forces fully control.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 lg:col-span-5">
            <h3 className="text-xl font-semibold text-[#1c2f1e]">Threat Surface On Public Platforms</h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#2f452f]">
              {[
                'Targeted social engineering, malicious mobile apps, and spoofed identities creep into routine conversations of defence personnel, veterans, and families.',
                'Unrestricted forwarding and uncontrolled groups leak situational chatter beyond trusted circles, eroding OPSEC at the speed of virality.',
                'Everyday chats often contain actionable or contextual intelligence that adversaries can weaponise for profiling or misinformation.'
              ].map((item) => (
                <p key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 lg:col-span-7">
            <h3 className="text-xl font-semibold text-[#1c2f1e]">Structural Gaps We Must Close</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                'No defence-exclusive mobility stack with provable identity, controlled onboarding, and India-only hosting.',
                'Malware campaigns, phishing links, and honeytrap operations flourish without HQ-level observability.',
                'Commercial apps provide no tamper-proof audit trail or mechanism to enforce device hygiene.',
                'Sensitive media can be saved, forwarded, or exfiltrated to cloud drives without controls.'
              ].map((item) => (
                <p key={item} className="rounded-xl border border-emerald-200/80 bg-white/70 p-3 text-sm leading-relaxed text-[#304733]">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm lg:col-span-6">
            <h3 className="text-xl font-semibold text-[#1c2f1e]">Non-Negotiables From HQ</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#334733]">
              {[
                'VPN-tunnel communication hardened with military-grade end-to-end encryption.',
                'Messaging, voice, video, and multimedia interactions confined to HQ-controlled trust circles.',
                'Verified identities and devices before and during every session, with instant revocation capability.',
                'Device-hardening policies: no screenshots, copy/paste, or cross-application sharing.',
                'Complete, immutable logging to support forensic traceability and mission accountability.'
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm lg:col-span-6">
            <h3 className="text-xl font-semibold text-[#1c2f1e]">Solution Outcomes We Target</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#334733]">
              {[
                'Army-governed Android/iOS app that operates over public networks but sits entirely inside sovereign VPN tunnels.',
                'Encrypted services limited to HQ-authorised groups spanning active personnel, veterans, and families.',
                'Zero data escape: media, files, and transcripts remain contained with hardware-level controls.',
                'Role-based HQ command dashboard for membership curation, broadcast orchestration, and rapid incident response.',
                'Infrastructure hosted only in India, aligned with defence cyber regulations and Atmanirbhar Bharat goals.'
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Problem

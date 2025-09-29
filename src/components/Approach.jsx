import React from 'react'

const Approach = () => {
  return (
    <section
      id="approach"
      className="rounded-3xl border border-emerald-200/70 bg-white/95 p-6 shadow-[0_18px_45px_rgba(17,65,40,0.12)] sm:p-8"
    >
      <div className="space-y-7">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
            Solution Blueprint
          </p>
          <h2 className="text-3xl font-bold text-[#0f1d15] sm:text-4xl">Approach</h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#233528]">
            Army Chain fuses a defence-governed VPN core with a permissioned blockchain ledger, ensuring every trust decision, policy change, and device action is recorded immutably while keeping conversation payloads fully encrypted.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#142a1d]">Architecture Layers</h3>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[#2c3f30]">
              {[
                'Defence VPN tunnel encapsulates all traffic over public mobile networks.',
                'Hardware-backed containment disables screenshots, copy/paste, and cross-app exports.',
                'E2E encryption ensures payload confidentiality even within the VPN.',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#142a1d]">Blockchain Backbone</h3>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[#2c3f30]">
              {[
                'PBFT / Raft consensus across geographically separated Army Chain nodes.',
                'On-chain metadata captures membership events, policy updates, device fingerprints, and audit trails.',
                'Off-chain encrypted payloads flushed after delivery to maintain performance and privacy.',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="md:col-span-2 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#142a1d]">Prototype to Deployment</h3>
                <p className="text-sm leading-relaxed text-[#2c3f30]">
                  We demonstrate feasibility at SIH using ICP smart contracts and Filecoin storage replicas to highlight blockchain-governed identity, audit, and containment capabilities. Deployment shifts to Army-owned blockchain nodes, isolated from public networks, stationed in Delhi, Pune, Bengaluru, Lucknow, and Guwahati data centres.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#142a1d]">HQ Operations</h3>
                <p className="text-sm leading-relaxed text-[#2c3f30]">
                  An HQ dashboard delivers role-based access, one-click trust circle creation, real-time threat telemetry, and instant revocation of compromised devices. Governance policies mirror your Reputation DAO experience, ensuring human oversight is codified in the protocol.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#142a1d]">Impact Footprint</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#2c3f30]">
              Defence communities gain a trusted digital lifeline insulated from phishing, malware, and espionage vectors. HQ benefits from transparent oversight and rapid incident containment, while India strengthens sovereignty with defence-owned infrastructure and indigenous innovation momentum.
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-100 bg-emerald-900/5 p-4">
            <h3 className="text-lg font-semibold text-[#142a1d]">Key Highlights</h3>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[#2c3f30]">
              {[
                'End-to-end sovereign control across identity, infrastructure, and audit.',
                'Separation of on-chain trust records and off-chain encrypted payloads.',
                'Inclusive access for personnel, veterans, and families without diluting security posture.',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
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

export default Approach

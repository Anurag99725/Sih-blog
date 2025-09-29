import React from 'react'

const Home = () => {
  return (
    <section
      id="home"
      className="rounded-3xl border border-emerald-200/70 bg-white/95 p-6 shadow-[0_18px_45px_rgba(17,65,40,0.12)] sm:p-8"
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
            Vision Document
          </p>
          <h1 className="text-2xl font-bold leading-tight text-[#0f1d15] sm:text-3xl">
            Army Chain anchors India&rsquo;s defence communication in sovereign, tamper-proof infrastructure.
          </h1>
          <p className="text-base leading-relaxed text-[#233528]">
            We bring military-grade VPN tunnels, end-to-end encryption, and a permissioned blockchain ledger under HQ command to secure every interaction&mdash;from mission updates to family check-ins&mdash;while hosting everything on India-resident infrastructure.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: 'Mission Context',
              body: 'Defence stakeholders are relentlessly targeted on public messengers. Army Chain seals these entry points by enforcing HQ-governed trust circles.',
            },
            {
              title: 'Governance Stack',
              body: 'Role-based HQ dashboard modeled after DAO discipline for approvals, group orchestration, and instant device lockdown.',
            },
            {
              title: 'Resilient Tech Core',
              body: 'Military-grade VPN encapsulation with PBFT/Raft consensus across India-based blockchain nodes for verifiable integrity.',
            },
            {
              title: 'Deployment Trajectory',
              body: 'ICP + Filecoin for rapid SIH validation; transition to fully sovereign Army-operated infrastructure post-evaluation.',
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
              <h3 className="text-lg font-semibold text-[#142a1d]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2c3f30]">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Strategic Pillars
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                'Closed-group conversations curated and audited by HQ.',
                'Device-hardening policies block screenshots, copy/paste, and exports.',
                'Geo-resident infrastructure within defence or NIC data centres.',
                'Immutable blockchain fabric preserving chain-of-custody.',
              ].map((point) => (
                <p key={point} className="flex gap-3 text-sm leading-relaxed text-[#24382a]">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>{point}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-900/5 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Readiness Snapshot
            </h2>
            <dl className="mt-4 space-y-3 text-sm text-[#24382a]">
              <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm">
                <dt className="font-semibold text-emerald-700">Platforms</dt>
                <dd>Android / iOS</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm">
                <dt className="font-semibold text-emerald-700">Identity</dt>
                <dd>HQ-verified, device bound</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm">
                <dt className="font-semibold text-emerald-700">Encryption</dt>
                <dd>E2E + VPN encapsulation</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-sm">
                <dt className="font-semibold text-emerald-700">Audit</dt>
                <dd>Permissioned blockchain ledger</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

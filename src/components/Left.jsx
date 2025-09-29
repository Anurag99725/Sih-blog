import React from 'react'
import Logo from './Logo'
const Left = () => {
    return (
        <>
            <div className="left flex w-full flex-col gap-6 rounded-3xl bg-gradient-to-br from-[#123020] via-[#1c3f2e] to-[#0a1510] p-7 text-emerald-50 shadow-2xl ring-1 ring-emerald-500/20 lg:w-[34%] xl:w-[30%]">
                <div className="flex items-center gap-5">
                    <div className="h-20 w-20 overflow-hidden rounded-3xl border border-emerald-200/40 shadow-lg sm:h-24 sm:w-24">
                        <img
                            src="Leviathan pic.jpg"
                           
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex-1 px-0">
                        <Logo size="sm" animate={false} className="text-left" />
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80 pl-4">
                            Leviathan Defence Communications
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-2xl font-bold leading-tight text-emerald-50 sm:text-3xl">
                        Army Chain: India&rsquo;s Sovereign Communication Grid
                    </h1>
                    <p className="text-base leading-relaxed text-emerald-100/90">
                        Built for defence personnel, veterans, and families, Army Chain merges military-grade encryption with blockchain-backed governance so every conversation stays inside HQ-controlled trust circles.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    {[
                        {
                            title: 'Mission',
                            body: 'Replace vulnerable commercial messengers with a sovereign, India-hosted network.',
                        },
                        {
                            title: 'Prototype Stack',
                            body: 'ICP + Filecoin for SIH demo, graduating to Army-owned blockchain nodes.',
                        },
                    ].map((item) => (
                        <div key={item.title} className="rounded-2xl border border-emerald-200/40 bg-emerald-900/40 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/90">
                                {item.title}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-emerald-100/90">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    <a
                        href="#approach"
                        className="rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0a1510] transition hover:bg-emerald-200"
                    >
                        Explore Blueprint
                    </a>
                    <a
                        href="#problem"
                        className="rounded-full border border-emerald-300/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200 transition hover:border-emerald-100 hover:text-emerald-50"
                    >
                        Problem Insight
                    </a>
                </div>

                <div className="rounded-2xl border border-emerald-300/40 bg-emerald-900/50 p-4 text-sm leading-relaxed text-emerald-100/90">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                        Smart India Hackathon 2025 Theme
                    </p>
                    <p className="mt-2 text-base font-semibold text-emerald-50">
                        Blockchain &amp; Cybersecurity
                    </p>
                    <p className="mt-3 text-sm">
                        Army Chain positions India&rsquo;s armed forces at the forefront of sovereign communication innovation with verifiable trust, instant incident response, and resilient infrastructure.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Left

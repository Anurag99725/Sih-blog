import React from 'react'

const Problem = () => {
  return (
    
    <div id="problem" className="py-10 px-4 bg-gradient-to-b from-[#6d782e] via-[#6b705c] to-[#2d2f2a]">
                    <div className="max-w-4xl mx-auto flex flex-col space-y-6">

                        {/* Header */}
                        <h1 className="text-center text-3xl font-bold border-b-2 border-sky-400 pb-2 mb-4 text-white">
                            Problem Statement
                        </h1>

                        {/* Title Card */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Title</h2>
                            <p className="text-gray-700">
                                Secure closed-group communication platform over existing public mobile communication networks for defence personnel and families.
                            </p>
                        </div>

                        {/* Background Card */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Background</h2>
                            <ul className="list-decimal list-inside text-gray-700 space-y-1">
                                <li>Defence personnel, veterans, and families are targeted via social engineering, malicious apps, and compromised communication.</li>
                                <li>Commercial platforms allow unrestricted forwarding, uncontrolled groups, and data sharing beyond trusted circles.</li>
                                <li>Even informal communication can contain sensitive info exploitable by adversaries.</li>
                                <li>Malware, phishing links, and fake accounts can be used for surveillance or targeted campaigns.</li>
                                <li>No defence-exclusive platform exists that ensures controlled membership and secure communication over public networks.</li>
                                <li>A secure, HQ-administered VPN-based mobile application is required to prevent data leaks and ensure safe communication.</li>
                            </ul>
                        </div>

                        {/* Problem Description Card */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Problem Description</h2>
                            <ul className="list-decimal list-inside text-gray-700 space-y-1">
                                <li>VPN-tunnel based secure communication over public networks.</li>
                                <li>Messaging, calling, video, and multimedia sharing restricted to HQ-controlled groups.</li>
                                <li>End-to-end encryption and VPN encapsulation.</li>
                                <li>Only HQ-approved members allowed in verified groups.</li>
                                <li>Prevent data leakage via copy-paste restrictions, screenshot blocking, and cross-platform forwarding prevention.</li>
                                <li>Maintain secure logs and session records.</li>
                                <li>All infrastructure hosted in India with military-grade encryption.</li>
                            </ul>
                        </div>

                        {/* Expected Solution Card */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Expected Solution</h2>
                            <ul className="list-decimal list-inside text-gray-700 space-y-1">
                                <li>Mobile application (Android/iOS) using public networks through a defence-governed VPN.</li>
                                <li>Encrypted messaging, voice, and video services within HQ-authorized groups only.</li>
                                <li>Families and veterans can securely communicate with strict access control.</li>
                                <li>No external sharing or export of media/files allowed.</li>
                                <li>HQ dashboard for group creation, membership approval, and monitoring.</li>
                            </ul>
                        </div>

                    </div>
                </div>
  )
}

export default Problem

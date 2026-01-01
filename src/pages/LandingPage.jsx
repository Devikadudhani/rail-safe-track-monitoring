import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import { Camera, Cpu, AlertTriangle, FileCheck } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#F5F7FA]">
            <Header />

            {/* HERO SECTION */}
            <HeroSlider />


            {/* SYSTEM CAPABILITIES */}
            <section className="px-6 py-14 bg-white">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">
                            System Capabilities
                        </h2>
                        <p className="text-sm font-semiboldtext-slate-600 mt-1">
                            Core features of the Rail Track Tampering Detection System
                        </p>
                        <div className="mt-4 border-t border-slate-400"></div>
                    </div>

                    {/* Capability Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-300">

                        {/* Item 1 */}
                        <div className="flex gap-4 p-6 border-b md:border-b border-slate-300">
                            <div className="w-20 h-10 bg-[#0f2b6a] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">
                                    AI-Based Threat Detection
                                </h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    Advanced machine learning algorithms analyze sensor data and CCTV
                                    feeds to identify potential tampering, unauthorized access, and
                                    anomalous behavior along railway tracks.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-4 p-6 border-b md:border-b border-l border-slate-300">
                            <div className="w-20 h-10 bg-[#0f2b6a] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="14" />
                                    <path d="M8 20h8" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">
                                    Real-Time Monitoring
                                </h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    24/7 continuous surveillance of critical railway infrastructure
                                    including tracks, bridges, and stations with instant alert
                                    generation for security personnel.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex gap-4 p-6 border-t md:border-t border-slate-300">
                            <div className="w-20 h-10 bg-[#0f2b6a] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M6 2h9l5 5v15H6z" />
                                    <path d="M14 2v6h6" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">
                                    Evidence & Audit Trails
                                </h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    Comprehensive logging of all detected incidents with timestamped
                                    records, photographic evidence, and complete audit trails for
                                    investigation and compliance.
                                </p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="flex gap-4 p-6 border-t border-l border-slate-300">
                            <div className="w-20 h-10 bg-[#0f2b6a] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">
                                    Integrated Communication
                                </h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    Seamless integration with railway control rooms and security
                                    networks for rapid response coordination and escalation of
                                    critical security incidents.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* HOW THE SYSTEM WORKS */}
            <section className="px-6 py-14 border-t border-slate-300">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 uppercase">
                            How the System Works
                        </h2>
                        <p className="text-sm text-slate-600 mt-1">
                            End-to-end process flow for threat detection and response
                        </p>
                        <div className="mt-4 border-t border-slate-400"></div>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 ">

                        {/* Step 1 */}
                        <div className="relative p-6 text-center border-slate-400 border-b md:border-b-0 md:border-r">
                            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center bg-[#0f2b6a] text-white font-semibold">
                                1
                            </div>

                            <div className="mb-4 flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center border-2 border-slate-800">
                                    <Camera className="h-8 w-8 text-slate-800" />
                                </div>
                            </div>

                            <h3 className="font-semibold text-slate-900 mb-2">
                                Data Collection
                            </h3>
                            <p className="text-sm text-slate-700">
                                Sensors and cameras continuously capture real-time data from railway infrastructure.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-6 text-center border-slate-400 border-b md:border-b-0 md:border-r">
                            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center bg-[#0f2b6a] text-white font-semibold">
                                2
                            </div>

                            <div className="mb-4 flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center border-2 border-slate-800">
                                    <Cpu className="h-8 w-8 text-slate-800" />
                                </div>
                            </div>

                            <h3 className="font-semibold text-slate-900 mb-2">
                                AI Analysis
                            </h3>
                            <p className="text-sm text-slate-700">
                                Machine learning models analyze vibration and visual data to identify anomalies.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative p-6 text-center border-slate-400 border-b md:border-b-0 md:border-r">
                            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center bg-[#0f2b6a] text-white font-semibold">
                                3
                            </div>

                            <div className="mb-4 flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center border-2 border-slate-800">
                                    <AlertTriangle className="h-8 w-8 text-slate-800" />
                                </div>
                            </div>

                            <h3 className="font-semibold text-slate-900 mb-2">
                                Threat Detection
                            </h3>
                            <p className="text-sm text-slate-700">
                                The system identifies suspicious patterns and evaluates security risks.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative p-6 text-center">
                            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center bg-[#0f2b6a] text-white font-semibold">
                                4
                            </div>

                            <div className="mb-4 flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center border-2 border-slate-800">
                                    <FileCheck className="h-8 w-8 text-slate-800" />
                                </div>
                            </div>

                            <h3 className="font-semibold text-slate-900 mb-2">
                                Alert & Response
                            </h3>
                            <p className="text-sm text-slate-700">
                                Alerts are sent to security personnel and all actions are logged securely.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* FOOTER NOTE */}
            <footer className="px-6 py-6 text-center text-xs text-slate-500 bg-[#F5F7FA] border-t border-slate-300">
                This system is intended for authorized railway personnel only.
                All activities are logged for security and audit purposes.
            </footer>
        </div>
    );
}

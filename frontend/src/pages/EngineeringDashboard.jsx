import AppBrand from "../components/AppBrand";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    MapPin,
    Wrench,
    AlertTriangle,
    Camera,
    Upload,
    Clock,
    AlertOctagon,
} from "lucide-react";

const engineeringIncidents = [
    {
        id: "SEC-025",
        km: "125.34",
        gps: "28.6139° N, 77.2090° E",
        severity: "CRITICAL",
        issue: "Possible track tampering",
        anomalyScore: 0.87,
        time: "12 min ago",
        color: "red",
    },
    {
        id: "SEC-041",
        km: "140.10",
        gps: "28.7041° N, 77.1025° E",
        severity: "ELEVATED",
        issue: "Abnormal vibration pattern",
        anomalyScore: 0.63,
        time: "25 min ago",
        color: "orange",
    },
    {
        id: "SEC-031",
        km: "130.88",
        gps: "28.5355° N, 77.3910° E",
        severity: "MEDIUM",
        issue: "Possible ballast disturbance",
        anomalyScore: 0.42,
        time: "40 min ago",
        color: "yellow",
    },
];

function KpiCard({ icon: Icon, iconBg, title, value }) {
    return (
        <div className="bg-white border border-slate-300 p-4 flex items-center gap-4">

            {/* ICON */}
            <div className={`p-3 rounded-md ${iconBg}`}>
                <Icon className="h-5 w-5 text-white" />
            </div>

            {/* TEXT */}
            <div>
                <p className="text-xs text-slate-500 uppercase mb-1">
                    {title}
                </p>
                <p className="text-2xl font-bold text-slate-900">
                    {value}
                </p>
            </div>
        </div>
    );
}


export default function EngineeringDashboard() {
    const [selectedSite, setSelectedSite] = useState(engineeringIncidents[0]);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F4F7FB] flex flex-col">

            <header className="sticky top-0 z-50 bg-white border-b border-slate-300">
                <div className="max-w-7xl mx-auto px-6 py-2 flex items-center gap-4">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 border border-slate-300 px-3 py-1 text-sm hover:bg-slate-100"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </button>

                    <AppBrand />

                    <div className="ml-auto flex items-center gap-2 px-3 py-1 border border-[#0f2b6a] text-[#0f2b6a] text-sm font-medium">
                        <Wrench className="h-4 w-4" />
                        Engineering Authority
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 max-w-7xl mx-auto w-full">

                {/* KPI STRIP */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <KpiCard
                        icon={Wrench}
                        iconBg="bg-indigo-600"
                        title="Open Engineering Tasks"
                        value="3"
                    />

                    <KpiCard
                        icon={AlertOctagon}
                        iconBg="bg-red-600"
                        title="Critical Sites"
                        value="1"
                    />

                    <KpiCard
                        icon={MapPin}
                        iconBg="bg-blue-600"
                        title="Nearest Site"
                        value="SEC-041"
                    />

                    <KpiCard
                        icon={Clock}
                        iconBg="bg-amber-500"
                        title="Avg Repair ETA"
                        value="3.5 hrs"
                    />
                </div>
                {/* CONTENT GRID */}
                <div className="grid grid-cols-12 gap-4">

                    <section className="col-span-12 md:col-span-5 bg-white border border-slate-300">
                        <div className="px-4 py-3 border-b border-slate-300 flex items-center gap-2 bg-slate-50">
                            <MapPin className="h-4 w-4 text-[#0f2b6a]" />
                            <h3 className="text-sm font-semibold text-slate-900">
                                Inspection Locations
                            </h3>
                        </div>

                        <div className="divide-y divide-slate-200">
                            {engineeringIncidents.map((site) => (
                                <div
                                    key={site.id}
                                    onClick={() => setSelectedSite(site)}
                                    className={`p-4 cursor-pointer transition
    ${selectedSite.id === site.id
                                            ? "bg-blue-50 border-l-4 border-[#0f2b6a]"
                                            : "bg-white hover:bg-slate-50"
                                        }`}
                                >
                                    <div className="flex justify-between items-start">
                                        {/* LEFT */}
                                        <div>
                                            <p className="font-semibold text-slate-900">
                                                {site.id}
                                            </p>

                                            <p className="text-xs text-slate-600 mt-1">
                                                KM {site.km} · {site.issue}
                                            </p>

                                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {site.time}
                                            </p>
                                        </div>

                                        {/* RIGHT BADGE */}
                                        <span
                                            className={`text-xs px-2 py-0.5 font-medium border rounded-sm
        ${site.color === "red"
                                                    ? "bg-red-100 text-red-700 border-red-300"
                                                    : site.color === "orange"
                                                        ? "bg-orange-100 text-orange-700 border-orange-300"
                                                        : "bg-yellow-100 text-yellow-700 border-yellow-300"
                                                }`}
                                        >
                                            {site.severity}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="col-span-12 md:col-span-7 bg-white border border-slate-300">

                        {/* HEADER */}
                        <div className="px-4 py-3 bg-[#0f2b6a] text-white font-semibold text-sm uppercase">
                            Location & Inspection Details
                        </div>

                        {/* MAP PLACEHOLDER */}
                        <div className="h-64 border-b">
  <iframe
    title="New Delhi Map"
    className="w-full h-full"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps?q=New+Delhi,India&output=embed"
  />
</div>

                        {/* DETAILS */}
                        <div className="p-6 space-y-4 text-sm">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border p-3">
                                    <p className="text-xs text-slate-500">Section ID</p>
                                    <p className="font-semibold">{selectedSite.id}</p>
                                </div>

                                <div className="border p-3">
                                    <p className="text-xs text-slate-500">KM Marker</p>
                                    <p className="font-semibold">{selectedSite.km}</p>
                                </div>
                            </div>

                            <div className="border p-3">
                                <p className="text-xs text-slate-500">GPS Location</p>
                                <p className="font-medium">{selectedSite.gps}</p>
                            </div>

                            <div className="border p-4 text-center">
                                <p className="text-xs uppercase text-slate-600 mb-2">
                                    AI Anomaly Score
                                </p>
                                <p className="text-3xl font-bold text-red-600">
                                    {selectedSite.anomalyScore}
                                </p>
                            </div>

                            {/* ACTIONS */}
                            <div className="border-t pt-4 space-y-3">
                                <button className="w-full bg-[#0f2b6a] text-white px-4 py-2 flex items-center justify-center gap-2">
                                    <Wrench className="h-4 w-4" />
                                    Start Inspection
                                </button>

                                <button className="w-full border border-slate-300 px-4 py-2 flex items-center justify-center gap-2 hover:bg-slate-100">
                                    <Camera className="h-4 w-4" />
                                    Upload Inspection Photos
                                </button>

                                <button className="w-full border border-slate-300 px-4 py-2 flex items-center justify-center gap-2 hover:bg-slate-100">
                                    <Upload className="h-4 w-4" />
                                    Submit Repair Estimate
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="px-6 py-4 text-center text-xs text-slate-200 bg-[#0f2b6a]">
                Engineering actions are logged for audit and safety compliance.
            </footer>
        </div>
    );
}
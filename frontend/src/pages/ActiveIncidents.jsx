import AppBrand from "../components/AppBrand";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Activity,
    AlertTriangle,
    Camera,
    FileText, ArrowLeft, Cpu, LayoutList, Filter, Download
} from "lucide-react";

const alerts = [
    {
        id: "SEC-025",
        km: "125.34",
        severity: "CRITICAL",
        risk: "CRITICAL",
        anomalyScore: 0.87,
        time: "2 minutes ago",
        color: "red",
    },
    {
        id: "SEC-019",
        km: "118.20",
        severity: "SUSPICIOUS",
        risk: "MEDIUM",
        anomalyScore: 0.54,
        time: "8 minutes ago",
        color: "yellow",
    },
    {
        id: "SEC-031",
        km: "130.88",
        severity: "NORMAL",
        risk: "LOW",
        anomalyScore: 0.18,
        time: "15 minutes ago",
        color: "green",
    },
    {
        id: "SEC-041",
        km: "156.10",
        severity: "HIGH",
        risk: "HIGH",
        anomalyScore: 0.69,
        time: "19 minutes ago",
        color: "amber",
    },
];

export default function ActiveIncidents() {
    const [selectedAlert, setSelectedAlert] = useState(alerts[0]);
    const [showNotesBox, setShowNotesBox] = useState(false);
    const [noteText, setNoteText] = useState("");
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#F4F7FB] flex flex-col">
            <header className="sticky top-0 z-50 bg-white border-b border-slate-300">
                <div className="max-w-7xl mx-auto px-6 py-1 flex items-center gap-4">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 transition"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </button>
                    <AppBrand />
                    <div className="ml-auto flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1 border border-green-600 text-green-700 text-sm font-medium">
                            <Activity className="h-4 w-4" />
                            SYSTEM LIVE
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 border border-[#0f2b6a] text-[#0f2b6a] text-sm font-medium">
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                            Active
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1 p-6">
                <div className="grid grid-cols-12 gap-4 mb-6">
                    {/* TRACK TABLE */}
                    <section className="col-span-12 md:col-span-8 bg-white border border-slate-300 rounded-sm">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                                <LayoutList className="h-4 w-4 text-slate-600" />
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Active Accidents
                                </h3>
                            </div>

                            <div className="flex items-center gap-2">

                                <button className="flex items-center gap-1.5 border border-slate-300 px-3 py-1 text-xs text-slate-700 hover:bg-slate-100">
                                    <Filter className="h-3.5 w-3.5" />
                                    FILTER
                                </button>

                                <button className="flex items-center gap-1.5 border border-slate-300 px-3 py-1 text-xs text-slate-700 hover:bg-slate-100">
                                    <Download className="h-3.5 w-3.5" />
                                    EXPORT
                                </button>

                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm table-fixed">

                                {/* COLUMN WIDTHS (THIS IS THE KEY FIX) */}
                                <colgroup>
                                    <col className="w-[15%]" /> 
                                    <col className="w-[30%]" /> 
                                    <col className="w-[15%]" />
                                    <col className="w-[20%]" /> 
                                    <col className="w-[20%]" />
                                </colgroup>

                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr className="text-left text-xs text-slate-600 uppercase">
                                        <th className="px-4 py-3">Track ID</th>
                                        <th className="px-4 py-3">Anomaly Score (AI-assisted)</th>
                                        <th className="px-4 py-3">Risk Level</th>
                                        <th className="px-4 py-3">Last Update</th>
                                        <th className="px-4 py-3">Status</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-200">
                                    {alerts.map((alert) => (
                                        <tr
                                            key={alert.id}
                                            onClick={() => setSelectedAlert(alert)}
                                            className={`cursor-pointer hover:bg-slate-50 ${selectedAlert.id === alert.id ? "bg-slate-100" : ""
                                                }`}
                                        >
                                            {/* Track ID */}
                                            <td className="px-4 py-3 font-medium text-left">
                                                {alert.id}
                                            </td>

                                            {/* Anomaly */}
                                            <td className="px-4 py-3 text-left">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-32 h-2 bg-slate-200">
                                                        <div
                                                            className={`h-2 ${alert.color === "red"
                                                                ? "bg-red-600"
                                                                : alert.color === "amber"
                                                                    ? "bg-amber-500"
                                                                    : alert.color === "yellow"
                                                                        ? "bg-yellow-500"
                                                                        : "bg-green-600"
                                                                }`}
                                                            style={{ width: `${alert.anomalyScore * 100}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs">
                                                        {Math.round(alert.anomalyScore * 100)}%
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Risk */}
                                            <td className="px-4 py-3 text-left">
                                                <span
                                                    className={`px-2 py-0.5 text-xs border ${alert.color === "red"
                                                        ? "bg-red-100 text-red-700 border-red-300"
                                                        : alert.color === "amber"
                                                        ? "bg-amber-100 text-amber-700 border-amber-300"
                                                        : alert.color === "yellow"
                                                            ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                                                            : "bg-green-100 text-green-700 border-green-300"
                                                        }`}
                                                >
                                                    {alert.risk}
                                                </span>
                                            </td>

                                            {/* Last Update */}
                                            <td className="px-4 py-3 text-xs text-slate-600 text-left">
                                                {alert.time}
                                            </td>

                                            {/* Status */}
                                            <td className="px-4 py-3 text-left">
                                                <span
                                                    className={`text-xs font-semibold ${alert.color === "red"
                                                        ? "text-red-600"
                                                        : alert.color === "amber"? "text-amber-600"
                                                        : alert.color === "yellow"
                                                            ? "text-orange-600"
                                                            : "text-green-600"
                                                        }`}
                                                >
                                                    {alert.severity === "CRITICAL"
                                                        ? "NEEDS REVIEW"
                                                        : alert.severity === "HIGH" ? "HIGH"
                                                        : alert.severity === "SUSPICIOUS"
                                                            ? "FLAGGED"
                                                            : "ACTIVE"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="col-span-12 md:col-span-4 bg-white border border-slate-300">
                        {/* header */}
                        <div className="px-4 py-3 bg-[#0f2b6a] border-b border-slate-300">
                            <h3 className="text-sm font-bold text-white uppercase">
                                Incident Details
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            {/* section info */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-slate-300 p-3 text-xs">
                                    <p className="text-slate-500 mb-1">Section ID</p>
                                    <p className="font-semibold text-slate-900">
                                        {selectedAlert.id}
                                    </p>
                                </div>
                                <div className="border border-slate-300 p-3 text-xs">
                                    <p className="text-slate-500 mb-1">KM Marker</p>
                                    <p className="font-semibold text-slate-900">
                                        {selectedAlert.km}
                                    </p>
                                </div>
                            </div>
                            {/* anomaly score */}
                            <div className="border border-slate-300 p-4 text-center">
                                <p className="text-xs text-slate-600 mb-2 uppercase">
                                    AI Anomaly Score
                                </p>
                                <p
                                    className={`text-4xl font-bold mb-2 ${selectedAlert.color === "red"
                                        ? "text-red-600"
                                        : selectedAlert.color === "amber"? "text-amber-600"
                                        : selectedAlert.color === "yellow"
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                        }`}
                                >
                                    {selectedAlert.anomalyScore}
                                </p>
                                <div className="w-full h-2 bg-slate-200 mb-2">
                                    <div
                                        className={`h-2 ${selectedAlert.color === "red"
                                            ? "bg-red-600"
                                            : selectedAlert.color === "amber"? "bg-amber-500"
                                            : selectedAlert.color === "yellow"
                                                ? "bg-yellow-500"
                                                : "bg-green-600"
                                            }`}
                                        style={{ width: `${selectedAlert.anomalyScore * 100}%` }}
                                    />
                                </div>
                                <p
                                    className={`text-xs font-semibold uppercase ${selectedAlert.color === "red"
                                        ? "text-red-600"
                                        : selectedAlert.color === "amber"? "text-amber-600"
                                        : selectedAlert.color === "yellow"
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                        }`}
                                >
                                    {selectedAlert.severity} Anomaly
                                </p>
                            </div>
                            <div className="border border-slate-300">
                                <div className="px-3 py-2 bg-slate-100 border-b text-xs font-semibold uppercase">
                                    Camera Snapshot
                                </div>
                                <div className="h-52 flex flex-col items-center justify-center text-sm text-slate-500">
                                    <Camera className="h-8 w-8 mb-2 text-slate-400" />
                                    Live Feed · Section {selectedAlert.id}
                                    <span className="text-xs mt-1">{selectedAlert.time}</span>
                                </div>
                            </div>
                            {/* actions */}
                            <div className="border-t border-slate-300 pt-4">
                                <h4 className="text-sm font-semibold uppercase mb-3">
                                    Monitor Actions
                                </h4>
                                <div className="space-y-3">
                                    <button className="w-full bg-red-600 text-white px-4 py-2 text-sm hover:bg-red-700 flex items-center justify-center gap-2">
                                        <AlertTriangle className="h-4 w-4" />
                                        Notify Engineers
                                    </button>
                                </div>
                                <p className="mt-3 text-xs text-slate-500 text-center">
                                    Train control actions are restricted for Track Monitor role
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="px-6 py-6 text-center text-xs text-slate-200 bg-[#0f2b6a]">
                This system is intended for authorized railway personnel only.
                All activities are logged for security and audit purposes.
            </footer>
        </div>
    );
}

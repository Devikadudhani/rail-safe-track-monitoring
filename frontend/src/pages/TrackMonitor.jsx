import AppBrand from "../components/AppBrand";
import { useState, useEffect } from "react";
import { mockAlerts } from "../data/mockAlerts";

import { useNavigate } from "react-router-dom";
import {
    Activity,
    AlertTriangle,
    Camera,
    FileText, ArrowLeft, Cpu, LayoutList, Filter, Download
} from "lucide-react";



function KpiCard({ icon: Icon, iconColor, title, value, subtitle, badge }) {
    return (
        <div className="bg-white border border-slate-300 p-4 flex items-center gap-4">

            {/* ICON */}
            <div className={`p-3 rounded-md ${iconColor}`}>
                <Icon className="h-5 w-5 text-white" />
            </div>

            {/* TEXT */}
            <div className="flex-1">
                <p className="text-xs text-slate-500 uppercase mb-1">
                    {title}
                </p>

                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-slate-900">
                        {value}
                    </p>

                    {badge && (
                        <span
                            className={`text-xs px-2 py-0.5 font-medium border ${badge.color}`}
                        >
                            {badge.text}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function TrackMonitor() {
    const [alerts, setAlerts] = useState(mockAlerts);
    const [selectedAlert, setSelectedAlert] = useState(mockAlerts[0]);

    useEffect(() => {
        fetch("/api/ml/predict")
            .then((res) => res.json())
            .then((data) => {
                setAlerts(data);
                setSelectedAlert(data[0]); // auto-select first alert
            })
            .catch((err) => {
                console.error("ML API failed, using mock alerts");
            });
    }, []);
    
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
                            Track Monitor
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1 p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <KpiCard
                        icon={AlertTriangle}
                        iconColor="bg-red-600"
                        title="Active Alerts"
                        value="12"
                        badge={{
                            text: "+2 New",
                            color: "bg-red-100 text-red-700 border-red-300"
                        }}
                    />
                    <KpiCard
                        icon={Cpu}
                        iconColor="bg-orange-500"
                        title="Highest Anomaly"
                        value="92%"
                        badge={{
                            text: "HIGH",
                            color: "bg-orange-100 text-orange-700 border-orange-300"
                        }}
                    />
                    <KpiCard
                        icon={Activity}
                        iconColor="bg-green-600"
                        title="Sensors Online"
                        value="450 / 452"
                        badge={{
                            text: "99.5% Uptime",
                            color: "bg-green-100 text-green-700 border-green-300"
                        }}
                    />
                    <KpiCard
                        icon={Camera}
                        iconColor="bg-blue-600"
                        title="Cameras Active"
                        value="98%"
                        badge={{
                            text: "Stable",
                            color: "bg-blue-100 text-blue-700 border-blue-300"
                        }}
                    />
                </div>
                <div className="grid grid-cols-12 gap-4 mb-6">
                    {/* TRACK TABLE */}
                    <section className="col-span-12 md:col-span-8 bg-white border border-slate-300 rounded-sm">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                                <LayoutList className="h-4 w-4 text-slate-600" />
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Track Sections Overview
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
                                    <col className="w-[15%]" /> {/* Track ID */}
                                    <col className="w-[30%]" /> {/* Anomaly */}
                                    <col className="w-[15%]" /> {/* Risk */}
                                    <col className="w-[20%]" /> {/* Last Update */}
                                    <col className="w-[20%]" /> {/* Status */}
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
                                                                    : alert.color === "yellow"
                                                                        ? "bg-orange-500"
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
                                                            : alert.color === "yellow"
                                                                ? "text-orange-600"
                                                                : "text-green-600"
                                                        }`}
                                                >
                                                    {alert.severity === "CRITICAL"
                                                        ? "NEEDS REVIEW"
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
                                        : selectedAlert.color === "yellow"
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                        }`}
                                >
                                    {selectedAlert.severity} Anomaly
                                </p>
                            </div>
                            {/* vibration */}
                            <div className="border border-slate-300">
                                <div className="px-3 py-2 bg-slate-100 border-b text-xs font-semibold uppercase">
                                    Vibration Waveform Analysis
                                </div>
                                <div className="h-44 flex items-center justify-center text-sm text-slate-500">
                                    Vibration Waveform Graph
                                </div>
                            </div>
                            {/* camera */}
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
                                    <button className="w-full border border-slate-900 px-4 py-2 text-sm hover:bg-slate-900 hover:text-white">
                                        Acknowledge Alert
                                    </button>
                                    <button
                                        onClick={() => setShowNotesBox(!showNotesBox)}
                                        className="w-full border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100 flex items-center justify-center gap-2"
                                    >
                                        <FileText className="h-4 w-4" />
                                        {showNotesBox ? "Hide Notes" : "Add Notes"}
                                    </button>
                                    {showNotesBox && (
                                        <div className="mt-3 border border-slate-300 p-3 bg-slate-50">
                                            <label className="block text-xs font-semibold text-slate-700 mb-2">
                                                Operator Notes
                                            </label>
                                            <textarea
                                                value={noteText}
                                                onChange={(e) => setNoteText(e.target.value)}
                                                rows={4}
                                                placeholder="Describe observations, ground verification, or concerns..."
                                                className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0f2b6a]"
                                            />
                                            <div className="flex justify-end mt-3">
                                                <button
                                                    onClick={() => {
                                                        console.log("Saved Note:", noteText);
                                                        setShowNotesBox(false);
                                                    }}
                                                    className="bg-[#0f2b6a] text-white px-4 py-2 text-sm hover:bg-[#0b2154]"
                                                >
                                                    Save Note
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    <button className="w-full bg-red-600 text-white px-4 py-2 text-sm hover:bg-red-700 flex items-center justify-center gap-2">
                                        <AlertTriangle className="h-4 w-4" />
                                        Escalate to Traffic Control
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

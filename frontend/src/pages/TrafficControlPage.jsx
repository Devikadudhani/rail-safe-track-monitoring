import AppBrand from "../components/AppBrand";
import wave from "../assets/wave.jpeg";
import train from "../assets/train.png";

import {
  Activity,
  AlertTriangle,
  Train,
  Bell,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TrafficControlPage() {
  const navigate = useNavigate();

  const selectedAlert = {
    id: "SEC-025",
    time: "18 min ago",
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center">
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
              Dashboard
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
          {/* LEFT PANEL */}
          <section className="col-span-12 md:col-span-8 bg-white border border-slate-300">
            <div className="px-4 py-3 bg-[#0f2b6a] border-b border-slate-300">
              <h3 className="text-sm font-bold text-white uppercase">
                Escalated Alerts - Awaiting Traffic Action
              </h3>
            </div>

            <div className="p-4 overflow-x-auto">
              <table className="w-full text-sm border border-slate-300">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="p-2 border">Section ID</th>
                    <th className="p-2 border">KM Range</th>
                    <th className="p-2 border">Risk Level</th>
                    <th className="p-2 border">Detected</th>
                    <th className="p-2 border">Train ETA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50 cursor-pointer">
                    <td className="p-2 border font-medium">SEC-025</td>
                    <td className="p-2 border">KM 234.50 – 234.75</td>
                    <td className="p-2 border text-red-600 font-semibold">
                      CRITICAL
                    </td>
                    <td className="p-2 border">18 min ago</td>
                    <td className="p-2 border text-red-600 font-semibold">
                      12 min
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 cursor-pointer">
                    <td className="p-2 border font-medium">SEC-019</td>
                    <td className="p-2 border">KM 118.10 – 118.25</td>
                    <td className="p-2 border text-yellow-600 font-semibold">
                      MEDIUM
                    </td>
                    <td className="p-2 border">32 min ago</td>
                    <td className="p-2 border">45 min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SECTION DETAILS */}
            <div className="border-t border-slate-300 p-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase">
                Section Details – {selectedAlert.id}
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="border border-slate-300 p-2">
                  <p className="text-slate-500">Risk Level</p>
                  <p className="font-semibold text-red-600">CRITICAL</p>
                </div>
                <div className="border border-slate-300 p-2">
                  <p className="text-slate-500">KM Range</p>
                  <p className="font-semibold">234.50 – 234.75</p>
                </div>
                <div className="border border-slate-300 p-2">
                  <p className="text-slate-500">Detection Time</p>
                  <p className="font-semibold">{selectedAlert.time}</p>
                </div>
                <div className="border border-slate-300 p-2">
                  <p className="text-slate-500">Approaching Train</p>
                  <p className="font-semibold text-red-600">12 min</p>
                </div>
              </div>

              {/* VIBRATION + CAMERA */}
             <div className="border border-slate-300 rounded">
  <div className="px-3 py-2 bg-slate-100 border-b text-xs font-semibold uppercase">
    Vibration Waveform Analysis
  </div>

  <div className="flex justify-center p-4 bg-white">
    <img
      src={wave}
      alt="Vibration waveform"
      className="max-w-[520px] w-full h-auto"
    />
  </div>
</div>

               <div className="border border-slate-300 rounded">
  <div className="px-3 py-2 bg-slate-100 border-b text-xs font-semibold uppercase">
    Camera Snapshot
  </div>

<div className="h-44 bg-black flex items-center justify-center">
  <img
    src={train}
    alt={`Camera Snapshot ${selectedAlert.id}`}
    className="max-h-full max-w-full object-contain"
  />
</div>
</div>

            </div>
          </section>

          {/* RIGHT PANEL */}
          <aside className="col-span-12 md:col-span-4 bg-white border border-slate-300">
            <div className="px-4 py-3 bg-[#0f2b6a] border-b border-slate-300">
              <h3 className="text-sm font-bold text-white uppercase">
                Operational Controls
              </h3>
            </div>

            <div className="p-4 space-y-4">
              <div className="border border-slate-300 p-3 text-sm text-center">
                <p className="text-slate-500 mb-1">Track Protection</p>
                <p className="font-semibold text-red-600">
                  NO PROTECTION ACTIVE
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase">
                  Train Movement Controls
                </h4>

                <div className="space-y-2">
                  <button className="w-full bg-yellow-500 text-white px-3 py-2 text-sm flex items-center justify-center gap-2">
                    <Train className="h-4 w-4" />
                    Issue Caution Order
                  </button>

                  <button className="w-full bg-orange-500 text-white px-3 py-2 text-sm">
                    Slow Down Trains (15 km/h)
                  </button>

                  <button className="w-full bg-red-600 text-white px-3 py-2 text-sm">
                    STOP ALL TRAINS
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase">
                  Notifications
                </h4>

                <button className="w-full border border-slate-300 px-3 py-2 text-sm flex items-center justify-center gap-2 hover:bg-slate-100">
                  <Bell className="h-4 w-4" />
                  Notify Adjacent Sections
                </button>

                <button className="w-full mt-2 bg-[#0f2b6a] text-white px-3 py-2 text-sm">
                  Escalate to Engineering Authority
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="px-6 py-6 text-center text-xs text-slate-200 bg-[#0f2b6a]">
        Authorized railway personnel only · All actions logged
      </footer>
    </div>
  );
}

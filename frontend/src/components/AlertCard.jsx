const riskStyles = {
  HIGH: "bg-red-100 text-red-800",
  MEDIUM: "bg-yellow-100 text-yellow-800",
  LOW: "bg-green-100 text-green-800"
};

export default function AlertCard({ alert }) {
  return (
    <div className="bg-white border border-slate-200 rounded-md p-4 mb-3">
      <div className="flex justify-between items-center mb-2">
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${riskStyles[alert.risk]}`}
        >
          {alert.risk} RISK
        </span>
        <span className="text-xs text-slate-500">{alert.time}</span>
      </div>

      <p className="font-medium text-slate-800">{alert.reason}</p>

      <p className="text-sm text-slate-600 mt-1">
        Section: {alert.section}
      </p>

      <p className="text-sm mt-2">
        Confidence:{" "}
        <span className="font-semibold">
          {Math.round(alert.confidence * 100)}%
        </span>
      </p>

      <div className="flex gap-2 mt-3">
        <button className="border px-3 py-1 text-sm rounded hover:bg-slate-100">
          View Incident
        </button>
        <button className="border px-3 py-1 text-sm rounded hover:bg-slate-100">
          Assign Team
        </button>
      </div>
    </div>
  );
}

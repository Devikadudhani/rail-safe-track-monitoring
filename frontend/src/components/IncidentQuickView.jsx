export default function IncidentQuickView({ alert }) {
  if (!alert) return <p className="text-sm">Select an alert</p>;

  return (
    <div className="bg-white border rounded p-4">
      <h2 className="font-semibold mb-2">Incident Quick View</h2>

      <p className="text-sm mb-2">
        <b>Risk:</b> {alert.risk}
      </p>

      <p className="text-xs text-slate-600 mb-3">
        {alert.reason}
      </p>

      {/* Evidence thumbnails */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-slate-200 h-12"></div>
        <div className="bg-slate-200 h-12"></div>
        <div className="bg-slate-200 h-12"></div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <button className="border py-1 text-sm rounded">
          Assign Field Team
        </button>
        <button className="border py-1 text-sm rounded">
          False Alarm
        </button>
        <button className="border py-1 text-sm rounded">
          Escalate to Police
        </button>
      </div>
    </div>
  );
}

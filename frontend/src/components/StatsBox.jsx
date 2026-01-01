export default function StatsBox({ title, value }) {
  return (
    <div className="bg-white border border-slate-200 rounded-md p-4">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold text-slate-800">{value}</p>
    </div>
  );
}

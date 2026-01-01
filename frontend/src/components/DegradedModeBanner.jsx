export default function DegradedModeBanner() {
  return (
    <div className="mb-4 border-l-4 border-yellow-500 bg-yellow-100 p-3 text-yellow-900 text-sm">
      ⚠️ Degraded Mode Active: One or more sensors unavailable. Confidence reduced.
    </div>
  );
}

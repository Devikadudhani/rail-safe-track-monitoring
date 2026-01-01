export default function AnalyticsDrawer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3">
      <div className="flex justify-between text-sm">
        <span>Avg Response Time: <b>4.2m</b></span>
        <span>Open Incidents: <b>03</b></span>
        <span>Threat Density: ↑</span>
      </div>
    </div>
  );
}

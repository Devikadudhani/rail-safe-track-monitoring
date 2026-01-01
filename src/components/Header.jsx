import { Train, User } from "lucide-react";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Monitoring Areas", href: "#" },
  { label: "Incident History", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-300">

      {/* Main navbar */}
      <div className="py-3">
        <div className="max-w-6xl mx-auto px-4 flex items-center">

          {/* Left: Logo + Ministry */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 flex items-center justify-center">
              <Train className="h-10 w-10 text-[#0f2b6a]" />
            </div>

            <div>
              <h1 className="text-lg font-semibold text-[#0f2b6a] leading-tight">
                RTAM – Railway Track Anomaly Monitor
              </h1>
              <p className="text-sm tracking-wide text-slate-600">
                AI-Assisted Monitoring Control
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-6">

            {/* Navigation links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-[#0f2b6a] text-white"
                      : "text-[#0f2b6a] hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Operator login */}
            <button
              className="
                flex items-center gap-2
                border border-slate-900
                px-4 py-2
                text-sm
                text-[#0f2b6a]
                transition
                hover:bg-[#0f2b6a]
                hover:text-white
              "
            >
              <User className="h-4 w-4" />
              Operator Login
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

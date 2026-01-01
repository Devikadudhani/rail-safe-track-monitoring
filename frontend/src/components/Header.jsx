import { User } from "lucide-react";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Monitoring Areas", href: "#" },
  { label: "Incident History", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">

      {/* Main navbar */}
      <div className="py-3">
        <div className="max-w-6xl mx-auto px-4 flex items-center">

          {/* Left: Logo + Ministry */}
          <div className="flex items-center gap-4">
            {/* Ashoka Chakra placeholder */}
            <div className="h-14 w-14 border-2 border-red-700 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="h-10 w-10 text-red-700"
                fill="currentColor"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="50" cy="50" r="8" />
                {[...Array(24)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="15"
                    x2="50"
                    y2="25"
                    stroke="currentColor"
                    strokeWidth="2"
                    transform={`rotate(${i * 15} 50 50)`}
                  />
                ))}
              </svg>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-slate-900 leading-tight">
                Ministry of Railways
              </h1>
              <p className="text-sm text-slate-600">
                Rail Security Division
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
                      ? "bg-red-700 text-white"
                      : "text-slate-800 hover:bg-slate-100"
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
                border border-red-700
                px-4 py-2
                text-sm
                text-red-700
                transition
                hover:bg-red-700
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

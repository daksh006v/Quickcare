import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

export default function TravelerMode() {
  return (
    <div className="font-body-md text-on-surface antialiased bg-surface min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-200">
        <div className="flex justify-between items-center px-8 h-20 max-w-[1280px] mx-auto">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-blue-800 dark:text-blue-300 flex items-center gap-2 hover:opacity-90 transition-all duration-200">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            QuickCare
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-tight">
            <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200" to="/search">Find Care</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200" to="/search">Doctors</Link>
            <Link className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 pb-1 hover:opacity-90 transition-all duration-200" to="/traveler-mode">Traveler Mode</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors duration-200" to="/symptom-checker">Symptoms</Link>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="hidden md:flex items-center justify-center gap-2 bg-red-600 text-white px-6 min-h-[48px] rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors shadow-[0_4px_10px_rgba(186,26,26,0.2)]">
              <span className="material-symbols-outlined">call</span>
              Emergency Call
            </button>
            <button className="md:hidden text-slate-600 dark:text-slate-400 p-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-28 max-w-[1280px] mx-auto px-4 md:px-8 mb-16 flex flex-col gap-10">
        {/* Emergency Block */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-[0_12px_20px_rgba(186,26,26,0.15)] w-full">
          <div className="flex items-start md:items-center gap-6">
            <div className="bg-white/20 p-4 rounded-full flex-shrink-0">
              <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Immediate Medical Assistance</h1>
              <p className="text-lg opacity-90 max-w-2xl">If you are experiencing a life-threatening emergency, contact local authorities immediately for dispatch.</p>
            </div>
          </div>
          <button className="w-full md:w-auto bg-white text-red-600 font-bold text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-sm min-h-[48px] hover:bg-red-50 transition-colors flex-shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            CALL 119 (JAPAN)
          </button>
        </section>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Map Container (Span 8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-low">
                <div>
                  <h2 className="text-2xl font-semibold text-on-surface">Nearby Care Options</h2>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    Showing facilities near Shinjuku, Tokyo
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-surface-container py-2 px-3 rounded-lg border border-outline-variant/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-secondary-container shadow-sm"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Urgent Care</span>
                  </div>
                  <div className="w-px h-4 bg-outline-variant/50"></div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Clinic</span>
                  </div>
                </div>
              </div>
              {/* Map Visual Container */}
              <div
                className="relative w-full h-[500px] bg-surface-container"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0yBnAaIVYGGbTQm_mvMwJlOpWVO9K4VqMy1aQ7NEyOxf0sedgL2pp5yZanDmG809GCow-RUGa76ViSv8pKzFt7immKwU907GZaToJB_QCtgMES1J0AykQfsT7Qqhp3nT6fJ1EKk3Pt_AfJGn2quxrHutzjGZjq3l3BBpqgEKEfMko5JQGBtkM2WGY3HZo7pPQX5zbZnWZSIfD_jafwWnU2qMR4nGBUl8TsL4T3a46j-hs0G1tm-7TgxcXtn_9yYnBbf-SV-uau2k')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Zoom Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <button className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </div>
                <button className="absolute bottom-4 left-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-outline-variant/30 flex items-center gap-1.5 text-on-surface-variant text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[16px]">my_location</span>
                  Recenter
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Status & Translation (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Urgency Status Panel */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-4 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(186,26,26,0.6)]"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Live Status</span>
              </div>
              <h3 className="text-2xl font-semibold text-on-surface mb-6">Current Assessment</h3>
              <div className="flex flex-col gap-3 mb-6">
                <div className="bg-surface-container-low rounded-lg p-4 flex items-center justify-between border border-outline-variant/20">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container">local_hospital</span>
                    <span className="text-sm text-on-surface">Nearest Urgent Care</span>
                  </div>
                  <span className="text-lg font-semibold text-on-surface">1.2 km</span>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 flex items-center justify-between border border-outline-variant/20">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline">directions_walk</span>
                    <span className="text-sm text-on-surface">Est. Travel Time</span>
                  </div>
                  <span className="text-lg font-semibold text-on-surface">15 min</span>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 flex items-center justify-between border border-outline-variant/20">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline">schedule</span>
                    <span className="text-sm text-on-surface">Facility Wait Time</span>
                  </div>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Moderate</span>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary font-semibold min-h-[48px] rounded-lg flex items-center justify-center gap-2 transition-colors hover:opacity-90 shadow-sm mt-auto">
                <span className="material-symbols-outlined">navigation</span>
                Get Directions
              </button>
            </div>

            {/* Translation Card */}
            <div className="bg-surface-container-lowest border-l-4 border-primary rounded-r-xl p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary mb-1">
                <span className="material-symbols-outlined">translate</span>
                <span className="text-xs font-bold uppercase tracking-wider">Quick Translation</span>
              </div>
              <p className="text-lg text-on-surface-variant font-medium">I need a doctor urgently.</p>
              <div className="bg-surface py-4 px-4 rounded-lg border border-outline-variant/20">
                <p className="text-3xl font-bold text-on-surface leading-tight tracking-tight">至急、医者が必要です。</p>
                <p className="text-sm text-on-surface-variant mt-2 opacity-80">(Shikyū, isha ga hitsuyō desu)</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button className="bg-surface-container-highest text-on-surface rounded-full pl-4 pr-6 min-h-[48px] flex items-center justify-center gap-3 w-max hover:bg-surface-dim transition-colors border border-outline-variant/40 shadow-sm">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>volume_up</span>
                  Play Audio
                </button>
                <button className="w-12 h-12 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined">content_copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating SOS Button */}
      <button
        aria-label="SOS Emergency"
        className="fixed bottom-8 right-8 bg-red-600 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-[0_12px_24px_rgba(186,26,26,0.4)] z-50 hover:bg-red-700 hover:scale-105 transition-all duration-200 border-2 border-white/20"
      >
        <span className="material-symbols-outlined text-3xl leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>sos</span>
      </button>

      {/* Footer */}
      <footer className="w-full border-t bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-[1280px] mx-auto gap-8">
          <div className="text-lg font-bold tracking-tighter text-blue-800 dark:text-blue-300 flex items-center gap-2">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            QuickCare
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" href="#">Privacy Policy</a>
            <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" href="#">Terms of Service</a>
            <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" href="#">Contact Support</a>
            <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" href="#">Careers</a>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 QuickCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

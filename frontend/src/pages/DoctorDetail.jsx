import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import SEO from '../components/common/SEO';

export default function DoctorDetail() {
  return (
    <div className="bg-surface-dim text-on-surface min-h-screen pb-24" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <SEO 
        title="Dr. Sarah Jenkins - QuickCare" 
        description="Book an appointment with Dr. Sarah Jenkins, Cardiology Specialist. View availability, transparent pricing, and verified patient reviews."
      />
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto sticky top-0 z-50 backdrop-blur-2xl bg-surface-container-high/80 border-b border-outline-variant/20">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
          <span className="text-xl font-bold text-on-surface">QuickCare</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link className="text-primary border-b-2 border-primary pb-1 font-bold" to="/search">Doctors</Link>
          <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors" to="/symptom-checker">AI Chat</Link>
          <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors" to="#">Clinics</Link>
          <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors" to="#">Pharmacy</Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden md:flex items-center gap-2 text-tertiary font-bold hover:text-tertiary-container transition-colors">
            <span className="material-symbols-outlined">sos</span>
            Emergency SOS
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-screen-lg mx-auto px-6 py-12 space-y-12">
        {/* Back Navigation */}
        <Link className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity" to="/search">
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Search
        </Link>

        {/* Doctor Profile Header Bento */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-bright flex-shrink-0">
              <img
                alt="Doctor profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA47IhFp8-Y19_xvNtW7n2msqeIfC_n3A3uu9XDGWD4Pnr4Ovoz3XkVwdZC0AySWc2GVXLBdE5tk1_xXttVgxVS1pcQwvXFiDW6ibi_marEnv0_xhV-fG9pbE51UZEP_GCVyT3idJc9Qa9Esg71sNLYJVyU5_U7FqwLxc66MIgiQT8KsQzfES6SvyC6uewwRycGyu7qwFZWVNY2mB7QbWziqIZNpQyVlPV2EU28wm6GbxO3uBktkUAHAHH1Maw-y0GWHO8Ah_LSV0Y"
              />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-4xl font-bold tracking-tight text-on-surface">Dr. Sarah Jenkins</h1>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Available</span>
                </div>
                <p className="text-xl text-on-surface-variant font-medium">Cardiology Specialist</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-1 text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/15">
                  <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-on-surface">4.9</span>
                  <span className="text-xs ml-1">(124 Reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/15">
                  <span className="material-symbols-outlined text-sm">language</span>
                  <span className="text-sm font-medium">English, Spanish</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/15">
                  <span className="material-symbols-outlined text-sm">school</span>
                  <span className="text-sm font-medium">Harvard Medical</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-center gap-4">
            <button className="text-on-primary font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center gap-2 bg-primary hover:opacity-90 transition-opacity shadow-lg">
              <span className="material-symbols-outlined">calendar_month</span>
              Book Appointment
            </button>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-surface-container text-on-surface font-medium py-3 px-4 rounded-xl border border-outline-variant/20 hover:bg-surface-bright transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">call</span>
                Call
              </button>
              <button className="bg-secondary/10 text-secondary font-medium py-3 px-4 rounded-xl hover:bg-secondary/20 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-surface-container-low rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-on-surface">About Dr. Jenkins</h2>
              <p className="text-on-surface-variant leading-relaxed">
                With over 15 years of experience in cardiovascular medicine, Dr. Jenkins specializes in preventative cardiology and heart failure management. She is dedicated to providing patient-centered care and utilizes the latest technological advancements in diagnostics to ensure optimal health outcomes.
              </p>
            </section>

            {/* Fee Breakdown */}
            <section className="bg-surface-container-low rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">payments</span>
                Transparent Pricing
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant font-medium">Initial Consultation (Video)</span>
                  <span className="text-xl font-bold text-on-surface">$150</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant font-medium">In-Clinic Visit</span>
                  <span className="text-xl font-bold text-on-surface">$200</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant font-medium">Follow-up Appointment</span>
                  <span className="text-xl font-bold text-on-surface">$90</span>
                </div>
                <div className="bg-surface-container p-4 rounded-lg flex items-start gap-3 mt-4 border border-outline-variant/15">
                  <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                  <p className="text-sm text-on-surface-variant">Prices listed are base rates. Insurance co-pays may apply. Final fees are confirmed before payment.</p>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-surface-container-low rounded-xl p-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-on-surface">Patient Reviews</h2>
                  <p className="text-on-surface-variant mt-1">Based on 124 verified visits</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold tracking-tight text-on-surface">4.9</span>
                  <div className="flex text-primary">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/15">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-bold text-on-surface">Michael R.</p>
                      <p className="text-xs text-on-surface-variant">2 weeks ago</p>
                    </div>
                    <div className="flex text-primary text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">"Dr. Jenkins was incredibly thorough and took the time to explain all my test results in a way I could easily understand. I felt very reassured leaving her office."</p>
                </div>
              </div>
              <button className="mt-6 text-primary font-medium hover:opacity-80 transition-opacity w-full text-center">Read all 124 reviews</button>
            </section>
          </div>

          {/* Right Column: Scheduling */}
          <div className="space-y-6">
            <section className="bg-surface-container-highest rounded-xl p-6 sticky top-24 border border-outline-variant/10 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined">schedule</span>
                Availability
              </h3>
              {/* Date Selector */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <button className="flex-shrink-0 bg-primary-container text-on-primary-container rounded-xl p-3 text-center min-w-[70px]">
                  <span className="block text-xs font-bold uppercase mb-1">Mon</span>
                  <span className="block text-xl font-bold">12</span>
                </button>
                <button className="flex-shrink-0 bg-surface-container hover:bg-surface-bright text-on-surface-variant rounded-xl p-3 text-center min-w-[70px] transition-colors border border-outline-variant/15">
                  <span className="block text-xs font-medium uppercase mb-1">Tue</span>
                  <span className="block text-xl font-medium">13</span>
                </button>
                <button className="flex-shrink-0 bg-surface-container hover:bg-surface-bright text-on-surface-variant rounded-xl p-3 text-center min-w-[70px] transition-colors border border-outline-variant/15">
                  <span className="block text-xs font-medium uppercase mb-1">Wed</span>
                  <span className="block text-xl font-medium">14</span>
                </button>
              </div>
              {/* Time Slots */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-on-surface mb-3">Morning</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-surface-container text-on-surface-variant py-2 rounded-lg text-sm border border-outline-variant/20 hover:bg-surface-bright hover:text-on-surface transition-colors">09:00 AM</button>
                    <button className="bg-surface-container text-on-surface-variant py-2 rounded-lg text-sm border border-outline-variant/20 hover:bg-surface-bright hover:text-on-surface transition-colors">09:30 AM</button>
                    <button className="bg-primary/20 text-primary border border-primary/50 py-2 rounded-lg text-sm font-bold">10:00 AM</button>
                    <button className="bg-surface-container opacity-50 cursor-not-allowed text-on-surface-variant py-2 rounded-lg text-sm border border-outline-variant/10">11:00 AM</button>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface mb-3">Afternoon</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-surface-container text-on-surface-variant py-2 rounded-lg text-sm border border-outline-variant/20 hover:bg-surface-bright hover:text-on-surface transition-colors">01:00 PM</button>
                    <button className="bg-surface-container text-on-surface-variant py-2 rounded-lg text-sm border border-outline-variant/20 hover:bg-surface-bright hover:text-on-surface transition-colors">02:30 PM</button>
                    <button className="bg-surface-container text-on-surface-variant py-2 rounded-lg text-sm border border-outline-variant/20 hover:bg-surface-bright hover:text-on-surface transition-colors">04:00 PM</button>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/15">
                <button className="bg-primary text-on-primary font-bold py-4 px-6 rounded-xl w-full shadow-lg hover:opacity-90 transition-opacity">
                  Continue Booking
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 w-full border-t border-slate-800 bg-slate-950 mt-12">
        <div className="font-bold text-white text-xl">QuickCare</div>
        <div className="flex gap-6 text-sm">
          <a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Medical Disclaimer</a>
          <a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Help Center</a>
        </div>
        <div className="text-sm text-slate-500">© 2024 QuickCare. All rights reserved.</div>
      </footer>

      {/* Persistent Emergency FAB */}
      <button className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(186,26,26,0.4)] hover:bg-red-700 transition-colors z-50 group overflow-hidden">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold pl-0 group-hover:pl-2">Emergency Help</span>
      </button>
    </div>
  );
}

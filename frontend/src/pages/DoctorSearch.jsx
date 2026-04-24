import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

export default function DoctorSearch() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto font-manrope tracking-tight">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-blue-800 dark:text-blue-300">QuickCare</Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-600" to="/search">Find Care</Link>
              <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200" to="/traveler-mode">Traveler Mode</Link>
              <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200" to="/symptom-checker">Symptoms</Link>
              <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200" to="#">History</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-all scale-95 active:opacity-80">Sign In</button>
            <button className="px-5 py-2.5 bg-blue-700 dark:bg-blue-400 text-white dark:text-slate-950 font-bold rounded-xl shadow-sm hover:translate-y-[-1px] transition-all scale-95 active:opacity-80">Emergency Call</button>
          </div>
        </div>
      </header>

      <main className="pt-[72px] flex-1 flex flex-col">
        {/* Filter Bar */}
        <section className="bg-surface-container-low px-6 py-4 z-40">
          <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px] flex items-center bg-surface-container-lowest px-4 py-3 rounded-xl shadow-sm gap-3">
              <span className="material-symbols-outlined text-outline">search</span>
              <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-medium placeholder:text-outline-variant" placeholder="Cardiologist, Tokyo" type="text" />
              <div className="h-6 w-px bg-outline-variant mx-2"></div>
              <span className="material-symbols-outlined text-primary">my_location</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-highest rounded-xl text-sm font-semibold hover:bg-surface-container-high transition-colors">
                  Price
                  <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-highest rounded-xl text-sm font-semibold hover:bg-surface-container-high transition-colors">
                  Language
                  <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-highest rounded-xl text-sm font-semibold hover:bg-surface-container-high transition-colors">
                  Distance
                  <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                </button>
              </div>
              <button className="p-2.5 text-primary hover:bg-primary-fixed rounded-xl transition-colors">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Results List (Left) */}
          <aside className="w-full lg:w-[540px] xl:w-[600px] overflow-y-auto bg-surface p-6 space-y-6 custom-scrollbar">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-headline font-bold text-on-surface">42 Doctors found in Tokyo</h2>
              <span className="text-label-md text-outline font-medium">Sorted by: Relevance</span>
            </div>

            {/* Doctor Card 1 */}
            <div className="bg-surface-container-lowest p-5 rounded-xl transition-all hover:ring-1 hover:ring-primary/20 flex flex-col gap-5 group">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" data-alt="professional portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE5DmPK6WEKHyjSa-80Q69OYtDHTvjbyLrPG2wQrel-CmaPvOLGQoNzxXOSHWNq2_Cdh3T8N-LgUqbhZBxmV1RS5QTdtAKHji123ztbSmIzlZTdxbSilL4wZOzbgOAlYFrTWp586Uqtt-WzkoQGzW2o9Ou0Aae--L-dLLxHQ2ensNyM8tiR56j9snE0w2p2PR5KgpVaP863k3yl-Cn5TAnH6cqTEiCrzlx3Ge3IGCORFeJFfWBvM_Uv5JghU2PI6ck1xmwPSHI8ZM" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-title-lg font-headline font-bold text-on-surface">Dr. Elena Sato</h3>
                      <p className="text-body-lg text-primary font-medium">Senior Cardiologist</p>
                    </div>
                    <div className="bg-secondary-container px-2 py-1 rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-label-md font-bold text-on-secondary-container">4.9</span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">translate</span> English, Japanese, French
                    </span>
                    <span className="px-2.5 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">payments</span> $120 / Visit
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">event_available</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-outline font-bold">Next Available</p>
                    <p className="text-sm font-bold text-on-surface">Today, 4:30 PM</p>
                  </div>
                </div>
                <button className="text-primary font-bold text-sm hover:underline">View All Slots</button>
              </div>
              <div className="flex gap-3">
                <Link to="/doctor/1" className="flex-1 py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-lg">calendar_month</span> Book Visit
                </Link>
                <button className="p-3 bg-surface-container-highest text-on-surface rounded-xl hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </button>
                <button className="p-3 bg-secondary/10 text-secondary rounded-xl hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined">chat</span>
                </button>
              </div>
            </div>

            {/* Doctor Card 2 */}
            <div className="bg-surface-container-lowest p-5 rounded-xl transition-all hover:ring-1 hover:ring-primary/20 flex flex-col gap-5 group">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" data-alt="close-up of young male doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkunO8WgCpaMvvsNULIjy0zBDDvEvLbw4gJwM_9-qSkNRvUw-7upnWPhFAnMlUm6U41fP79ejzKzlGVx5zymcCuJq6kQVxML00DQZ_BhlnhkdUfTC-yZNnFi0JoiLwDXTg2Fx9m3w-ulu6XRgzsaaBByxxhrFkxSWbuqPhJOhqpYbQ-zQvJBpom2dpgAmNakGP17_tnsYYRCLtr80VTT_HDoFMqsuAsxaAsLaYEzgJNZLgly-GjFBIURZtIi2OSVU6r_txUTVVS6E" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-title-lg font-headline font-bold text-on-surface">Dr. Marcus Chen</h3>
                      <p className="text-body-lg text-primary font-medium">Internal Medicine</p>
                    </div>
                    <div className="bg-secondary-container px-2 py-1 rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-label-md font-bold text-on-secondary-container">4.8</span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">translate</span> English, Mandarin
                    </span>
                    <span className="px-2.5 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">payments</span> $95 / Visit
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">event_available</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-outline font-bold">Next Available</p>
                    <p className="text-sm font-bold text-on-surface">Tomorrow, 9:00 AM</p>
                  </div>
                </div>
                <button className="text-primary font-bold text-sm hover:underline">View All Slots</button>
              </div>
              <div className="flex gap-3">
                <Link to="/doctor/2" className="flex-1 py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-lg">calendar_month</span> Book Visit
                </Link>
                <button className="p-3 bg-surface-container-highest text-on-surface rounded-xl hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </button>
                <button className="p-3 bg-secondary/10 text-secondary rounded-xl hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined">chat</span>
                </button>
              </div>
            </div>

            {/* Doctor Card 3 */}
            <div className="bg-surface-container-lowest p-5 rounded-xl transition-all hover:ring-1 hover:ring-primary/20 flex flex-col gap-5 group opacity-75 grayscale-[0.5]">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" data-alt="professional medical expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSXMZCZG0GEKYntsCWmgQ3qQnvYkR3Eaoo0cK71wX4ki_BWT0AoW6ULGuoD24YGExbuIB1frpVyzNbMwm8_-e_NDRg5xE2i_nz136oCn4fmOPPqwzHTjDMXlTJfOfhQmo8eu5NK0fvRdQgtnsP3_nlfwuLkQ0cl6oxH8d8SwuNSCRgHwvc2p3XDLDo4K8rsvKnlcDjIplytgB0wkXrBZWO6AeLId7OzViF_My334UEVDWwy4jLiCaW_ra2SdBZBAIAvcqYqZoTPR4" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-title-lg font-headline font-bold text-on-surface">Dr. Sofia Rossi</h3>
                      <p className="text-body-lg text-primary font-medium">Pediatric Specialist</p>
                    </div>
                    <div className="bg-secondary-container px-2 py-1 rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-label-md font-bold text-on-secondary-container">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">translate</span> English, Italian, Spanish
                    </span>
                    <span className="px-2.5 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">payments</span> $150 / Visit
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline">event_busy</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-outline font-bold">Next Available</p>
                    <p className="text-sm font-bold text-outline">Fully Booked Today</p>
                  </div>
                </div>
                <button className="text-primary font-bold text-sm hover:underline">Notify Me</button>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-surface-container-highest text-outline rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                  Unavailable
                </button>
                <button className="p-3 bg-surface-container-highest text-on-surface rounded-xl hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </button>
                <button className="p-3 bg-secondary/10 text-secondary rounded-xl hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined">chat</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Map Placeholder (Right) */}
          <section className="hidden lg:block flex-1 relative bg-surface-container-high overflow-hidden">
            {/* Mock Map Background */}
            <div className="absolute inset-0 grayscale-[0.2] opacity-80" data-alt="abstract stylized topographic map" data-location="Tokyo" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVPpxwn9DbQHiBo8k8djPry0vUkI-SA6S1Y_ShgmRTJ6mGOM3id-DBYUKA1Q_aAWsf2zTVyr29R9sjRwvN10kmrixLdDgSRkw3PXOixn0UZ6XAmQjrdNZgWPva3kUoEvDoqwlkO7tKpV_6OUhNoBUNUofCITfNH2J0-Fvmh7JWpHMst4o61mCIP0ejGx2CqVpfGZmFq_sPfMaI6hGw-IvqekrXy4csw-5n1anbWm_MWNkIpYM91_6qOBmLX9kin7upRCHIIsa6zCs')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            
            {/* Map UI Overlays */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Pin 1 */}
              <div className="absolute top-1/4 left-1/3 pointer-events-auto transform -translate-x-1/2 -translate-y-full cursor-pointer group">
                <div className="bg-primary text-white p-2 rounded-xl shadow-lg flex items-center gap-2 whitespace-nowrap transition-transform group-hover:scale-110">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border-2 border-white">
                    <img className="w-full h-full object-cover" data-alt="thumbnail of female doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHnkaz-G0U81l8_QPN2Y8YxZLwf3TM_5aGBS-Vx8DmqnDHLgRYzORrfFSVxUDVGHyh_Y3x_Yy2yUHX9Zr3cekkxKXEfixukZ-wCBOc4v_IeSvzeBtpRnTTCvy9BqHl_3aBgwOppInu-jxjlLLkM_-5T0p54xYBlNod8LKv6lwg8c3-PzZNTsghxaOTSy9hOzoh5T9UwY2RCAPBiRWYGWbTqYg_pYdXL1BMSaxIlwmcHThClHuQO1ClSGYN3y1p91zQWiXKr--OhxE" />
                  </div>
                  <div className="pr-2">
                    <p className="text-xs font-bold leading-none">Dr. Elena Sato</p>
                    <p className="text-[10px] font-medium opacity-90">$120 • 0.8km</p>
                  </div>
                </div>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary mx-auto"></div>
              </div>

              {/* Pin 2 */}
              <div className="absolute top-2/3 right-1/4 pointer-events-auto transform -translate-x-1/2 -translate-y-full cursor-pointer group">
                <div className="bg-surface-container-lowest text-on-surface p-2 rounded-xl shadow-lg flex items-center gap-2 whitespace-nowrap transition-transform group-hover:scale-110">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border-2 border-primary-container">
                    <img className="w-full h-full object-cover" data-alt="thumbnail of male doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_nEeZSVLOE5kPjqUiCuzIrr4M9AVOT871gQE31-z635EYWbct0Cqk-znwRmhwzSzNefII3tFa58vTj9PNsS5Rw_6zmGmy88DjL45aVeWuMAGUSMiyMTVL_bxUA67t1x88jo3ALQK8LvMulSBoovHtnRaPycDXtvVvbJqA6h5LWeYYVjPCv6Rp94QpgwDHb5QQJUrnd0IFFAPS-oVEzONYf_g28Y7hleLKfsBTjPe4vxgG_HrHwPCaY2kaN-DgkpxcvcUBzMcwNDI" />
                  </div>
                  <div className="pr-2">
                    <p className="text-xs font-bold leading-none">Dr. Marcus Chen</p>
                    <p className="text-[10px] font-medium text-primary">$95 • 2.4km</p>
                  </div>
                </div>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white mx-auto"></div>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <button className="w-12 h-12 bg-white text-on-surface shadow-lg rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="w-12 h-12 bg-white text-on-surface shadow-lg rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined">remove</span>
              </button>
            </div>

            {/* Floating List Toggle for Mobile */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden">
              <button className="bg-inverse-surface text-inverse-on-surface px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined">list</span> Show List
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

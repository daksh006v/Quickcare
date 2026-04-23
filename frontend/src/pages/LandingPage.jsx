import React from 'react';

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm font-headline tracking-tight">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-blue-800 dark:text-blue-300">QuickCare</div>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-600" href="#">Find Care</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200" href="#">Traveler Mode</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200" href="#">Symptoms</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200" href="#">History</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden lg:block text-slate-600 dark:text-slate-400 font-medium px-4 py-2 hover:text-blue-500 transition-colors">Sign In</button>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold transition-transform scale-95 active:opacity-80 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">emergency</span>
              Emergency Call
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold mb-6">Verified English-Speaking Care</span>
              <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface">
                Sick in an <span className="text-editorial-gradient">unfamiliar city?</span> We’ve got you.
              </h1>
              <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-12 max-w-xl">
                Connect with verified English-speaking doctors anywhere in the world. Book instant appointments, get prescriptions, and find care that understands you.
              </p>
              {/* Search Bar Integrated */}
              <div className="bg-surface-container-lowest p-2 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2 max-w-2xl border border-outline-variant/10">
                <div className="flex-1 flex items-center px-4 py-3 gap-3 bg-surface-container-low rounded-xl">
                  <span className="material-symbols-outlined text-outline">location_on</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface" placeholder="Location (e.g. Tokyo, JP)" type="text"/>
                </div>
                <div className="flex-1 flex items-center px-4 py-3 gap-3 bg-surface-container-low rounded-xl">
                  <span className="material-symbols-outlined text-outline">medical_services</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface" placeholder="Specialty or Symptom" type="text"/>
                </div>
                <button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">search</span>
                  Find care now
                </button>
              </div>
              {/* Filter Pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-surface-container-high text-on-surface text-sm font-medium rounded-full flex items-center gap-2 cursor-pointer hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[18px]">language</span> English-speaking
                </span>
                <span className="px-4 py-2 bg-surface-container-high text-on-surface text-sm font-medium rounded-full flex items-center gap-2 cursor-pointer hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[18px]">schedule</span> Open now
                </span>
                <span className="px-4 py-2 bg-surface-container-high text-on-surface text-sm font-medium rounded-full flex items-center gap-2 cursor-pointer hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[18px]">videocam</span> Telehealth
                </span>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  <img className="w-12 h-12 rounded-full border-4 border-surface object-cover" data-alt="professional female doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNZy-j7tAx24KvlhaWDIary3Cuo84nVodOUJocbWDRZxAXPoQnFSV2UfV1zTZrwQfJWHJ9qI5TXX9WTftvllz4R4AIbBHhQUCyK4l9zRpuRtwlClg7TE8HJDWqM3P15gZyxi5uaRM69ke8T868V_QSuUb-HRYdZHhqQWCJ76tt19lJcdIHbyglyTib0Ib5A8zIHVKEHbBRcLoDJomL0dszN_pO9eWu50xHoHTyh88Tj3bKdstNxbRHN6EGQPXVIKVQjsfrxSt1Rdw"/>
                  <img className="w-12 h-12 rounded-full border-4 border-surface object-cover" data-alt="friendly male physician" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgQFpiJo905YDfukcU2Fi-Y8GDwcAviw-h4-a3IJF9a0yCSJTnRPTOl7Wh_rFCeOxmNRem8vSlHWecLiUWDtn7T90cVNPniPTxN8JcTZsK2zUGTTaVOjddevecv4xV8mIIMejZlhOjCwDl6cO_wSmBBjL8PO3RAxBneDOiI9TvF_ZkH5I_FXgZZbL068KWoMreVWsusEmAnee5CdTvrBQDM78hhgPWDSc6LZCqOaPM3YO8X99FrhgecqUFeo-k1d4vKrMgFevmHN0"/>
                  <img className="w-12 h-12 rounded-full border-4 border-surface object-cover" data-alt="confident young woman doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALqXhZz3Z7Ph1MQlC9YuCs_3nTdX35cI1l8Fnzca32cUHbs0aMPR_ar3tn-0vprpMauULkXsTrOPGG2ioCfYaxs6-hSjFChMTF2VtyZUUmS2vKAR9hSmAtGKHbcuywV976SoBMzWoNG-t0YE_-Dr6XSv_P6hQCsE_NwSEHiJpHEde4OnRd9HfG7SjAuXSa3jGySYk7IH9KFJs61sr8faaW_oYFratruBCx88J-9dLNTHO_scw11i6U_CB0IQIhTNtydj8-ZDLDWw0"/>
                </div>
                <p className="text-on-surface-variant font-medium">
                  <span className="text-primary font-bold">2400+</span> Verified doctors worldwide
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                <img className="w-full h-full object-cover" data-alt="modern luxury hotel lobby" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlsPuXoo4CPxdbqd0XbTLhu_IWzlSmZ29ld-Oxqoc6MxIhRXfr7yMnAUeKULMi8oAmGgq5IxT1X5sHHhELmHEIAjNJEnQJBvLfiAKjiuipiDO-DruTR-Z_0dhsvY_-ZNkf8WtjSWasZQ9lR5gS-ksQdrKBR1z0nOn47oTyfmh8j9k-6uTXeDJoe6W3KE4VVFFuwwjcinMNwmb1t-y1SIFiyY9CQtuvZCTUHZjEgA5OeW754IAiyWNis_Pu3mrkfD6oWehx-gl2bMc"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              {/* Asymmetric floating card */}
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl max-w-[240px] border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container">
                    <span className="material-symbols-outlined">map</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">Global Reach</p>
                    <p className="font-bold text-sm">64+ Countries</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-4/5"></div>
                  </div>
                  <p className="text-[10px] text-on-surface-variant">Rapid growth in Asia Pacific</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-surface-container-low py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl transition-transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">verified_user</span>
                <h3 className="font-headline text-lg font-bold mb-2">100% Verified</h3>
                <p className="text-sm text-on-surface-variant">Every doctor is vetted for credentials and language proficiency.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl transition-transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">payments</span>
                <h3 className="font-headline text-lg font-bold mb-2">Upfront Pricing</h3>
                <p className="text-sm text-on-surface-variant">No hidden fees or "tourist prices." Pay standard local rates.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl transition-transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">translate</span>
                <h3 className="font-headline text-lg font-bold mb-2">English Fluent</h3>
                <p className="text-sm text-on-surface-variant">Native-level communication ensures your health is never lost in translation.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl transition-transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">support_agent</span>
                <h3 className="font-headline text-lg font-bold mb-2">24/7 Support</h3>
                <p className="text-sm text-on-surface-variant">Our concierge team helps you navigate local hospital systems anytime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Listing Preview */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-headline text-4xl font-extrabold mb-4">Top Doctors in Tokyo</h2>
                <p className="text-on-surface-variant text-lg">Available for immediate booking near you.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View all 140+ clinics in Tokyo <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant/10">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" data-alt="professional male doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACMaLZ5JB4Stu1fcf8q0NNMNvOuSu-7ojqCalyado02tJSECSjEKxasmkJdOCoh2XS3QK_kDYZy6EiwVJv5C5L1b4YkzDbMqw9vc15qNSx1rtWPy0Z09VIb-TSnbTRFUe3ij03WFpzCNMhaGqP8KNKQg8NihDtRuQ_H1CIuH-4FKVh89pIVo-sOIGChMpAOFnxTd-tmkWncsPoURUWIrAeMLdqLt9OQWQ-AFUe47Ftv4apOf07X88sX_0cuY4V1knJHkMM7vSVk8Y"/>
                  <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">Available Now</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-xl">Dr. Kenji Tanaka</h4>
                    <div className="flex items-center text-tertiary font-bold">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="ml-1">4.9</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4">General Practitioner • 12 years exp.</p>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-outline text-[20px]">location_on</span>
                    <p className="text-sm">Minato City, Tokyo (1.2 km away)</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-surface-container">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-outline mb-1">Consultation</p>
                      <p className="text-2xl font-bold text-primary">¥8,500</p>
                    </div>
                    <button className="bg-surface-container-highest hover:bg-primary-fixed text-on-primary-fixed-variant px-5 py-2.5 rounded-xl font-bold transition-colors">Book Now</button>
                  </div>
                </div>
              </div>

              {/* Doctor Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant/10">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" data-alt="female pediatrician" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCWcO-vsQ9i5HtiS_8tiRcqBJbhYSUlKhxFKkCFvgXx7sx8e2oyj5W-2x03RS8-voX7M19K70sHnFnSjUHNX4UwDL7OHWdMj0vrQezFK5O341RU8vX_6hQ4M8exrAhIRs9Y597aPOu5ljaIje3ziUvz7yMDikt7S-_lDgt3T8cGvl4tiJIkwitygU2ROvIbZv49VBy3CdLxqcwGuVTHfh2PdJh6XHxOB4QsoOyRA0Sy7jZB9YpIjIET9pO5dW5W23G3B_Z2ByJXnY"/>
                  <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold">Next available: 2:30 PM</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-xl">Dr. Sarah Miller</h4>
                    <div className="flex items-center text-tertiary font-bold">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="ml-1">5.0</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4">Pediatrician • US Board Certified</p>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-outline text-[20px]">location_on</span>
                    <p className="text-sm">Shibuya, Tokyo (3.5 km away)</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-surface-container">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-outline mb-1">Consultation</p>
                      <p className="text-2xl font-bold text-primary">¥10,000</p>
                    </div>
                    <button className="bg-surface-container-highest hover:bg-primary-fixed text-on-primary-fixed-variant px-5 py-2.5 rounded-xl font-bold transition-colors">Book Now</button>
                  </div>
                </div>
              </div>

              {/* Doctor Card 3 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant/10">
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover" data-alt="modern dental surgery room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDnzybkzLqFhcWaqRPHyH9gFfqiAj9M0LKfPHCXYx6noWyuSlV_RxhabWw-Uu7k6rRQ1wTWqyofgJJgrPuA7gWH1IVFf9QhloSg-LQW8cq1W_Z9eY7HaVUxYHMSUjPBn3fiKnmdaM04o4bnhqLXfPPmLpAAWsfrIXk9y-WYB7fOSlK9qDU_y0rOdfFH3NIejcKUZIgPq-0wM8xF_6_t9zDQQsiimb1d9iPq9kjrwWpqmmPyT69KOL9xvunF7ahJarzcOSHleO0y4"/>
                  <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">Available Now</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-xl">Dr. Elena Rossi</h4>
                    <div className="flex items-center text-tertiary font-bold">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="ml-1">4.8</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4">Dermatologist • Emergency Specialist</p>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-outline text-[20px]">location_on</span>
                    <p className="text-sm">Chiyoda, Tokyo (2.1 km away)</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-surface-container">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-outline mb-1">Consultation</p>
                      <p className="text-2xl font-bold text-primary">¥9,200</p>
                    </div>
                    <button className="bg-surface-container-highest hover:bg-primary-fixed text-on-primary-fixed-variant px-5 py-2.5 rounded-xl font-bold transition-colors">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold mb-4">Quality care in 4 simple steps</h2>
            <p className="text-on-surface-variant text-lg">We've removed the friction from international healthcare.</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-fixed text-on-primary-fixed rounded-2xl flex items-center justify-center text-3xl font-bold font-headline mb-6">1</div>
              <h3 className="font-headline text-xl font-bold mb-4">Search & Filter</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Enter your location and filter by specialty or language proficiency.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-fixed text-on-primary-fixed rounded-2xl flex items-center justify-center text-3xl font-bold font-headline mb-6">2</div>
              <h3 className="font-headline text-xl font-bold mb-4">Choose Doctor</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Browse verified profiles, read traveler reviews, and see upfront pricing.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-fixed text-on-primary-fixed rounded-2xl flex items-center justify-center text-3xl font-bold font-headline mb-6">3</div>
              <h3 className="font-headline text-xl font-bold mb-4">Instant Booking</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Confirm your appointment instantly. No more waiting on phone lines.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-fixed text-on-primary-fixed rounded-2xl flex items-center justify-center text-3xl font-bold font-headline mb-6">4</div>
              <h3 className="font-headline text-xl font-bold mb-4">Get Better</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Receive care, get digital prescriptions, and focus on enjoying your trip.</p>
            </div>
          </div>

          {/* Bento CTA */}
          <div className="max-w-7xl mx-auto mt-24">
            <div className="bg-primary p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-[200px]">health_and_safety</span>
              </div>
              <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-primary mb-8 max-w-2xl relative z-10">Ready to find a doctor you can trust?</h2>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-fixed transition-all">Search Near Me</button>
                <button className="bg-primary-container text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-container/80 transition-all border border-white/20">How it works</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t-0 mt-auto font-label">
        <div className="w-full py-12 px-6 flex flex-col items-center space-y-8 max-w-screen-2xl mx-auto">
          <div className="text-lg font-black text-slate-900 dark:text-slate-100">QuickCare</div>
          <div className="flex flex-wrap justify-center gap-8 text-xs tracking-wide">
            <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-opacity opacity-80 underline text-blue-600" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-opacity opacity-80" href="#">Terms of Service</a>
            <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-opacity opacity-80" href="#">Contact Support</a>
            <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-opacity opacity-80" href="#">For Doctors</a>
            <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-opacity opacity-80" href="#">Global Coverage</a>
          </div>
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 w-full text-center">
            <p className="text-slate-500 dark:text-slate-400 text-[10px]">© 2024 QuickCare Global Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

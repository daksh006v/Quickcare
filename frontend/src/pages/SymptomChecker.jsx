import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import SEO from '../components/common/SEO';

export default function SymptomChecker() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <SEO 
        title="AI Symptom Checker - QuickCare" 
        description="Describe how you're feeling and our AI assistant will help guide you to the right level of care while you travel."
      />
        {/* TopNavBar */}
        <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
            <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-blue-800 dark:text-blue-300 font-headline">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                      QuickCare
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200 font-label" to="/search">Find Care</Link>
                        <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200 font-label" to="/traveler-mode">Traveler Mode</Link>
                        <Link className="text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-600 font-label" to="/symptom-checker">Symptoms</Link>
                        <Link className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200 font-label" to="#">History</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link to="/login" className="hidden md:block px-4 py-2 text-slate-600 dark:text-slate-400 font-medium hover:text-blue-500 transition-colors duration-200 font-label">Sign In</Link>
                    <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all scale-95 active:opacity-80 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm" data-icon="emergency">emergency</span>
                        Emergency Call
                    </button>
                </div>
            </div>
        </nav>

        {/* Main Content Canvas */}
        <main className="flex-grow pt-24 pb-12 px-4 md:px-6 max-w-5xl mx-auto w-full flex flex-col">
            {/* Header / Context */}
            <header className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">AI Symptom Checker</h1>
                    <p className="text-on-surface-variant max-w-xl text-lg font-body leading-relaxed">
                        Describe how you're feeling. Our AI assistant will help guide you to the right level of care while you travel.
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-xl">
                    <span className="material-symbols-outlined text-secondary" data-icon="location_on">location_on</span>
                    <span className="text-sm font-semibold text-on-surface-variant font-label">Tokyo, Japan</span>
                </div>
            </header>

            {/* Chat Container */}
            <div className="flex-grow flex flex-col bg-surface-container-low rounded-2xl overflow-hidden shadow-sm relative min-h-[500px]">
                {/* Disclaimer Banner */}
                <div className="bg-tertiary-fixed text-on-tertiary-fixed px-6 py-3 flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5" data-icon="info">info</span>
                    <p className="text-xs md:text-sm font-medium font-body leading-tight">
                        <strong>Disclaimer:</strong> This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a medical emergency, call local emergency services immediately.
                    </p>
                </div>

                {/* Scrollable Messages Area */}
                <div className="flex-grow overflow-y-auto p-6 space-y-6 flex flex-col">
                    {/* Bot Message */}
                    <div className="flex items-start gap-4 max-w-[85%] md:max-w-[70%]">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-on-primary-container" data-icon="smart_toy">smart_toy</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-surface-container-lowest p-4 rounded-2xl rounded-tl-none shadow-sm text-on-surface font-body leading-relaxed">
                                Hello! I'm your QuickCare Assistant. To help you better, could you tell me what symptoms you're experiencing and when they started?
                            </div>
                            <span className="text-[10px] text-outline font-label uppercase tracking-widest ml-1">AI Assistant • Just Now</span>
                        </div>
                    </div>

                    {/* User Message */}
                    <div className="flex items-start gap-4 max-w-[85%] md:max-w-[70%] self-end flex-row-reverse">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-on-surface-variant" data-icon="person">person</span>
                        </div>
                        <div className="space-y-2 text-right">
                            <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-none shadow-md font-body leading-relaxed text-left">
                                I've had a sharp pain in my lower back since this morning, and I'm feeling a bit nauseous. I arrived in Tokyo yesterday.
                            </div>
                            <span className="text-[10px] text-outline font-label uppercase tracking-widest mr-1">You • 2m ago</span>
                        </div>
                    </div>

                    {/* Bot Message with Options */}
                    <div className="flex items-start gap-4 max-w-[85%] md:max-w-[70%]">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-on-primary-container" data-icon="smart_toy">smart_toy</span>
                        </div>
                        <div className="space-y-4 w-full">
                            <div className="bg-surface-container-lowest p-4 rounded-2xl rounded-tl-none shadow-sm text-on-surface font-body leading-relaxed">
                                I understand. Back pain combined with nausea can be concerning. Does the pain radiate to your abdomen or groin area?
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 bg-surface-container-highest hover:bg-primary-fixed text-on-surface-variant rounded-full text-sm font-semibold transition-colors font-label">Yes, it does</button>
                                <button className="px-4 py-2 bg-surface-container-highest hover:bg-primary-fixed text-on-surface-variant rounded-full text-sm font-semibold transition-colors font-label">No, it stays in the back</button>
                                <button className="px-4 py-2 bg-surface-container-highest hover:bg-primary-fixed text-on-surface-variant rounded-full text-sm font-semibold transition-colors font-label">I'm not sure</button>
                            </div>
                            <span className="text-[10px] text-outline font-label uppercase tracking-widest ml-1">AI Assistant • 1m ago</span>
                        </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex items-start gap-4 opacity-50">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-on-primary-container" data-icon="smart_toy">smart_toy</span>
                        </div>
                        <div className="bg-surface-container-lowest px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                            <div className="w-1.5 h-1.5 bg-outline rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-outline rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-1.5 h-1.5 bg-outline rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 md:p-6 bg-surface-container-lowest border-t-0 shadow-[0_-4px_24px_-10px_rgba(0,0,0,0.05)]">
                    <div className="flex items-end gap-4 max-w-4xl mx-auto relative">
                        <div className="flex-grow relative">
                            <textarea className="w-full bg-surface-container-high border-none rounded-2xl py-4 pl-6 pr-14 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all resize-none font-body text-on-surface placeholder:text-outline" placeholder="Type your symptoms here..." rows="1"></textarea>
                            <button className="absolute right-3 bottom-3 p-2 text-primary hover:bg-primary-fixed rounded-xl transition-colors">
                                <span className="material-symbols-outlined" data-icon="mic">mic</span>
                            </button>
                        </div>
                        <button className="bg-primary text-on-primary p-4 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center shadow-lg shadow-primary/20 group">
                            <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform" data-icon="send">send</span>
                        </button>
                    </div>
                    <div className="mt-4 flex justify-center gap-6">
                        <button className="flex items-center gap-2 text-outline hover:text-primary transition-colors text-xs font-semibold font-label">
                            <span className="material-symbols-outlined text-lg" data-icon="attach_file">attach_file</span>
                            Add Photo
                        </button>
                        <button className="flex items-center gap-2 text-outline hover:text-primary transition-colors text-xs font-semibold font-label">
                            <span className="material-symbols-outlined text-lg" data-icon="history">history</span>
                            View History
                        </button>
                    </div>
                </div>
            </div>

            {/* Secondary Content / Recommendations Bento */}
            <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-0 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-secondary-container" data-icon="local_hospital">local_hospital</span>
                    </div>
                    <h3 className="font-headline font-bold text-lg">Nearby Clinics</h3>
                    <p className="text-on-surface-variant text-sm font-body leading-snug">There are 4 English-speaking urgent care centers within 2km of your current location in Tokyo.</p>
                    <button className="mt-auto text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                        View on Map <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </div>

                <div className="bg-white dark:bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-0 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-tertiary-fixed" data-icon="medication">medication</span>
                    </div>
                    <h3 className="font-headline font-bold text-lg">Pharmacy Guide</h3>
                    <p className="text-on-surface-variant text-sm font-body leading-snug">Find local equivalents for common medications. Translation cards available for pharmacists.</p>
                    <button className="mt-auto text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                        Open Guide <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </div>

                <div className="bg-white dark:bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-0 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary-fixed" data-icon="support_agent">support_agent</span>
                    </div>
                    <h3 className="font-headline font-bold text-lg">Live Assistant</h3>
                    <p className="text-on-surface-variant text-sm font-body leading-snug">Connect with a human medical coordinator for help with insurance or translation.</p>
                    <button className="mt-auto text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                        Start Live Chat <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </div>
            </section>
        </main>

        {/* Footer */}
        <footer className="w-full py-12 px-6 flex flex-col items-center space-y-6 bg-slate-50 dark:bg-slate-950 mt-auto">
            <span className="text-lg font-black text-slate-900 dark:text-slate-100 font-headline flex items-center gap-2">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              QuickCare
            </span>
            <div className="flex flex-wrap justify-center gap-6">
                <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 text-xs font-label uppercase tracking-widest transition-opacity" href="#">Privacy Policy</a>
                <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 text-xs font-label uppercase tracking-widest transition-opacity" href="#">Terms of Service</a>
                <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 text-xs font-label uppercase tracking-widest transition-opacity" href="#">Contact Support</a>
                <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 text-xs font-label uppercase tracking-widest transition-opacity" href="#">For Doctors</a>
                <a className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 text-xs font-label uppercase tracking-widest transition-opacity" href="#">Global Coverage</a>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-body">© 2024 QuickCare Global Health. All rights reserved.</p>
        </footer>
    </div>
  );
}

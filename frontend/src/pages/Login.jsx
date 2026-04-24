import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-surface-dim text-on-surface min-h-screen flex items-center justify-center p-4 md:p-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <main className="w-full max-w-[1400px] bg-surface-container-low rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_12px_40px_rgba(6,14,32,0.4)] relative z-10 min-h-[800px]">
        {/* Left Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-surface-container-highest p-12 flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              alt="Clinic Interior"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABACu4O-K_NYj7yP_cuOSeTv-f1n58mnIWqGPPEsbItvwfPMUoPJI7pfD28C7kBPaySbBalcxy9E-S8I0ZZC-nulUCUFf7n9sUnUsjJ9NbEN4ORAxE9A6sBt3lR9GaML2pOsZp9XHm1DjKH814h1PMRskB4NVN1ySM4BgD4OBVs0TB6MY6t9TMJ2Yty2oQwmLbVzdzN_LFbTh7yL3qvd4XFmEfnu67cWUQjygKDVM5jAiv524FD07P8L3qCAer_DyTgp7N7g6RoeQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-surface-dim/50 to-transparent"></div>
          </div>
          <div className="relative z-10">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              QuickCare
            </Link>
          </div>
          <div className="relative z-10 mt-auto pb-12 pr-12">
            <blockquote className="text-3xl md:text-4xl tracking-tight leading-tight text-primary font-bold mb-6">
              "In critical moments, clarity is the greatest comfort."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <p className="text-on-surface-variant font-medium">Dr. Elena Rostova, Chief Medical Officer</p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-surface-dim">
          <div className="max-w-md w-full mx-auto">
            {/* Mobile logo */}
            <div className="lg:hidden mb-12">
              <Link to="/" className="text-xl font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                QuickCare
              </Link>
            </div>

            <div className="mb-12">
              <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-on-surface">Welcome Back</h1>
              <p className="text-lg text-on-surface-variant">Securely access your health records and appointments.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1" htmlFor="email">Email Address</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">mail</span>
                  <input
                    className="w-full bg-surface-container-highest border-0 rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2 ml-1 mr-1">
                  <label className="block text-sm font-semibold text-on-surface-variant" htmlFor="password">Password</label>
                  <a className="text-sm text-primary hover:opacity-80 transition-opacity" href="#">Forgot password?</a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
                  <input
                    className="w-full bg-surface-container-highest border-0 rounded-lg py-4 pl-12 pr-12 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                    id="password"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility' : 'visibility_off'}</span>
                  </button>
                </div>
              </div>

              <button
                className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold rounded-xl py-4 shadow-lg hover:opacity-90 transition-opacity mt-8"
                type="submit"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="mt-10 mb-8 relative flex items-center">
              <div className="flex-grow border-t border-outline-variant/30"></div>
              <span className="flex-shrink-0 mx-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Or continue with</span>
              <div className="flex-grow border-t border-outline-variant/30"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-transparent border border-outline-variant/20 rounded-lg py-3 hover:bg-surface-container-high transition-colors">
                <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPW2YzQgThrImN5Ws1GakJzFMFGRD_S_3RTjuxjyBBorSJjcojT0f_yz5Sg1lJe7eVguTJbG9iZyQPwQPOpMKAs3uRqJqiinpOxETW00F2J2I4NBb-y3O4REZo9AQ2ZyXLHY9mM0ohKqwl5gbK9lOK8wNrrRbaF5dqqgcgLfMgXjx1oXAK0iJLqBn1UNyxVF9GUjIig6ojSMQkZ_9GUECYpqI5yMRB0cQfmmZZH_mBDQi6YB0OgJb1h34In1krleB9YK-pOJ-ULsc" />
                <span className="text-sm font-semibold text-on-surface">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-transparent border border-outline-variant/20 rounded-lg py-3 hover:bg-surface-container-high transition-colors">
                <img alt="Apple" className="w-5 h-5 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Hhuso4B4UX9dYw1mVytnE1Wnvmjd8QEr9xBrjioF1Z427mLgAj3kAJ4H69bKvs2b0GKYS0U9ejTqJ_1vLjgRHDc2brgABdTMX26Tan3XtyDrfOqGJKWmEtZLKDa5I4mEMv_4rvnuzer6nTl7BdXWtUHZF73Xf8KSE8F10sIkFYIvrfLZ4VWoI1Nk3xTlhE0Ks57m8CvWJnm2xH_JPeGzgHc1erRlxegCCmoog9dyVwcpAEjZoYLv3n88ZmOuDlFS7cUEjyZPtt4" />
                <span className="text-sm font-semibold text-on-surface">Apple</span>
              </button>
            </div>

            <p className="mt-12 text-center text-on-surface-variant">
              Don't have an account?{' '}
              <Link className="text-primary font-semibold hover:underline underline-offset-4" to="/signup">Create an account</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Floating SOS Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-[0_12px_40px_-12px_rgba(255,84,81,0.4)] hover:scale-105 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl">sos</span>
      </button>
    </div>
  );
}

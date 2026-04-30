import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import SEO from '../components/common/SEO';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      const result = await register(values);
      if (result.success) {
        toast.success('Account created successfully!');
        navigate('/');
      } else {
        toast.error(result.message || 'Registration failed');
      }
    },
  });

  return (
    <div className="bg-surface-dim text-on-surface min-h-screen flex items-center justify-center p-4 md:p-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <SEO 
        title="Create Account - QuickCare" 
        description="Join QuickCare to access verified English-speaking doctors globally. Secure your health journey today."
      />
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
              "Your health journey starts with a single, confident step."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary/50"></div>
              <p className="text-on-surface-variant font-medium">QuickCare Global Health Team</p>
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

            <div className="mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-on-surface">Create Account</h1>
              <p className="text-lg text-on-surface-variant">Join thousands of travelers with access to global healthcare.</p>
            </div>

            <form className="space-y-5" onSubmit={formik.handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1" htmlFor="name">Full Name</label>
                <div className="relative group">
                  <span className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 ${formik.touched.name && formik.errors.name ? 'text-error' : 'text-outline group-focus-within:text-primary'} transition-colors`}>person</span>
                  <input
                    className={`w-full bg-surface-container-highest border-2 ${formik.touched.name && formik.errors.name ? 'border-error focus:ring-error' : 'border-transparent focus:border-primary'} rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-0 focus:bg-surface-bright transition-all`}
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-error text-sm mt-1 ml-1 font-medium">{formik.errors.name}</div>
                ) : null}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1" htmlFor="email">Email Address</label>
                <div className="relative group">
                  <span className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 ${formik.touched.email && formik.errors.email ? 'text-error' : 'text-outline group-focus-within:text-primary'} transition-colors`}>mail</span>
                  <input
                    className={`w-full bg-surface-container-highest border-2 ${formik.touched.email && formik.errors.email ? 'border-error focus:ring-error' : 'border-transparent focus:border-primary'} rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-0 focus:bg-surface-bright transition-all`}
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-error text-sm mt-1 ml-1 font-medium">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1" htmlFor="password">Password</label>
                <div className="relative group">
                  <span className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 ${formik.touched.password && formik.errors.password ? 'text-error' : 'text-outline group-focus-within:text-primary'} transition-colors`}>lock</span>
                  <input
                    className={`w-full bg-surface-container-highest border-2 ${formik.touched.password && formik.errors.password ? 'border-error focus:ring-error' : 'border-transparent focus:border-primary'} rounded-lg py-4 pl-12 pr-12 text-on-surface placeholder:text-outline focus:ring-0 focus:bg-surface-bright transition-all`}
                    id="password"
                    name="password"
                    placeholder="Create a strong password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility' : 'visibility_off'}</span>
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-error text-sm mt-1 ml-1 font-medium">{formik.errors.password}</div>
                ) : null}
              </div>

              <button
                className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold rounded-xl py-4 shadow-lg hover:opacity-90 transition-opacity mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 mb-6 relative flex items-center">
              <div className="flex-grow border-t border-outline-variant/30"></div>
              <span className="flex-shrink-0 mx-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Or sign up with</span>
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

            <p className="mt-10 text-center text-on-surface-variant">
              Already have an account?{' '}
              <Link className="text-primary font-semibold hover:underline underline-offset-4" to="/login">Sign in</Link>
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

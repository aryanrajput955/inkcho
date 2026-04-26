'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const services = ['Mobile App', 'Website Design', 'Branding', 'Web Development', 'Illustration', 'Logo Design', 'Graphic Design'];

  const componentRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const inputsRef = useRef([]);
  const serviceButtonsRef = useRef([]);
  const messageRef = useRef(null);
  const submitBtnRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    selectedServices: [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!headingRef.current || !subheadingRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 } });

      // Clean start state
      gsap.set([headingRef.current.querySelectorAll('span'), subheadingRef.current, inputsRef.current, serviceButtonsRef.current, messageRef.current, submitBtnRef.current], { 
        opacity: 0, 
        y: 60 
      });

      tl.to(headingRef.current?.querySelectorAll('span'), {
        opacity: 1,
        y: 0,
        stagger: 0.15,
      })
      .to(subheadingRef.current, {
        opacity: 1,
        y: 0,
      }, "-=0.5")
      .to(inputsRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
      }, "-=0.4")
      .to(serviceButtonsRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.4)',
      }, "-=0.3")
      .to(messageRef.current, {
        opacity: 1,
        y: 0,
      }, "-=0.3")
      .to(submitBtnRef.current, {
        opacity: 1,
        y: 0,
      }, "-=0.2");
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Valid email is required";
    }
    if (formData.selectedServices.length === 0) tempErrors.services = "Select at least one service";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const toggleService = (service) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(service);
      const newServices = exists ? prev.selectedServices.filter(s => s !== service) : [...prev.selectedServices, service];
      if (newServices.length > 0 && errors.services) setErrors(errs => ({ ...errs, services: null }));
      return { ...prev, selectedServices: newServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '', selectedServices: [] });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        alert(data.error || 'Error sending message.');
      }
    } catch (error) {
      alert('Network error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={componentRef} className="bg-[#f7f4ec] min-h-screen flex flex-col items-center pt-40 md:pt-56 pb-24 px-6 sm:px-10">
      <style jsx>{`
        @keyframes smoothScale {0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        .smooth-hover:hover {animation: smoothScale .4s ease-in-out forwards;}
        .button-hover:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 30px rgba(154,27,64,0.15);}
      `}</style>

      <div className="max-w-3xl w-full text-center">
        <h1 ref={headingRef} className="heading text-6xl sm:text-7xl lg:text-9xl font-serif font-bold mb-12 leading-[0.9] tracking-tighter">
          <span className="text-[#9a1b40] block">Say Hi!</span>
          <span className="text-[#1e4389] block mt-4 text-3xl sm:text-4xl lg:text-6xl tracking-tight">and tell me about your idea</span>
        </h1>

        <p ref={subheadingRef} className="subheading text-black/60 text-lg sm:text-xl mb-20 max-w-xl mx-auto leading-relaxed font-medium">
          Ready to turn that idea into a reality? Drop me a message and let's start something incredible together.
        </p>

        <form onSubmit={handleSubmit} className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left group">
              <label className="block text-[#1e4389] font-black text-[10px] tracking-[0.3em] uppercase mb-5 opacity-60 group-focus-within:opacity-100 transition-opacity">
                Name<span className="text-[#9a1b40]">*</span>
              </label>
              <input
                ref={el => (inputsRef.current[0] = el)}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. John Doe"
                className={`w-full bg-transparent border-b-2 px-0 py-4 text-xl sm:text-2xl font-serif text-[#1e1e1e] placeholder-black/10 focus:outline-none transition-all duration-700 ${errors.name ? 'border-red-500' : 'border-[#d6d3cd] focus:border-[#9a1b40]'}`}
              />
              {errors.name && <p className="text-red-500 text-[9px] mt-3 font-black uppercase tracking-widest">{errors.name}</p>}
            </div>
            <div className="text-left group">
              <label className="block text-[#1e4389] font-black text-[10px] tracking-[0.3em] uppercase mb-5 opacity-60 group-focus-within:opacity-100 transition-opacity">
                Email<span className="text-[#9a1b40]">*</span>
              </label>
              <input
                ref={el => (inputsRef.current[1] = el)}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex. hello@inkcho.com"
                className={`w-full bg-transparent border-b-2 px-0 py-4 text-xl sm:text-2xl font-serif text-[#1e1e1e] placeholder-black/10 focus:outline-none transition-all duration-700 ${errors.email ? 'border-red-500' : 'border-[#d6d3cd] focus:border-[#9a1b40]'}`}
              />
              {errors.email && <p className="text-red-500 text-[9px] mt-3 font-black uppercase tracking-widest">{errors.email}</p>}
            </div>
          </div>

          <div className="text-left group">
            <label className="block text-[#1e4389] font-black text-[10px] tracking-[0.3em] uppercase mb-5 opacity-60 group-focus-within:opacity-100 transition-opacity">Company / Agency</label>
            <input
              ref={el => (inputsRef.current[2] = el)}
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Where are you from?"
              className="w-full bg-transparent border-b-2 border-[#d6d3cd] px-0 py-4 text-xl sm:text-2xl font-serif text-[#1e1e1e] placeholder-black/10 focus:outline-none focus:border-[#9a1b40] transition-all duration-700"
            />
          </div>

          <div className="text-left">
            <label className="block text-[#1e4389] font-black text-[10px] tracking-[0.3em] uppercase mb-10 opacity-60">
              Services Required<span className="text-[#9a1b40]">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {services.map((service, i) => (
                <button
                  key={service}
                  ref={btn => (serviceButtonsRef.current[i] = btn)}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-8 py-4 rounded-full border-2 text-[14px] font-bold transition-all duration-500 ${
                    formData.selectedServices.includes(service)
                      ? 'bg-[#9a1b40] text-white border-[#9a1b40] scale-105 shadow-lg shadow-[#9a1b40]/20'
                      : 'bg-transparent text-[#1e1e1e] border-[#d6d3cd] hover:border-[#9a1b40]/40'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
            {errors.services && <p className="text-red-500 text-[9px] mt-4 font-black uppercase tracking-widest">{errors.services}</p>}
          </div>

          <div className="text-left group">
            <label className="block text-[#1e4389] font-black text-[10px] tracking-[0.3em] uppercase mb-5 opacity-60 group-focus-within:opacity-100 transition-opacity">
              Message<span className="text-[#9a1b40]">*</span>
            </label>
            <textarea
              ref={messageRef}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me more about your project goals..."
              rows="5"
              className={`w-full bg-white/40 border-2 rounded-[2.5rem] px-10 py-10 text-lg sm:text-xl font-medium text-[#1e1e1e] placeholder-black/10 focus:outline-none focus:ring-8 focus:ring-[#9a1b40]/5 transition-all duration-700 resize-none ${errors.message ? 'border-red-500' : 'border-[#d6d3cd] focus:border-[#9a1b40]'}`}
            />
            {errors.message && <p className="text-red-500 text-[9px] mt-4 font-black uppercase tracking-widest">{errors.message}</p>}
          </div>

          <div className="pt-10">
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center gap-6">
                   <div className="w-24 h-24 bg-[#9a1b40] rounded-full flex items-center justify-center shadow-3xl shadow-[#9a1b40]/40">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                   </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-serif font-black text-[#9a1b40]">Sent!</h3>
                    <p className="text-black/50 mt-3 font-bold text-sm tracking-wide">I'll get back to you sooner than you think.</p>
                  </div>
                </motion.div>
              ) : (
                <button
                  ref={submitBtnRef}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  type="submit"
                  className={`submit-button button-hover px-20 py-6 rounded-full font-black tracking-[0.4em] text-[11px] text-white transition-all duration-700 ${
                    isSubmitting ? 'bg-black/10 cursor-not-allowed' : 'bg-[#9a1b40]'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </button>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </div>
  );
}
'use client';

import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ContactPage() {
  const services = ['Mobile App', 'Website Design', 'Branding', 'Web Development', 'Illustration', 'Logo Design', 'Graphic Design'];

  const componentRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const inputsRef = useRef([]);
  const serviceButtonsRef = useRef([]);
  const messageRef = useRef(null);
  const submitBtnRef = useRef(null);
  const animatedOnceRef = useRef(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    selectedService: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    if (animatedOnceRef.current) return;
    animatedOnceRef.current = true;

    const ctx = gsap.context(() => {
      gsap.set(headingRef.current?.querySelectorAll('*'), { opacity: 0, y: 50 });
      gsap.set(subheadingRef.current, { opacity: 0, x: -50 });
      gsap.set(inputsRef.current, { opacity: 0, x: 30 });
      gsap.set(serviceButtonsRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(messageRef.current, { opacity: 0, y: 30 });
      gsap.set(submitBtnRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(headingRef.current?.querySelectorAll('*'), {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
      })
        .to(subheadingRef.current, { opacity: 1, x: 0, duration: 0.5 }, '-=0.35')
        .to(inputsRef.current, { opacity: 1, x: 0, duration: 0.45, stagger: 0.08 }, '-=0.25')
        .to(serviceButtonsRef.current, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(1.7)' }, '-=0.2')
        .to(messageRef.current, { opacity: 1, y: 0, duration: 0.4 }, '-=0.1')
        .to(submitBtnRef.current, { opacity: 1, y: 0, duration: 0.4 }, '-=0.05');
    }, componentRef);

    return () => ctx.kill();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service) => {
    setFormData(prev => ({
      ...prev,
      selectedService: prev.selectedService === service ? null : service,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || !formData.selectedService) {
      alert('Please fill all required fields');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '', selectedService: null });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div ref={componentRef} className="bg-[#f7f4ec] min-h-screen flex items-center justify-center px-6 py-12">
      <style jsx>{`
        @keyframes smoothScale {0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        .smooth-hover:hover {animation: smoothScale .4s ease-in-out forwards;}
      `}</style>

      <div className="max-w-2xl w-full text-center">
        <h1 ref={headingRef} className="heading text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight text-left sm:text-center">
          <span className="text-[#9a1b40]">Say Hi!</span>
          <span className="text-[#1e4389]"> and tell me</span>
          <br />
          <span className="text-[#1e4389]">about your idea</span>
        </h1>

        <p ref={subheadingRef} className="subheading text-black/70 text-base sm:text-lg mb-12 text-left sm:text-center">
          Have a project in mind? Reach out and let’s discuss.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* All previous fields remain exactly the same */}

          <div className="pt-4">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-6">
                <svg width="120" height="120" viewBox="0 0 120 120" className="relative">
                  <circle cx="60" cy="60" r="55" fill="none" stroke="#9a1b40" strokeWidth="2" />
                  <polyline points="38,62 52,76 82,46" fill="none" stroke="#1e4389" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="60" style={{ strokeDashoffset: 0, transition: 'stroke-dashoffset .6s ease' }} />
                </svg>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#9a1b40]">Message Sent Successfully!</h3>
                  <p className="text-black/70 mt-2">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              </div>
            ) : (
<button
  className="
    group relative overflow-hidden cursor-pointer
    px-14 py-5 rounded-full
    bg-[#9a1b40] text-white text-sm
    tracking-[0.25em] uppercase font-medium

    transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]

    hover:-translate-y-1
    hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]
    active:translate-y-0
  "
>
  {/* Expanding circular fill */}
  <span
    className="
      pointer-events-none absolute inset-0 flex items-center justify-center
      bg-[#7e1534] scale-0 rounded-full
      transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
      group-hover:scale-100
    "
  />

  {/* Label */}
  <span className="relative z-10">
    {isSubmitting ? (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        Sending...
      </div>
    ) : (
      'Send Message'
    )}
  </span>
</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
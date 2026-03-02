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
    selectedServices: [], // Support multiple selection
  });
  const [errors, setErrors] = useState({});
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
        .to(
          subheadingRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
          },
          '-=0.35'
        )
        .to(
          inputsRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          '-=0.25'
        )
        .to(
          serviceButtonsRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(1.7)',
          },
          '-=0.2'
        )
        .to(
          messageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          '-=0.1'
        )
        .to(
          submitBtnRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          '-=0.05'
        );
    }, componentRef);

    return () => ctx.kill();
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
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
      const newServices = exists 
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service];
      
      if (newServices.length > 0 && errors.services) {
        setErrors(errs => ({ ...errs, services: null }));
      }
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
        body: JSON.stringify({
          ...formData,
          selectedServices: formData.selectedServices // Send array
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          selectedServices: [],
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        alert(data.error || 'Connection error. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={componentRef} className="bg-[#f7f4ec] min-h-screen flex items-center justify-center px-6 py-12">
      <style jsx>{`
        @keyframes smoothScale {0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        .smooth-hover:hover {animation: smoothScale .4s ease-in-out forwards;}
        .button-hover:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 20px rgba(154,27,64,0.25);}
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <label className="block text-[#1e4389] font-medium mb-3">
                Name<span className="text-[#9a1b40]">*</span>
              </label>
              <input
                ref={el => (inputsRef.current[0] = el)}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Hello..."
                className={`form-input w-full bg-transparent border-b-2 px-0 pt-3 pb-[6px] text-[#1e1e1e] placeholder-[#999] focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-[#d6d3cd] focus:border-[#9a1b40]'}`}
              />
              {errors.name && <p className="text-red-500 text-[10px] mt-1 uppercase tracking-tight">{errors.name}</p>}
            </div>
            <div className="text-left">
              <label className="block text-[#1e4389] font-medium mb-3">
                Email<span className="text-[#9a1b40]">*</span>
              </label>
              <input
                ref={el => (inputsRef.current[1] = el)}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Where can I reply?"
                className={`form-input w-full bg-transparent border-b-2 px-0 pt-3 pb-[6px] text-[#1e1e1e] placeholder-[#999] focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-[#d6d3cd] focus:border-[#9a1b40]'}`}
              />
              {errors.email && <p className="text-red-500 text-[10px] mt-1 uppercase tracking-tight">{errors.email}</p>}
            </div>
          </div>

          <div className="text-left">
            <label className="block text-[#1e4389] font-medium mb-3">Company Name</label>
            <input
              ref={el => (inputsRef.current[2] = el)}
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company or website?"
              className="form-input w-full bg-transparent border-b-2 border-[#d6d3cd] px-0 pt-3 pb-[6px] text-[#1e1e1e] placeholder-[#999] focus:outline-none focus:border-[#9a1b40] transition-colors"
            />
          </div>

          <div className="text-left">
            <label className="block text-[#1e4389] font-medium mb-6">
              What's on your mind?<span className="text-[#9a1b40]">*</span>
            </label>
            <div ref={el => (inputsRef.current[3] = el)} className="flex flex-wrap gap-4">
              {services.map((service, i) => (
                <button
                  key={service}
                  ref={btn => (serviceButtonsRef.current[i] = btn)}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`service-button smooth-hover px-5 py-2.5 rounded-full border-2 font-medium transition-all duration-300 ${
                    formData.selectedServices.includes(service)
                      ? 'bg-[#9a1b40] text-white border-[#9a1b40]'
                      : 'bg-transparent text-[#1e1e1e] border-[#d6d3cd] hover:bg-[#9a1b40] hover:text-white hover:border-[#9a1b40]'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
            {errors.services && <p className="text-red-500 text-[10px] mt-2 uppercase tracking-tight">{errors.services}</p>}
          </div>

          <div className="text-left">
            <label className="block text-[#1e4389] font-medium mb-3">
              Message<span className="text-[#9a1b40]">*</span>
            </label>
            <textarea
              ref={messageRef}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What's in your mind?"
              rows="6"
              className={`message-textarea w-full bg-white/80 border-2 rounded-xl px-4 py-4 text-[#1e1e1e] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#9a1b40]/20 transition resize-none shadow-sm ${errors.message ? 'border-red-500' : 'border-[#d6d3cd] focus:border-[#9a1b40]'}`}
            />
            {errors.message && <p className="text-red-500 text-[10px] mt-1 uppercase tracking-tight">{errors.message}</p>}
          </div>

          <div className="pt-4">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-6">
                 <div className="w-16 h-16 bg-[#9a1b40]/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#9a1b40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                 </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#9a1b40]">
                    Message Sent!
                  </h3>
                  <p className="text-black/70 mt-1">
                    I'll get back to you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <button
                ref={submitBtnRef}
                onClick={handleSubmit}
                disabled={isSubmitting}
                type="submit"
                className={`group relative overflow-hidden submit-button button-hover px-12 py-4 rounded-full font-bold text-white transition-all duration-300 ${
                  isSubmitting ? 'bg-[#d6d3cd] cursor-not-allowed' : 'bg-[#9a1b40]'
                }`}
              >
                {/* Reusing common fill animation if it exists in CSS, otherwise standard bg transition */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      SUBMITTING...
                    </>
                  ) : (
                    'SEND MESSAGE'
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
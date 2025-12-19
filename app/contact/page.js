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
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          selectedService: null,
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
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
                className="form-input w-full bg-transparent border-b border-[#d6d3cd] px-0 pt-3 pb-[6px] text-[#1e1e1e] placeholder-[#999] focus:outline-none focus:border-[#9a1b40] transition-colors"
              />
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
                className="form-input w-full bg-transparent border-b border-[#d6d3cd] px-0 pt-3 pb-[6px] text-[#1e1e1e] placeholder-[#999] focus:outline-none focus:border-[#9a1b40] transition-colors"
              />
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
              className="form-input w-full bg-transparent border-b border-[#d6d3cd] px-0 pt-3 pb-[6px] text-[#1e1e1e] placeholder-[#999] focus:outline-none focus:border-[#9a1b40] transition-colors"
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
                  onClick={() => handleServiceSelect(service)}
                  aria-selected={formData.selectedService === service}
                  className={`service-button smooth-hover px-5 py-2.5 rounded-full border-2 font-medium transition-all duration-300 ${
                    formData.selectedService === service
                      ? 'bg-[#9a1b40] text-white border-[#9a1b40]'
                      : 'bg-transparent text-[#1e1e1e] border-[#d6d3cd] hover:bg-[#9a1b40] hover:text-white hover:border-[#9a1b40]'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
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
              className="message-textarea w-full bg-white/80 border border-[#d6d3cd] rounded-xl px-4 py-4 text-[#1e1e1e] placeholder-[#999] focus:outline-none focus:border-[#9a1b40] focus:ring-2 focus:ring-[#9a1b40]/20 transition resize-none shadow-sm"
            />
          </div>

          <div className="pt-4">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-6">
                <svg width="120" height="120" viewBox="0 0 120 120" className="relative">
                  <circle cx="60" cy="60" r="55" fill="none" stroke="#9a1b40" strokeWidth="2" />
                  <polyline
                    points="38,62 52,76 82,46"
                    fill="none"
                    stroke="#1e4389"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="60"
                    style={{ strokeDashoffset: 0, transition: 'stroke-dashoffset .6s ease' }}
                  />
                </svg>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#9a1b40]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-black/70 mt-2">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <button
                ref={submitBtnRef}
                onClick={handleSubmit}
                disabled={isSubmitting}
                type="submit"
                className={`submit-button button-hover px-10 py-3 rounded-full font-semibold text-white transition-all duration-300 ${
                  isSubmitting ? 'bg-[#d6d3cd] cursor-not-allowed' : 'bg-[#9a1b40] hover:bg-[#7e1534]'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
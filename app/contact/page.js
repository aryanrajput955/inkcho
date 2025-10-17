'use client';
import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { gsap } from 'gsap';

export default function ContactPage() {
  const services = ['Mobile App', 'Website Design', 'Branding', 'Web Development', 'Illustration', 'Logo Design', 'Graphic Design'];
  const componentRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    selectedService: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log('Service buttons in DOM:', document.querySelectorAll('.service-button').length);
    console.log('Submit button in DOM:', document.querySelectorAll('.submit-button').length);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Heading: faster duration
      tl.from('.heading', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.15,
      });

      // Subheading: faster duration, slight overlap
      tl.from(
        '.subheading',
        {
          opacity: 0,
          x: -50,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3',
      );

      // Form inputs: faster duration, tighter stagger
      tl.from(
        '.form-input',
        {
          opacity: 0,
          x: 30,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
        },
        '-=0.2',
      );

      // Service buttons: keep snappy, slight overlap
      tl.from(
        '.service-button',
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: 'back.out(1.7)',
          stagger: 0.06,
          onComplete: () => {
            console.log('Service buttons animation completed');
            gsap.set('.service-button', { opacity: 1, scale: 1 });
          },
        },
        '-=0.2',
      );

      // Message textarea: faster duration, earlier start
      tl.from(
        '.message-textarea',
        {
          opacity: 0,
          y: 30,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.1',
      );

      // Submit button: faster duration, immediate start after textarea
      tl.from(
        '.submit-button',
        {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: 'power3.out',
          onComplete: () => {
            console.log('Submit button animation completed');
            gsap.set('.submit-button', { opacity: 1, y: 0 });
          },
        },
        '-=0.1',
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
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
      console.log('Form submitted:', formData);
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
    <div ref={componentRef} className="bg-[#f5f1eb] min-h-screen flex items-center justify-center px-6 py-12">
      <style jsx>{`
        @keyframes smoothScale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .smooth-hover:hover {
          animation: smoothScale 0.5s ease-in-out forwards;
        }
        @keyframes checkmarkDraw {
          0% {
            stroke-dashoffset: 50;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes circlePulse {
          0% {
            r: 0;
            opacity: 1;
          }
          100% {
            r: 60;
            opacity: 0;
          }
        }
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .success-circle {
          animation: circlePulse 0.8s ease-out;
        }
        .checkmark-svg {
          animation: checkmarkDraw 0.8s ease-out forwards;
        }
        .success-text-main {
          animation: slideInFromLeft 0.7s ease-out 0.2s forwards;
          opacity: 0;
        }
        .success-text-sub {
          animation: slideInFromRight 0.7s ease-out 0.3s forwards;
          opacity: 0;
        }
        .button-hover:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(234, 88, 12, 0.2);
        }
        .service-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 100px;
          opacity: 1;
        }
        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          opacity: 1;
        }
      `}</style>

      <div className="max-w-2xl w-full text-center">
        <h1 className="heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-left sm:text-center">
          <span className="text-orange-400">Say Hi!</span>
          <span className="text-black"> and tell me</span>
          <br />
          <span className="text-black">about your idea</span>
        </h1>

        <p className="subheading text-gray-600 text-base sm:text-lg mb-12 text-left sm:text-center">
          Have a nice works? Reach out and let's chat.
        </p>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <label className="block text-gray-900 font-medium mb-3">
                Name<span className="text-orange-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Hello..."
                className="form-input w-full bg-transparent border-b border-gray-300 px-0 pt-3 pb-[6px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-900 font-medium mb-3">
                Email<span className="text-orange-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Where can I reply?"
                className="form-input w-full bg-transparent border-b border-gray-300 px-0 pt-3 pb-[6px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block text-gray-900 font-medium mb-3">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company or website?"
              className="form-input w-full bg-transparent border-b border-gray-300 px-0 pt-3 pb-[6px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>

          <div className="text-left">
            <label className="block text-gray-900 font-medium mb-6">
              What's in your mind?<span className="text-orange-600">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {services.length > 0 ? (
                services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceSelect(service)}
                    aria-selected={formData.selectedService === service}
                    className={`service-button smooth-hover px-5 py-2.5 rounded-full border-2 font-medium transition-all duration-400 ${
                      formData.selectedService === service
                        ? 'bg-orange-600 text-white border-orange-600'
                        : 'bg-transparent text-gray-900 border-gray-300 hover:bg-orange-600 hover:text-white hover:border-orange-600'
                    }`}
                  >
                    {service}
                  </button>
                ))
              ) : (
                <p className="text-gray-600">No services available.</p>
              )}
            </div>
          </div>

          <div className="text-left">
            <label className="block text-gray-900 font-medium mb-3">
              Message<span className="text-orange-600">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What's in your mind?"
              rows="6"
              className="message-textarea w-full bg-transparent border-b border-gray-300 px-0 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors resize-none"
            ></textarea>
          </div>

          <div className="pt-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-6">
                <svg width="120" height="120" viewBox="0 0 120 120" className="relative">
                  <circle cx="60" cy="60" r="0" fill="none" stroke="rgb(234, 88, 12)" strokeWidth="2" className="success-circle" opacity="0.5" />
                  <circle cx="60" cy="60" r="55" fill="none" stroke="rgb(234, 88, 12)" strokeWidth="2" />
                  <polyline
                    points="38,62 52,76 82,46"
                    fill="none"
                    stroke="rgb(234, 88, 12)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="60"
                    className="checkmark-svg"
                  />
                </svg>
                <div className="text-center">
                  <h3 className="success-text-main text-2xl sm:text-3xl font-bold text-gray-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="success-text-sub text-gray-600 mt-2">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                type="button"
                className={`submit-button button-hover px-10 py-3 rounded-full font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
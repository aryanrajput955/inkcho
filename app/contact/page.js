'use client';
import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute('data-animate');
            setIsVisible(prev => ({ ...prev, [targetId]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Massive Typography */}
      <section className="px-6 py-32 md:py-48">
        <div className="max-w-7xl mx-auto">
          
          {/* Small Badge */}
          <div 
            data-animate="badge"
            className={`inline-flex items-center gap-3 mb-12 transform transition-all duration-1000 ${
              isVisible.badge ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#EB5B00'}}></div>
            <span className="text-lg font-medium text-gray-600">Let's work together</span>
          </div>
          
          {/* Massive Headline */}
          <div 
            data-animate="heading"
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible.heading ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-8 tracking-tight">
              Let's talk
            </h1>
            <div className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-16 tracking-tight" style={{color: '#EB5B00'}}>
              business.
            </div>
          </div>
          
          {/* Subtitle */}
          <p 
            data-animate="subtitle"
            className={`text-2xl md:text-3xl text-gray-600 max-w-4xl leading-relaxed transform transition-all duration-1000 delay-400 ${
              isVisible.subtitle ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Ready to build something incredible? Drop us a line and let's create magic together.
          </p>
        </div>
      </section>

      {/* Contact Section - Split Layout */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32">
            
            {/* Left Side - Contact Info */}
            <div 
              data-animate="info"
              className={`space-y-16 transform transition-all duration-1000 ${
                isVisible.info ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-black mb-8 leading-tight">
                  Get in touch
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                {[
                  { 
                    icon: Mail, 
                    label: 'Email',
                    value: 'hello@studio.com',
                    href: 'mailto:hello@studio.com'
                  },
                  { 
                    icon: Phone, 
                    label: 'Phone',
                    value: '+1 (555) 123-4567',
                    href: 'tel:+15551234567'
                  },
                  { 
                    icon: MapPin, 
                    label: 'Location',
                    value: 'San Francisco, CA',
                    href: '#'
                  }
                ].map((item, index) => (
                  <div key={item.label} className="group cursor-pointer">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-500 mb-1">{item.label}</div>
                        <div className="text-2xl font-bold text-black group-hover:text-orange-600 transition-colors duration-300" style={{'--hover-color': '#EB5B00'}}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Block */}
              <div className="p-8 bg-black rounded-3xl">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 mt-2 flex-shrink-0" style={{color: '#EB5B00'}} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Free consultation
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Get expert insights on your project. No commitment, just valuable advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div 
              data-animate="form"
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible.form ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="bg-gray-50 p-12 rounded-3xl h-full">
                <h3 className="text-4xl font-black text-black mb-12">Send us a message</h3>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold mb-4 text-black">
                      What's your name?
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 focus:border-orange-600 focus:outline-none text-2xl text-black placeholder-gray-400 transition-colors duration-300"
                      style={{'--focus-border-color': '#EB5B00'}}
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold mb-4 text-black">
                      Your email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 focus:border-orange-600 focus:outline-none text-2xl text-black placeholder-gray-400 transition-colors duration-300"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-4 text-black">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-gray-300 focus:border-orange-600 focus:outline-none text-2xl text-black placeholder-gray-400 resize-none transition-colors duration-300"
                      placeholder="I'd like to discuss..."
                    />
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={handleSubmit}
                      className="group w-full h-20 bg-black hover:bg-gray-800 text-white rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-4 hover:transform hover:scale-[1.02] active:scale-[0.98]"
                      style={{backgroundColor: isSubmitted ? '#059669' : '#000000'}}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-7 h-7" />
                          Message sent!
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-gray-500 text-center mt-6 text-lg">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage;
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const contactInfo = [
  {
    title: 'Phone',
    content: '+44 790-333-2774',
    description: 'Speak directly with our team',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: 'tel:+447903332774'
  },
  {
    title: 'Email',
    content: 'info@londoneyecare.co.uk',
    description: 'Send us your enquiries',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: 'mailto:info@londoneyecare.co.uk'
  },
  {
    title: 'Address',
    content: '22 A Harley Street',
    subtitle: 'London W1G 9BP',
    description: 'Premier medical district location',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: 'https://maps.google.com/?q=22+A+Harley+Street,London+W1G+9BP'
  },
  {
    title: 'Opening Hours',
    content: 'Mon-Sat: 10:00-18:30',
    subtitle: 'Sunday: Closed',
    description: 'Flexible appointment times',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: null
  }
];

const appointmentTypes = [
  {
    type: 'Comprehensive Eye Examination',
    duration: '45-60 minutes',
    price: 'From £150'
  },
  {
    type: 'Contact Lens Consultation',
    duration: '30-45 minutes',
    price: 'From £120'
  },
  {
    type: 'Eyewear Styling Consultation',
    duration: '30 minutes',
    price: 'Complimentary'
  },
  {
    type: 'Myopia Management Consultation',
    duration: '60 minutes',
    price: 'From £200'
  },
  {
    type: 'Emergency Appointment',
    duration: '30 minutes',
    price: 'From £100'
  }
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #1B365D 0%, #2A4A73 50%, #1B365D 100%)'
      }}>
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-white">
            {/* Success Icon with Animation */}
            <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-display font-bold mb-6">
              Booking Request
              <span className="block text-brand-gold font-extrabold">
                Received
              </span>
            </h2>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Thank you for choosing London Eyecare Collective. We&apos;ll contact you within 24 hours to confirm your appointment and discuss any specific requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 rounded-2xl p-4">
                <div className="text-brand-gold font-bold text-lg">Next Step</div>
                <div className="text-sm text-slate-200">Confirmation Call</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <div className="text-brand-gold font-bold text-lg">Timeline</div>
                <div className="text-sm text-slate-200">Within 24 Hours</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <div className="text-brand-gold font-bold text-lg">Preparation</div>
                <div className="text-sm text-slate-200">Forms Sent</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    appointmentType: '',
                    preferredDate: '',
                    preferredTime: '',
                    message: ''
                  });
                }}
                className="btn-luxury px-8 py-4"
              >
                Book Another Appointment
              </button>
              <Link
                href="/"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 font-semibold"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1B365D 0%, #2A4A73 50%, #1B365D 100%)'
      }}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184,134,11,0.4) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Animated Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              {/* Contact Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-gold/25 backdrop-blur-sm border border-brand-gold/50 text-brand-gold text-sm font-semibold mb-8 shadow-lg">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Premium Eye Care Appointments
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                Contact &
                <span className="block text-brand-gold font-black">
                  Book Today
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
                Ready to experience premium eye care? Get in touch with our expert team or book your appointment online. Located in London&apos;s prestigious medical district.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="#booking-form" 
                  className="btn-luxury px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </Link>
                
                <Link 
                  href="tel:+44790333277" 
                  className="px-10 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
                >
                  Call Now
                </Link>
              </div>
            </div>
            
            {/* Contact Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">24h</div>
                <div className="text-white text-sm font-medium">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">15+</div>
                <div className="text-white text-sm font-medium">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">5★</div>
                <div className="text-white text-sm font-medium">Patient Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">1:1</div>
                <div className="text-white text-sm font-medium">Personal Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Contact
              <span className="block text-brand-gold font-extrabold">
                Information
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach our expert team for all your eye care needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-brand-navy/20 transform hover:-translate-y-2 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{info.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{info.title}</h3>
                  
                  {info.href ? (
                    <Link 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block text-brand-gold hover:text-brand-navy transition-colors font-semibold mb-2"
                    >
                      {info.content}
                    </Link>
                  ) : (
                    <div className="text-brand-gold font-semibold mb-2">{info.content}</div>
                  )}
                  
                  {info.subtitle && (
                    <div className="text-slate-600 font-medium mb-3">{info.subtitle}</div>
                  )}
                  
                  <p className="text-sm text-slate-500">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184,134,11,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Book Your
              <span className="block text-brand-gold font-extrabold">
                Appointment
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Schedule your comprehensive eye examination with our expert team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20">              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                    placeholder="+44 7123 456789"
                  />
                </div>

                <div>
                  <label htmlFor="appointmentType" className="block text-sm font-semibold text-white mb-3">
                    Appointment Type *
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                  >
                    <option value="" className="text-gray-800">Select appointment type</option>
                    {appointmentTypes.map((apt, index) => (
                      <option key={index} value={apt.type} className="text-gray-800">
                        {apt.type} - {apt.duration} ({apt.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-white mb-3">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-white mb-3">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                    >
                      <option value="" className="text-gray-800">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time} className="text-gray-800">{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all resize-none"
                    placeholder="Any specific concerns or preferences..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-luxury py-4 text-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <span>Book Appointment</span>
                  )}
                </button>
              </form>
            </div>

            {/* Appointment Information */}
            <div className="space-y-8">
              <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-6">Appointment Types</h3>
                <div className="space-y-4">
                  {appointmentTypes.map((apt, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b border-white/10 last:border-0">
                      <div>
                        <p className="font-semibold text-white">{apt.type}</p>
                        <p className="text-sm text-gray-300">{apt.duration}</p>
                      </div>
                      <p className="font-bold text-brand-gold">{apt.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-6">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    'Confirmation call within 24 hours',
                    'Pre-appointment consultation form',
                    'Reminder 24 hours before visit',
                    'Complimentary consultation review',
                    'Follow-up care recommendations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-4">Emergency Appointments</h3>
                <p className="text-gray-300 mb-6">
                  For urgent eye care needs, we offer same-day emergency appointments.
                </p>
                <Link 
                  href="tel:+44790333277" 
                  className="w-full btn-primary text-center py-4 font-semibold"
                >
                  Emergency Line: +44 790-333-2774
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Visit Our
              <span className="block text-brand-gold font-extrabold">
                Harley Street Clinic
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Located in London&apos;s prestigious medical district, our clinic is easily accessible from all parts of the city.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Getting Here Information */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-8">Getting Here</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">By Underground</h4>
                    <p className="text-slate-600 leading-relaxed">Oxford Circus (2 min walk) - Central, Northern, Victoria, Elizabeth lines</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">By Bus</h4>
                    <p className="text-slate-600 leading-relaxed">Routes 3, 6, 8, 12, 13, 15, 23, 25, 53, 88, 94, 113, 139, 159, 453</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">By Car</h4>
                    <p className="text-slate-600 leading-relaxed">Limited street parking. Nearby NCP car parks available on Cavendish Square and Marylebone.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Accessibility</h4>
                    <p className="text-slate-600 leading-relaxed">Full wheelchair access, disabled facilities, and assistance available for all patients.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Decorative Map Elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-brand-navy rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-brand-gold rounded-full"></div>
                  <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-brand-navy rounded-full"></div>
                </div>
                
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  <h4 className="text-2xl font-display font-bold text-brand-navy mb-4">Our Location</h4>
                  <p className="text-brand-gold font-semibold mb-2">22 A Harley Street</p>
                  <p className="text-slate-600 mb-6">London W1G 9BP</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link 
                      href="https://maps.google.com/?q=22+A+Harley+Street,London+W1G+9BP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-center font-semibold"
                    >
                      Open in Google Maps
                    </Link>
                    <Link 
                      href="https://www.google.com/maps/dir//22+A+Harley+Street,London+W1G+9BP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full transition-all duration-300 font-semibold"
                    >
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
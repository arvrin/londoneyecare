'use client';

import React, { useState } from 'react';

const contactInfo = [
  {
    title: 'Phone',
    content: '+44 790-333-2774',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: 'tel:+447903332774'
  },
  {
    title: 'Email',
    content: 'info@londoneyecare.co.uk',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: 'mailto:info@londoneyecare.co.uk'
  },
  {
    title: 'Address',
    content: '22 A Harley Street\n(within Harley Street Eye Centre)\nLondon W1G 9BP',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: 'https://maps.google.com/?q=22+A+Harley+Street,London+W1G+9BP'
  },
  {
    title: 'Opening Hours',
    content: 'Mon-Sat: 10:00-18:30\nSun: Closed',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="card-glass p-8">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-h3 mb-4">Booking Request Received</h2>
            <p className="text-secondary mb-6">
              Thank you for your appointment request. We'll contact you within 24 hours to confirm your booking.
            </p>
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
              className="btn-primary"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero mb-6">
            Contact & Book Appointment
          </h1>
          <p className="text-lead max-w-3xl mx-auto">
            Ready to experience premium eye care? Get in touch with our team or book your appointment online. 
            We're here to help with all your vision needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white">
                  {info.icon}
                </div>
                <h3 className="text-h4 mb-3">{info.title}</h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-secondary hover:text-interactive-hover transition-colors whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-secondary whitespace-pre-line">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form and Info */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="card-glass">
              <h2 className="text-h3 mb-6">Book Your Appointment</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:border-transparent transition-all"
                    placeholder="+44 7123 456789"
                  />
                </div>

                <div>
                  <label htmlFor="appointmentType" className="block text-sm font-medium text-primary mb-2">
                    Appointment Type *
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-primary focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:border-transparent transition-all"
                  >
                    <option value="">Select appointment type</option>
                    {appointmentTypes.map((apt, index) => (
                      <option key={index} value={apt.type}>
                        {apt.type} - {apt.duration} ({apt.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-primary mb-2">
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
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-primary focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-primary mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-primary focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:border-transparent transition-all"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background/50 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-interactive-focus focus:border-transparent transition-all resize-none"
                    placeholder="Any specific concerns or preferences..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-luxury flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Book Appointment</span>
                  )}
                </button>
              </form>
            </div>

            {/* Appointment Information */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-h4 mb-4">Appointment Types</h3>
                <div className="space-y-4">
                  {appointmentTypes.map((apt, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium text-primary">{apt.type}</p>
                        <p className="text-sm text-muted">{apt.duration}</p>
                      </div>
                      <p className="font-semibold text-interactive-primary">{apt.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-4">What to Expect</h3>
                <div className="space-y-3">
                  {[
                    'Confirmation call within 24 hours',
                    'Pre-appointment consultation form',
                    'Reminder 24 hours before visit',
                    'Complimentary consultation review',
                    'Follow-up care recommendations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-interactive-primary rounded-full"></div>
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-4">Emergency Appointments</h3>
                <p className="text-secondary mb-4">
                  For urgent eye care needs, we offer same-day emergency appointments.
                </p>
                <a 
                  href="tel:+442071234567" 
                  className="btn-primary w-full text-center"
                >
                  Call for Emergency: +44 (0)20 7123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-6">Visit Our Clinic</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Located on prestigious Harley Street, our clinic is easily accessible 
              from all parts of London.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="card-glass p-8">
              <h3 className="text-h4 mb-6">Getting Here</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">By Underground:</h4>
                  <p className="text-secondary">Oxford Circus (2 min walk) - Central, Northern, Victoria, Elizabeth lines</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">By Bus:</h4>
                  <p className="text-secondary">Routes 3, 6, 8, 12, 13, 15, 23, 25, 53, 88, 94, 113, 139, 159, 453</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">By Car:</h4>
                  <p className="text-secondary">Limited street parking. Nearby NCP car parks available.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Accessibility:</h4>
                  <p className="text-secondary">Full wheelchair access and disabled facilities available.</p>
                </div>
              </div>
            </div>
            
            <div className="card border-2 border-border">
              <div className="aspect-video bg-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-primary mb-2">Interactive Map</p>
                  <p className="text-secondary">22 A Harley Street, London W1G 9BP</p>
                  <a 
                    href="https://maps.google.com/?q=22+A+Harley+Street,London+W1G+9BP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mt-4 inline-flex"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
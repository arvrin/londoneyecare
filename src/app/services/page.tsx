import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Premium Eye Care Services | London Eyecare Collective',
  description: 'Comprehensive eye care services including comprehensive eye exams, contact lens fittings, myopia management, and specialized treatments in the heart of London.',
};

const services = [
  {
    title: 'Comprehensive Eye Examinations',
    description: 'State-of-the-art eye health assessments using the latest diagnostic technology for comprehensive vision care.',
    features: [
      'OCT retinal imaging & analysis',
      'Advanced visual field testing',
      'Intraocular pressure measurement',
      'High-resolution retinal photography',
      'Corneal topography mapping'
    ],
    duration: '45-60 minutes',
    price: 'From £150',
    category: 'Essential Care',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    )
  },
  {
    title: 'Contact Lens Services',
    description: 'Expert contact lens fittings and specialized lens solutions tailored to your unique vision needs and lifestyle.',
    features: [
      'Comprehensive fitting consultation',
      'Specialty lens solutions (keratoconus)',
      'Orthokeratology overnight correction',
      'Multifocal & progressive lenses',
      'Ongoing care & monitoring'
    ],
    duration: '30-45 minutes',
    price: 'From £120',
    category: 'Vision Solutions',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Myopia Management',
    description: 'Advanced treatments and interventions to slow myopia progression in children and young adults using cutting-edge methods.',
    features: [
      'MiSight daily disposable lenses',
      'Orthokeratology night lenses',
      'Low-dose atropine therapy',
      'Lifestyle & environmental counseling',
      'Regular progress monitoring'
    ],
    duration: '60 minutes',
    price: 'From £200',
    category: 'Specialized Care',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    )
  },
  {
    title: 'Dry Eye Treatment',
    description: 'Comprehensive diagnosis and advanced treatment of dry eye syndrome using state-of-the-art therapeutic technologies.',
    features: [
      'Advanced meibomian gland imaging',
      'IPL (Intense Pulsed Light) therapy',
      'LipiFlow thermal pulsation',
      'Punctal plug insertion',
      'Prescription therapy protocols'
    ],
    duration: '45 minutes',
    price: 'From £180',
    category: 'Therapeutic Care',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.38-1 1.73v2.54l6 6-1.41 1.41L12 10.1l-5.59 5.59L5 14.27l6-6V5.73c-.6-.35-1-.99-1-1.73 0-1.1.9-2 2-2zm0 15c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
      </svg>
    )
  },
  {
    title: 'Pediatric Eye Care',
    description: 'Specialized children\'s eye care services designed to make eye exams comfortable and comprehensive for young patients.',
    features: [
      'Child-friendly examination techniques',
      'Visual development assessments',
      'Learning-related vision evaluations',
      'Sports vision performance training',
      'Protective eyewear consultations'
    ],
    duration: '30-45 minutes',
    price: 'From £100',
    category: 'Family Care',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-13c-.67 0-1.26.42-1.46 1.37L1.5 16H4v6h16zM12.5 11.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S11 13.83 11 13s.67-1.5 1.5-1.5z"/>
      </svg>
    )
  },
  {
    title: 'Binocular Vision Assessment',
    description: 'Detailed evaluation of eye coordination and visual processing to optimize comfort and performance in daily activities.',
    features: [
      'Comprehensive convergence testing',
      'Accommodation facility assessment',
      'Eye movement & tracking evaluation',
      'Vision therapy recommendations',
      'Digital eye strain management'
    ],
    duration: '60 minutes',
    price: 'From £160',
    category: 'Performance Care',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    )
  }
];

const additionalServices = [
  {
    title: 'Emergency Eye Care',
    description: 'Same-day urgent appointments for eye injuries and sudden vision changes',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        <path d="M12 6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 10c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m0-6c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1"/>
      </svg>
    )
  },
  {
    title: 'Pre & Post-Operative Care',
    description: 'Comprehensive support before and after eye surgery procedures',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        <circle cx="9" cy="9" r="1"/>
        <circle cx="15" cy="9" r="1"/>
      </svg>
    )
  },
  {
    title: 'Diabetic Eye Screening',
    description: 'Specialized monitoring for diabetes-related eye complications',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5v2h12.6L3.5 19.1l.7 1.9 15.6-5.7c.8-.3 1.2-1 1.2-1.8s-.4-1.5-1.2-1.8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    )
  },
  {
    title: 'Glaucoma Monitoring',
    description: 'Advanced detection and monitoring of glaucoma progression',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    )
  },
  {
    title: 'Vision Therapy',
    description: 'Customized exercises to improve visual skills and processing',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="12" cy="12" r="3" fill="white"/>
        <circle cx="12" cy="12" r="1"/>
      </svg>
    )
  },
  {
    title: 'Sports Vision',
    description: 'Performance optimization for athletes and active individuals',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
      </svg>
    )
  }
];

export default function ServicesPage() {
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
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-gold/25 backdrop-blur-sm border border-brand-gold/50 text-brand-gold text-sm font-semibold mb-8 shadow-lg">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Comprehensive Eye Care Services
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                Premium Eye Care
                <span className="block text-brand-gold font-black">
                  Services
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
                Experience comprehensive eye care with cutting-edge technology, personalized attention, and luxury service standards in London&apos;s prestigious medical district.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/contact" 
                  className="btn-luxury px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Consultation
                </Link>
                
                <Link 
                  href="tel:+44790333277" 
                  className="px-10 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
                >
                  Call Now
                </Link>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">15+</div>
                <div className="text-white text-sm font-medium">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">10K+</div>
                <div className="text-white text-sm font-medium">Patients Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">6</div>
                <div className="text-white text-sm font-medium">Core Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">5★</div>
                <div className="text-white text-sm font-medium">Patient Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Comprehensive Care
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Our Core
              <span className="block text-brand-gold font-extrabold">
                Services
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              From routine eye exams to specialized treatments, we provide comprehensive care using the latest technology and techniques.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-brand-navy/20 transform hover:-translate-y-2">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-semibold mb-6">
                    {service.category}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-brand-navy mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <svg className="w-4 h-4 mr-3 mt-0.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Service Details */}
                  <div className="flex justify-between items-center mb-6 p-4 bg-slate-50 rounded-xl">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Duration</div>
                      <div className="text-sm font-semibold text-brand-navy">{service.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 font-medium">Starting</div>
                      <div className="text-sm font-semibold text-brand-navy">{service.price}</div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link 
                    href="/contact"
                    className="w-full btn-primary text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden">
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
              Additional
              <span className="block text-brand-gold font-extrabold">
                Specialized Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive care extending beyond routine examinations to specialized treatments and emergency services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-brand-gold/40 transition-all duration-300 hover:bg-white/12">
                  <div className="flex items-start space-x-4">
                    <div className="text-brand-gold">{service.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-300 text-lg mb-8">
              Need specialized care or have questions about our services?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-luxury px-10 py-4 text-lg">
                Schedule Consultation
              </Link>
              <Link 
                href="tel:+44790333277" 
                className="px-10 py-4 text-lg bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-full transition-colors"
              >
                Call +44 790-333-2774
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
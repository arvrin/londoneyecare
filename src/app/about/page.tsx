import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | London Eyecare Collective',
  description: 'Meet our expert team of optometrists and learn about our premium eye care clinic on Harley Street, London. Excellence in eye care since 2010.',
};

const teamMembers = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Principal Optometrist & Clinic Director',
    qualifications: 'BSc (Hons) Optometry, MCOptom',
    specialties: ['Myopia Management', 'Contact Lenses', 'Dry Eye Treatment'],
    experience: '15+ years',
    description: 'Dr. Mitchell leads our team with expertise in advanced myopia management and specialty contact lens fitting.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <circle cx="12" cy="8" r="2" fill="white"/>
      </svg>
    )
  },
  {
    name: 'Dr. James Thompson',
    role: 'Senior Optometrist',
    qualifications: 'BSc (Hons) Optometry, PgCert Low Vision',
    specialties: ['Binocular Vision', 'Low Vision', 'Pediatric Optometry'],
    experience: '12+ years',
    description: 'Specializing in complex binocular vision disorders and comprehensive children\'s eye care.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <circle cx="12" cy="8" r="2" fill="white"/>
      </svg>
    )
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Optometrist & Myopia Specialist',
    qualifications: 'BSc (Hons) Optometry, PgDip Myopia Management',
    specialties: ['Myopia Control', 'Orthokeratology', 'Vision Therapy'],
    experience: '8+ years',
    description: 'Expert in cutting-edge myopia control techniques and orthokeratology treatments.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <circle cx="12" cy="8" r="2" fill="white"/>
      </svg>
    )
  },
  {
    name: 'Sophie Williams',
    role: 'Contact Lens Specialist & Optical Manager',
    qualifications: 'FBDO, CL',
    specialties: ['Specialty Contact Lenses', 'Frame Styling', 'Optical Dispensing'],
    experience: '10+ years',
    description: 'Master optician specializing in complex contact lens fittings and luxury eyewear styling.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <circle cx="12" cy="8" r="2" fill="white"/>
      </svg>
    )
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in eye care through continuous education and state-of-the-art technology.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    title: 'Personalized Care',
    description: 'Every patient receives individualized attention tailored to their unique vision needs and lifestyle.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: 'Innovation',
    description: 'We embrace the latest advances in optometry to provide cutting-edge treatments and solutions.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    )
  },
  {
    title: 'Integrity',
    description: 'Honest, transparent communication and ethical practice form the foundation of our patient relationships.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    )
  }
];

const awards = [
  {
    title: 'Best Independent Optometry Practice 2023',
    organization: 'London Healthcare Awards',
    icon: '🏆'
  },
  {
    title: 'Excellence in Myopia Management 2022',
    organization: 'British Optometry Association',
    icon: '🥇'
  },
  {
    title: 'Outstanding Patient Care Award 2021',
    organization: 'Private Healthcare Awards',
    icon: '⭐'
  },
  {
    title: 'Innovation in Eye Care Technology 2020',
    organization: 'Medical Technology Society',
    icon: '🔬'
  }
];

const milestones = [
  {
    year: '2010',
    title: 'Founded',
    description: 'Established on Harley Street with a mission to provide premium eye care services.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Expanded services to include specialized myopia management and vision therapy.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    )
  },
  {
    year: '2018',
    title: 'Recognition',
    description: 'First major industry awards for excellence in patient care and innovation.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    year: '2024',
    title: 'Innovation',
    description: 'Continuous investment in the latest technology and advanced treatment options.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    )
  }
];

export default function AboutPage() {
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
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-gold rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              {/* About Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-gold/25 backdrop-blur-sm border border-brand-gold/50 text-brand-gold text-sm font-semibold mb-8 shadow-lg">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Excellence Since 2010
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                About London
                <span className="block text-brand-gold font-black">
                  Eyecare
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
                We have been providing exceptional eye care services in London&apos;s prestigious medical district, combining traditional excellence with cutting-edge innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/contact" 
                  className="btn-luxury px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Meet Our Team
                </Link>
                
                <Link 
                  href="/services" 
                  className="px-10 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>
            
            {/* Location Highlight */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <div className="w-20 h-20 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Premium Location</h3>
              <p className="text-slate-200 mb-6 leading-relaxed">
                Located on prestigious Harley Street, our clinic offers exclusive access 
                to the renowned Harley Lounge for our valued patients.
              </p>
              <div className="text-sm text-brand-gold font-semibold">
                22 A Harley Street, London W1G 9BP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
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
              Our Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Our
              <span className="block text-brand-gold font-extrabold">
                Story
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to revolutionize eye care in London, we have grown from a small practice to a leading center of optometric excellence.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{milestone.icon}</div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white text-sm font-bold px-3 py-1 rounded-full">
                    {milestone.year}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{milestone.title}</h3>
                <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184,134,11,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Meet Our Expert
              <span className="block text-brand-gold font-extrabold">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our qualified optometrists and optical specialists are dedicated to providing 
              exceptional care and personalized attention to every patient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-brand-gold/40 transition-all duration-500 hover:bg-white/12">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {member.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{member.name}</h3>
                      <p className="text-brand-gold font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-gray-400 mb-4">{member.qualifications}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">{member.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white text-sm mb-3">Specialties:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, idx) => (
                              <span 
                                key={idx} 
                                className="px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full text-xs font-medium"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="font-medium mr-2">Experience:</span>
                          <span className="text-white">{member.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Our Core
              <span className="block text-brand-gold font-extrabold">
                Values
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              These principles guide everything we do and shape the exceptional 
              experience we provide for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Awards &
              <span className="block text-brand-gold font-extrabold">
                Recognition
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders 
              and professional organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {award.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm text-slate-600">{award.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32" style={{
        background: 'linear-gradient(135deg, #1B365D 0%, #2A4A73 50%, #1B365D 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Experience the
            <span className="block text-brand-gold font-extrabold">
              Difference
            </span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied patients who trust London Eyecare Collective 
            for their vision needs. Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="btn-luxury px-12 py-5 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </Link>
            <Link 
              href="/services" 
              className="px-12 py-5 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
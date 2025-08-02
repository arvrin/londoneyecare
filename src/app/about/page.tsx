import React from 'react';
import { Metadata } from 'next';

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
    image: '👩‍⚕️'
  },
  {
    name: 'Dr. James Thompson',
    role: 'Senior Optometrist',
    qualifications: 'BSc (Hons) Optometry, PgCert Low Vision',
    specialties: ['Binocular Vision', 'Low Vision', 'Pediatric Optometry'],
    experience: '12+ years',
    description: 'Specializing in complex binocular vision disorders and comprehensive children\'s eye care.',
    image: '👨‍⚕️'
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Optometrist & Myopia Specialist',
    qualifications: 'BSc (Hons) Optometry, PgDip Myopia Management',
    specialties: ['Myopia Control', 'Orthokeratology', 'Vision Therapy'],
    experience: '8+ years',
    description: 'Expert in cutting-edge myopia control techniques and orthokeratology treatments.',
    image: '👩‍⚕️'
  },
  {
    name: 'Sophie Williams',
    role: 'Contact Lens Specialist & Optical Manager',
    qualifications: 'FBDO, CL',
    specialties: ['Specialty Contact Lenses', 'Frame Styling', 'Optical Dispensing'],
    experience: '10+ years',
    description: 'Master optician specializing in complex contact lens fittings and luxury eyewear styling.',
    image: '👩‍💼'
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in eye care through continuous education and state-of-the-art technology.',
    icon: '⭐'
  },
  {
    title: 'Personalized Care',
    description: 'Every patient receives individualized attention tailored to their unique vision needs and lifestyle.',
    icon: '🎯'
  },
  {
    title: 'Innovation',
    description: 'We embrace the latest advances in optometry to provide cutting-edge treatments and solutions.',
    icon: '🔬'
  },
  {
    title: 'Integrity',
    description: 'Honest, transparent communication and ethical practice form the foundation of our patient relationships.',
    icon: '🤝'
  }
];

const awards = [
  'Best Independent Optometry Practice 2023',
  'Excellence in Myopia Management 2022',
  'Outstanding Patient Care Award 2021',
  'Innovation in Eye Care Technology 2020'
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-hero mb-6">
                About London Eyecare Collective
              </h1>
              <p className="text-lead mb-8">
                Since 2010, we have been providing exceptional eye care services in the heart of London, 
                combining traditional optometric excellence with cutting-edge technology and luxury service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary">
                  Schedule Consultation
                </a>
                <a href="/services" className="btn-secondary">
                  Our Services
                </a>
              </div>
            </div>
            
            <div className="card-glass p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-h4 mb-4">Premium Location</h3>
                <p className="text-secondary mb-4">
                  Located on prestigious Harley Street, our clinic offers exclusive access 
                  to the renowned Harley Lounge for our valued patients.
                </p>
                <div className="text-sm text-muted">
                  22 A Harley Street, London W1G 9BP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-h2 mb-6">Our Story</h2>
            <p className="text-body text-secondary text-lg leading-relaxed">
              Founded with a vision to revolutionize eye care in London, London Eyecare Collective 
              has grown from a small practice to a leading center of optometric excellence. Our journey 
              began with a simple belief: that every patient deserves access to world-class eye care 
              delivered with genuine care and attention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2010</span>
              </div>
              <h3 className="text-h4 mb-2">Founded</h3>
              <p className="text-secondary">
                Established on Harley Street with a mission to provide premium eye care services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-h4 mb-2">Recognition</h3>
              <p className="text-secondary">
                Multiple awards for excellence in patient care and innovation in optometry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-h4 mb-2">Innovation</h3>
              <p className="text-secondary">
                Continuous investment in the latest technology and advanced treatment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">Meet Our Expert Team</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Our qualified optometrists and optical specialists are dedicated to providing 
              exceptional care and personalized attention to every patient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-glass">
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">{member.image}</div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">{member.name}</h3>
                    <p className="text-interactive-primary font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-muted mb-3">{member.qualifications}</p>
                    <p className="text-secondary mb-4">{member.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 bg-accent rounded-full text-xs font-medium text-primary"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted">
                        <span className="font-medium mr-2">Experience:</span>
                        {member.experience}
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">Our Values</h2>
            <p className="text-lead max-w-2xl mx-auto">
              These core principles guide everything we do and shape the exceptional 
              experience we provide for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-h4 mb-3">{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-6">Awards & Recognition</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders 
              and professional organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="bg-background/60 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-background/80 transition-all duration-200 hover:shadow-soft"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{award}</h3>
                    <p className="text-sm text-muted">Industry Recognition</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 mb-6">
                Prime Harley Street Location
              </h2>
              <p className="text-body text-secondary mb-6">
                Our prestigious clinic is located in the heart of London&apos;s medical district, 
                offering easy access and exclusive amenities for our patients.
              </p>
              
              <div className="space-y-4">
                {[
                  'State-of-the-art examination rooms',
                  'Latest diagnostic equipment',
                  'Comfortable patient lounges',
                  'Exclusive Harley Lounge access',
                  'Convenient central London location',
                  'Easy transport links'
                ].map((facility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-primary">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card-glass p-8 text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-h4 mb-4">Visit Us</h3>
              <div className="space-y-3 text-left">
                <div>
                  <p className="font-semibold text-primary">Address:</p>
                  <p className="text-secondary">22 A Harley Street<br />London W1G 9BP</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Phone:</p>
                  <p className="text-secondary">+44 790-333-2774</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Email:</p>
                  <p className="text-secondary">info@londoneyecare.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-luxury text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 mb-6">
            Experience the Difference
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of satisfied patients who trust London Eyecare Collective 
            for their vision needs. Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-luxury bg-white text-brand-navy-static hover:bg-gray-100"
            >
              Book Consultation
            </a>
            <a 
              href="/services" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-brand-navy-static"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
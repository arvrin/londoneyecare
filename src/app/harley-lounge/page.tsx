import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Harley Lounge Access | London Eyecare Collective',
  description: 'Experience exclusive luxury with complimentary access to the prestigious Harley Lounge. Premium amenities for our valued eye care patients in London.',
};

const amenities = [
  {
    title: 'Premium Refreshments',
    description: 'Complimentary gourmet coffee, premium teas, and artisanal refreshments served throughout the day.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 21h18v-2H2m2-1h1c1.1 0 2-.9 2-2V8H5v8c0 1.1.9 2 2 2m8-10V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3H5.5c-.8 0-1.5.7-1.5 1.5S4.7 11 5.5 11H7v1h2V8h2v8c0 1.1.9 2 2 2h1v-8h1.5c.8 0 1.5-.7 1.5-1.5S15.8 8 15 8h-1.5z"/>
        <circle cx="15.5" cy="6.5" r="1.5"/>
      </svg>
    )
  },
  {
    title: 'Private Workspaces',
    description: 'Quiet areas with high-speed WiFi, charging stations, and comfortable seating for business or personal use.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>
      </svg>
    )
  },
  {
    title: 'Concierge Service',
    description: 'Personal assistance with dining reservations, local recommendations, and appointment coordination.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-3c-.67 0-1.26.42-1.46 1.37L12.5 16H15v6h5zM12.5 11.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S11 13.83 11 13s.67-1.5 1.5-1.5z"/>
        <circle cx="12.5" cy="7.5" r="1.5"/>
      </svg>
    )
  },
  {
    title: 'Luxury Seating',
    description: 'Designer furniture and comfortable seating areas designed for ultimate relaxation and rejuvenation.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v14h2v-2h18v2h2V10c0-2.21-1.79-4-4-4z"/>
      </svg>
    )
  },
  {
    title: 'Reading Library',
    description: 'Curated collection of premium magazines, newspapers, and literary works from around the world.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zM21 18.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
      </svg>
    )
  },
  {
    title: 'Private Facilities',
    description: 'Exclusive washrooms with luxury amenities, personal care products, and privacy features.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3-9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-4 .5c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5zm0 6c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5zm7-3c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    )
  }
];

const membershipBenefits = [
  'Complimentary access with any premium service',
  'Guest privileges for accompanying family members',
  'Priority booking for lounge time slots',
  'Extended hours during appointment days',
  'Special event invitations and previews',
  'Seasonal amenity upgrades'
];

const loungeRules = [
  'Smart casual dress code required',
  'Mobile phones on silent mode only',
  'Maximum 2 guests per member',
  'Advance booking recommended',
  'Valid appointment confirmation required',
  '3-hour maximum stay per visit'
];

const exclusiveServices = [
  {
    title: 'Pre-Appointment Preparation',
    description: 'Relax and prepare for your eye examination in our tranquil environment with pre-consultation materials.',
    duration: 'Up to 30 minutes before',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.08 5.49-.08 5.49s-3.91.07-5.49.08L11 14.31l-1.07-1.07c.01-1.58.08-5.49.08-5.49s3.91-.07 5.49-.08L15.57 7.6l.07.07 1-.43z"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    )
  },
  {
    title: 'Post-Treatment Recovery',
    description: 'Rest and recover after procedures in our peaceful recovery areas with specialized comfort amenities.',
    duration: 'Up to 1 hour after',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        <path d="M12 6.5c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5S6.5 15.53 6.5 12 8.97 6.5 12 6.5m0-1C8.41 5.5 5.5 8.41 5.5 12s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5z"/>
      </svg>
    )
  },
  {
    title: 'Frame Selection Consultation',
    description: 'Take time to consider luxury eyewear options in a private setting with style consultants available.',
    duration: 'Extended access',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    )
  },
  {
    title: 'Business Continuity',
    description: 'Continue working while waiting for family members\' appointments with dedicated workspaces and support.',
    duration: 'Flexible timing',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        <path d="M16 6H8v2h8V6zM16 9H8v2h8V9zM16 12H8v2h8v-2z"/>
      </svg>
    )
  }
];

export default function HarleyLoungePage() {
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
              {/* Exclusive Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-gold/25 backdrop-blur-sm border border-brand-gold/50 text-brand-gold text-sm font-semibold mb-8 shadow-lg">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Exclusive Member Benefit
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                Harley Street
                <span className="block text-brand-gold font-black">
                  Lounge Access
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
                Experience unparalleled luxury with complimentary access to our prestigious lounge. An exclusive retreat designed for our valued patients with premium amenities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/contact" 
                  className="btn-luxury px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Premium Appointment
                </Link>
                
                <Link 
                  href="tel:+44790333277" 
                  className="px-10 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
                >
                  Call for Access
                </Link>
              </div>
            </div>
            
            {/* Lounge Image Showcase */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="/Harley Lounge 1.avif"
                  alt="Harley Lounge Interior - Premium Seating Area"
                  width={600}
                  height={400}
                  className="object-cover w-full h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2">Premium Seating Areas</h3>
                  <p className="text-slate-200 text-sm">Luxurious comfort in every corner</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-brand-gold mb-1">VIP</div>
                  <div className="text-white text-xs font-medium">Exclusive Access</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-brand-gold mb-1">24/7</div>
                  <div className="text-white text-xs font-medium">Concierge Service</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-brand-gold mb-1">Free</div>
                  <div className="text-white text-xs font-medium">Premium Patients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-brand-gold mb-1">5★</div>
                  <div className="text-white text-xs font-medium">Luxury Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Lounge Image with Overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Harley lounge 2.avif"
                alt="Harley Lounge - Luxury Interior Design"
                width={600}
                height={500}
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Prestigious Location</h3>
                  <p className="text-slate-200 leading-relaxed">
                    Located within the historic Harley Street medical district, our exclusive lounge provides a serene escape from the bustling city.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Private Sanctuary Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Premium Experience
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
                Your Private
                <span className="block text-brand-gold font-extrabold">
                  Sanctuary
                </span>
              </h2>
              
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                The Harley Lounge represents our commitment to providing an exceptional patient experience that extends beyond clinical excellence. This exclusive space enhances your visit with premium amenities and personalized service.
              </p>
              
              <div className="space-y-4">
                {[
                  'Exclusive access for London Eyecare Collective patients',
                  'Complimentary with premium service appointments',
                  'Elegant interior design and comfortable furnishings',
                  'Professional atmosphere conducive to business and relaxation',
                  'Central London location with easy transport access'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Amenities Section */}
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
              Premium
              <span className="block text-brand-gold font-extrabold">
                Amenities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every detail has been carefully considered to ensure your comfort and convenience during your exclusive Harley Lounge experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="group">
                <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-brand-gold/40 transition-all duration-500 hover:bg-white/12 text-center transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{amenity.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Services Section */}
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
              Premium Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Exclusive
              <span className="block text-brand-gold font-extrabold">
                Services
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Make the most of your Harley Lounge access with these specially designed services that complement your eye care appointment journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {exclusiveServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-brand-navy/20 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                        <span className="text-sm font-medium text-slate-500">Available:</span>
                        <span className="font-semibold text-brand-gold">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
                Membership
                <span className="block text-brand-gold font-extrabold">
                  Benefits
                </span>
              </h2>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                As a valued patient of London Eyecare Collective, you automatically qualify for Harley Lounge access with every premium service appointment. Additional benefits enhance your experience and extend to your family.
              </p>
              
              <div className="space-y-4">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">Exclusive Events</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Members receive invitations to exclusive events including eyewear collection previews, eye health seminars, and luxury lifestyle experiences.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-600">Seasonal collection launches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-600">Educational workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-600">Networking opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-600">Guest speaker series</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines & Booking Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Guidelines Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">Lounge Guidelines</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                To ensure all members enjoy a premium experience, please observe these guidelines:
              </p>
              <div className="space-y-4">
                {loungeRules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Booking Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">Booking Your Access</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Harley Lounge access is automatically included with your appointment, but advance booking ensures availability and preferred timing.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Same-Day Access</h4>
                  <p className="text-sm text-slate-600">Available subject to capacity</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Advance Booking</h4>
                  <p className="text-sm text-slate-600">Guaranteed access when booking 24+ hours ahead</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Extended Access</h4>
                  <p className="text-sm text-slate-600">Available for premium service appointments</p>
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary w-full text-center py-4 font-semibold">
                Request Lounge Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
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
              Location &
              <span className="block text-brand-gold font-extrabold">
                Operating Hours
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The Harley Lounge is conveniently located within our Harley Street clinic, offering easy access and seamless integration with your appointment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Location</h3>
              <p className="text-gray-300 leading-relaxed">
                22 A Harley Street<br />
                London W1G 9BP<br />
                <span className="text-brand-gold">Ground Floor Access</span>
              </p>
            </div>
            
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Operating Hours</h3>
              <p className="text-gray-300 leading-relaxed">
                Monday - Friday: 8:30 - 18:30<br />
                Saturday: 8:30 - 17:30<br />
                <span className="text-brand-gold">Sunday: By appointment only</span>
              </p>
            </div>
            
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Reservations</h3>
              <p className="text-gray-300 leading-relaxed">
                Phone: +44 790-333-2774<br />
                Email: info@londoneyecare.co.uk<br />
                <span className="text-brand-gold">Online booking available</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-20 lg:py-32" style={{
        background: 'linear-gradient(135deg, #1B365D 0%, #2A4A73 50%, #1B365D 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Experience Luxury
            <span className="block text-brand-gold font-extrabold">
              Eye Care
            </span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your premium eye care appointment today and enjoy complimentary access to the exclusive Harley Lounge. Elevate your patient experience with unparalleled comfort and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="btn-luxury px-12 py-5 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Premium Appointment
            </Link>
            <Link 
              href="/services" 
              className="px-12 py-5 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
            >
              View Premium Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
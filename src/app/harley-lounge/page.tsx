import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Harley Lounge Access | London Eyecare Collective',
  description: 'Experience exclusive luxury with complimentary access to the prestigious Harley Lounge. Premium amenities for our valued eye care patients in London.',
};

const amenities = [
  {
    title: 'Premium Refreshments',
    description: 'Complimentary gourmet coffee, premium teas, and artisanal refreshments.',
    icon: '☕'
  },
  {
    title: 'Private Workspaces',
    description: 'Quiet areas with high-speed WiFi for business or personal use.',
    icon: '💼'
  },
  {
    title: 'Concierge Service',
    description: 'Personal assistance with reservations, appointments, and local recommendations.',
    icon: '🎩'
  },
  {
    title: 'Relaxation Areas',
    description: 'Comfortable seating areas designed for rest and rejuvenation.',
    icon: '🛋️'
  },
  {
    title: 'Reading Materials',
    description: 'Premium magazines, newspapers, and literary collections.',
    icon: '📚'
  },
  {
    title: 'Private Facilities',
    description: 'Exclusive washrooms and personal care amenities.',
    icon: '🚿'
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
    description: 'Relax and prepare for your eye examination in comfort.',
    duration: 'Up to 30 minutes before',
    icon: '⏰'
  },
  {
    title: 'Post-Treatment Recovery',
    description: 'Rest and recover after procedures in a tranquil environment.',
    duration: 'Up to 1 hour after',
    icon: '🌿'
  },
  {
    title: 'Frame Selection Consultation',
    description: 'Take time to consider luxury eyewear options in a private setting.',
    duration: 'Extended access',
    icon: '👓'
  },
  {
    title: 'Business Continuity',
    description: 'Continue working while waiting for family members\' appointments.',
    duration: 'Flexible timing',
    icon: '📱'
  }
];

export default function HarleyLoungePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-gold rounded-full text-white text-sm font-medium mb-6">
              <span className="mr-2">✨</span>
              Exclusive Member Benefit
            </div>
          </div>
          <h1 className="text-hero mb-6">
            Harley Lounge Access
          </h1>
          <p className="text-lead max-w-3xl mx-auto">
            Experience unparalleled luxury with complimentary access to the prestigious Harley Lounge. 
            An exclusive retreat designed for our valued patients, offering premium amenities and refined comfort.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="card-glass p-8">
              <div className="text-center">
                <div className="text-6xl mb-6">🏛️</div>
                <h3 className="text-h3 mb-4">Prestigious Location</h3>
                <p className="text-secondary text-lg leading-relaxed">
                  Located within the historic Harley Street medical district, our exclusive lounge 
                  provides a serene escape from the bustling city, offering our patients a truly 
                  luxurious experience before and after their appointments.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-h2 mb-6">
                Your Private Sanctuary
              </h2>
              <p className="text-body text-secondary mb-6">
                The Harley Lounge represents our commitment to providing an exceptional patient experience 
                that extends beyond clinical excellence. This exclusive space is designed to enhance your 
                visit with premium amenities and personalized service.
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
                    <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">Premium Amenities</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Every detail has been carefully considered to ensure your comfort and convenience 
              during your visit to the Harley Lounge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="card group">
                <div className="text-center">
                  <div className="text-5xl mb-4">{amenity.icon}</div>
                  <h3 className="text-h4 mb-3 group-hover:text-interactive-hover transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-secondary">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">Exclusive Services</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Make the most of your Harley Lounge access with these specially designed services 
              that complement your eye care appointment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {exclusiveServices.map((service, index) => (
              <div key={index} className="card-glass">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-3">{service.title}</h3>
                    <p className="text-secondary mb-4">{service.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-sm text-muted">Available:</span>
                      <span className="font-medium text-interactive-primary">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 mb-6">
                Membership Benefits
              </h2>
              <p className="text-body text-secondary mb-8">
                As a valued patient of London Eyecare Collective, you automatically qualify for 
                Harley Lounge access with every premium service appointment. Additional benefits 
                enhance your experience and extend to your family.
              </p>
              
              <div className="space-y-3">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card-glass p-8 text-center">
              <div className="text-6xl mb-6">🎭</div>
              <h3 className="text-h4 mb-4">Exclusive Events</h3>
              <p className="text-secondary mb-6">
                Members receive invitations to exclusive events including eyewear collection previews, 
                eye health seminars, and luxury lifestyle experiences.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-interactive-primary rounded-full"></span>
                  <span className="text-sm text-secondary">Seasonal collection launches</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-interactive-primary rounded-full"></span>
                  <span className="text-sm text-secondary">Educational workshops</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-interactive-primary rounded-full"></span>
                  <span className="text-sm text-secondary">Networking opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-interactive-primary rounded-full"></span>
                  <span className="text-sm text-secondary">Guest speaker series</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-h4 mb-6">Lounge Guidelines</h3>
              <p className="text-secondary mb-6">
                To ensure all members enjoy a premium experience, please observe these guidelines:
              </p>
              <div className="space-y-3">
                {loungeRules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-interactive-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-h4 mb-6">Booking Your Access</h3>
              <p className="text-secondary mb-6">
                Harley Lounge access is automatically included with your appointment, but advance 
                booking ensures availability and preferred timing.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Same-Day Access</h4>
                  <p className="text-sm text-secondary">Available subject to capacity</p>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Advance Booking</h4>
                  <p className="text-sm text-secondary">Guaranteed access when booking 24+ hours ahead</p>
                </div>
                <div className="p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Extended Access</h4>
                  <p className="text-sm text-secondary">Available for premium service appointments</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a href="/contact" className="btn-primary w-full text-center">
                  Request Lounge Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-6">Location & Hours</h2>
            <p className="text-lead max-w-2xl mx-auto">
              The Harley Lounge is conveniently located within our Harley Street clinic, 
              offering easy access and seamless integration with your appointment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-h4 mb-2">Location</h3>
              <p className="text-secondary">
                22 A Harley Street<br />
                London W1G 9BP<br />
                Ground Floor Access
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🕐</span>
              </div>
              <h3 className="text-h4 mb-2">Operating Hours</h3>
              <p className="text-secondary">
                Monday - Friday: 8:30 - 18:30<br />
                Saturday: 8:30 - 17:30<br />
                Sunday: By appointment only
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-h4 mb-2">Reservations</h3>
              <p className="text-secondary">
                Phone: +44 (0)20 7123 4567<br />
                Email: lounge@londoneyecare.co.uk<br />
                Online booking available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-luxury text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 mb-6">
            Experience Luxury Eye Care
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book your premium eye care appointment today and enjoy complimentary access to the 
            exclusive Harley Lounge. Elevate your patient experience with unparalleled comfort and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-luxury bg-white text-brand-navy-static hover:bg-gray-100"
            >
              Book Premium Appointment
            </a>
            <a 
              href="/services" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-brand-navy-static"
            >
              View Premium Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
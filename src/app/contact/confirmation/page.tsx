import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You - Appointment Request Received | London Eyecare Collective',
  description: 'Your appointment request has been received. Our expert team will contact you shortly to confirm your eye care appointment on Harley Street, London.',
};

export default function ContactConfirmationPage() {
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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Success Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/25 backdrop-blur-sm border border-green-400/50 text-green-300 text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Request Successfully Received
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Thank You for
            <span className="block text-brand-gold font-black">
              Choosing Us
            </span>
          </h1>
          
          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your appointment request has been received and our expert team will contact you within 24 hours to confirm your premium eye care appointment on Harley Street.
          </p>
          
          {/* Confirmation Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-left max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand-navy font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Confirmation Call</h3>
                  <p className="text-slate-200 text-sm">Our team will call you within 24 hours to confirm your appointment details and preferred time slot.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand-navy font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Pre-Appointment Preparation</h3>
                  <p className="text-slate-200 text-sm">We&apos;ll send you preparation instructions and information about our premium services.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand-navy font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Harley Lounge Access</h3>
                  <p className="text-slate-200 text-sm">Enjoy complimentary access to our exclusive Harley Lounge with premium amenities.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/" 
              className="btn-luxury px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Return to Homepage
            </Link>
            
            <Link 
              href="/services" 
              className="px-10 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              While You
              <span className="block text-brand-gold font-extrabold">
                Wait
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Discover more about our premium eye care services and exclusive amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Facts Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-4">Quick Facts</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-slate-600">Response Time:</span>
                  <span className="font-semibold text-brand-navy">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Location:</span>
                  <span className="font-semibold text-brand-navy">Harley Street</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Lounge Access:</span>
                  <span className="font-semibold text-brand-gold">Complimentary</span>
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="text-slate-600">
                  <div className="font-semibold text-brand-navy">Phone</div>
                  <Link href="tel:+44790333277" className="text-brand-gold hover:underline">+44 790-333-2774</Link>
                </div>
                <div className="text-slate-600">
                  <div className="font-semibold text-brand-navy">Email</div>
                  <Link href="mailto:info@londoneyecare.co.uk" className="text-brand-gold hover:underline">info@londoneyecare.co.uk</Link>
                </div>
              </div>
            </div>

            {/* Emergency Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-4">Eye Emergency?</h3>
              <p className="text-slate-600 mb-4 text-sm">
                For urgent eye care needs, contact us immediately or visit your nearest A&E department.
              </p>
              <Link 
                href="tel:+44790333277" 
                className="btn-primary w-full text-center py-3 font-semibold"
              >
                Emergency Contact
              </Link>
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
            Prepare for Your
            <span className="block text-brand-gold font-extrabold">
              Premium Experience
            </span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Learn more about our services, browse our luxury eyewear collection, or discover the exclusive amenities awaiting you at the Harley Lounge.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/harley-lounge" 
              className="btn-luxury px-12 py-5 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Harley Lounge
            </Link>
            <Link 
              href="/brands" 
              className="px-12 py-5 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
            >
              View Luxury Eyewear
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
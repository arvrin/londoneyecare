'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FreakingMindsModal, useFreakingMindsModal } from '@/components/ui/freaking-minds-modal';

export default function HomePage() {
  const { isOpen, close } = useFreakingMindsModal();

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
        {/* Simplified Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh] lg:min-h-[70vh]">
            
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-5 py-3 rounded-full bg-white/95 backdrop-blur-sm border border-brand-navy/20 text-brand-navy text-sm font-semibold shadow-lg">
                <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Premium Eye Care Since 2010
              </div>
              
              {/* Main Headline */}
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary leading-[0.9] tracking-tight">
                  Beyond Ordinary
                  <span className="block text-brand-gold font-black mt-2">
                    Eye Care
                  </span>
                </h1>
                
                {/* Subtitle with improved spacing */}
                <div className="space-y-6 max-w-2xl">
                  <p className="text-xl lg:text-2xl text-secondary font-medium leading-relaxed">
                    Where medical excellence meets luxury service
                  </p>
                  
                  {/* Description with better flow */}
                  <p className="text-lg text-muted leading-relaxed">
                    Experience premium eye care in London&apos;s prestigious medical district with cutting-edge technology and personalized service.
                  </p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="btn-luxury px-8 py-4 text-lg group"
                >
                  <span className="relative z-10 flex items-center">
                    Book Your Consultation
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </Link>
                
                <Link 
                  href="/services" 
                  className="btn-secondary px-8 py-4 text-lg group"
                >
                  <span className="btn-secondary-text flex items-center relative z-10">
                    Explore Services
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-4 font-medium">Trusted by 10,000+ patients</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-700">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">Harley Street</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">5-Star Rated</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Since 2010</span>
                  </div>
                </div>
              </div>
            </div>
            
            
            {/* Right Column - Visual Element - Desktop only */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="aspect-[4/5] bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-gold relative">
                    {/* Professional Hero Image */}
                    <Image 
                      src="/hero.avif"
                      alt="London Eyecare Collective - Premium Eye Care"
                      fill
                      className="object-cover"
                      priority
                      quality={95}
                    />
                    
                    {/* Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="space-y-6">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-brand-gold">15+</div>
                            <div className="text-sm text-white font-medium">Years</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-brand-gold">10k+</div>
                            <div className="text-sm text-white font-medium">Patients</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-brand-gold">5★</div>
                            <div className="text-sm text-white font-medium">Rating</div>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <Link 
                          href="/services" 
                          className="inline-flex items-center justify-center w-full px-6 py-3 bg-white/15 border border-white/30 text-white font-medium rounded-xl hover:bg-white/25 transition-colors group"
                        >
                          Discover Our Services
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-brand-gold text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-brand-gold-light">
                  Premium Care
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs uppercase tracking-wider font-medium">Scroll Down</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Expert Medical Care
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6 leading-tight">
              Our Eye Care
              <span className="block text-brand-gold font-extrabold">
                Services
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Personalized eye care with cutting-edge technology and luxury service standards.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                {/* Card Container */}
                <div className="relative bg-white rounded-2xl p-6 lg:p-8 h-full shadow-sm hover:shadow-lg transition-shadow border border-slate-100 hover:border-brand-navy/20">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-xl flex items-center justify-center text-white shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg lg:text-xl font-display font-semibold text-brand-navy mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-700 mb-6 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-brand-navy hover:text-brand-gold font-medium text-sm group/link transition-colors"
                    >
                      <span className="border-b border-brand-navy/20 group-hover/link:border-brand-gold transition-colors">
                        Explore Service
                      </span>
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary px-8 py-4 text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>


      {/* Luxury Brands Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Simplified background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184,134,11,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brands Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Prestigious Collections
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Luxury Eyewear
              <span className="block text-brand-gold font-extrabold">
                Collection
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover our curated selection of prestigious eyewear brands representing masterpieces of design and craftsmanship.
            </p>
          </div>

          {/* Brand Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {brands.map((brand, index) => (
              <div key={index} className="group relative">
                {/* Brand Card */}
                <div className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover:border-brand-gold/40 transition-colors">
                  
                  {/* Brand Image Container */}
                  <div className="relative mb-6">
                    <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-white/20 border border-white/30 flex items-center justify-center">
                      <div className="text-white/80">
                        {brand.logo}
                      </div>
                    </div>
                    
                    {/* Premium badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center border-2 border-white/20">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Brand Information */}
                  <div className="relative">
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {brand.description}
                    </p>
                    
                    {/* View Collection CTA */}
                    <Link 
                      href="/brands"
                      className="inline-flex items-center text-brand-gold hover:text-brand-gold-light font-medium text-sm group/link transition-colors"
                    >
                      <span className="border-b border-brand-gold/30 group-hover/link:border-brand-gold-light transition-colors">
                        View Collection
                      </span>
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Explore our complete collection of luxury eyewear and find the perfect frame 
              that reflects your unique style.
            </p>
            <Link href="/brands" className="btn-luxury px-10 py-4 text-lg">
              Explore All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Harley Lounge Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Simplified background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Content Side */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                {/* Exclusive Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6 w-fit">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Exclusive Access
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-navy mb-6 leading-tight">
                  Experience the
                  <span className="block text-brand-gold font-extrabold">
                    Harley Lounge
                  </span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Enjoy exclusive access to our prestigious lounge. Connect, recharge, and relax 
                  in luxury while you wait in London&apos;s premier medical district.
                </p>
                
                {/* Premium Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "🏠", text: "Private consultation spaces" },
                    { icon: "☕", text: "Complimentary refreshments" },
                    { icon: "💻", text: "Premium Wi-Fi & workspace" },
                    { icon: "🤵", text: "Dedicated concierge services" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-2xl">{feature.icon}</div>
                      <span className="text-slate-700 font-medium text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/harley-lounge" className="btn-luxury px-8 py-4 text-lg w-fit">
                  Discover Exclusive Benefits
                </Link>
              </div>
              
              {/* Visual Side */}
              <div className="lg:col-span-2 relative bg-gradient-to-br from-brand-navy to-brand-navy-light p-8 lg:p-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent"></div>
                
                {/* Central illustration */}
                <div className="relative text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-brand-gold/30">
                    <svg className="w-12 h-12 lg:w-16 lg:h-16 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                    </svg>
                  </div>
                  
                  <div className="text-white space-y-3">
                    <h3 className="text-xl lg:text-2xl font-display font-semibold">
                      Premium Lounge
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base">
                      Exclusive amenities for our valued clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1B365D 0%, #2A4A73 50%, #1B365D 100%)'
      }}>
        {/* Enhanced background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184,134,11,0.6) 2px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
          
          {/* Additional overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          {/* Subtle animated glow effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-gold rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Location Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-gold/25 backdrop-blur-sm border border-brand-gold/50 text-brand-gold text-sm font-semibold mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-3 text-brand-gold drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              22 A Harley Street, London W1G 9BP
            </div>
            
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Ready to Experience
              <span className="block text-brand-gold font-extrabold drop-shadow-md">
                Premium Eye Care?
              </span>
            </h2>
            
            <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Experience exceptional eye care and luxury eyewear services in London&apos;s 
              prestigious medical district.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Link 
                href="/contact" 
                className="btn-luxury px-12 py-5 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center font-semibold">
                  Book Your Consultation
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="tel:+44790333277" 
                className="px-12 py-5 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center font-semibold">
                  <svg className="w-5 h-5 mr-3 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +44 790-333-2774
                </span>
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/40 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-white drop-shadow-sm group-hover:text-brand-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider drop-shadow-sm">Visit Us</h3>
                <p className="text-slate-200 text-sm leading-relaxed drop-shadow-sm">
                  22 A Harley Street<br/>
                  <span className="text-slate-300">London W1G 9BP</span>
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/40 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-white drop-shadow-sm group-hover:text-brand-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider drop-shadow-sm">Hours</h3>
                <p className="text-slate-200 text-sm leading-relaxed drop-shadow-sm">
                  Mon-Sat: 10:00 am – 06:30 pm<br/>
                  <span className="text-slate-300">Sunday: Closed</span>
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/40 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-white drop-shadow-sm group-hover:text-brand-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider drop-shadow-sm">Call</h3>
                <p className="text-slate-200 text-sm leading-relaxed drop-shadow-sm">
                  +44 790-333-2774<br/>
                  <span className="text-slate-300">info@londoneyecare.co.uk</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freaking Minds Modal */}
      <FreakingMindsModal isOpen={isOpen} onClose={close} />
    </div>
  );
}

const services = [
  {
    title: "Comprehensive Eye Examinations",
    description: "Thorough 45-minute assessments with advanced diagnostic technology to ensure optimal eye health.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    ),
    href: "/services"
  },
  {
    title: "Designer Eyewear Collection",
    description: "Curated selection of luxury frames from world-renowned brands including Cartier and Maybach.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 7h4l1-2h2L8 7h8l-1-2h2l1 2h4v2h-2l-2 8H4L2 9V7zm3 2l1.5 6h11L19 9H5z"/>
        <circle cx="7.5" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="16.5" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    href: "/brands"
  },
  {
    title: "Contact Lens Services",
    description: "Professional fittings, training, and ongoing support for all types of contact lenses.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    href: "/services"
  },
  {
    title: "Specialist Referrals",
    description: "Expert referrals for complex conditions including glaucoma, cataracts, and retinal disorders.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
    href: "/services"
  },
  {
    title: "Harley Lounge Access",
    description: "Exclusive luxury lounge access for our premium service patients in prestigious Harley Street.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
      </svg>
    ),
    href: "/harley-lounge"
  },
  {
    title: "Emergency Eye Care",
    description: "Same-day appointments available for urgent eye conditions and emergency consultations.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    href: "/contact"
  }
];

const brands = [
  {
    name: "Cartier",
    logo: (
      <svg className="w-full h-20" viewBox="0 0 200 100" fill="currentColor">
        <text x="100" y="55" textAnchor="middle" className="text-3xl font-light tracking-widest" fill="currentColor">CARTIER</text>
        <path d="M60 65 h80 M80 70 h40" stroke="currentColor" strokeWidth="0.5"/>
      </svg>
    ),
    description: "Luxury French jewelry and eyewear"
  },
  {
    name: "Maybach", 
    logo: (
      <svg className="w-full h-20" viewBox="0 0 200 100" fill="currentColor">
        <circle cx="100" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
        <text x="100" y="55" textAnchor="middle" className="text-2xl font-bold" fill="currentColor">M</text>
        <path d="M70 50 L100 30 L130 50" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    ),
    description: "Premium automotive-inspired eyewear"
  },
  {
    name: "Lindberg",
    logo: (
      <svg className="w-full h-20" viewBox="0 0 200 100" fill="currentColor">
        <text x="100" y="55" textAnchor="middle" className="text-2xl font-extralight tracking-wider" fill="currentColor">LINDBERG</text>
        <circle cx="50" cy="50" r="3" fill="currentColor"/>
        <circle cx="150" cy="50" r="3" fill="currentColor"/>
      </svg>
    ),
    description: "Minimalist Danish design"
  },
  {
    name: "Kuboraum",
    logo: (
      <svg className="w-full h-20" viewBox="0 0 200 100" fill="currentColor">
        <rect x="70" y="35" width="60" height="30" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="100" y="55" textAnchor="middle" className="text-xl font-bold" fill="currentColor">K</text>
      </svg>
    ),
    description: "Contemporary architectural frames"
  },
  {
    name: "Gucci",
    logo: (
      <svg className="w-full h-20" viewBox="0 0 200 100" fill="currentColor">
        <text x="100" y="55" textAnchor="middle" className="text-3xl font-semibold tracking-wide" fill="currentColor">GUCCI</text>
        <path d="M60 35 h80 M60 65 h80" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    description: "Italian luxury fashion house"
  },
  {
    name: "Lumina CRE8",
    logo: (
      <svg className="w-full h-20" viewBox="0 0 200 100" fill="currentColor">
        <text x="100" y="45" textAnchor="middle" className="text-xl font-light tracking-widest" fill="currentColor">LUMINA</text>
        <text x="100" y="65" textAnchor="middle" className="text-lg font-bold" fill="currentColor">CRE8</text>
      </svg>
    ),
    description: "Innovative eyewear technology"
  }
];
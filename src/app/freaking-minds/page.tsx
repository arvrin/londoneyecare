'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FreakingMindsPage() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'before-after', 'about', 'pricing', 'partnership'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
          {[
            { id: 'hero', label: 'Welcome', icon: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            ) },
            { id: 'before-after', label: 'Transformation', icon: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
              </svg>
            ) },
            { id: 'about', label: 'About', icon: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-.81-1.08-1.37-1.96-1.37h-6c-.88 0-1.62.56-1.96 1.37L7.5 16H10v6h10z"/>
              </svg>
            ) },
            { id: 'pricing', label: 'Pricing', icon: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            ) },
            { id: 'partnership', label: 'Partnership', icon: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-.81-1.08-1.37-1.96-1.37h-6c-.88 0-1.62.56-1.96 1.37L7.5 16H10v6h10zM8.5 12.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S10.83 11 10 11s-1.5.67-1.5 1.5z"/>
              </svg>
            ) }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full m-2 transition-all duration-300 group relative ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] scale-125' 
                  : 'bg-[#757373] hover:bg-[#D2B7C2]'
              }`}
              title={item.label}
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#525151] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap flex items-center space-x-1">
                <span className="text-[#D2B7C2]">{item.icon}</span> 
                <span>{item.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Sophisticated Gradient Background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #2D1B4E 0%, #8F184C 25%, #D2B7C2 75%, #E6E5E5 100%)'
        }}>
          {/* Subtle Animated Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-[#E6E5E5] rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          {/* Premium Texture Pattern */}
          <div className="absolute inset-0 opacity-8" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              {/* Logo */}
              <div className="mb-8">
                <Image
                  src="/FM logo.png"
                  alt="Freaking Minds"
                  width={280}
                  height={100}
                  className="object-contain filter brightness-0 invert mx-auto lg:mx-0"
                  priority
                />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
                We don&apos;t just build websites.
                <span className="block text-white/95 font-black bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  We craft digital experiences.
                </span>
              </h1>
              
              <p className="text-xl text-white/85 mb-10 max-w-2xl leading-relaxed font-medium">
                See how we transformed London Eyecare from basic to brilliant — and discover what we could create for your brand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => scrollToSection('before-after')}
                  className="group relative overflow-hidden bg-white/95 text-[#2D1B4E] hover:text-white px-12 py-5 text-lg font-semibold rounded-full transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(143,24,76,0.3)] transform hover:scale-105 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8F184C] via-[#D2B7C2] to-[#8F184C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Our Work 
                    <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>
                
                <Link 
                  href="mailto:hello@freakingminds.com"
                  className="group px-12 py-5 text-lg bg-white/5 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/15 hover:border-white/50 rounded-full transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 font-medium">Get In Touch</span>
                </Link>
              </div>
            </div>
            
            {/* Visual Showcase */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative overflow-hidden">
                {/* Subtle internal gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#8F184C]/10 rounded-3xl"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center space-x-5 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <svg className="w-7 h-7 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg drop-shadow-sm">Premium Design</h3>
                      <p className="text-white/80 text-sm font-medium">Harley Street level quality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-5 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <svg className="w-7 h-7 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg drop-shadow-sm">Lightning Fast</h3>
                      <p className="text-white/80 text-sm font-medium">Optimized performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-5 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <svg className="w-7 h-7 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <circle cx="12" cy="12" r="5"/>
                        <circle cx="12" cy="12" r="3" fill="white" opacity="0.8"/>
                        <circle cx="12" cy="12" r="1"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg drop-shadow-sm">Conversion Focused</h3>
                      <p className="text-white/80 text-sm font-medium">Built to drive results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="before-after" className="py-20 lg:py-32 bg-gradient-to-br from-[#FAFAFA] via-white to-[#F8F9FA] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(143,24,76,0.2) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
        
        {/* Subtle gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#D2B7C2]/30 text-[#8F184C] text-sm font-semibold mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
              </svg>
              Design Transformation
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-[#2D1B4E] mb-8 leading-[1.1] tracking-tight">
              From Basic to
              <span className="block bg-gradient-to-r from-[#8F184C] via-[#D2B7C2] to-[#8F184C] bg-clip-text text-transparent font-extrabold">
                Brilliant
              </span>
            </h2>
            <p className="text-xl text-[#525151] max-w-3xl mx-auto leading-relaxed font-medium">
              A complete transformation of London Eyecare&apos;s digital presence — from outdated to outstanding.
            </p>
          </div>
          
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Before */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-pink-50/50 rounded-3xl p-8 border border-red-100 shadow-lg">
                <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
                  </svg>
                  Before: Basic Wix Site
                </h3>
                
                {/* Original Website Screenshot */}
                <Link 
                  href="https://londoneyecare.co.uk" 
                  target="_blank"
                  className="group block bg-white rounded-2xl p-4 border border-red-200 mb-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="aspect-video rounded-xl relative group-hover:scale-[1.02] transition-transform duration-300 border border-gray-200 overflow-hidden">
                    <Image
                      src="/oldweb.png"
                      alt="Original London Eyecare Website"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    {/* Overlay for click indication */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-sm font-semibold text-gray-800 flex items-center">
                          Visit Original Site
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <span className="text-sm text-gray-500 font-medium">londoneyecare.co.uk</span>
                  </div>
                </Link>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
                    </svg>
                    <span className="text-gray-700 leading-relaxed">Basic Wix template with generic styling lacking luxury feel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
                    </svg>
                    <span className="text-gray-700 leading-relaxed">Simple navigation limiting user journey and conversions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
                    </svg>
                    <span className="text-gray-700 leading-relaxed">Limited mobile responsiveness affecting user experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
                    </svg>
                    <span className="text-gray-700 leading-relaxed">Minimal SEO structure for competitive London market</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-3xl p-8 border border-emerald-100 shadow-lg">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Now: Premium Experience
                </h3>
                
                {/* New Website Showcase */}
                <Link 
                  href="https://londoneyecare.vercel.app" 
                  target="_blank"
                  className="group block bg-white rounded-2xl p-4 border border-emerald-200 mb-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="aspect-video rounded-xl relative group-hover:scale-[1.02] transition-transform duration-300 border border-emerald-200 overflow-hidden">
                    <Image
                      src="/redesignedweb.png"
                      alt="Redesigned London Eyecare Website"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    {/* Overlay for click indication */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-500/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-emerald-200">
                        <span className="text-sm font-semibold text-emerald-800 flex items-center">
                          Experience Premium Site
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <span className="text-sm text-emerald-600 font-semibold">londoneyecare.vercel.app</span>
                  </div>
                </Link>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-gray-700 leading-relaxed">Harley Street level premium design reflecting true prestige</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-gray-700 leading-relaxed">Mobile-first responsive design for perfect user experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-gray-700 leading-relaxed">Built-in SEO architecture driving search visibility</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-gray-700 leading-relaxed">Conversion-optimized design driving patient bookings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-16 bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Transformation Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">300%</div>
                <div className="text-white/90">Better Mobile Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150%</div>
                <div className="text-white/90">Faster Loading Speed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/90">Premium Brand Reflection</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] text-white hover:from-[#CA226B] hover:to-[#DBC5CE] px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Curious what we&apos;d do for your brand? →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-[#525151] via-[#8F184C] to-[#D2B7C2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-.81-1.08-1.37-1.96-1.37h-6c-.88 0-1.62.56-1.96 1.37L7.5 16H10v6h10z"/>
              </svg>
              Meet the Team
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              We&apos;re Freaking Minds
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              A full-service creative agency obsessed with digital clarity. We design with empathy, write with intent, and build experiences that people remember.
            </p>
          </div>
          
          {/* Core Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8F184C] to-[#D2B7C2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.3)"/>
                  <circle cx="12" cy="12" r="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Empathy-Led Design</h3>
              <p className="text-white/80 leading-relaxed">Built for how real people think, click, and convert. Every interaction is carefully crafted for your users.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8F184C] to-[#D2B7C2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Creative + Strategic</h3>
              <p className="text-white/80 leading-relaxed">No fluff. Just ideas that work. We blend creativity with data-driven strategy for maximum impact.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8F184C] to-[#D2B7C2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Partners, Local Impact</h3>
              <p className="text-white/80 leading-relaxed">India-based. Globally trusted. We bring international standards to local partnerships.</p>
            </div>
          </div>

          {/* Team Quote */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 text-center">
            <blockquote className="text-2xl lg:text-3xl font-light text-white/90 mb-6 italic leading-relaxed">
              &quot;We don&apos;t do templated work. We build trust screens that convert visitors into loyal customers.&quot;
            </blockquote>
            <div className="text-white/70">— The Freaking Minds Team</div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-[#8F184C] hover:bg-[#E0D8DB] px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let&apos;s build something memorable →
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(143,24,76,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#E0D8DB]/30 border border-[#D2B7C2]/50 text-[#8F184C] text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
              Transparent Pricing
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-[#525151] mb-6">
              No vague packages.
              <span className="block bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] bg-clip-text text-transparent font-extrabold">
                No hidden fees.
              </span>
            </h2>
            <p className="text-xl text-[#757373] max-w-3xl mx-auto leading-relaxed">
              Just clear deliverables that align with your growth goals. Choose what you need, when you need it.
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                service: 'SEO Overhaul',
                summary: 'Get found where it matters',
                details: 'Complete SEO strategy, on-page optimization, technical setup, and monthly reporting',
                price: 'from £300',
                popular: false
              },
              {
                service: 'Google Ads Setup',
                summary: 'Ads that actually convert',
                details: 'Account setup, keyword research, ad copy creation, landing page optimization',
                price: 'from £250',
                popular: true
              },
              {
                service: 'Hosting & Care Plan',
                summary: 'Keep your site secure & smooth',
                details: 'Premium hosting, security updates, backups, performance monitoring, support',
                price: 'from £50/mo',
                popular: false
              },
              {
                service: 'Blog Content',
                summary: 'Build trust and SEO together',
                details: 'Expert-written articles, SEO optimization, industry expertise, 2 posts per month',
                price: '£100/mo',
                popular: false
              },
              {
                service: 'Lead Funnel Setup',
                summary: 'Turn visitors into real bookings',
                details: 'Form optimization, CRM integration, automated follow-ups, conversion tracking',
                price: 'from £150',
                popular: false
              },
              {
                service: 'Full Website Redesign',
                summary: 'Complete transformation',
                details: 'Custom design, development, SEO setup, mobile optimization, premium experience',
                price: 'from £2000',
                popular: true
              }
            ].map((item, index) => (
              <div key={index} className={`group relative ${item.popular ? 'md:col-span-2 xl:col-span-1' : ''}`}>
                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border transform hover:-translate-y-2 ${
                  item.popular 
                    ? 'border-[#D2B7C2]/50 ring-2 ring-[#8F184C]/20 scale-105' 
                    : 'border-gray-200 hover:border-[#D2B7C2]/50'
                }`}>
                  {item.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.service}</h3>
                    <p className="text-gray-600 mb-6">{item.summary}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <p className="text-sm text-gray-700 leading-relaxed">{item.details}</p>
                    </div>
                    
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] bg-clip-text text-transparent mb-6">
                      {item.price}
                    </div>
                    
                    <Link 
                      href="mailto:hello@freakingminds.com"
                      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        item.popular
                          ? 'bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] text-white hover:from-[#CA226B] hover:to-[#DBC5CE] shadow-lg hover:shadow-xl'
                          : 'bg-[#E0D8DB]/30 text-[#8F184C] hover:bg-[#D2B7C2]/30 border border-[#D2B7C2]/50'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#E0D8DB]/30 to-[#D2B7C2]/20 rounded-3xl p-8 text-center border border-[#D2B7C2]/30">
            <h3 className="text-2xl font-bold text-[#525151] mb-4">Need help choosing the right mix?</h3>
            <p className="text-[#757373] mb-6">We&apos;ll create a custom bundle that fits your specific goals and budget.</p>
            <Link 
              href="mailto:hello@freakingminds.com"
              className="bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] text-white hover:from-[#CA226B] hover:to-[#DBC5CE] px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let&apos;s Build Your Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-20 lg:py-32 bg-gradient-to-br from-[#E6E5E5] via-white to-[#E0D8DB]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(143,24,76,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#E0D8DB]/30 border border-[#D2B7C2]/50 text-[#8F184C] text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-.81-1.08-1.37-1.96-1.37h-6c-.88 0-1.62.56-1.96 1.37L7.5 16H10v6h10zM8.5 12.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S10.83 11 10 11s-1.5.67-1.5 1.5z"/>
              </svg>
              A Personal Message
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-[#525151] mb-8">
              Why Partner
              <span className="block bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] bg-clip-text text-transparent font-extrabold">
                With Us
              </span>
            </h2>
          </div>

          {/* Personal Letter */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#525151] leading-relaxed mb-6">
                <strong>Dear London Eyecare,</strong>
              </p>
              
              <p className="text-lg text-[#757373] leading-relaxed mb-6">
                You&apos;re not just another clinic — you&apos;re a name on Harley Street. That means something.
              </p>
              
              <p className="text-lg text-[#757373] leading-relaxed mb-6">
                And we believe your digital presence should feel as premium as your care.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We didn&apos;t pitch randomly. We studied your old site, mapped your gaps, and rebuilt it the way we wish every medical brand&apos;s site worked.
              </p>
              
              <div className="bg-[#E0D8DB]/30 rounded-2xl p-6 border border-[#D2B7C2]/30">
                <p className="text-xl font-medium text-[#8F184C] text-center italic">
                  &quot;It&apos;s not just a website. It&apos;s your digital front desk — and we made sure it speaks your language.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8F184C] to-[#D2B7C2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.3)"/>
                  <circle cx="12" cy="12" r="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#525151] mb-4">Built Around Your Goals</h3>
              <p className="text-[#757373] leading-relaxed">Designed to drive trust, bookings & brand reputation — not just look pretty.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8F184C] to-[#D2B7C2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#525151] mb-4">Designed to Reflect You</h3>
              <p className="text-[#757373] leading-relaxed">No templates — this is Harley Street level design that matches your prestige.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8F184C] to-[#D2B7C2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-.81-1.08-1.37-1.96-1.37h-6c-.88 0-1.62.56-1.96 1.37L7.5 16H10v6h10zM8.5 12.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S10.83 11 10 11s-1.5.67-1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#525151] mb-4">A Partner, Not Just a Vendor</h3>
              <p className="text-[#757373] leading-relaxed">Monthly support, proactive updates, and smart suggestions for growth.</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-[#8F184C] to-[#D2B7C2] rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Let&apos;s build something worthy of your name.</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to see what a true digital partnership looks like? Let&apos;s start with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:hello@freakingminds.com"
                className="bg-white text-[#8F184C] hover:bg-[#E0D8DB] px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Schedule a 15-min Call →
              </Link>
              <Link 
                href="tel:+918800000000"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-8 py-4 font-semibold rounded-full transition-all duration-300"
              >
                Call Us Directly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">A showcase of premium web development</p>
          <div className="flex justify-center space-x-8">
            <Link href="mailto:hello@freakingminds.com" className="text-[#D2B7C2] hover:text-white transition-colors">
              hello@freakingminds.com
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              ← Back to London Eyecare
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
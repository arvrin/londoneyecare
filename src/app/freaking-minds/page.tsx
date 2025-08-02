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
            { id: 'hero', label: 'Welcome', icon: '🏠' },
            { id: 'before-after', label: 'Transformation', icon: '🔄' },
            { id: 'about', label: 'About', icon: '👥' },
            { id: 'pricing', label: 'Pricing', icon: '💰' },
            { id: 'partnership', label: 'Partnership', icon: '🤝' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full m-2 transition-all duration-300 group relative ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-pink-400'
              }`}
              title={item.label}
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.icon} {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Magenta Gradient Background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 50%, #AD1457 100%)'
        }}>
          {/* Animated Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
          
          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
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
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                We don&apos;t just build websites.
                <span className="block text-white/90 font-black">
                  We craft digital experiences.
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
                See how we transformed London Eyecare from basic to brilliant — and discover what we could create for your brand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => scrollToSection('before-after')}
                  className="bg-white text-pink-600 hover:bg-pink-50 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Explore Our Work ↓
                </button>
                
                <Link 
                  href="mailto:hello@freakingminds.com"
                  className="px-10 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            
            {/* Visual Showcase */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Premium Design</h3>
                      <p className="text-white/70 text-sm">Harley Street level quality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Lightning Fast</h3>
                      <p className="text-white/70 text-sm">Optimized performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Conversion Focused</h3>
                      <p className="text-white/70 text-sm">Built to drive results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="before-after" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(233,30,99,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-sm font-medium mb-6">
              <span className="mr-2">🔄</span>
              Design Transformation
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              From Basic to
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
                Brilliant
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A complete transformation of London Eyecare&apos;s digital presence — from outdated to outstanding.
            </p>
          </div>
          
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Before */}
            <div className="space-y-6">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                  <span className="mr-3">❌</span>
                  Before: Basic Wix Site
                </h3>
                <div className="bg-white rounded-xl p-4 border border-red-200 mb-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Old Website Screenshot</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">❌</span>
                    <span className="text-gray-700">Clunky mobile layout that frustrated users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">❌</span>
                    <span className="text-gray-700">No SEO structure or search visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">❌</span>
                    <span className="text-gray-700">Poor conversion flow and user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">❌</span>
                    <span className="text-gray-700">Generic template that didn&apos;t reflect prestige</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <span className="mr-3">✅</span>
                  Now: Premium Experience
                </h3>
                <div className="bg-white rounded-xl p-4 border border-green-200 mb-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-medium">New Website Screenshot</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✅</span>
                    <span className="text-gray-700">Mobile-optimized for perfect user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✅</span>
                    <span className="text-gray-700">Built-in SEO architecture for search visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✅</span>
                    <span className="text-gray-700">Designed specifically for patient conversion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✅</span>
                    <span className="text-gray-700">Harley Street level premium design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 text-center text-white">
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
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700 px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Curious what we&apos;d do for your brand? →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <span className="mr-2">👥</span>
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
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Empathy-Led Design</h3>
              <p className="text-white/80 leading-relaxed">Built for how real people think, click, and convert. Every interaction is carefully crafted for your users.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Creative + Strategic</h3>
              <p className="text-white/80 leading-relaxed">No fluff. Just ideas that work. We blend creativity with data-driven strategy for maximum impact.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌐</span>
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
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let&apos;s build something memorable →
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(233,30,99,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-sm font-medium mb-6">
              <span className="mr-2">💰</span>
              Transparent Pricing
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              No vague packages.
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
                No hidden fees.
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
                    ? 'border-pink-200 ring-2 ring-pink-500/20 scale-105' 
                    : 'border-gray-200 hover:border-pink-200'
                }`}>
                  {item.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                    
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                      {item.price}
                    </div>
                    
                    <Link 
                      href="mailto:hello@freakingminds.com"
                      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        item.popular
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                          : 'bg-pink-50 text-pink-600 hover:bg-pink-100 border border-pink-200'
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
          <div className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 text-center border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need help choosing the right mix?</h3>
            <p className="text-gray-700 mb-6">We&apos;ll create a custom bundle that fits your specific goals and budget.</p>
            <Link 
              href="mailto:hello@freakingminds.com"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let&apos;s Build Your Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-pink-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(233,30,99,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-sm font-medium mb-6">
              <span className="mr-2">🤝</span>
              A Personal Message
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-8">
              Why Partner
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
                With Us
              </span>
            </h2>
          </div>

          {/* Personal Letter */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed mb-6">
                <strong>Dear London Eyecare,</strong>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You&apos;re not just another clinic — you&apos;re a name on Harley Street. That means something.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                And we believe your digital presence should feel as premium as your care.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We didn&apos;t pitch randomly. We studied your old site, mapped your gaps, and rebuilt it the way we wish every medical brand&apos;s site worked.
              </p>
              
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <p className="text-xl font-medium text-pink-800 text-center italic">
                  &quot;It&apos;s not just a website. It&apos;s your digital front desk — and we made sure it speaks your language.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Built Around Your Goals</h3>
              <p className="text-gray-600 leading-relaxed">Designed to drive trust, bookings & brand reputation — not just look pretty.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Designed to Reflect You</h3>
              <p className="text-gray-600 leading-relaxed">No templates — this is Harley Street level design that matches your prestige.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">A Partner, Not Just a Vendor</h3>
              <p className="text-gray-600 leading-relaxed">Monthly support, proactive updates, and smart suggestions for growth.</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Let&apos;s build something worthy of your name.</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to see what a true digital partnership looks like? Let&apos;s start with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:hello@freakingminds.com"
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
            <Link href="mailto:hello@freakingminds.com" className="text-pink-400 hover:text-pink-300 transition-colors">
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
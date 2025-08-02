import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FreakingMindsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-pink-600 via-pink-500 to-pink-400 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/FM logo.png"
              alt="Freaking Minds"
              width={300}
              height={120}
              className="object-contain filter brightness-0 invert"
              priority
            />
          </div>
          
          <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Digital experiences that transcend expectations. We craft premium web applications 
            that blend cutting-edge technology with exceptional design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <a 
              href="mailto:hello@freakingminds.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                This Website Showcases Our Capabilities
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The London Eyecare Collective website you're experiencing right now is a 
                  demonstration of our premium web development capabilities. Every element, 
                  from the sophisticated design system to the smooth animations, represents 
                  the level of quality we bring to our clients.
                </p>
                <p>
                  We specialize in creating bespoke digital experiences that elevate brands 
                  and engage users. Our approach combines strategic thinking, exceptional 
                  design, and cutting-edge technology to deliver results that exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <h3 className="text-xl font-semibold text-pink-600 mb-3">What You're Experiencing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span>Custom design system with dual themes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span>Responsive design across all devices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span>Modern animations and interactions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span>Performance-optimized architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to transform your business presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-pink-100 group">
                <div className="w-12 h-12 bg-pink-500 rounded-lg mb-4 flex items-center justify-center text-white group-hover:bg-pink-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="absolute top-4 right-4 opacity-10">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let's discuss how we can create something extraordinary for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@freakingminds.com"
              className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </a>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Web Applications",
    description: "Custom web applications built with modern frameworks and cutting-edge technology.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v2h-2V7zm0 4h2v2h-2v-2z"/>
      </svg>
    )
  },
  {
    title: "E-commerce Platforms",
    description: "Powerful online stores that drive sales and provide exceptional user experiences.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    )
  },
  {
    title: "Brand Identity",
    description: "Comprehensive brand systems that create lasting impressions and drive engagement.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  }
];
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface FreakingMindsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FreakingMindsModal({ isOpen, onClose }: FreakingMindsModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className={`
          relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-200
          transition-all duration-300 transform
          ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
        `}>
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors flex items-center justify-center group"
          >
            <svg className="w-5 h-5 text-pink-600 group-hover:text-pink-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center justify-center mb-4">
                <Image
                  src="/FM logo.png"
                  alt="Freaking Minds"
                  width={200}
                  height={80}
                  className="object-contain mb-3"
                  priority
                />
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-gray-900">
                  Hello from Freaking Minds
                </h2>
              </div>
              
              <div className="w-24 h-1 bg-pink-500 mx-auto mb-6 rounded-full"></div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                This is what your brand could look like digitally
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    What You're Experiencing
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span>Premium design system with dual themes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span>Modern animations & micro-interactions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span>Responsive across all devices</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span>Professional brand integration</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    Our Capabilities
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span>Custom web applications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span>E-commerce platforms</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span>Brand identity & design systems</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-pink-50 rounded-2xl p-6 text-center border border-pink-100">
                <h4 className="text-lg font-semibold text-pink-600 mb-2">
                  Ready to transform your digital presence?
                </h4>
                <p className="text-gray-600 mb-4">
                  Explore this demo and see how we can elevate your brand
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleClose}
                    className="bg-pink-500 text-white hover:bg-pink-600 font-semibold px-6 py-3 text-sm rounded-full transition-all duration-300"
                  >
                    Continue Exploring
                  </button>
                  <a
                    href="mailto:hello@freakingminds.com"
                    className="bg-transparent border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-semibold px-6 py-3 text-sm rounded-full transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                This website showcases our premium web development capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useFreakingMindsModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal every time after 5 seconds (removed localStorage check)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const close = () => setIsOpen(false);

  return { isOpen, close };
}
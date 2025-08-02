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
          relative w-full max-w-2xl backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden
          transition-all duration-300 transform
          ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
        `} style={{
          background: 'linear-gradient(135deg, #1B365D 0%, #E91E63 15%, #1B365D 85%, #B8860B 100%)'
        }}>
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center group border border-white/30"
          >
            <svg className="w-5 h-5 text-white group-hover:text-brand-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative">
            {/* Background overlay for content readability */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl"></div>
            
            <div className="relative p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex flex-col items-center justify-center mb-6">
                  <Image
                    src="/FM logo.png"
                    alt="Freaking Minds"
                    width={180}
                    height={70}
                    className="object-contain mb-4"
                    priority
                  />
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-navy mb-4">
                    Welcome to the Freaking Minds Experience
                  </h2>
                </div>
                
                <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-brand-gold to-brand-navy mx-auto mb-6 rounded-full"></div>
                
                <div className="text-lg text-slate-700 leading-relaxed space-y-4 max-w-2xl mx-auto">
                  <p>
                    Everything you see here — the flow, the feel, the finesse — is built with one goal: <span className="font-semibold text-brand-navy">a better digital experience for you</span>.
                  </p>
                  <p>
                    Designed to help you <span className="font-semibold text-pink-600">see clearer</span>, <span className="font-semibold text-brand-gold">move faster</span>, and <span className="font-semibold text-brand-navy">feel at ease</span> — just like London Eyecare&apos;s promise.
                  </p>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="bg-gradient-to-r from-slate-50 via-pink-50/30 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-brand-navy">See Clearer</h4>
                    <p className="text-sm text-slate-600">Intuitive design that guides your vision</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-xl flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-brand-navy">Move Faster</h4>
                    <p className="text-sm text-slate-600">Seamless interactions at lightning speed</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-blue-600 rounded-xl flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-brand-navy">Feel at Ease</h4>
                    <p className="text-sm text-slate-600">Comfortable, premium experience</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center">
                  <button
                    onClick={handleClose}
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-brand-gold to-brand-navy rounded-full opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-white rounded-full m-0.5 px-8 py-4 group-hover:bg-transparent transition-all duration-300">
                      <span className="font-semibold text-brand-navy group-hover:text-white transition-colors duration-300 flex items-center">
                        Experience the Difference
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </div>
                
                <p className="text-sm text-slate-500 mt-4">
                  Continue exploring this premium experience
                </p>
              </div>

              {/* Footer */}
              <div className="text-center pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-3">
                  A showcase of premium web development by Freaking Minds
                </p>
                <a
                  href="mailto:hello@freakingminds.com"
                  className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-brand-navy transition-colors"
                >
                  Get in touch
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
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
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
      {/* Enhanced Backdrop with Sophisticated Blur */}
      <div 
        className="absolute inset-0 bg-[#525151]/40 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Responsive Modal - Fixed for All Screen Sizes */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-2 sm:p-4 lg:p-6 xl:p-8">
        <div className={`
          relative w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 
          backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden
          transition-all duration-300 transform
          ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
        `} style={{
          background: 'linear-gradient(135deg, #8F184C 0%, #D2B7C2 50%, #8F184C 100%)',
          boxShadow: '0 25px 50px -12px rgba(143, 24, 76, 0.25), 0 0 100px rgba(210, 183, 194, 0.15)',
          maxHeight: '90vh'
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
            {/* Premium Glass Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E6E5E5]/98 via-[#E0D8DB]/95 to-[#D2B7C2]/90 backdrop-blur-xl rounded-3xl"></div>
            
            <div className="relative p-4 sm:p-8 lg:p-12 xl:p-16 max-h-[75vh] overflow-y-auto">
              {/* Header with Better Spacing */}
              <div className="text-center mb-12">
                <div className="flex flex-col items-center justify-center mb-6">
                  <Image
                    src="/FM logo.png"
                    alt="Freaking Minds"
                    width={180}
                    height={70}
                    className="object-contain mb-4"
                    priority
                  />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-[#8F184C] to-[#73143D] bg-clip-text text-transparent mb-6 leading-tight">
                    Welcome to the Freaking Minds Experience
                  </h2>
                </div>
                
                <div className="w-32 h-1 bg-gradient-to-r from-[#8F184C] via-[#D2B7C2] to-[#8F184C] mx-auto mb-6 rounded-full shadow-lg"></div>
                
                <div className="text-base sm:text-lg text-[#525151] leading-relaxed space-y-4 sm:space-y-6 max-w-2xl mx-auto">
                  <p>
                    Everything you see here — the flow, the feel, the finesse — is built with one goal: <span className="font-semibold text-[#8F184C]">a better digital experience for you</span>.
                  </p>
                  <p>
                    Designed to help you <span className="font-semibold text-[#8F184C]">see clearer</span>, <span className="font-semibold text-[#D2B7C2]">move faster</span>, and <span className="font-semibold text-[#525151]">feel at ease</span> — just like London Eyecare&apos;s promise.
                  </p>
                </div>
              </div>

              {/* Premium Experience Highlights with Better Spacing */}
              <div className="bg-gradient-to-r from-[#E6E5E5]/40 via-[#E0D8DB]/30 to-[#D2B7C2]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#D2B7C2]/30 shadow-xl mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8F184C] to-[#CA226B] rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#525151]">See Clearer</h4>
                    <p className="text-sm text-[#757373]">Intuitive design that guides your vision</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D2B7C2] to-[#DBC5CE] rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#525151]">Move Faster</h4>
                    <p className="text-sm text-[#757373]">Seamless interactions at lightning speed</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#525151] to-[#757373] rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#525151]">Feel at Ease</h4>
                    <p className="text-sm text-[#757373]">Comfortable, premium experience</p>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Section with Breathing Room */}
              <div className="text-center mt-10">
                <div className="inline-flex items-center justify-center">
                  <button
                    onClick={handleClose}
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8F184C] via-[#D2B7C2] to-[#8F184C] rounded-full opacity-90 group-hover:opacity-100 transition-all duration-500 shadow-2xl"></div>
                    <div className="relative bg-white rounded-full m-0.5 px-8 py-4 group-hover:bg-transparent transition-all duration-300">
                      <span className="font-semibold text-[#525151] group-hover:text-white transition-colors duration-300 flex items-center">
                        Experience the Difference
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </div>
                
                <p className="text-sm text-[#757373] mt-6 font-light">
                  Continue exploring this premium experience
                </p>
              </div>

              {/* Sophisticated Footer with Proper Spacing */}
              <div className="text-center pt-8 mt-8 border-t border-[#D2B7C2]/30">
                <p className="text-sm text-[#757373] mb-3 font-light">
                  A showcase of premium web development by Freaking Minds
                </p>
                <a
                  href="mailto:hello@freakingminds.com"
                  className="inline-flex items-center text-sm font-medium text-[#8F184C] hover:text-[#CA226B] transition-all duration-300 group"
                >
                  Get in touch
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
    // Show modal once per day (instead of per session) with shorter delay
    const hasSeenModal = localStorage.getItem('freaking-minds-modal-seen');
    const lastSeen = localStorage.getItem('freaking-minds-modal-last-seen');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    // Show modal if never seen or if more than 24 hours have passed
    if (!hasSeenModal || !lastSeen || (now - parseInt(lastSeen)) > oneDay) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('freaking-minds-modal-seen', 'true');
        localStorage.setItem('freaking-minds-modal-last-seen', now.toString());
      }, 8000); // Show after 8 seconds, once per day

      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return { isOpen, close, open };
}
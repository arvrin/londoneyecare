import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

const footerLinks = {
  services: [
    { name: 'Eye Examinations', href: '/services' },
    { name: 'Contact Lenses', href: '/services' },
    { name: 'Designer Eyewear', href: '/brands' },
    { name: 'Specialist Referrals', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about' },
    { name: 'Harley Lounge', href: '/harley-lounge' },
    { name: 'Contact Us', href: '/contact' },
  ],
  brands: [
    { name: 'Cartier', href: '/brands' },
    { name: 'Maybach', href: '/brands' },
    { name: 'Lindberg', href: '/brands' },
    { name: 'Gucci', href: '/brands' },
  ],
};

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/londoneyecarecollective',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.703.333 4.014.63c-.723.31-1.335.744-1.944 1.353C1.46 2.592 1.026 3.205.716 3.927.42 4.616.218 5.407.159 6.624.1 7.843.087 8.31.087 11.931c0 3.621.013 4.088.072 5.307.059 1.217.261 2.007.558 2.696.31.723.744 1.335 1.353 1.944.609.608 1.221 1.043 1.944 1.353.689.296 1.479.499 2.696.558 1.219.059 1.686.072 5.307.072 3.621 0 4.088-.013 5.307-.072 1.217-.059 2.007-.262 2.696-.558.723-.31 1.335-.745 1.944-1.353a5.337 5.337 0 001.353-1.944c.296-.689.499-1.479.558-2.696.059-1.219.072-1.686.072-5.307 0-3.621-.013-4.088-.072-5.307-.059-1.217-.262-2.007-.558-2.696a5.337 5.337 0 00-1.353-1.944A5.337 5.337 0 0019.78.63c-.689-.297-1.479-.499-2.696-.558C15.865.013 15.398 0 11.777 0h.24zM10.855 2.18h1.162c3.499 0 3.917.013 5.298.072 1.281.059 1.977.275 2.441.458.614.238 1.052.523 1.513.984.461.461.746.899.984 1.513.183.464.399 1.16.458 2.441.059 1.381.072 1.799.072 5.298 0 3.499-.013 3.917-.072 5.298-.059 1.281-.275 1.977-.458 2.441a4.06 4.06 0 01-.984 1.513 4.06 4.06 0 01-1.513.984c-.464.183-1.16.399-2.441.458-1.381.059-1.799.072-5.298.072-3.499 0-3.917-.013-5.298-.072-1.281-.059-1.977-.275-2.441-.458a4.06 4.06 0 01-1.513-.984 4.06 4.06 0 01-.984-1.513c-.183-.464-.399-1.16-.458-2.441-.059-1.381-.072-1.799-.072-5.298 0-3.499.013-3.917.072-5.298.059-1.281.275-1.977.458-2.441.238-.614.523-1.052.984-1.513A4.06 4.06 0 014.297 2.64c.464-.183 1.16-.399 2.441-.458 1.38-.059 1.799-.072 5.298-.072l-.181-.001z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12.017 15.994a4.156 4.156 0 110-8.312 4.156 4.156 0 010 8.312z" clipRule="evenodd" />
        <circle cx="18.406" cy="5.594" r="1.44" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/londoneyecarecollective',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/london-eyecare-collective',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section - Brand and Description */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Logo width={220} height={65} showText={true} className="filter brightness-0 invert" />
              </div>
              
              {/* Brand Description */}
              <p className="text-slate-200 leading-relaxed text-lg mb-8 max-w-2xl">
                Premium eye care services and luxury eyewear in the heart of London. Where medical excellence meets exceptional service at our prestigious Harley Street practice.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 hover:bg-brand-gold border border-white/20 hover:border-brand-gold rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-brand-gold font-semibold text-lg mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h4 className="text-white font-medium text-sm mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Address
                  </h4>
                  <div className="text-slate-200 text-sm leading-relaxed">
                    <div className="font-medium text-white">London Eyecare</div>
                    <div className="text-slate-300 text-xs mb-1">(situated within the Harley Street Eye Centre)</div>
                    <div>22 A Harley Street</div>
                    <div>London, W1G 9BP</div>
                  </div>
                </div>
                
                {/* Phone & Email */}
                <div>
                  <h4 className="text-white font-medium text-sm mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact
                  </h4>
                  <div className="space-y-2">
                    <Link href="tel:+447903332774" className="text-slate-200 hover:text-brand-gold transition-colors text-sm block">
                      +44 790-333-2774
                    </Link>
                    <Link href="mailto:info@londoneyecare.co.uk" className="text-slate-200 hover:text-brand-gold transition-colors text-sm block">
                      info@londoneyecare.co.uk
                    </Link>
                  </div>
                </div>
                
                {/* Hours */}
                <div>
                  <h4 className="text-white font-medium text-sm mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Opening Hours
                  </h4>
                  <div className="text-slate-200 text-sm space-y-1">
                    <div>Mon - Sat: 10:00 am – 06:30 pm</div>
                    <div className="text-slate-300">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="border-t border-white/10 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Services */}
            <div>
              <h3 className="text-brand-gold font-semibold text-sm uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm leading-relaxed block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-brand-gold font-semibold text-sm uppercase tracking-wider mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm leading-relaxed block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-brand-gold font-semibold text-sm uppercase tracking-wider mb-6">
                Luxury Brands
              </h3>
              <ul className="space-y-3">
                {footerLinks.brands.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm leading-relaxed block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA */}
            <div>
              <h3 className="text-brand-gold font-semibold text-sm uppercase tracking-wider mb-6">
                Book Appointment
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Ready to experience premium eye care?
              </p>
              <Link
                href="/contact"
                className="btn-luxury text-sm px-6 py-3 inline-block"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-brand-navy-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="text-center sm:text-left">
              <span className="text-xs text-slate-400">
                © 2024 London Eyecare. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6 text-xs">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center space-x-1 text-slate-400">
                <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Premium Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
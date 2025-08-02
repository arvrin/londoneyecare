'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo, LogoMark } from '@/components/ui/logo';

interface DropdownItem {
  name: string;
  href: string;
  icon?: string;
}

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { name: 'Our Story', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Brands', href: '/brands' },
      { name: 'Harley Lounge', href: '/harley-lounge' },
      { name: 'Contact', href: '/contact' },
    ]
  },
  { 
    name: 'Freaking Minds', 
    href: '/freaking-minds',
    dropdown: [
      { name: 'Design: Then vs Now', href: '/freaking-minds#before-after', icon: '🔄' },
      { name: 'Meet Freaking Minds', href: '/freaking-minds#about', icon: '👥' },
      { name: 'Transparent Pricing', href: '/freaking-minds#pricing', icon: '💰' },
      { name: 'Why Partner With Us', href: '/freaking-minds#partnership', icon: '🤝' },
    ]
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      // Background change based on scroll position
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${isHidden ? '-translate-y-full' : 'translate-y-0'}
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm border-b border-transparent shadow-sm'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group relative">
              <div className="flex items-center">
                {/* Desktop Logo */}
                <div className="hidden sm:block">
                  <Logo width={180} height={50} showText={true} className="group-hover:scale-105 transition-all duration-300 filter group-hover:brightness-110" />
                </div>
                {/* Mobile Logo */}
                <div className="sm:hidden">
                  <LogoMark size={40} className="group-hover:scale-105 transition-all duration-300 filter group-hover:brightness-110" />
                </div>
              </div>
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-brand-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={(e) => {
                  // Only close if not hovering over the dropdown area
                  const relatedTarget = e.relatedTarget as HTMLElement | null;
                  if (!item.dropdown || !relatedTarget?.closest('[data-dropdown="true"]')) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-gray-700 hover:text-brand-navy hover:bg-gray-50 transition-all duration-300 group flex items-center font-medium"
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.dropdown && (
                    <svg className={`ml-1 w-4 h-4 transition-all duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {/* Underline effect */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-navy group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></div>
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-56 z-50"
                    data-dropdown="true"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl animate-fade-in-up">
                      <div className="py-3">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`group/dropdown block px-4 py-3 text-sm transition-all duration-300 relative overflow-hidden ${
                              item.name === 'Freaking Minds' 
                                ? 'text-gray-700 hover:text-pink-600 hover:bg-pink-50' 
                                : 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'
                            }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="flex items-center relative z-10">
                              {dropdownItem.icon && (
                                <span className="mr-3 text-base">{dropdownItem.icon}</span>
                              )}
                              <span>{dropdownItem.name}</span>
                            </div>
                            <div className={`absolute left-0 top-1/2 w-0 h-0.5 group-hover/dropdown:w-full transition-all duration-300 transform -translate-y-1/2 ${
                              item.name === 'Freaking Minds'
                                ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                                : 'bg-gradient-to-r from-brand-gold to-brand-navy'
                            }`}></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - CTA, Mobile menu, and Theme toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="btn-luxury hidden sm:inline-flex text-sm px-6 py-2.5 relative overflow-hidden group/cta"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover/cta:scale-105">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold-light to-brand-gold opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-brand-navy hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 transition-all duration-300 group"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle main menu</span>
              <div className="relative w-6 h-6">
                <svg className={`absolute inset-0 transition-all duration-300 transform ${isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className={`absolute inset-0 transition-all duration-300 transform ${isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden animate-fade-in-up" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white backdrop-blur-xl border-t border-gray-200 shadow-lg">
            {navigation.map((item, index) => (
              <div key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Link
                  href={item.href}
                  className="group block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-navy hover:bg-gray-50 transition-all duration-300 relative overflow-hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-navy group-hover:w-full transition-all duration-300 transform -translate-y-1/2"></div>
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="group/mobile block px-4 py-2 text-sm text-gray-600 hover:text-brand-navy hover:bg-gray-50 rounded-lg transition-all duration-300 relative overflow-hidden animate-fade-in-up"
                        style={{ animationDelay: `${(index * 100) + (dropdownIndex * 50) + 200}ms` }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative z-10">{dropdownItem.name}</span>
                        <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-navy group-hover/mobile:w-3/4 transition-all duration-300 transform -translate-y-1/2"></div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-luxury w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
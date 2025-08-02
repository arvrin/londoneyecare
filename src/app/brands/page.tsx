import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Luxury Eyewear Brands | London Eyecare Collective',
  description: 'Discover our exclusive collection of luxury eyewear from prestigious brands including Cartier, Maybach, Lindberg, Tom Ford, and more. Premium frames in London.',
};

const premiumBrands = [
  {
    name: 'Cartier',
    description: 'The epitome of luxury and sophistication, Cartier eyewear combines precious materials with timeless design.',
    specialties: ['Precious Metal Frames', 'Diamond Accents', 'Signature Panther Collection'],
    priceRange: '£800 - £3,500',
    heritage: 'Since 1847',
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm0 75C30.7 85 15 69.3 15 50S30.7 15 50 15s35 15.7 35 35-15.7 35-35 35z"/>
        <circle cx="50" cy="35" r="8"/>
        <path d="M35 50h30l-5 15H40z"/>
      </svg>
    ),
    featured: true
  },
  {
    name: 'Maybach',
    description: 'Automotive-inspired luxury meets optical excellence in these exclusive, limited-edition frames.',
    specialties: ['Titanium Construction', 'Leather Details', 'Limited Editions'],
    priceRange: '£1,200 - £4,000',
    heritage: 'Since 1909',
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20 30h60v40H20z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="30" cy="70" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="70" cy="70" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M35 30L50 15L65 30"/>
        <text x="50" y="55" textAnchor="middle" fontSize="12" fontWeight="bold">M</text>
      </svg>
    ),
    featured: true
  },
  {
    name: 'Lindberg',
    description: 'Danish minimalism and innovation crafted without screws, welding, or rivets for ultimate comfort.',
    specialties: ['Screw-free Design', 'Titanium Frames', 'Custom Sizing'],
    priceRange: '£600 - £1,800',
    heritage: 'Since 1986',
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
        <rect x="15" y="35" width="70" height="4" rx="2"/>
        <rect x="25" y="30" width="4" height="14" rx="2"/>
        <rect x="71" y="30" width="4" height="14" rx="2"/>
        <circle cx="30" cy="42" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="70" cy="42" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M42 37h16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    featured: true
  },
  {
    name: 'Tom Ford',
    description: 'Bold, confident designs that make a statement while maintaining sophisticated elegance.',
    specialties: ['Fashion-forward Designs', 'Oversized Styles', 'Signature T-logo'],
    priceRange: '£400 - £1,200',
    heritage: 'Since 2005',
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
        <rect x="20" y="20" width="60" height="6"/>
        <rect x="47" y="20" width="6" height="40"/>
        <rect x="20" y="60" width="25" height="6"/>
        <rect x="55" y="60" width="25" height="6"/>
        <text x="50" y="80" textAnchor="middle" fontSize="10" fontWeight="bold">TF</text>
      </svg>
    ),
    featured: false
  },
  {
    name: 'Oliver Peoples',
    description: 'Vintage-inspired frames with meticulous attention to detail and timeless appeal.',
    specialties: ['Vintage Aesthetics', 'Handcrafted Details', 'Classic Silhouettes'],
    priceRange: '£350 - £900',
    heritage: 'Since 1987',
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="35" cy="45" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="65" cy="45" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M20 40h10M50 40h0M80 40h-10" stroke="currentColor" strokeWidth="2"/>
        <path d="M35 60v8M65 60v8" stroke="currentColor" strokeWidth="1"/>
        <text x="50" y="80" textAnchor="middle" fontSize="8">OP</text>
      </svg>
    ),
    featured: false
  },
  {
    name: 'Persol',
    description: 'Italian craftsmanship and heritage dating back to 1917, beloved by style icons worldwide.',
    specialties: ['Meflecto System', 'Italian Craftsmanship', 'Cinema Heritage'],
    priceRange: '£200 - £600',
    heritage: 'Since 1917',
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="35" cy="45" rx="18" ry="15" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.7"/>
        <ellipse cx="65" cy="45" rx="18" ry="15" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.7"/>
        <path d="M17 40h0M53 40h-6M83 40h0" stroke="currentColor" strokeWidth="3"/>
        <text x="50" y="75" textAnchor="middle" fontSize="8" fontStyle="italic">PERSOL</text>
      </svg>
    ),
    featured: false
  }
];

const collections = [
  {
    title: 'The Heritage Collection',
    description: 'Timeless designs that have defined elegance for generations.',
    brands: ['Cartier', 'Persol', 'Oliver Peoples'],
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 15L60 35H40L50 15z"/>
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M35 65L50 75L65 65"/>
        <circle cx="50" cy="50" r="8"/>
      </svg>
    )
  },
  {
    title: 'The Innovation Collection',
    description: 'Cutting-edge technology meets contemporary design.',
    brands: ['Lindberg', 'Maybach', 'Tom Ford'],
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M30 50L50 30L70 50L50 70L30 50z"/>
        <circle cx="50" cy="30" r="5"/>
        <circle cx="70" cy="50" r="5"/>
        <circle cx="50" cy="70" r="5"/>
        <circle cx="30" cy="50" r="5"/>
        <path d="M40 40L60 60M60 40L40 60" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: 'The Statement Collection',
    description: 'Bold frames for those who dare to stand out.',
    brands: ['Tom Ford', 'Maybach', 'Cartier'],
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
        <rect x="20" y="35" width="60" height="30" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="35" cy="50" r="8"/>
        <circle cx="65" cy="50" r="8"/>
        <path d="M20 25L35 35M80 25L65 35" stroke="currentColor" strokeWidth="2"/>
        <path d="M47 50h6" stroke="currentColor" strokeWidth="3"/>
      </svg>
    )
  }
];

const services = [
  {
    title: 'Personal Styling Consultation',
    description: 'Expert guidance to find frames that complement your features and lifestyle.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="35" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M25 80C25 65 35 55 50 55s25 10 25 25"/>
        <path d="M40 25L50 15L60 25"/>
        <circle cx="45" cy="30" r="2"/>
        <circle cx="55" cy="30" r="2"/>
      </svg>
    )
  },
  {
    title: 'Precision Fitting',
    description: 'Custom adjustments for perfect comfort and optimal lens positioning.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M50 20v10M50 70v10M20 50h10M70 50h10"/>
        <circle cx="50" cy="50" r="3"/>
      </svg>
    )
  },
  {
    title: 'Lens Customization',
    description: 'Premium lenses tailored to your prescription and visual needs.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="35" cy="45" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="65" cy="45" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M15 40h10M55 40h-10M85 40h-10"/>
        <path d="M35 25v5M65 25v5"/>
        <circle cx="35" cy="45" r="8" opacity="0.3"/>
        <circle cx="65" cy="45" r="8" opacity="0.3"/>
      </svg>
    )
  },
  {
    title: 'Lifetime Care',
    description: 'Professional cleaning, adjustments, and repairs to keep your frames perfect.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20 20L30 30M70 20L60 30"/>
        <rect x="25" y="25" width="50" height="25" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="35" cy="37" r="7"/>
        <circle cx="65" cy="37" r="7"/>
        <path d="M47 37h6"/>
        <path d="M75 75L85 65M75 65L85 75" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  }
];

export default function BrandsPage() {
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              {/* Brands Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-gold/25 backdrop-blur-sm border border-brand-gold/50 text-brand-gold text-sm font-semibold mb-8 shadow-lg">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Luxury Eyewear Collection
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                Premium
                <span className="block text-brand-gold font-black">
                  Eyewear Brands
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
                Discover our curated collection of the world&apos;s most prestigious eyewear brands. From timeless classics to cutting-edge innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/contact" 
                  className="btn-luxury px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Styling Session
                </Link>
                
                <Link 
                  href="tel:+44790333277" 
                  className="px-10 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
                >
                  Call to Enquire
                </Link>
              </div>
            </div>
            
            {/* Brand Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">15+</div>
                <div className="text-white text-sm font-medium">Luxury Brands</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">50+</div>
                <div className="text-white text-sm font-medium">Collections</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">100%</div>
                <div className="text-white text-sm font-medium">Authentic</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-brand-gold mb-2">1:1</div>
                <div className="text-white text-sm font-medium">Personal Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Featured Brands
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Luxury
              <span className="block text-brand-gold font-extrabold">
                Showcase
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Our flagship collection features the most sought-after luxury eyewear brands in the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {premiumBrands.filter(brand => brand.featured).map((brand, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-brand-navy/20 transform hover:-translate-y-2">
                  {/* Brand Heritage Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-semibold mb-6">
                    {brand.heritage}
                  </div>
                  
                  {/* Brand Logo */}
                  <div className="flex justify-center mb-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                    {brand.logo}
                  </div>
                  
                  {/* Brand Content */}
                  <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{brand.description}</p>
                    
                    {/* Specialties */}
                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-brand-navy text-sm">Specialties:</h4>
                      <div className="space-y-2">
                        {brand.specialties.map((specialty, idx) => (
                          <div key={idx} className="flex items-center justify-center">
                            <svg className="w-4 h-4 mr-3 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-slate-600">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price Range */}
                    <div className="p-4 bg-slate-50 rounded-xl mb-6">
                      <div className="text-xs text-slate-500 font-medium mb-1">Price Range</div>
                      <div className="text-lg font-semibold text-brand-navy">{brand.priceRange}</div>
                    </div>
                    
                    {/* CTA */}
                    <Link 
                      href="/contact"
                      className="w-full btn-primary text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                    >
                      Book Private Viewing
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184,134,11,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Complete
              <span className="block text-brand-gold font-extrabold">
                Collection
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our full range of luxury and premium eyewear brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {premiumBrands.map((brand, index) => (
              <div key={index} className="group">
                <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-brand-gold/40 transition-all duration-300 hover:bg-white/12">
                  <div className="flex items-start space-x-4">
                    <div className="text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {brand.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-gold transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed">{brand.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{brand.heritage}</span>
                        <span className="text-sm font-medium text-brand-gold">{brand.priceRange.split(' - ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Curated
              <span className="block text-brand-gold font-extrabold">
                Collections
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Discover our thoughtfully curated collections, each telling a unique story of style and craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-brand-navy/20 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="text-white">{collection.icon}</div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{collection.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-brand-navy text-sm">Featured Brands:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {collection.brands.map((brand, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-sm font-medium"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(27,54,93,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-6">
              Luxury Eyewear
              <span className="block text-brand-gold font-extrabold">
                Services
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Our comprehensive services ensure your luxury eyewear provides both perfect vision and impeccable style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32" style={{
        background: 'linear-gradient(135deg, #1B365D 0%, #2A4A73 50%, #1B365D 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Discover Your Perfect
            <span className="block text-brand-gold font-extrabold">
              Luxury Frames
            </span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a private styling consultation and explore our exclusive collection of luxury eyewear. 
            Find frames that elevate your style and enhance your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="btn-luxury px-12 py-5 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Private Consultation
            </Link>
            <Link 
              href="tel:+44790333277" 
              className="px-12 py-5 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full transition-all duration-300 shadow-lg"
            >
              Call +44 790-333-2774
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
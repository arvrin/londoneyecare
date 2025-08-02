import React from 'react';
import { Metadata } from 'next';

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
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
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
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
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
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
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
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
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
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
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
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
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
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
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
    brands: ['Lindberg', 'Maybach', 'Silhouette'],
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
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
    brands: ['Tom Ford', 'Gucci', 'Dita'],
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
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
    title: 'Frame Maintenance',
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
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero mb-6">
            Luxury Eyewear Brands
          </h1>
          <p className="text-lead max-w-3xl mx-auto">
            Discover our curated collection of the world's most prestigious eyewear brands. 
            From timeless classics to cutting-edge innovation, find frames that reflect your unique style and sophistication.
          </p>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">Featured Premium Brands</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Our flagship collection features the most sought-after luxury eyewear brands in the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {premiumBrands.filter(brand => brand.featured).map((brand, index) => (
              <div key={index} className="card-glass group">
                <div className="text-center">
                  <div className="flex justify-center mb-4 text-interactive-primary">
                    {brand.logo}
                  </div>
                  <h3 className="text-h3 mb-4 group-hover:text-interactive-hover transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-secondary mb-6">{brand.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Specialties:</h4>
                      <div className="space-y-2">
                        {brand.specialties.map((specialty, idx) => (
                          <div key={idx} className="flex items-center justify-center">
                            <span className="w-2 h-2 bg-interactive-primary rounded-full mr-3"></span>
                            <span className="text-sm text-secondary">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted mb-1">Price Range</p>
                      <p className="font-semibold text-interactive-primary">{brand.priceRange}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands Grid */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-6">Our Complete Collection</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Explore our full range of luxury and premium eyewear brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumBrands.map((brand, index) => (
              <div 
                key={index} 
                className="bg-background/60 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-background/80 transition-all duration-200 hover:shadow-soft group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-interactive-primary flex-shrink-0">{brand.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-interactive-hover transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-secondary mb-3">{brand.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">From</span>
                      <span className="font-medium text-interactive-primary">{brand.priceRange.split(' - ')[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">Curated Collections</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Discover our thoughtfully curated collections, each telling a unique story of style and craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="card group">
                <div className="text-center">
                  <div className="flex justify-center mb-6 text-interactive-primary">
                    {collection.icon}
                  </div>
                  <h3 className="text-h4 mb-4 group-hover:text-interactive-hover transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-secondary mb-6">{collection.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Featured Brands:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {collection.brands.map((brand, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">Luxury Eyewear Services</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Our comprehensive services ensure your luxury eyewear provides both perfect vision and impeccable style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white">
                  {service.icon}
                </div>
                <h3 className="text-h4 mb-3">{service.title}</h3>
                <p className="text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 mb-6">
                The Luxury Eyewear Experience
              </h2>
              <p className="text-body text-secondary mb-6">
                At London Eyecare Collective, selecting luxury eyewear is more than a transaction—it's a 
                personalized journey to find frames that perfectly express your individual style and meet your vision needs.
              </p>
              
              <div className="space-y-4">
                {[
                  'Private consultation in our exclusive styling suite',
                  'Access to limited and exclusive collections',
                  'Custom lens design and premium coatings',
                  'White-glove fitting and adjustment service',
                  'Lifetime frame maintenance and care',
                  'Complimentary Harley Lounge access'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-primary">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a href="/contact" className="btn-primary mr-4">
                  Book Styling Consultation
                </a>
                <a href="/about" className="btn-secondary">
                  Meet Our Team
                </a>
              </div>
            </div>
            
            <div className="card-glass p-8 text-center">
              <div className="flex justify-center mb-6 text-interactive-primary">
                <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M30 70L35 30h30L70 70"/>
                  <ellipse cx="50" cy="75" rx="20" ry="8"/>
                  <path d="M40 25L50 15L60 25"/>
                  <circle cx="45" cy="20" r="2"/>
                  <circle cx="55" cy="20" r="2"/>
                  <path d="M47 30h6v35h-6z" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="text-h4 mb-4">Exclusive Benefits</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-interactive-primary rounded-full"></span>
                  <span className="text-secondary">Complimentary frame adjustments for life</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-interactive-primary rounded-full"></span>
                  <span className="text-secondary">Priority access to new collections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-interactive-primary rounded-full"></span>
                  <span className="text-secondary">Exclusive member events and previews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-interactive-primary rounded-full"></span>
                  <span className="text-secondary">Concierge delivery and collection service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-luxury text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 mb-6">
            Discover Your Perfect Frames
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book a private styling consultation and explore our exclusive collection of luxury eyewear. 
            Find frames that elevate your style and enhance your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-luxury bg-white text-brand-navy-static hover:bg-gray-100"
            >
              Book Styling Session
            </a>
            <a 
              href="tel:+442071234567" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-brand-navy-static"
            >
              Call to Enquire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
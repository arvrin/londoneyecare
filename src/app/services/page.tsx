import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Eye Care Services | London Eyecare Collective',
  description: 'Comprehensive eye care services including comprehensive eye exams, contact lens fittings, myopia management, and specialized treatments in the heart of London.',
};

const services = [
  {
    title: 'Comprehensive Eye Examinations',
    description: 'State-of-the-art eye health assessments using the latest diagnostic technology.',
    features: [
      'OCT retinal imaging',
      'Visual field testing',
      'Intraocular pressure measurement',
      'Digital retinal photography',
      'Corneal topography'
    ],
    duration: '45-60 minutes',
    price: 'From £150',
    icon: '👁️'
  },
  {
    title: 'Contact Lens Services',
    description: 'Expert contact lens fittings and specialized lens solutions for all vision needs.',
    features: [
      'Initial consultation and fitting',
      'Specialty lens fitting (keratoconus, etc.)',
      'Orthokeratology (overnight vision correction)',
      'Multifocal contact lenses',
      'Follow-up care and monitoring'
    ],
    duration: '30-45 minutes',
    price: 'From £120',
    icon: '🔍'
  },
  {
    title: 'Myopia Management',
    description: 'Advanced treatments to slow the progression of short-sightedness in children and adults.',
    features: [
      'MiSight contact lenses',
      'Orthokeratology',
      'Atropine therapy',
      'Lifestyle counseling',
      'Progress monitoring'
    ],
    duration: '60 minutes',
    price: 'From £200',
    icon: '📊'
  },
  {
    title: 'Dry Eye Treatment',
    description: 'Comprehensive diagnosis and treatment of dry eye syndrome using advanced therapies.',
    features: [
      'Meibomian gland assessment',
      'IPL therapy',
      'LipiFlow treatment',
      'Punctal plugs',
      'Prescription eye drops'
    ],
    duration: '45 minutes',
    price: 'From £180',
    icon: '💧'
  },
  {
    title: 'Children\'s Eye Care',
    description: 'Specialized pediatric optometry services designed for young patients.',
    features: [
      'Child-friendly examinations',
      'Vision development assessment',
      'Learning-related vision problems',
      'Sports vision training',
      'Protective eyewear consultation'
    ],
    duration: '30-45 minutes',
    price: 'From £100',
    icon: '👶'
  },
  {
    title: 'Binocular Vision Assessment',
    description: 'Detailed evaluation of how your eyes work together for optimal visual comfort.',
    features: [
      'Convergence testing',
      'Accommodation assessment',
      'Eye movement evaluation',
      'Vision therapy recommendations',
      'Computer vision syndrome management'
    ],
    duration: '60 minutes',
    price: 'From £160',
    icon: '⚖️'
  }
];

const additionalServices = [
  'Emergency eye care',
  'Pre- and post-operative care',
  'Diabetic eye screening',
  'Glaucoma monitoring',
  'Macular degeneration management',
  'Visual field defect assessment'
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero mb-6">
            Premium Eye Care Services
          </h1>
          <p className="text-lead max-w-3xl mx-auto">
            Experience comprehensive eye care with cutting-edge technology and personalized attention. 
            Our expert optometrists provide world-class services in the heart of London.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-glass group">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-3 group-hover:text-interactive-hover transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body text-secondary mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Includes:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-secondary">
                              <span className="w-1.5 h-1.5 bg-interactive-primary rounded-full mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="space-y-1">
                          <p className="text-sm text-muted">Duration</p>
                          <p className="font-medium text-primary">{service.duration}</p>
                        </div>
                        <div className="space-y-1 text-right">
                          <p className="text-sm text-muted">Price</p>
                          <p className="font-semibold text-interactive-primary">{service.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Additional Specialized Services</h2>
            <p className="text-lead max-w-2xl mx-auto">
              We also provide specialized care for complex eye conditions and emergencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-background/60 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-background/80 transition-all duration-200 hover:shadow-soft"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-interactive-primary rounded-full"></div>
                  <span className="text-primary font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 mb-6">
                State-of-the-Art Technology
              </h2>
              <p className="text-body text-secondary mb-6">
                Our clinic features the latest diagnostic equipment and treatment technologies, 
                ensuring accurate diagnoses and effective treatments for all our patients.
              </p>
              
              <div className="space-y-4">
                {[
                  'Zeiss OCT for detailed retinal imaging',
                  'Corneal topography for precise measurements',
                  'Digital retinal cameras with AI analysis',
                  'Advanced visual field analyzers',
                  'IPL therapy for dry eye treatment'
                ].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-primary">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card-glass p-8 text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-h4 mb-4">Advanced Diagnostics</h3>
              <p className="text-secondary">
                Our comprehensive diagnostic suite allows us to detect eye conditions 
                in their earliest stages, ensuring the best possible outcomes for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-luxury text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 mb-6">
            Ready to Experience Premium Eye Care?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book your comprehensive eye examination today and discover the difference 
            that expert care and advanced technology can make for your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-luxury bg-white text-brand-navy-static hover:bg-gray-100"
            >
              Book Appointment
            </a>
            <a 
              href="tel:+442071234567" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-brand-navy-static"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
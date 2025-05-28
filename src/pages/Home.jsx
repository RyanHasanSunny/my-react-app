import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ];

  const services = [
    {
      title: 'Branding',
      description: 'We create memorable brand identities that resonate with your audience and stand the test of time.',
      details: [
        'Logo design',
        'Brand guidelines',
        'Visual identity',
        'Brand strategy'
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Graphic Design',
      description: 'Stunning visuals that communicate your message effectively across all platforms.',
      details: [
        'Print design',
        'Digital graphics',
        'Marketing materials',
        'Packaging design'
      ],
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites that drive results and provide seamless user experiences.',
      details: [
        'Custom websites',
        'E-commerce solutions',
        'Web applications',
        'CMS development'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="smooth-scroll">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-12 lg:py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          {/* Mobile: Image first */}
          <div className="lg:hidden mb-8 relative">
            <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-2xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Creative work ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg font-bold text-sm">
              Featured Work
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-left">
                Creative Solutions for Your Business
              </h1>
              <p className="text-lg md:text-xl mb-8 text-left">
                We're a full-service creative agency specializing in branding, graphic design, and web development. 
                Our team delivers innovative solutions tailored to your unique business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link 
                  to="/services" 
                  className="bg-white text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center text-sm md:text-base"
                >
                  Explore All Services
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-800 transition text-center text-sm md:text-base"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden lg:block lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Creative work ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold">
                Featured Work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive creative solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="mb-5 space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/services" 
                    className="text-green-600 font-medium hover:text-green-800 transition inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-800 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From branding to web development, we've got all your creative needs covered.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
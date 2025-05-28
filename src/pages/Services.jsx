import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'web-development',
      title: "Web Development",
      icon: "💻",
      description: "Complete digital solutions from websites to web applications",
      overview: "We create responsive, user-friendly websites that drive results. Our development process focuses on performance, accessibility, and scalability.",
      subServices: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Web Applications",
        "CMS Development"
      ],
      packages: [
        {
          name: "Basic",
          price: "$999",
          features: ["5 Page Website", "Responsive Design", "Basic SEO"]
        },
        {
          name: "Professional",
          price: "$2,499",
          features: ["10 Page Website", "E-commerce", "Advanced SEO"]
        }
      ],
      testimonials: [
        {
          quote: "Their web development team transformed our online presence completely.",
          author: "Sarah Johnson, TechStart Inc."
        }
      ]
    },
    {
      id: 'graphic-design',
      title: "Graphic Design",
      icon: "🎨",
      description: "Visual communication that makes your brand stand out",
      overview: "From logos to complete brand identities, we create visuals that communicate your brand's essence effectively.",
      subServices: [
        "Branding & Identity",
        "Social Media Graphics",
        "Print Design",
        "Packaging Design"
      ],
      packages: [
        {
          name: "Starter",
          price: "$499",
          features: ["Logo Design", "Brand Colors", "Basic Guidelines"]
        }
      ],
      testimonials: [
        {
          quote: "The branding they created perfectly captured our company's vision.",
          author: "Michael Chen, UrbanFashion"
        }
      ]
    },
    {
      id: '3d-modeling',
      title: "3D Modeling",
      icon: "🖌️",
      description: "Bringing your ideas to life with stunning 3D visuals",
      overview: "High-quality 3D renders and animations for products, architecture, and more.",
      subServices: [
        "Product Visualization",
        "Architectural Rendering",
        "Character Modeling",
        "Animation"
      ],
      packages: [
        {
          name: "Basic Render",
          price: "$299",
          features: ["Single Angle", "Basic Materials", "1 Revision"]
        }
      ],
      testimonials: [
        {
          quote: "Our product renders helped increase pre-orders by 35%.",
          author: "Emily Rodriguez, GreenLife"
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Includes:</h3>
                  <ul className="space-y-2">
                    {service.subServices.map((item, i) => (
                      <li key={i} className="text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-600 text-white px-6 py-2 rounded-md font-medium inline-block">
                  Explore {service.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
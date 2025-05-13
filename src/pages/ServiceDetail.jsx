import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = services.find(s => s.id === serviceId);

    if (!service) {
        return (
            <div className="py-16 text-center">
                <h1 className="text-3xl font-bold">Service not found</h1>
                <Link to="/services" className="text-blue-600 mt-4 inline-block">
                    Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="py-16 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Link to="/services" className="text-blue-600 hover:text-blue-800 inline-flex items-center mb-4">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Services
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{service.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        {service.description}
                    </p>

                    {/* Service Image Banner */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto h-64 md:h-80 lg:h-96 mb-12">
                        <img
                            src={service.image || 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <div className="text-white text-left">
                                <h3 className="text-xl font-bold mb-2">Professional {service.title} Services</h3>
                                <p className="text-sm opacity-90">Tailored solutions for your business needs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Overview</h2>
                        <p className="text-gray-600 mb-6">
                            {service.overview}
                        </p>

                        {/* Example Work Gallery */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our {service.title} Work</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {service.workExamples.map((img, index) => (
                                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                                        <img
                                            src={img}
                                            alt={`${service.title} example ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-700 mb-3">What's Included:</h3>
                            <ul className="space-y-3">
                                {service.subServices.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Packages</h2>
                            <div className="space-y-6">
                                {service.packages.map((pkg, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition hover:shadow-md">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                                            <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                                        </div>
                                        <ul className="space-y-2 mb-6">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className="block w-full bg-blue-600 text-white text-center py-2 rounded-md font-medium hover:bg-blue-700 transition"
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process Timeline */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Our {service.title} Process</h3>
                            <div className="space-y-4">
                                {['Consultation', 'Planning', 'Execution', 'Delivery'].map((step, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800">{step}</h4>
                                            <p className="text-sm text-gray-600">Detailed description of {step.toLowerCase()} phase</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Client Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <h4 className="font-medium text-gray-800">{testimonial.author.split(',')[0]}</h4>
                                </div>
                                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
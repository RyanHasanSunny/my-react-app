


const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Learn more about our company, mission, and the team behind our success.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, BrandName started as a small team of passionate individuals with a vision to revolutionize the industry. 
              What began as a modest startup in a garage has now grown into a leading company serving customers worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey hasn't been without challenges, but through innovation, dedication, and customer focus, we've consistently 
              delivered exceptional value to our clients.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have a diverse team of experts working together to push boundaries and create solutions that make 
              a real difference in people's lives and businesses.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our Team" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Customer First</h3>
              <p className="text-gray-700">
                We prioritize our customers' needs above all else, ensuring their success is at the heart of everything we do.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-600 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We constantly push boundaries and explore new ideas to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-3">Integrity</h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and respect for all stakeholders.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', role: 'CEO & Founder', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Jane Smith', role: 'CTO', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'Robert Johnson', role: 'Head of Product', image: 'https://randomuser.me/api/portraits/men/22.jpg' },
              { name: 'Emily Davis', role: 'Marketing Director', image: 'https://randomuser.me/api/portraits/women/63.jpg' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                 <a href="#" className="text-gray-500 hover:text-blue-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
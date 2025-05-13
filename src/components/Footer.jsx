import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BrandName</h3>
            <p className="mb-4">Providing innovative solutions since 2020.</p>
            <address className="not-italic">
              123 Business Ave<br />
              Suite 400<br />
              San Francisco, CA 94107
            </address>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/features" className="hover:text-blue-400 transition">Features</a></li>
              <li><a href="/support" className="hover:text-blue-400 transition">Support</a></li>
              <li><a href="/reviews" className="hover:text-blue-400 transition">Reviews</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Features List */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Features</h3>
            <ul className="space-y-2">
              <li>24/7 Support</li>
              <li>Secure Platform</li>
              <li>Easy Integration</li>
              <li>Custom Solutions</li>
              <li>Scalable Infrastructure</li>
              <li>User Friendly</li>
            </ul>
          </div>
          
          {/* Social & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <SocialIcons />
            <div className="mt-4">
              <p>Email: info@brandname.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        
        {/* Credits */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} BrandName. All rights reserved.</p>
          <p className="mt-2">Designed and developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
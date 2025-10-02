import React from 'react';
import { Building2, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Students', href: '/students' },
    { label: 'Staff', href: '/staff' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Support', href: '/support' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Stay Leap</h2>
                <p className="text-sm text-blue-400">Smart Hostel Management Made Easy</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Efficient hostel management system for students, staff, and administrators. 
              Simplify billing, tracking, and communication all in one platform.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">+91 73581 05293</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">vyomanexgen@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Madhapur, Hyderabad,<br />Telangana 500032</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025 Stay Leap. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> for efficient hostel management.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

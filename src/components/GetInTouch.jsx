import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, DollarSign, Users, Bell, Zap, Send } from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    hostelDetails: '',
    message: ''
  });

  const whatsappNumber = '917358105293';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in Stay Leap hostel management system")}`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.category || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Build the message text - Simple format without special characters
    const lines = [
      'New Inquiry from Stay Leap Website',
      '',
      'Name: ' + formData.fullName,
      'Email: ' + formData.email,
      'Phone: ' + formData.phone,
      'Category: ' + formData.category
    ];
    
    if (formData.hostelDetails) {
      lines.push('Hostel Details: ' + formData.hostelDetails);
    }
    
    lines.push('');
    lines.push('Message:');
    lines.push(formData.message);
    
    const messageText = lines.join('\n');
    
    // Detect if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl;
    
    if (isMobile) {
      // For mobile: use whatsapp:// protocol which opens app directly with message
      whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`;
    } else {
      // For desktop: use wa.me link which opens WhatsApp Web
      whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    }
    
    console.log('Is Mobile:', isMobile);
    console.log('WhatsApp URL:', whatsappUrl);
    console.log('Message Text:', messageText);
    
    // Try to open WhatsApp
    window.location.href = whatsappUrl;
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        category: '',
        hostelDetails: '',
        message: ''
      });
    }, 2000);
  };

  const features = [
    { icon: DollarSign, text: 'Seamless Billing' },
    { icon: Users, text: 'Student & Staff Tracking' },
    { icon: Bell, text: 'Smart Notifications' },
    { icon: Zap, text: 'Efficient Hostel Management' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to manage your hostel efficiently? Fill out the form below or contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us an Inquiry</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Select a category</option>
                  <option value="Partners">Partners</option>
                  <option value="Supporters">Supporters</option>
                  <option value="Contributors">Contributors</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hostel/Room Details <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="hostelDetails"
                  value={formData.hostelDetails}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="Number of rooms, location, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message / Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Query via WhatsApp
              </button>
            </div>
          </div>

          {/* Right Column - Contact Info & Features */}
          <div className="space-y-8">
            {/* WhatsApp Button */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <p className="mb-6 text-green-50">
                Get instant responses! Chat with us on WhatsApp now.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-all hover:scale-105 font-semibold shadow-lg w-full justify-center"
              >
                <MessageCircle className="h-6 w-6" />
                Start WhatsApp Chat
              </a>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 73581 05293</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">vyomanexgen@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      Madhapur, Hyderabad, 500032.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Stay Leap?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
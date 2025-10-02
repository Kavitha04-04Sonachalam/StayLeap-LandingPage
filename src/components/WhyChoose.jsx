import React from 'react';
import { Brain, DollarSign, Users } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Brain,
      title: 'We Use AI',
      description: 'Advanced artificial intelligence powers our platform to provide smart insights and automation.',
    },
    {
      icon: DollarSign,
      title: 'Expense Management',
      description: 'Track and manage all hostel expenses with detailed reports and financial analytics.',
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Efficiently manage staff schedules, roles, and performance from one dashboard.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Stay Leap?</h2>
          <p className="text-xl text-gray-600">
            Built with cutting-edge technology for modern hostel management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

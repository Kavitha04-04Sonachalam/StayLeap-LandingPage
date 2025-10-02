import React from 'react';
import { FileText, MessageCircle, Send } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: 'Invoice Management',
      description: 'Generate, track, and manage invoices automatically with smart reminders and payment tracking.',
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot',
      description: 'Get instant answers and support 24/7 with our intelligent chatbot assistant.',
    },
    {
      icon: Send,
      title: 'Automatic WhatsApp Reminders',
      description: 'Send automated payment reminders and notifications directly via WhatsApp.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
          <p className="text-xl text-gray-600">
            Everything you need to manage your hostel efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105 border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

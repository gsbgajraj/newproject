// src/Services/Services.js
import React from 'react';

function Services() {
  const services = [
    {
      title: 'Front End Development',
      description: 'We build responsive and functional websites.',
      icon: '🌐',
    },
    {
      title: 'Graphic Design',
      description: 'Our design team creates stunning graphics.',
      icon: '🎨',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site ranking with our SEO services.',
      icon: '📈',
    },
    {
      title: 'Digital Marketing',
      description: 'We help you reach a larger audience online.',
      icon: '💻',
    },
    {
      title: 'Back End Development',
      description: 'We build responsive and functional websites.',
      icon: '🌐',
    },
    {
      title: 'Brand Design',
      description: 'Our design team creates stunning graphics.',
      icon: '🎨',
    },
    {
      title: 'Business consultancy',
      description: 'Improve your site ranking with our SEO services.',
      icon: '📈',
    },
    {
      title: 'Influencer Marketing',
      description: 'We help you reach a larger audience online.',
      icon: '💻',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

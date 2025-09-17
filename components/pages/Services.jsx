'use client'
import React from 'react'

const services = [
  {
    icon: (
      // Simple code icon (chevrons)
      <svg width="36" height="36" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 36 36">
        <polyline points="14 10 8 18 14 26" />
        <polyline points="22 10 28 18 22 26" />
      </svg>
    ),
    title: 'Website Development',
    description:
      'Custom responsive websites built with modern technologies. From landing pages to complex multi-page sites, we create fast, SEO-optimized websites that convert visitors into customers.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading',
      'Modern UI/UX',
    ],
  },
  {
    icon: (
      // Simple cart icon
      <svg width="36" height="36" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 36 36">
        <circle cx="13" cy="30" r="2" />
        <circle cx="27" cy="30" r="2" />
        <path d="M5 6h2l3.6 16.59A2 2 0 0 0 12.5 24h11a2 2 0 0 0 1.9-1.41L29 10H8" />
      </svg>
    ),
    title: 'E-commerce Solutions',
    description:
      'Complete online store development with secure payment processing, inventory management, and customer analytics. Perfect for businesses ready to sell online.',
    features: [
      'Payment Integration',
      'Inventory Management',
      'Order Tracking',
      'Analytics Dashboard',
    ],
  },
  {
    icon: (
      // Simple stack/layers icon
      <svg width="36" height="36" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 36 36">
        <polygon points="18 6 32 13 18 20 4 13 18 6" />
        <polyline points="4 19 18 26 32 19" />
        <polyline points="4 25 18 32 32 25" />
      </svg>
    ),
    title: 'Web Applications',
    description:
      'Custom web applications and dashboards tailored to your business needs. From CRM systems to data visualization tools, we build scalable solutions.',
    features: [
      'Custom Functionality',
      'Database Integration',
      'User Management',
      'Real-time Updates',
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-base h-screen py-16 px-4 font-sans">
                {/* Header */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-4 sm:space-y-0'>
                    <div className='w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-start sm:items-end'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background 2xl:text-8xl font-semibold font-inter' style={{lineHeight: "0.9em"}}>services</h1>
                        <p className='font-extrabold text-sm sm:text- md:text-lg lg:text-xl'>WE OFFER</p>
                    </div>

                </div>
        
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start bg-background rounded-[4vh] shadow-[0_4px_24px_0_rgba(30,34,40,0.07)] p-10 transition-shadow hover:shadow-[0_8px_32px_0_rgba(30,34,40,0.12)]"
          >
            <div className="mb-6 self-center">{service.icon}</div>
            <h3 className="text-[#111] font-bold text-2xl mb-3 w-full text-center">{service.title}</h3>
            <p className="text-[#555] text-base font-normal mb-6 leading-relaxed w-full text-center">{service.description}</p>
            <div className="mb-8 w-full">
              <span className="block text-[#111] font-semibold text-xl mb-2">Key Features:</span>
              <ul className="pl-5 m-0 list-disc">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-[#222] text-base text-lg mb-1">{feature}</li>
                ))}
              </ul>
            </div>
            <button className="mt-auto w-full bg-black text-white rounded-lg py-3 text-base font-medium transition-colors duration-150 hover:bg-[#222]">
              Get Your Quotation
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
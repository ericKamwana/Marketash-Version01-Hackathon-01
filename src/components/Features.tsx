import React from 'react';
import { BarChart, Zap, Globe, Users } from 'lucide-react';

const features = [
  {
    name: 'Advanced Analytics',
    description:
      'Get detailed insights into your marketing performance with our advanced analytics dashboard.',
    icon: BarChart,
  },
  {
    name: 'Lightning Fast',
    description:
      'Our platform is optimized for speed, ensuring your campaigns are always running at peak performance.',
    icon: Zap,
  },
  {
    name: 'Global Reach',
    description:
      'Reach customers anywhere in the world with our global marketing network and localization tools.',
    icon: Globe,
  },
  {
    name: 'Team Collaboration',
    description:
      'Work seamlessly with your team with our collaborative tools and real-time updates.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to market your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Marketash provides all the tools you need to grow your business and reach new customers.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
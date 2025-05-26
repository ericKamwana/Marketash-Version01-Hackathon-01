import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small businesses just getting started with digital marketing.',
    features: [
      'Basic analytics dashboard',
      'Up to 5 marketing campaigns',
      'Email marketing tools',
      'Social media integration',
      '24/7 email support',
    ],
    cta: 'Start your free trial',
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses with established marketing needs.',
    features: [
      'Advanced analytics and reporting',
      'Unlimited marketing campaigns',
      'Email and SMS marketing',
      'Social media management',
      'A/B testing tools',
      'Priority support',
    ],
    cta: 'Start your free trial',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations with complex marketing requirements.',
    features: [
      'Custom analytics solutions',
      'Dedicated account manager',
      'Advanced automation workflows',
      'API access',
      'White-label options',
      'Custom integrations',
      '24/7 phone and email support',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${
                tier.mostPopular
                  ? 'border-indigo-500 border-2'
                  : 'border-gray-200'
              } rounded-lg shadow-sm divide-y divide-gray-200 bg-white`}
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                {tier.mostPopular && (
                  <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 px-4 py-1 text-sm font-semibold text-white">
                    Most popular
                  </p>
                )}
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a
                  href="#"
                  className={`${
                    tier.mostPopular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                  } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
                >
                  {tier.cta}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
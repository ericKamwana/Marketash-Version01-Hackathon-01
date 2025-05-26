import React from 'react';

const testimonials = [
  {
    content:
      'Marketash has completely transformed our marketing strategy. We\'ve seen a 200% increase in conversion rates since implementing their platform.',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp Inc.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    content:
      'The analytics tools are incredible. We can now make data-driven decisions that have measurably improved our ROI.',
    author: 'Michael Chen',
    role: 'CEO',
    company: 'GrowthLabs',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    content:
      'The customer support team is exceptional. They've helped us optimize our campaigns and achieve results we never thought possible.',
    author: 'Emily Rodriguez',
    role: 'Digital Marketing Manager',
    company: 'Retail Giants',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Trusted by marketers worldwide
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Hear from our satisfied customers about how Marketash has transformed their marketing efforts.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">Testimonial</p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">"{testimonial.content}"</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={testimonial.image} alt={testimonial.author} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <p>{testimonial.role}</p>
                        <span aria-hidden="true">&middot;</span>
                        <p>{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
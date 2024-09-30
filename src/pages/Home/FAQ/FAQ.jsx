import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of car toys do you offer?',
      answer:
        'We offer a wide variety of car toys, including sports cars, trucks, off-road vehicles, and vintage cars. Each toy is carefully designed for maximum fun and creativity.',
    },
    {
      question: 'Are the car toys safe for young children?',
      answer:
        'Yes! All our toys meet the highest safety standards and are made from non-toxic materials. We ensure that they are durable and safe for children of all ages.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Absolutely! We offer worldwide shipping to ensure every car toy lover, regardless of location, can enjoy our products.',
    },
    {
      question: 'Can I return or exchange a toy?',
      answer:
        'Yes, we offer hassle-free returns and exchanges within 30 days of purchase. Just make sure the toy is in its original condition and packaging.',
    },
  ];

  return (
    <div className=' mt-20 mb-20 py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='lg:text-3xl text-2xl uppercase font-bold text-center text-violet-500 mb-12'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-6 w-11/12 mx-auto lg:w-full'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out'
              onClick={() => toggleFAQ(index)}
            >
              <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold text-violet-700'>
                  {faq.question}
                </h3>
                <span className='text-violet-700'>
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <p className='mt-4 text-gray-700'>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

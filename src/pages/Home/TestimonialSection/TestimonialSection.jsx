const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Thompson',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'The car toys collection here is beyond amazing! My kids absolutely love them. The quality is top-notch, and the variety ensures there is something for everyone!',
    },
    {
      id: 2,
      name: 'James Carter',
      role: 'Toy Enthusiast',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'These toys brought back my childhood memories. The details in the toys are incredible. I highly recommend KiddToY for anyone who loves collecting car toys!',
    },
    {
      id: 3,
      name: 'Olivia Rivera',
      role: 'Mother of Two',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'The best place to buy car toys for my children. The service was excellent, and the toys arrived right on time. I will definitely be shopping here again.',
    },
  ];

  return (
    <div className=' py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='lg:text-3xl text-2xl uppercase font-bold text-center text-violet-500 mb-12'>
          What Our Customers Say
        </h2>
        <div className='w-11/12 mx-auto lg:w-full grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-gray-100 rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-300'
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-20 h-20 rounded-full mx-auto mb-4 border-4 border-violet-500'
              />
              <h3 className='text-xl font-semibold text-violet-700'>
                {testimonial.name}
              </h3>
              <p className='text-sm text-gray-500'>{testimonial.role}</p>
              <p className='mt-4 text-gray-700'>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

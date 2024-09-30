import { Link } from 'react-router-dom';

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

const AboutUs = () => {
  return (
    <section className='relative'>
      {/* Welcome Section */}
      <div
        className='relative lg:h-[34rem] text-white py-20 lg:px-16 text-center bg-cover bg-center'
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('https://i.ibb.co.com/99YGpKM/car-Collection.jpg')",
        }}
      >
        <div className='lg:max-w-5xl mx-auto lg:mt-14 p-10 rounded-lg'>
          <h1 className='text-2xl lg:text-5xl uppercase font-bold lg:leading-tight text-violet-400'>
            Welcome to Kids’ Toy Paradise
          </h1>
          <p className='text-xl lg:text-2xl mt-6 max-w-3xl mx-auto'>
            Where Fun Meets Learning! Discover an amazing world of toys designed
            to spark creativity and joy in every child.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className='py-40'>
        <div className='flex flex-col lg:flex-row-reverse justify-around w-9/12 mx-auto gap-20 items-center'>
          <div className='lg:w-5/6 mx-auto '>
            <h2 className='text-2xl lg:text-3xl font-bold text-violet-500 uppercase'>
              Our Story
            </h2>
            <p className='mt-10 tracking-wider text-lg lg:text-xl'>
              Kids’ Toy Paradise began with a passion for creating safe, fun,
              and educational toys that inspire creativity and Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Rerum odio,
              necessitatibus quia eum molestias velit quas mollitia nisi
              reiciendis est?
            </p>
          </div>
          <div className='lg:w-3/6 shadow-xl'>
            <img
              src='https://i.ibb.co.com/h7BVHxX/carstory.jpg'
              alt='Our Story Image'
              className='shadow-lg'
            />
          </div>
        </div>
      </div>

      {/* Our Toy Specialties Section */}
      <div className='relative bg-violet-50 text-white py-20 px-6 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='lg:text-3xl text-2xl font-bold mb-16 text-center text-violet-500 uppercase'>
            Our Toy Specialties
          </h2>
          <div className='grid w-11/12 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {/* Sports Car Card */}
            <div className='p-8 bg-white rounded-lg shadow-lg transform hover:scale-105  transition-transform'>
              <h3 className='text-2xl text-center uppercase text-violet-500 font-bold mb-4'>
                Sports Car
              </h3>
              <p className='text-lg text-black mb-4'>
                Experience the thrill of speed with our sports car collection!
              </p>
              <ul className='list-disc list-inside text-lg text-black'>
                <li> High-speed performance</li>
                <li> Sleek, aerodynamic design</li>
                <li> LED lights for a realistic touch</li>
              </ul>
            </div>

            {/* Police Car Card */}
            <div className='p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform'>
              <h3 className='text-2xl text-center uppercase text-violet-500 font-bold mb-4'>
                Police Car
              </h3>
              <p className='text-lg text-black mb-4'>
                Join the chase with our authentic police car toys!
              </p>
              <ul className='list-disc list-inside text-lg text-black'>
                <li> Realistic sirens and lights</li>
                <li> Durable build for rugged play</li>
                <li> Includes police accessories </li>
              </ul>
            </div>

            {/* Regular Car Card */}
            <div className='p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform'>
              <h3 className='text-2xl text-center uppercase text-violet-500 font-bold mb-4'>
                Regular Car
              </h3>
              <p className='text-lg text-black mb-4'>
                Perfect for everyday adventures and creative play!
              </p>
              <ul className='list-disc list-inside text-lg text-black'>
                <li> Variety of color options</li>
                <li> Perfect for kids of all ages</li>
                <li> Compatible with most playsets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className=' py-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl font-bold uppercase text-center text-violet-500 mb-12'>
            What Our Customers Say
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='bg-gray-100 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300'
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

      {/* Call to Action */}
      <div className='font-mont  mx-auto py-28 text-center bg-violet-50'>
        <h2 className='text-2xl lg:text-3xl text-violet-500 font-bold uppercase mb-8'>
          Ready to Explore Our Toys?
        </h2>
        <Link to='/alltoys'>
          <button className='btn px-10 text-white bg-violet-500 hover:bg-violet-600'>
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;

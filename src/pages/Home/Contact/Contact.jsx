import { FaClock, FaMapMarkedAlt, FaMobile } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-around bg-violet-500 text-white mt-20 mb-10 py-14 rounded-md"
      data-aos="flip-up"
    >
      <div className="flex items-center gap-5 mb-9 md:mb-0">
        <p className="text-4xl bg-violet-700 p-3 rounded-lg">
          <FaClock></FaClock>
        </p>
        <div>
          <p>We are open Saturday-Friday</p>
          <h3 className="text-2xl font-bold">10:00 am - 11:30 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-5 mb-9 md:mb-0">
        <p className="text-4xl bg-violet-700 p-3 rounded-lg">
          <FaMobile></FaMobile>
        </p>
        <div>
          <p>Wanna know more?</p>
          <h3 className="text-2xl font-bold">+880 454 345 2345</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-4xl bg-violet-700 p-3 rounded-lg">
          <FaMapMarkedAlt></FaMapMarkedAlt>
        </p>
        <div>
          <p>Visit Our Shop, Address: </p>
          <h3 className="text-2xl font-bold">Uttara, Dhaka-1230</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;

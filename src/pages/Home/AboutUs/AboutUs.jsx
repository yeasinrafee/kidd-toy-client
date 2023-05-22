import useTitle from "../../../hooks/useTitle";

const AboutUs = () => {
  useTitle("About Us");
  return (
    <div className="my-28 bg-violet-50 rounded-md">
      <h2 className="text-3xl text-center text-violet-500 font-bold pt-20 mb-5 md:mb-0">
        About Us
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center px-5 md:gap-16 md:p-20">
        <div className="w-full md:w-1/2">
          {" "}
          <img
            src="./images/about.jpg"
            className=" rounded-lg shadow-2xl opacity-80"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl mt-5 md:text-5xl font-bold text-violet-900">
            Learn About KiddToY
          </h1>
          <p className="py-6 text-gray-400">
            Our toy cars are made from high-quality materials and are designed
            to withstand even the roughest play. They are also safe for children
            of all ages, so you can rest assured knowing that your kids are
            playing with the best.
          </p>
          <button className="btn btn-primary bg-violet-500 border-none mb-9">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

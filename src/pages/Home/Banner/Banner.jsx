const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("./images/banner2.webp")`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-10 text-5xl font-bold">
            Welcome to <span className="text-violet-500">KiddToY</span> <br />
            The <span className="text-violet-500">Best Car</span> Toys for Kids
          </h1>
          <p className="mb-5 text-gray-300 max-w-xl text-left">
            Looking for the best car toys for kids? Look no further! Our wide
            selection of toy cars and trucks is sure to have something for every
            child. From classic toy cars to modern remote control vehicles, we
            have everything you need to keep your kids entertained for hours on
            end.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

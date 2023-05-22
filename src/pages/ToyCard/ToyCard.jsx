import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { picture, toy_name, price, ratings } = toy || {};
  return (
    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="toy" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-violet-500 text-center">
          {toy_name}
        </h2>
        <p>Price: ${price}</p>
        <p>Ratings: {ratings} stars</p>
        <div className="card-actions justify-end">
          <Link to={`/toys/${toy?._id}`}>
            <button className="btn btn-primary bg-violet-500 border-none">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

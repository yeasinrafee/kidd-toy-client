import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

// Rating Stars
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const SingleToy = () => {
  useTitle("KiddToY | Toy Details");
  const toy = useLoaderData();
  const {
    picture,
    toy_name,
    price,
    ratings,
    seller_name,
    quantity,
    seller_email,
    details,
  } = toy;
  return (
    <div className="my-20 md:my-28 bg-violet-50 rounded-md">
      <h2 className="text-3xl text-center text-violet-500 font-bold pt-10 md:pt-20 mb-5 md:mb-0">
        Toy Details
      </h2>

      <div className="flex flex-col md:flex-row justify-around items-center px-5 md:gap-16 md:p-20">
        <div className="w-full md:w-1/2">
          {" "}
          <img
            src={picture}
            className=" rounded-lg shadow-2xl opacity-80"
            data-aos="flip-left"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl mt-5 md:text-4xl font-bold text-violet-900">
            {toy_name}
          </h1>
          <div className="mt-5">
            <p className="mb-2">
              <span className="font-bold">Seller Name: </span>
              {seller_name}
            </p>
            <p className="mb-2">
              <span className="font-bold">Seller Email:</span> {seller_email}
            </p>
            <p>
              <span className="font-bold">Quantity:</span> {quantity}
            </p>
          </div>
          <p className="py-6 text-gray-400">
            <span className="font-bold text-black">Details: </span> {details}
          </p>

          <div className="flex items-center gap-9 pb-9">
            <div className="flex items-center gap-3">
              <span className="font-bold">Ratings:</span>
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(ratings)}
                readOnly
              />
            </div>
            <p>
              <span>
                <span className="font-bold">Price: </span>${price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;

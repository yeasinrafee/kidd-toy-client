import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
  useTitle("KiddToY | Add Toy");
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const picture = form.photo.value;
    const toy_name = form.name.value;
    const price = parseFloat(form.price.value);
    const ratings = form.ratings.value;
    const seller_name = form.seller_name.value;
    const sub_category = form.category.value;
    const quantity = form.quantity.value;
    const seller_email = form.seller_email.value;
    const details = form.description.value;

    const toy = {
      picture,
      toy_name,
      price,
      ratings,
      seller_name,
      sub_category,
      quantity,
      seller_email,
      details,
    };

    fetch("https://assignment11-xi.vercel.app/alltoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Toy Added!",
            "Your Toy is added to the collection!",
            "success"
          );
          form.reset();
        }
      });
  };

  return (
    <div className="w-4/5 mx-auto border px-5 md:px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center my-6 text-violet-500">
        Add Your Toy
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              placeholder="Picture URL"
              className="input input-bordered"
              name="photo"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              placeholder="Seller Name"
              className="input input-bordered"
              name="seller_name"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              placeholder="Seller Email"
              className="input input-bordered"
              name="seller_email"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <input
              type="text"
              placeholder="Sub Category"
              className="input input-bordered"
              name="category"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered"
              name="price"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="text"
              placeholder="Ratings"
              className="input input-bordered"
              name="ratings"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered"
              name="quantity"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details Description</span>
          </label>
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered"
            name="description"
          />
        </div>
        <input
          type="submit"
          value="Add Toy"
          className="btn btn-block bg-violet-500 border-none mt-3 hover:bg-violet-800"
        />
      </form>
    </div>
  );
};

export default AddAToy;

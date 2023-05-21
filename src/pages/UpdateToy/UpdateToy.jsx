import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.description.value;

    const updatedToy = {
      price,
      quantity,
      details,
    };

    fetch(`http://localhost:5000/alltoy/${toy?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Toy Updated!",
            "Your Toy is Updated Successfully!",
            "success"
          );
          form.reset();
        }
      });
  };

  return (
    <div className="w-4/5 mx-auto border px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center my-6 text-violet-500">
        Update Your Toy
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            defaultValue={toy?.price}
            className="input input-bordered"
            name="price"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="text"
            defaultValue={toy?.quantity}
            className="input input-bordered"
            name="quantity"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details Description</span>
          </label>
          <input
            type="text"
            defaultValue={toy?.details}
            className="input input-bordered"
            name="description"
          />
        </div>
        <input
          type="submit"
          value="Update Toy"
          className="btn btn-block bg-violet-500 border-none mt-3 hover:bg-violet-800"
        />
      </form>
    </div>
  );
};

export default UpdateToy;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("KiddToY | My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id == id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto px-5 md:px-10 py-20">
      <h2 className="text-3xl text-violet-500 mt-5 mb-9">My Toys List: </h2>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available</th>
            <th>Edit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myToys &&
            myToys.map((toys, index) => (
              <tr key={toys?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div>{toys?.seller_name}</div>
                    </div>
                  </div>
                </td>
                <td className=" font-bold">{toys?.toy_name}</td>
                <td>{toys?.sub_category}</td>
                <td>$ {toys?.price}</td>
                <td>{toys?.quantity}</td>
                <td>
                  <Link to={`/updateToy/${toys?._id}`}>
                    <button className="btn bg-violet-500 btn-xs border-none">
                      <label htmlFor="my-modal">update</label>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toys?._id)}
                    className="btn bg-violet-500 btn-xs border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

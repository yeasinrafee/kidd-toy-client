import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user]);
  return (
    <div className="px-10 py-20">
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
              <tr key={toys._id}>
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
                <th>
                  <button className="btn bg-violet-500 btn-xs border-none">
                    Update
                  </button>
                </th>
                <th>
                  <button className="btn bg-violet-500 btn-xs border-none">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

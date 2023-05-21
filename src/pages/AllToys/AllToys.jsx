import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto w-full px-10 py-20">
      <h2 className="text-3xl text-violet-500 mt-5 mb-9">All Toys List: </h2>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allToys &&
            allToys.map((toys, index) => (
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
                    details
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

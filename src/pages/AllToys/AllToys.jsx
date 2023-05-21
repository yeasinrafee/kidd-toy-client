import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  return (
    <div className="overflow-x-auto px-10 py-20">
      <div className="form-control">
        <div className="input-group mb-9">
          <h3 className="text-2xl mt-2 mr-5">Search Toy: </h3>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            name="search"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Table Part  */}
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

import { useEffect, useState } from "react";
import ToyCard from "../../ToyCard/ToyCard";

const Category = () => {
  const [allToys, setAllToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, [activeTab]);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold my-16 text-violet-500">
        Shop Category
      </h2>
      <div className="tabs my-5">
        <div
          onClick={() => handleTab("Sports")}
          className={`tab tab-lifted ${
            activeTab == "Sports" ? "tab-active" : ""
          }`}
        >
          Sports Car
        </div>
        <div
          onClick={() => handleTab("Regular")}
          className={`tab tab-lifted ${
            activeTab == "Regular" ? "tab-active" : ""
          }`}
        >
          Regular Car
        </div>
        <div
          onClick={() => handleTab("Police")}
          className={`tab tab-lifted ${
            activeTab == "Police" ? "tab-active" : ""
          }`}
        >
          Police Car
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allToys &&
          allToys.map((toy) => <ToyCard key={toy._id} toy={toy}></ToyCard>)}
      </div>
    </div>
  );
};

export default Category;

import { useEffect, useState } from "react";
import ToyCard from "../../ToyCard/ToyCard";
import { RotatingLines } from "react-loader-spinner";

const Category = () => {
  const [allToys, setAllToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [loader, setLoader] = useState(true);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`https://assignment11-xi.vercel.app/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoader(false);
      });
  }, [activeTab]);

  if (loader) {
    return (
      <div className="w-1/2 ml-40 md:mx-auto my-60">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="56"
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className=" py-4 px-4">
      <h2 className="text-3xl uppercase text-center font-bold mb-14 mt-16 md:mt-36 text-violet-500">
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

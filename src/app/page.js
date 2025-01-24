"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {/* <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/HDLZdcw/Kayaking.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="hero-overlay bg-black bg-opacity-50"></div>

 
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-extrabold text-white">
              Adventure Awaits!
            </h1>
            <p className="mb-6 text-lg text-gray-200 leading-relaxed">
              Experience the thrill of kayaking in the heart of nature. Explore
              serene rivers, breathtaking landscapes, and create memories that
              will last a lifetime. Join us today for an unforgettable journey!
            </p>
            <button className="btn btn-primary btn-lg rounded-full px-8 shadow-lg">
              Start Your Adventure
            </button>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Explore Our Featured Items
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Discover our collection of handpicked items, designed to suit all
            your needs. Browse through a variety of categories and find the
            perfect choice for you. Each item is crafted with care and attention
            to detail.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Data.slice(0, 12).map((item) => (
            <div
              key={item.id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body p-6">
                <h2 className="card-title text-lg font-semibold text-gray-800 mb-2">
                  {item?.name}
                </h2>
                <h3 className="text-sm text-gray-600 mb-4">{item?.email}</h3>
                <p className="text-gray-700 text-sm">{item?.body}</p>
              </div>
              <div className="card-footer p-4 bg-gray-100 border-t border-gray-200">
                <Link href='Details'>
                  <button className="btn btn-primary w-full py-2 text-white font-semibold rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

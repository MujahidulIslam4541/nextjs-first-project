import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/HDLZdcw/Kayaking.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay bg-black bg-opacity-50"></div>

        {/* Content */}
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
      </div>
    </>
  );
}

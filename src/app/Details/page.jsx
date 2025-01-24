import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          View Details
        </h2>

        {/* Content Section */}
        <div className="bg-gray-50 border-t border-b border-gray-200 py-6 px-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
          quo vero reiciendis velit similique earum
          </h3>
          <p className="text-gray-600">
            This is a detailed description of the selected item. The content is
            static and meant to showcase how the page will look. Add any
            relevant information about the item here, such as its features,
            specifications, or story.
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-6 text-center">
          <Link href='/'>
            {" "}
            <button
              className="btn btn-primary px-6 py-2 text-white font-semibold rounded-lg"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

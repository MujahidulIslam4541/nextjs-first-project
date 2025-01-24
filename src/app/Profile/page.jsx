"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Profile = () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = isAuthenticated();
  const user = getUser();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isUserAuthenticated ? (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
          {/* Welcome Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to Your Profile
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Hello,{" "}
            <span className="font-semibold text-gray-800">
              {user?.given_name}
            </span>
            !
          </p>

          {/* User Information */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold text-gray-700">
              User Details
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Email:</strong> {user?.email || "Not Available"}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Family Name:</strong>{" "}
              {user?.family_name || "Not Available"}
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <Link href='/'>
              <button className="btn btn-primary px-6 py-2 text-white font-semibold rounded-lg">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Unauthorized Access
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Please sign in or sign up to access your profile.
          </p>
          <button className="btn btn-primary px-6 py-2 text-white font-semibold rounded-lg">
            Sign In / Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;

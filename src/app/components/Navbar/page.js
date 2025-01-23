"use client";
import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { user } = useKindeBrowserClient();
  return (
    <div>
      <div className="bg-base-400">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/About">About</Link>
                </li>
                <li>
                  <Link href="/Products">Product</Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">EJP Assignment</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/Profile">Profile</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-2">
            {user ? (
              <LogoutLink>
                {" "}
                <button className="btn border-2 border-slate-400 px-4 py-2">
                  Sign Out
                </button>
              </LogoutLink>
            ) : (
              <LoginLink>
                {" "}
                <button className="btn border-2 border-slate-400 px-4 py-2">
                  Sign In
                </button>
              </LoginLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

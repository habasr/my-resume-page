import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {

  const [isActiveNav, setIsActiveNav] = useState({
    active: true,
    name: 'abel'
  });
  function handleActive(e) {
    e.preventDefault();

    setIsActiveNav({
      active: true,
      name: e.target.id,
    });
  }
  return (
    <>
      <div className="navbar">
        <nav className="shadow">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  type="button"
                  className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-md
                                    p-2
                                    text-gray-400
                                    hover:bg-gray-100 hover:text-gray-500
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-inset
                                    focus:ring-indigo-500
                                    "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="
                                flex flex-1
                                items-center
                                justify-center
                                sm:items-stretch sm:justify-start
                                "
              >
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    to={"/"}
                    id="abel"
                    onClick={handleActive}
                    className={`${
                      isActiveNav.active &&
                      isActiveNav.name === "abel" &&
                      "border-b-2 border-transparent"
                    } block h-6 w-auto text-[#4ADF86] lg:hidden`}
                  >
                    S. Abel Haba
                  </Link>
                  <Link
                    to={"/"}
                    id="abel"
                    onClick={handleActive}
                    className={`${
                      isActiveNav.active &&
                      isActiveNav.name === "abel" &&
                      "border-b-2 border-transparent"
                    } hidden h-6 w-auto text-[#4ADF86] lg:block`}
                  >
                    S. Abel Haba
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                  <Link
                    to={"/projects"}
                    id="project"
                    onClick={handleActive}
                    className={`${
                      isActiveNav.active &&
                      isActiveNav.name === "project" &&
                      "border-b-2 border-[#4ADF86]"
                    }
                                    inline-flex
                                    items-center
                                    text-[#FFFFFF]
                                    px-1
                                    pt-1
                                    text-sm
                                    font-medium
                                    `}
                  >
                    Projects
                  </Link>
                  <Link
                    to={"/blog/index"}
                    id="blog"
                    onClick={handleActive}
                    className={`${
                      isActiveNav.active &&
                      isActiveNav.name === "blog" &&
                      "border-b-2 border-[#4ADF86]"
                    }
                                    inline-flex
                                    items-center
                                    text-[#FFFFFF]
                                    px-1
                                    pt-1
                                    text-sm
                                    font-medium
                                    `}
                  >
                    Blog
                  </Link>
                  <Link
                    to={"/contact"}
                    id="contact"
                    onClick={handleActive}
                    className={`${
                      isActiveNav.active &&
                      isActiveNav.name === "contact" &&
                      "border-b-2 border-[#4ADF86]"
                    }
                                    inline-flex
                                    items-center
                                    text-[#FFFFFF]
                                    px-1
                                    pt-1
                                    text-sm
                                    font-medium
                                    `}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div
                className="
                                absolute
                                inset-y-0
                                bg-[#4ADF86]
                                right-0
                                flex
                                items-center
                                pr-2
                                sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              ></div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 pt-2 pb-4">
              <Link
                to={"/projects"}
                id="project"
                onClick={handleActive}
                className={`${
                  isActiveNav.active &&
                  isActiveNav.name === "project" &&
                  "border-b-2 border-[#4ADF86]"
                }
                block
                border-l-4 border-transparent
                text-[#FFFFFF]
                py-2
                pl-3
                pr-4
                text-base
                font-medium
                hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                                `}
              >
                Projects
              </Link>
              <Link
                to={"/blog/index"}
                id="blog"
                onClick={handleActive}
                className={`${
                  isActiveNav.active &&
                  isActiveNav.name === "blog" &&
                  "border-b-2 border-[#4ADF86]"
                }
                block
                border-l-4 border-transparent
                text-[#FFFFFF]
                py-2
                pl-3
                pr-4
                text-base
                font-medium
                hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                                `}
              >
                Blog
              </Link>
              <Link
                to={"/contact"}
                id="contact"
                onClick={handleActive}
                className={`${
                  isActiveNav.active &&
                  isActiveNav.name === "contact" &&
                  "border-b-2 border-[#4ADF86]"
                }
                block
                border-l-4 border-transparent
                text-[#FFFFFF]
                py-2
                pl-3
                pr-4
                text-base
                font-medium
                hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                                `}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

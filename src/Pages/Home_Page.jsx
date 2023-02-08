import React from "react";
import amazon_logo from "../assets/amazon_logo.png";
import location from "../assets/location.png";
import indiaflag from "../assets/indianflag.png";
import dropdown from "../assets/dropdown.png";
import cart from "../assets/cart.png";
import b2 from "../assets/banner_img/b2.jpg";
import { PRODUCTS } from "../products";
import { Product } from "../components/Product";

export const Home_Page = () => {
  return (
    <div>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <img src={amazon_logo} alt="logo" className="ml-2 w-20" />
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <div
              className="flex flex-row
        "
            >
              <img src={location} alt="" className="w-6 mb-5 " />
              <p className="text-sm te">
                {" "}
                Deliver to Mansi <br /> <strong>Indore 452005</strong>
              </p>
            </div>
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <form>
              <div class="flex">
                <label
                  for="search-dropdown"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none"
                  type="button"
                >
                  All
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100  dark:hover:text-white"
                      >
                        Products
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      ></button>
                    </li>
                  </ul>
                </div>
                <div class="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-96 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos, Design Templates..."
                    required
                  />
                  <button
                    type="submit"
                    class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-yellow-600 rounded-r-lg   dark:bg-yellow-600 "
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </li>
          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <div className="flex ">
              <img src={indiaflag} alt="" className="w-8" />
              <strong>IN</strong>
            </div>
          </li>
          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <div className="flex">
              <p className="text-sm ">
                Hello Mansi <br />
                <strong>Accounts & Lists</strong>
              </p>

              <img src={dropdown} alt="" className="w-6 h-6" />
            </div>
          </li>
          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <div className="flex">
              <p className="text-sm ">
                <strong>
                  Returns &<br />
                  Orders
                </strong>
              </p>
            </div>
          </li>
          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <div className="flex">
              <img src={cart} alt="" className="w-10 mr-2" />
              <a href="/cart" className="mt-2 te">
                <strong>Cart</strong>{" "}
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="relative w-full h-10 flex flex-wrap items-center justify-between py-1 bg-gray-700 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 h-10">
          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <p className="text-sm">
              <strong>All</strong>{" "}
            </p>
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <p className="text-sm">
              <strong>Today Deal</strong>{" "}
            </p>
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <p className="text-sm">
              <strong>Amazon MiniTV</strong>
            </p>
          </li>
          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <p className="text-sm">
              <strong>Amazon Pay</strong>
            </p>
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <p className="text-sm">
              <strong>Buy Again</strong>{" "}
            </p>
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <strong>Gift Card</strong>
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <strong>Health Care</strong>
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <strong>Home Decor</strong>
          </li>

          <li
            as="li"
            variant="small"
            color="blue-gray"
            className="p-2 mb-3 mt-0 font-normal"
          >
            <strong>Try Prime free for one month</strong>
          </li>
        </ul>
      </nav>

      <div>
        <img src={b2} alt="" className="w-full h-96" />
      </div>

      <div className="grid grid-cols-2">
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";
import { useRouter } from "next/router";
import Elementthree from "./elementthree";
import Shoppingcart from "./shoppingcart";
import Account from "./account";
import Help from "./help";


export default function Navbar() {
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {

  };

  return (
    <>
      <div className="bg-orange-500 mb-3">
        <div className=" .mx-auto w-full align-middle  md:max-w-7xl mx-auto">
          <img
            src="https://ng.jumia.is/cms/0-1-cpr/2023/new-top-strip/free-delivery-top-strip_1.gif"
            alt="navimage"
          />
        </div>
      </div>
      <div className="bg-white align-middle">
        <div className="md:max-w-7xl mx-auto flex py-3 flex-row justify-between space-x-2 ">
          <span className="flex space-x-2">
            <Elementthree/>
            <img
              src="/jumia.png"
              className="h-[40px] pt-3 cursor-pointer"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </span>
          <input
            type="text"
            placeholder="SEARCH"
            className="input input-bordered input-warning w-full outline-none max-w-md  my-auto hidden lg:inline"
          />
           <button type="submit" className="btn btn-warning rounded-2 text-white hidden lg:inline">
        Search
      </button>
          {/* <form id="search" method="get" className="flex items-center space-x-4" action="/catalog/" data-track-onsubmit="search" onSubmit={handleSearch}>
      <div className="flex items-center space-x-2">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500">
          <use xlinkHref="https://www.jumia.com.eg/assets_he/images/i-icons.a66628fd.svg#search"></use>
        </svg>
        <input
          type="text"
          name="q"
          id="fi-q"
          placeholder="Search products, brands and categories"
          aria-label="Search"
          autoComplete="off"
          required
          className="input input-bordered input-warning w-96 outline-none max-w-md  my-auto hidden lg:inline"
        />
        <button type="button" className="text-gray-500" aria-label="Reset" >
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <use xlinkHref="https://www.jumia.com.eg/assets_he/images/i-icons.a66628fd.svg#close"></use>
          </svg>
        </button>
      </div>
      <button type="submit" className="btn btn-warning rounded-2 text-white">
        Search
      </button>
    </form> */}
          {/* <span className="hidden md:inline">
           
              <button  className="btn btn-outline btn-warning">
                LOGIN/ SIGN UP
              </button>
          </span> */}
          <Account/>
          <Help/>
          <Shoppingcart/>

          </div>
          </div>
    </>
  );
}

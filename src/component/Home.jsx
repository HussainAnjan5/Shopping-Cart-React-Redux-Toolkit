import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Home = () => {
    const [cartItems, setCartItems] = useState(0);
    const addToCart = () => {
        setCartItems(cartItems + 1);
      };
    
  return (
    <div>
<div className="bg-black shadow-lg mb-5 flex justify-between mx-auto items-center w-full text-center px-4">
      <h1 className="text-4xl font-bold text-white p-4">Shopping Cart</h1>
      <div className="relative flex items-center">
        <button onClick={addToCart} className="text-white">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </button>
        {cartItems > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cartItems}
          </span>
        )}
      </div>
    </div>        
<div className="px-20 flex items-center justify-around flex-wrap" >
<div className="w-25 container mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="p-5 h-20 w-25 rounded-t-lg" src="https://pagedone.io/asset/uploads/1701162850.png" alt="product image" />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Rose Petals Divine</h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
    </div>
  </div>
</div>
<div className="w-25 container mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="p-5 h-20 w-25 rounded-t-lg" src="https://pagedone.io/asset/uploads/1701162866.png" alt="product image" />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Rose Petals Divine</h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
    </div>
  </div>
</div>
<div className="w-25 container mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="p-5 h-20 w-25 rounded-t-lg" src="https://pagedone.io/asset/uploads/1701162880.png" alt="product image" />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Rose Petals Divine</h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
    </div>
  </div>
</div>

</div>
<section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
  <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
    <div className="grid grid-cols-12">
      <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 w-full max-xl:max-w-3xl max-xl:mx-auto">
        <div className="flex items-center justify-between pb-8 border-b border-gray-300">
          <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
          <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
        </div>
        <div className="grid grid-cols-12 mt-5 max-md:hidden pb-6 border-b border-gray-200">
          <div className="col-span-12 md:col-span-7">
            <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-5">
              <div className="col-span-3">
                <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
              </div>
              <div className="col-span-2">
                <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image" className="mx-auto rounded-xl object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-semibold text-base leading-7 text-black">Rose Petals Divine</h6>
                <h6 className="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                    <path d="M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <input type="text" className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent" placeholder={1} />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$120.00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img src="https://pagedone.io/asset/uploads/1701162866.png" alt="perfume bottle image" className="mx-auto rounded-xl object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-semibold text-base leading-7 text-black">Musk Rose Cooper</h6>
                <h6 className="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                    <path d="M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <input type="text" className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent" placeholder={2} />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$240.00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img src="https://pagedone.io/asset/uploads/1701162880.png" alt="perfume bottle image" className="mx-auto rounded-xl object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-semibold text-base leading-7 text-black">Dusk Dark Hue</h6>
                <h6 className="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                    <path d="M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <input type="text" className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent" placeholder={1} />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$120.00</p>
            </div>
          </div>
        </div>      </div>
      <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-14">
        <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
          Order Summary</h2>
        <div className="mt-5">
          <div className="flex items-center justify-between pb-6">
            <p className="font-normal text-lg leading-8 text-black">3 Items</p>
            <p className="font-medium text-lg leading-8 text-black">$480.00</p>
          </div>
          <form>
            <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">Shipping
            </label>
            <div className="flex pb-6">
              <div className="relative w-full">
                <div className=" absolute left-0 top-0 py-3 px-4">
                  <span className="font-normal text-base text-gray-300">Second Delivery</span>
                </div>
                <input type="text" className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400" placeholder="$5.00" />
                <button id="dropdown-button" data-target="dropdown-delivery" className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 " type="button">
                  <svg className="ml-2 my-auto" width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div id="dropdown-delivery" aria-labelledby="dropdown-delivery" className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10 bg-white right-0">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Promo Code
            </label>
            <div className="flex pb-4 w-full">
              <div className="relative w-full ">
                <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">
                </div>
                <input type="text" className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 " placeholder="xxxx xxxx xxxx" />
                <button id="dropdown-button" data-target="dropdown" className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 " type="button"><svg className="ml-2 my-auto" width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div id="dropdown" className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center border-b border-gray-200">
              <button className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">Apply</button>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="font-medium text-xl leading-8 text-black">Sub Total :</p>
              <p className="font-semibold text-xl leading-8 text-indigo-600">$485.00</p>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="font-medium text-xl leading-8 text-black">Shipping Cost :</p>
              <p className="font-semibold text-xl leading-8 text-indigo-600">$485.00</p>
            </div>
            <div className="flex items-center justify-between py-3">
              <p className="font-medium text-xl leading-8 text-black">Total</p>
              <p className="font-semibold text-xl leading-8 text-indigo-600">$485.00</p>
            </div>
            <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">Go to Checkout</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

                                            
    </div>
  )
}

export default Home
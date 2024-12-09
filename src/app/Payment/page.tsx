
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Payment = () => {
  return (
    
    <div className=" h-[1500px] pt-4 bg-gray-100">
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg flex p-8">
        {/* Left Section: Billing and Rental Info */}
        <div className="w-2/3 pr-8">
          
          <div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Billing Info</h2>
  <form className="grid grid-cols-2 gap-4">
    <div className="col-span-2">
      <label className="block text-gray-700">Name</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your name"
      />
    </div>
    <div>
      <label className="block text-gray-700">Phone Number</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Phone number"
      />
    </div>
    <div>
      <label className="block text-gray-700">Town/City</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Town/City"
      />
    </div>
    <div className="col-span-2">
      <label className="block text-gray-700">Address</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Address"
      />
    </div>
  </form>
</div>

<div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
  <form className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-gray-700">Pick-Up Location</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Select your city"
      />
    </div>
    <div>
      <label className="block text-gray-700">Date</label>
      <input
        type="date"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-700">Time</label>
      <input
        type="time"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-700">Drop-Off Location</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Select your city"
      />
    </div>
    <div>
      <label className="block text-gray-700">Date</label>
      <input
        type="date"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div>
      <label className="block text-gray-700">Time</label>
      <input
        type="time"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  </form>
</div>

<div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
  <form className="grid grid-cols-2 gap-4">
    <div className="col-span-2">
      <label className="block text-gray-700">Credit Number</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your credit number"
      />
    </div>
    <div>
      <label className="block text-gray-700">Expire date</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="DD/MM/YY"
      />
    </div>
    <div>
      <label className="block text-gray-700">Card holder</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Card holder"
      />
    </div>
    <div className="col-span-2">
      <label className="block text-gray-700">Bitcoin/Paypal</label>
      <input
        type="text"
        className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Select Bitcoin or Paypal"
      />
    </div>
  </form>
</div>

<div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-2">Confirmation</h2>
  <label className="block text-gray-300">We are getting to the end.Just few clicks and your rental is ready!</label>
  <form className="grid grid-cols-2 gap-4">
  <div className="col-span-2">
  <label className="block text-gray-700 w-full border-gray-800 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
    <input type="checkbox" className="mr-2" /> I agree with sending marketing and newsletter emails. No spam, promised!
  </label>
</div>
<div className="col-span-2">
  <label className="block text-gray-700 w-full border-gray-800 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
    <input type="checkbox" className="mr-2" /> I agree with terms and policy. </label>
</div>

 
  
  </form>
</div>


<Link href={"/Admin"}>
<button className=" h-[56px] w-[140px] rounded-lg text-white bg-[#3563E9]">Rent now</button>
</Link>
        </div> 
        {/* payment */}
        


        {/* Right Section: Rental Summary */}
        <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow-inner" style={{ width: "444px", height: "20rem" }}>
          <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
          <div className="flex items-center mb-4">
            <Image
              src="/car.svg"
              alt="Car"
              width={200}
              height={360}
              className="w-20 h-20 object-fit rounded-md mr-4"
            />
            <div>
              <h3 className="font-medium">Nissan GT-R</h3>
              <p className="text-sm text-gray-500">★★★★★ 460 Reviews</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>$80.00</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Tax</p>
              <p>$0</p>
            </div>
          </div>
          <div className="flex justify-between text-xl font-semibold text-gray-900">
            <p>Total Rental Price</p>
            <p>$80.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default Payment;
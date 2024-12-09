import React from 'react'
import Image from 'next/image'
const Firstcard = () => {
  return (
    <div>
        
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-blue-500 text-white rounded-lg p-6 flex flex-col justify-between relative">
          <div>
            <h2 className="text-2xl font-bold">The Best Platform for Car Rental</h2>
            <p className="mt-2 text-sm">Ease of doing car rental safely and reliably. Of course at a low price.</p>
          </div>
          <button className=" text-[white] font-semibold px-4 py-2 rounded-md mt-6 self-start bg-[#3563E9]">
            Rental Car
          </button>
          <Image
            src="/car.png" // Add your car image here
            alt="Car"
            width={406}
            height={116}
            className="absolute bottom-4 right-4 w-32 md:w-40"
          />
        </div>

        {/* Right Card */}
        <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between relative">
          <div>
            <h2 className="text-2xl font-bold">Easy way to rent a car at a low price</h2>
            <p className="mt-2 text-sm">Providing cheap car rental services and safe and comfortable facilities.</p>
          </div>
          <button className=" text-[white] font-semibold px-4 py-2 rounded-md mt-6 self-start bg-[#54A6FF] ">
            Rental Car
          </button>
          <Image
            src="/image 8.png" // Add your car image here
            alt="Car"
            width={340}
            height={108}
            className="absolute bottom-4 right-4 w-32 md:w-40"
          />
        </div>
      </div>


                          {/* Date And Time right SEction */}
 {/* first card of date */}
 <div className=' flex '>
 <div className="w-[582px] h-[132px] m-6 border-radius-[10px] bg-[#fff]  rounded-lg  ">
          <div className='absolute flex w-[92px] h-[20px] ml-[48px] mt-[24px] '>
            <Image
            src="/mark.svg" 
            alt="mark"
            width={16}
            height={16}
          />
        <p className="ml-[6px] text-base font-semibold text-black">Pick-Up</p>
        </div>
         <div className='flex justify-evenly'>

            <div className='text-[#1A202C] mt-[60px]'>
                <h1 className='font-semibold'>Location</h1>
                <p className='text-[#90A3BF]'>Select your city</p>
            </div>

            <div className='text-[#1A202C] mt-[60px]'>
            <h1 className='font-semibold'>Date</h1>
            <p className='text-[#90A3BF]'>Select your date</p>
            </div>

            <div className='text-[#1A202C] mt-[60px]'>
            <h1 className='font-semibold'>Time</h1>
            <p className='text-[#90A3BF]'>Select your time</p>
            </div> 

        </div> 
     </div>
     {/* second card of date */}

     <div className="w-[582px] h-[132px] m-6 border-radius-[10px] bg-[#fff]  rounded-lg  ">
          <div className='absolute flex w-[92px] h-[20px] ml-[48px] mt-[24px] '>
            <Image
            src="/mark.svg" 
            alt="mark"
            width={16}
            height={16}
          />
        <p className="ml-[6px] text-base font-semibold text-black">Pick-Up</p>
        </div>
         <div className='flex justify-evenly'>

            <div className='text-[#1A202C] mt-[60px]'>
                <h1 className='font-semibold'>Location</h1>
                <p className='text-[#90A3BF]'>Select your city</p>
            </div>

            <div className='text-[#1A202C] mt-[60px]'>
            <h1 className='font-semibold'>Date</h1>
            <p className='text-[#90A3BF]'>Select your date</p>
            </div>

            <div className='text-[#1A202C] mt-[60px]'>
            <h1 className='font-semibold'>Time</h1>
            <p className='text-[#90A3BF]'>Select your time</p>
            </div>

        </div> 
     </div>
 </div>
      

    </section>
    </div>
  );
}

export default Firstcard
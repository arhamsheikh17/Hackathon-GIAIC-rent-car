import React from 'react'
import Image from 'next/image'

const Admin = () => {
  return (
   
    <div>
        
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold">MAIN MENU</h2>
          <ul className="mt-4">
            <li className="py-2 px-4 bg-blue-500 text-white rounded-md">Dashboard</li>
            <li className="py-2 px-4 mt-2">Car Rent</li>
            <li className="py-2 px-4 mt-2">Insight</li>
            <li className="py-2 px-4 mt-2">Reimburse</li>
            <li className="py-2 px-4 mt-2">Inbox</li>
            <li className="py-2 px-4 mt-2">Calendar</li>
          </ul>
        </div>
        <div className="p-4 mt-auto">
          <h2 className="text-xl font-bold">PREFERENCES</h2>
          <ul className="mt-4">
            <li className="py-2 px-4">Settings</li>
            <li className="py-2 px-4 mt-2">Help & Center</li>
            <li className="py-2 px-4 mt-2">Dark Mode</li>
          </ul>
        </div>
        <div className="p-4">
          <button className="py-2 px-4 bg-red-500 text-white rounded-md">Log Out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Details Rental */}
          <div className="col-span-2 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Details Rental</h2>
            <div className="flex items-center mb-4">
              <div className="w-24 h-24  rounded-md bg-[#3563E9]">
                <Image
                src={"/d1.png"}
                alt='Nissan GT-R'
                width={100}
                height={100}
                className='mt-[25px] mb-[25px] '
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Nissan GT-R</h3>
                <p className="text-gray-600">Sport Car</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold">Pick-Up</h4>
                <p>Location: Kota Semarang</p>
                <p>Date: 20 July 2022</p>
                <p>Time: 07:00</p>
              </div>
              <div>
                <h4 className="font-bold">Drop-Off</h4>
                <p>Location: Kota Semarang</p>
                <p>Date: 21 July 2022</p>
                <p>Time: 01:00</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-bold">Total Rental Price</h4>
              <p className="text-2xl font-bold">$80.00</p>
            </div>
          </div>

          {/* Top 5 Car Rental */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Top 5 Car Rental</h2>
            <div className="w-32 h-32 relative rounded-full mx-auto mb-4"> <Image src={"/Chart.png"} alt='Nissan GT-R' width={100} height={100} className='mt-[20px] mb-[25px]' /> <div className="absolute inset-0 flex items-center justify-center"> <span className="mb-[30px] mr-[20px] text-blue-500 font-bold">72,030</span> 
            <span className="mr-[45px] mt-[8px] ml-[20px] absolute text-gray-500 text-[12px] font-base">Rental car</span> 
            </div>
             </div>
           
            <ul>
              <li className="flex justify-between py-2">
                <span>Sport Car</span>
                <span>17,439</span>
              </li>
              <li className="flex justify-between py-2">
                <span>SUV</span>
                <span>12,345</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Truck</span>
                <span>9,876</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Convertible</span>
                <span>7,654</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Compact</span>
                <span>5,432</span>
              </li>
            </ul>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
            <ul>
              <li className="flex justify-between py-2">
              <Image
                src={"/d1.png"}
                alt='Nissan GT-R'
                width={70}
                height={70}
                className='mt-[25px] mb-[25px] '
                />
                <span className='mt-[20px] ml-[8px]'>Nissan GT-R</span>
                <span className='mt-[20px] ml-[8px]'>20 July 2022</span>
                <span className='mt-[20px]'>$80.00</span>
              </li>
              <li className="flex justify-between py-2">
              <Image
                src={"/car.png"}
                alt='Nissan GT-R'
                width={70}
                height={70}
                className='mt-[25px] mb-[25px] '
                />
                <span className='mt-[20px] ml-[8px]'>SUV</span>
                <span className='mt-[20px] ml-[8px]'>18 July 2022</span>
                <span className='mt-[20px]'>$70.00</span>
              </li>
              <li className="flex justify-between py-2">
              <Image
                src={"/car3.png"}
                alt='Nissan GT-R'
                width={70}
                height={70}
                className='mt-[25px] mb-[25px] '
                />
                <span className='mt-[20px] ml-[8px]'>Truck</span>
                <span className='mt-[20px] ml-[8px]'>15 July 2022</span>
                <span className='mt-[20px]'>$90.00</span>
              </li>
              <li className="flex justify-between py-2">
              <Image
                src={"/R7.png"}
                alt='Nissan GT-R'
                width={70}
                height={70}
                className='mt-[25px] mb-[25px] '
                />
                <span  className='mt-[20px] ml-[8px]'> Convertible</span>
                <span className='mt-[20px] ml-[8px]'>12 July 2022</span>
                <span className='mt-[20px]'>$75.00</span>
              </li>
              <li className="flex justify-between py-2 ">
              <Image
                src={"/R1.png"}
                alt='Nissan GT-R'
                width={70}
                height={70}
                className='mt-[25px] mb-[25px] '
                />
                <span className='mt-[20px] ml-[8px]'          >Compact</span>
                <span className='mt-[20px] ml-[8px]' >10 July 2022</span>
                <span className='mt-[20px]      '  >$65.00</span>
              </li>
        
            </ul>
          </div>
         
        </div>

      </div>
    </div>
  


    </div>

  )
}

export default Admin
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Detail = () => {
  return (
    <div>
    <div className='flex'>
           <aside className="w-full sm:w-64 bg-[#fff] p-4">
      {/* Type Section */}
      <div className="ml-[32px]">
        <h2 className="text-[12px] font-base text-[#90A3BF] mb-2">Type</h2>
        <ul className="space-y-2 font-base font-semibold text-[20px]">
          {["Sport(10)", "SUV(12)", "MPV(16)", "Sedan(20)", "Coupe(14)", "Hatchback(14)"].map((item, index) => (
            <li key={item} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded text-blue-500 focus:ring-blue-500"
                defaultChecked={index < 3} // First 3 checkboxes are checked
              />
              <label className="text-sm text-gray-700">{item}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Capacity Section */}
      <div className="mt-6 ml-[32px]">
        <h2 className=" font-base text-[12px] text-[#90A3BF] mb-2">Capacity</h2>
        <ul className="space-y-2 font-base font-semibold text-[20px]">
          {["2 Person(10)", "4 Person(14)", "6 Person(12)", "8 or more(16)"].map((item, index ,array) => (
            <li key={item} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded text-blue-500 focus:ring-blue-500"
                defaultChecked={index === 0 || index === array.length - 1}
                 // First 3 checkboxes are checked
              />
              <label className="text-sm text-gray-700">{item}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Section */}
      <div className="ml-[32px] mt-6">
        <h2 className="text-[12px] font-base text-[#90A3BF] mb-4">Price</h2>
        <div className="relative w-full h-4 bg-gray-300 rounded">
          <div className="absolute top-0 left-0 h-4 bg-blue-500 rounded" style={{ width: "75%" }}></div>
        </div>
      </div>
    </aside>
   </div>


  
    <div className='w-full flex'>
     <div className=" hidden sm:flex w-[25%]">
        {/* <Image src={'/Nav Ba Side.png'} alt='' width={360} height={1600}/> */}
      </div>
      <div className=" w-full mt-[-250px] sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=' w-full flex flex-col md:flex-row gap-6  items-center justify-around'>
            <div className=' flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]'>
                <div>
                    <Image src={'/d1.png'} alt='' width={492} height={360}/>

                </div>
                <div className=' flex items-center justify-between space-evenly  gap-2lg:gap-0'>
                <Image src={'/d1.png'} alt='View' width={148} height={148}/>
                <Image src={'/View 2.png'} alt='View1' width={148} height={148}/>
                <Image src={'/View 3.png'} alt='View2' width={148} height={148}/>
                </div>
            </div>
            <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
  <Image
    src={"/d1.png"}
    alt="Detail Car"
    width={492}
    height={392}
    className="w-full h-auto rounded-t-xl object-cover"
  />
  <p>NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the race track.</p>

  <div className="p-4 flex  items-center gap-4">
    <div className="flex items-center justify-between w-full">
      <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
        $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
      </h1>
    </div>
    <Link href={"/Payment"}>
      <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
        Rent Now
      </button>
    </Link>
  </div>
</div>
        </section>
        <section className=' w-full flex items-center justify-center'>
            {/* <Image src={'/Reviews.png'} alt='' width={1010} height={452} className=' hidden md:flex'/>
            <Image src={'/Reviews (1).png'} alt='' width={492} height={384} className=' md:hidden'/> */}
        </section>
        <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car1.png"} alt="" width={220} height={68} />
              {/* <Image src={"/Spesification.png"} alt="" width={256} height={24} /> */}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car2.png"} alt="" width={220} height={68} />
              {/* <Image src={"/Spesification.png"} alt="" width={256} height={24} /> */}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car3.png"} alt="" width={220} height={68} />
              {/* <Image src={"/Spesification.png"} alt="" width={256} height={24} /> */}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recomendation Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/c9.png"} alt="" width={220} height={68} />
              {/* <Image src={"/car9.png"} alt="" width={256} height={24} /> */}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car4.png"} alt="" width={220} height={68} />
              {/* <Image src={"/Spesification.png"} alt="" width={256} height={24} /> */}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/redheart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/R4.png"} alt="" width={220} height={68} />
              {/* <Image src={"/Spesification.png"} alt="" width={256} height={24} /> */}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

        </div>
      </section>
      </div>
    </div>

    </div>
    
  )
}

export default Detail
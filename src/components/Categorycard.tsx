// // import React from "react";
// // import CarCard from "./CarCards";
// // import Link from "next/link";

// // export const RecommendedCar: React.FC = () => {
// //   return (
// //     <div className="p-4 bg-gray-100 md:p-8">
// //       {/* Section Header */}
// //       <h2 className="text-lg font-semibold text-slate-900 text-left mb-6 md:text-xl">
// //         Recommended Car
// //       </h2>

// //       {/* Responsive Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
// //         {/* Car Cards */}
// //         <CarCard
// //           name="Tesla Model 3"
// //           type="Electric"
// //           image="/R1.png"
// //           fuelCapacity="100 kWh"
// //           transmission="Automatic"
// //           capacity="5 seats"
// //           price={100}
// //           favoriteIcon="/heart.png"
// //         />
// //         <CarCard
// //           name="Ford Mustang"
// //           type="Gasoline"
// //           image="/R2.png"
// //           fuelCapacity="60 L"
// //           transmission="Manual"
// //           capacity="4 seats"
// //           price={80}
// //           favoriteIcon="/redheart.png"
// //         />
// //         <CarCard
// //           name="BMW X5"
// //           type="Diesel"
// //           image="/R3.png"
// //           fuelCapacity="70 L"
// //           transmission="Automatic"
// //           capacity="7 seats"
// //           price={150}
// //           favoriteIcon="/heart.png"
// //         />
// //         <CarCard
// //           name="Audi A6"
// //           type="Hybrid"
// //           image="/R4.png"
// //           fuelCapacity="50 L"
// //           transmission="Automatic"
// //           capacity="5 seats"
// //           price={120}
// //           favoriteIcon="/redheart.png"
// //         />
// //         <CarCard
// //           name="Mercedes-Benz C-Class"
// //           type="Gasoline"
// //           image="/R5.png"
// //           fuelCapacity="65 L"
// //           transmission="Automatic"
// //           capacity="5 seats"
// //           price={140}
// //           favoriteIcon="/redheart.png"
// //         />
// //         <CarCard
// //           name="Porsche 911"
// //           type="Gasoline"
// //           image="/R6.png"
// //           fuelCapacity="60 L"
// //           transmission="Manual"
// //           capacity="4 seats"
// //           price={200}
// //           favoriteIcon="/heart.png"
// //         />
// //         <CarCard
// //           name="Chevrolet Camaro"
// //           type="Gasoline"
// //           image="/R7.png"
// //           fuelCapacity="70 L"
// //           transmission="Manual"
// //           capacity="4 seats"
// //           price={110}
// //           favoriteIcon="/redheart.png"
// //         />
// //         <CarCard
// //           name="Nissan Altima"
// //           type="Hybrid"
// //           image="/R8.png"
// //           fuelCapacity="50 L"
// //           transmission="Automatic"
// //           capacity="5 seats"
// //           price={90}
// //           favoriteIcon="/heart.png"
// //         />
// //       </div>

// //       {/* Show More Button */}
// //       <div className="flex justify-center ml-[30px] mt-12">
// //         <Link href="/Category">
// //           <button className="px-6 space-evenly py-3 text-base font-medium text-white bg-[#3563E9] rounded-md hover:bg-[#274bc9] transition duration-300 w-full max-w-[200px]">
// //             Show more cars
// //           </button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RecommendedCar;
// import React from "react";
// import CarCard from "./CarCards";
// import Link from "next/link";

// export const RecommendedCar: React.FC = () => {
//   return (
//     <div className="p-4 bg-gray-100 md:p-8">
//       {/* Section Header */}
//       <h2 className="text-lg font-semibold text-slate-900 text-left mb-6 md:text-xl">
//         Recommended Car
//       </h2>

//       {/* Responsive Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//         {/* Car Cards */}
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <CarCard
//             name="Tesla Model 3"
//             type="Electric"
//             image="/R1.png"
//             fuelCapacity="100 kWh"
//             transmission="Automatic"
//             capacity="5 seats"
//             price={100}
//             favoriteIcon="/heart.png"
//           />
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <CarCard
//             name="Ford Mustang"
//             type="Gasoline"
//             image="/R2.png"
//             fuelCapacity="60 L"
//             transmission="Manual"
//             capacity="4 seats"
//             price={80}
//             favoriteIcon="/redheart.png"
//           />
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <CarCard
//             name="BMW X5"
//             type="Diesel"
//             image="/R3.png"
//             fuelCapacity="70 L"
//             transmission="Automatic"
//             capacity="7 seats"
//             price={150}
//             favoriteIcon="/heart.png"
//           />
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <CarCard
//             name="Audi A6"
//             type="Hybrid"
//             image="/R4.png"
//             fuelCapacity="50 L"
//             transmission="Automatic"
//             capacity="5 seats"
//             price={120}
//             favoriteIcon="/redheart.png"
//           />
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <CarCard
//             name="Mercedes-Benz C-Class"
//             type="Gasoline"
//             image="/R5.png"
//             fuelCapacity="65 L"
//             transmission="Automatic"
//             capacity="5 seats"
//             price={140}
//             favoriteIcon="/redheart.png"
//           />
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           {/* <CarCard
//             name="Porsche 911"
//             type="Gasoline"
//             image="/R6.png"
//             fuelCapacity="60 L"
//             transmission="Manual"
//             capacity="4 seats"
//             price={200}
//             favoriteIcon="/heart.png"
//           /> */}
//         </div>
//       </div>

//       {/* Show More Button */}
//       <div className="flex justify-center mt-12">
//         <Link href="/Category">
//           <button className="px-6 py-3 text-base font-medium text-white bg-[#3563E9] rounded-md hover:bg-[#274bc9] transition duration-300 w-full max-w-[200px]">
//             Show more cars
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RecommendedCar;

import React from "react";
import CarCard from "./CarCards";
import Link from "next/link";

export const RecommendedCar: React.FC = () => {
  return (
   
    <div className="p-4 bg-gray-100 md:p-8">
      {/* Section Header */}
      <h2 className="text-lg font-semibold text-slate-900 text-left mb-6 md:text-xl">
        Recommended Car
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {/* Car Cards */}
        <CarCard
          name="Tesla Model 3"
          type="Electric"
          image="/R1.png"
          fuelCapacity="100 kWh"
          transmission="Automatic"
          capacity="5 seats"
          price={100}
          favoriteIcon="/heart.png"
        />
        <CarCard
          name="Ford Mustang"
          type="Gasoline"
          image="/R2.png"
          fuelCapacity="60 L"
          transmission="Manual"
          capacity="4 seats"
          price={80}
          favoriteIcon="/redheart.png"
        />
        <CarCard
          name="BMW X5"
          type="Diesel"
          image="/R3.png"
          fuelCapacity="70 L"
          transmission="Automatic"
          capacity="7 seats"
          price={150}
          favoriteIcon="/heart.png"
        />
        <CarCard
          name="Audi A6"
          type="Hybrid"
          image="/R4.png"
          fuelCapacity="50 L"
          transmission="Automatic"
          capacity="5 seats"
          price={120}
          favoriteIcon="/redheart.png"
        />
        <CarCard
          name="Mercedes-Benz C-Class"
          type="Gasoline"
          image="/R5.png"
          fuelCapacity="65 L"
          transmission="Automatic"
          capacity="5 seats"
          price={140}
          favoriteIcon="/redheart.png"
        />
        <CarCard
          name="Porsche 911"
          type="Gasoline"
          image="/R6.png"
          fuelCapacity="60 L"
          transmission="Manual"
          capacity="4 seats"
          price={200}
          favoriteIcon="/heart.png"
        />
        <CarCard
          name="Audi A6"
          type="Hybrid"
          image="/R4.png"
          fuelCapacity="50 L"
          transmission="Automatic"
          capacity="5 seats"
          price={120}
          favoriteIcon="/redheart.png"
        />
        <CarCard
          name="Mercedes-Benz C-Class"
          type="Gasoline"
          image="/R5.png"
          fuelCapacity="65 L"
          transmission="Automatic"
          capacity="5 seats"
          price={140}
          favoriteIcon="/redheart.png"
        />
        <CarCard
          name="Porsche 911"
          type="Gasoline"
          image="/R6.png"
          fuelCapacity="60 L"
          transmission="Manual"
          capacity="4 seats"
          price={200}
          favoriteIcon="/heart.png"
        />
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12">
        <Link href="/Detail">
          <button className="px-6 py-3 text-base font-medium text-white bg-[#3563E9] rounded-md hover:bg-[#274bc9] transition duration-300 w-full max-w-[200px]">
            Show car detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedCar;

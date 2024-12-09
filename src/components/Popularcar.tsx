import React from "react";
import CarCard from "./CarCards";

export const PopularCar: React.FC = () => {
  const popularCars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      image: "/car1.png",
      fuelCapacity: "90L",
      transmission: "Manual",
      capacity: "2 People",
      price: 99,
      favoriteIcon: "/heart.png", // Red heart icon
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      image: "/car2.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      discountedPrice: 100, // Optional field
      favoriteIcon: "/heart.png", // Grey/outline heart icon
    },
    {
      name: "Rolls - Royce",
      type: "Sedan",
      image: "/car3.png",
      fuelCapacity: "70L",
      transmission: "Manual",
      capacity: "4 People",
      price: 96,
      favoriteIcon: "/redheart.png",
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      image: "/car4.png",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      discountedPrice: 100,
      favoriteIcon: "/heart.png",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 md:p-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 md:text-xl">Popular Car</h2>
        <button className="text-blue-600 font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularCars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
};

export default PopularCar;

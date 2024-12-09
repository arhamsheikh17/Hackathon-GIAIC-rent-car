
import Categorycard from "@/components/Categorycard";
 const Category = () => {
   return (
  <div className="flex" >
   <div className='w-[360px] h-[1600px] flex-start bg-[#fff] border-t border-gray-300  border-r border-gray-300 '>
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
   <div className="">

   <main className="">
   <Categorycard/> 
  </main>

   </div>
 </div>
  );
}

export default Category
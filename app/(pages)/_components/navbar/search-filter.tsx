import { IoSearch } from "react-icons/io5";

export const SearchFilter = () => {
  return (
    <div className="flexBetween h-[48px] lg:h-[64px] border rounded-full shadow-md overflow-hidden">
      <div className="hidden lg:block">
        <div className="flexBetween">
          <div className="relative w-[250px] h-[64px] px-8 flex flex-col justify-center hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm">Search destinations</p>
            <div className="absolute inset-y-0 right-0 w-[0.2px] my-3 bg-gray-200"></div>
          </div>
          <div className="relative h-[64px] px-8 flex flex-col justify-center hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Check In</p>
            <p className="text-sm">Add Dates</p>
            <div className="absolute inset-y-0 right-0 w-[0.2px] my-3 bg-gray-200"></div>
          </div>
          <div className="relative h-[64px] px-8 flex flex-col justify-center hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Check Out</p>
            <p className="text-sm">Add Dates</p>
            <div className="absolute inset-y-0 right-0 w-[0.2px] my-3 bg-gray-200"></div>
          </div>
          <div className="h-[64px] px-8 flex flex-col justify-center hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm">Add guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <button className="p-2 lg:p-4 aspect-square bg-primary hover:bg-primary-dark rounded-full text-white transition-colors duration-200">
          <IoSearch />
        </button>
      </div>
    </div>
  );
};

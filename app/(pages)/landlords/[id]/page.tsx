import Image from "next/image";
import { PropertyItem } from "@/app/(pages)/_components/properties";

function Landlord() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="col-span-1 mb-4">
        <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
          <Image
            src="/demo-property.png"
            alt=""
            width={200}
            height={200}
            className="aspect-square rounded-full"
          />
          <h1 className="mt-6 mb-2 text-xl">Landlord Name</h1>
          <button className="py-2 px-6 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors">
            Contact
          </button>
        </div>
      </div>
      <div className="col-span-3 pl-0 md:pl-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
          {[...Array(10)].map((item, idx) => (
            <PropertyItem
              host="Aman"
              image="/demo-property.png"
              location="Mananthavady, India"
              price={8999}
              rating={4.9}
              available="25-30 March"
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landlord;

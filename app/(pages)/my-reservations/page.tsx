import Image from "next/image";
import React from "react";

function MyReservations() {
  return (
    <>
      <h1 className="text-2xl mt-6 mb-2">My Reservations</h1>
      {[...Array(5)].map((item, idx) => (
        <div
          key={idx}
          className="p-5 mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-md border border-gray-300 rounded-xl"
        >
          <div className="relative overflow-hidden aspect-square rounded-xl col-span-1">
            <Image
              src="/demo-property.png"
              alt=""
              fill
              className="hover:scale-110 object-cover transition duration-500 h-full w-full"
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <h1 className="mb-4 text-xl">Property Name</h1>
            <p className="mb-2">
              <strong>Check in date:</strong> 14/2/2024
            </p>
            <p className="mb-2">
              <strong>Check out date:</strong> 16/2/2024
            </p>
            <p className="mb-2">
              <strong>Number of Nights:</strong> 16/2/2024
            </p>
            <p className="mb-8">
              <strong>Total Price:</strong> &#8377;8,399
            </p>
            <button className="bg-primary text-white hover:bg-primary-dark py-3 px-5 rounded-xl">
              Go to Property &rarr;
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default MyReservations;

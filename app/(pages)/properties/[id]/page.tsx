import React from "react";
import Image from "next/image";
import { ReservationSidebar } from "@/app/(pages)/_components/ReservationSidebar";

function PropertyView() {
  return (
    <div className="mx-auto max-w-[1100px]">
      <div className="relative w-full h-[64vh] overflow-hidden rounded-xl">
        <Image src="/demo-property.png" alt="" fill />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="block text-lg text-gray-600 mb-6">
            4 guests - 2 bedroom - 1 bathroom
          </span>
          <hr />
          <div className="flex items-center py-6 space-x-4">
            <Image
              src="/demo-property.png"
              alt=""
              width={50}
              height={50}
              className="aspect-square rounded-full"
            />
            <p className="text-gray-600 text-[14px]">
              <span className="block">
                Hosted by <strong className="text-black">Jhon Doe</strong>
              </span>
              <span className="">
                <b className="text-primary">New</b> hoster
              </span>
            </p>
          </div>
          <hr />
          <div className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            illum animi sed et dicta dolore quisquam? Doloribus aliquid ullam
            beatae laborum dignissimos voluptatum libero debitis eius
            temporibus! Aut, minus molestias. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quidem nobis, laudantium fugit aut
            quas delectus cupiditate perferendis quisquam exercitationem alias
            eaque laborum? Sint reprehenderit suscipit in officia,
            necessitatibus temporibus a!
          </div>
        </div>
        <div className="col-span-2 mt-4">
          <ReservationSidebar />
        </div>
      </div>
    </div>
  );
}

export default PropertyView;

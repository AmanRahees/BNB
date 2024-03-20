import React from "react";

interface ReservationSidebarProps {
  price: number;
}

export function ReservationSidebar() {
  return (
    <aside className="p-6 col-span-2 rounded-xl bordere border-gray-300 shadow-xl">
      <h1 className="flex items-center gap-2 mb-5 text-2xl">
        <b>₹4,390</b> <small>night</small>
      </h1>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="block font-bold text-xs">Guests</label>
        <select className="w-full -ml-1 text-xs">
          <option>1</option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </div>
      <button className="w-full bg-primary text-white hover:bg-primary-dark py-2 rounded-lg mb-6">
        Book Now
      </button>
      <div className="flexBetween mb-3">
        <p className="font-light">₹4,390 * 4 nights</p>
        <p>₹8,000</p>
      </div>
      <div className="flexBetween mb-4">
        <p className="font-light"> Fee</p>
        <p>₹500</p>
      </div>
      <hr className="mb-4" />
      <div className="flexBetween mb-3">
        <p>Total</p>
        <p>₹8500</p>
      </div>
    </aside>
  );
}

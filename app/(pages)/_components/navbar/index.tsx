import Link from "next/link";
import Image from "next/image";
import { SearchFilter } from "./search-filter";
import { AddPropertyBtn } from "./add-property-btn";
import { UserNav } from "./user-nav";
import Logo from "@/public/airbnb.svg";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 bg-white py-4 md:py-6 border-b z-10">
      <div className="max-w-[1500px] mx-auto px-4 lg:px-6">
        <div className="flexBetween">
          <Link href="/">
            <Image src={Logo} alt="logo" width={120} height={50} />
          </Link>
          <div className="flex space-x-6">
            <SearchFilter />
          </div>
          <div className="relative flex items-center space-x-6">
            <AddPropertyBtn />
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

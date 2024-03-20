import Link from "next/link";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

interface PropertyItemProps {
  image: string;
  location: string;
  rating: number;
  price: number;
  host: string;
  available: string;
}

export const PropertyItem = ({
  image,
  location,
  rating,
  price,
  host,
  available,
}: PropertyItemProps) => {
  return (
    <Link href={`properties/1`}>
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width:768px): 768px, (max-width:1200px): 768px, 768px"
          className="object-cover h-full w-full rounded-xl"
        />
      </div>
      <div className="py-2">
        <p className="flex justify-between items-start text-sm">
          <span className="font-semibold w-4/5">{location}</span>
          <span className="flex items-center gap-0.5 font-light">
            <IoMdStar size={16} /> {rating ?? "0.0"}
          </span>
        </p>
        <p className="text-sm text-gray-400">Hosted by {host ?? "Unknown"}</p>
        <p className="text-sm text-gray-400">{available}</p>
        <p className="text-sm">
          <span className="font-semibold">&#8377;{price}</span> night
        </p>
      </div>
    </Link>
  );
};

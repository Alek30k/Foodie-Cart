"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Intro = ({ restaurant }) => {
  const [totalRating, setTotalRating] = useState();

  const CalculateRating = () => {
    let total = 0;
    let count = 0;
    business?.review.forEach((item) => {
      total = total + item.star;
      count++;
    });
    const result = total / count;
    return result ? result.toFixed(1) : 5;
  };

  return (
    <div className="">
      {restaurant?.banner?.url ? (
        <div className="">
          <Image
            src={restaurant?.banner?.url}
            alt={restaurant.name}
            width={1000}
            height={300}
            className="w-full h-[220px] object-cover rounded-xl"
          />
        </div>
      ) : (
        <div className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"></div>
      )}
      <h2 className="text-3xl font-bold mt-2">{restaurant.name}</h2>
      <div className="flex items-center gap-2 mt-2">
        <Image src={"/star.png"} alt="star" width={20} height={20} />
        <label className=" text-gray-500">4.5 (56)</label>
      </div>
      <h2 className=" text-gray-500 mt-2 flex gap-2 items-center ">
        <MapPin />
        {restaurant.address}
      </h2>
    </div>
  );
};

export default Intro;

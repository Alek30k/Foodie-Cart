"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const MenuSection = ({ restaurant }) => {
  const [menuItemList, setMenuItemList] = useState([]);

  const FilterMenu = (category) => {
    const result = restaurant?.menu?.filter(
      (item) => item.category == category
    );
    setMenuItemList(result[0]);
  };

  return (
    <div className="">
      <div className="grid grid-cols-4 mt-2 ">
        <div className="hidden md:flex flex-col mr-10 gap-2">
          {restaurant?.menu?.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex justify-start"
              onClick={() => FilterMenu(item.category)}
            >
              {item.category}
            </Button>
          ))}
        </div>
        <div className="col-span-3">
          <h2 className="font-extrabold text-lg">{menuItemList.category}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {menuItemList?.menuItem.map((item, undex) => (
              <div className="p-2 flex gap-3 border rounded-lg">
                <Image
                  src={item?.productImage.url}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover min-w-[120px] h-[120px] rounded-xl"
                />
                <div className="">
                  <h2 className="font-bold">{item.name}</h2>
                  <h2 className="">{item.price}</h2>
                  <h2 className="text-sm text-gray-400 line-clamp-2">
                    {item.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

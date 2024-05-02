"use client";

import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const MenuSection = ({ restaurant }) => {
  const [menuItemList, setMenuItemList] = useState([]);

  useEffect(() => {
    restaurant?.menu && FilterMenu(restaurant?.menu[0]?.category);
  }, [restaurant]);

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
        <div className="md:col-span-3 col-span-4">
          <h2 className="font-extrabold text-lg">{menuItemList.category}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            {menuItemList?.menuItem?.map((item, undex) => (
              <div className="p-2 flex gap-3 border rounded-xl hover:border-primary cursor-pointer">
                <Image
                  src={item?.productImage.url}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover min-w-[120px] h-[120px] rounded-xl"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold">{item.name}</h2>
                  <h2 className="">$ {item.price}</h2>
                  <h2 className="text-sm text-gray-400 line-clamp-2">
                    {item.description}
                  </h2>
                  <SquarePlus />
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

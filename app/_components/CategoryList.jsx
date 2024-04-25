"use client";

import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.GetCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  return (
    <div className="mt-10">
      <div className="flex gap-4 overflow-auto">
        {categoryList &&
          categoryList.map((category, index) => (
            <div
              className="flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 hover:border-primary hover:bg-orange-50 cursor-pointer group"
              key={index}
            >
              <Image
                src={category.icon?.url}
                alt={category.name}
                width={40}
                height={40}
                className="group-hover:scale-110 transition-all duration-2"
              />
              <h2 className="text-sm font-medium">{category.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;

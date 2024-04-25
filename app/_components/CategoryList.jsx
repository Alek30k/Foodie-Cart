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
    <div className="">
      <div className="">
        {categoryList &&
          categoryList.map((category, index) => (
            <div className="" key={index}>
              <Image
                src={category.icon?.url}
                alt={category.name}
                width={40}
                height={40}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;

"use client";

import { useEffect, useRef, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CategoryList = () => {
  const listRef = useRef(null);

  const [categoryList, setCategoryList] = useState([]);
  const params = useSearchParams();

  useEffect(() => {
    console.log(params.get("category"));
  }, [params]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.GetCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  const ScrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };
  // const ScrollLeftHandler = () => {
  //   if (listRef.current) {
  //     listRef.current.scrollBy({
  //       right: 200,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="mt-10 relative">
      <div className="flex gap-4 overflow-auto scrollbar-hide" ref={listRef}>
        {categoryList &&
          categoryList.map((category, index) => (
            <Link
              href={"?category=" + category.slug}
              className="flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 hover:border-primary hover:bg-orange-50 cursor-pointer group"
              key={index}
            >
              <Image
                src={category.icon?.url}
                alt={category.name}
                width={40}
                height={40}
                className="group-hover:scale-125 transition-all duration-2"
              />
              <h2 className="text-sm font-medium group-hover:text-primary">
                {category.name}
              </h2>
            </Link>
          ))}
      </div>
      <ArrowLeftCircle
        className="absolute -left-10 top-9 bg-gray-500 rounded-full text-white w-8 h-8 cursor-pointer"
        // onClick={() => ScrollLeftHandler()}
      />
      <ArrowRightCircle
        className="absolute -right-10 top-9 bg-gray-500 rounded-full text-white w-8 h-8 cursor-pointer"
        onClick={() => ScrollRightHandler()}
      />
    </div>
  );
};

export default CategoryList;

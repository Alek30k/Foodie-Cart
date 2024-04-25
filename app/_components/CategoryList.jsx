"use client";

import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";

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

  return <div className="">CategoryList</div>;
};

export default CategoryList;

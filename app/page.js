"use client";

import { useEffect } from "react";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {
  useEffect(() => {}, []);
  const getCategoryList = () => {
    GlobalApi.getCategoryList().then((resp) => {
      console.log(resp);
    });
  };

  cons;
  return (
    <div className="">
      <CategoryList />
    </div>
  );
}

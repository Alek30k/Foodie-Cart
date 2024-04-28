"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const RestaurantDetails = () => {
  const params = usePathname();

  useEffect(() => {
    console.log(params);
  }, []);

  const getRestaurantDetail = () => {
    GlobalApi.GetBusinessDetail().then((resp) => {
      console.log(resp);
    });
  };

  return <div className="">RestaurantDetails</div>;
};

export default RestaurantDetails;

"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const RestaurantDetails = () => {
  const params = usePathname();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantDetail(params.split("/")[2]);
  }, []);

  const getRestaurantDetail = (restroSlug) => {
    GlobalApi.GetBusinessDetail(restroSlug).then((resp) => {
      setRestaurant(resp.restaurant);
    });
  };

  return <div className="">RestaurantDetails</div>;
};

export default RestaurantDetails;

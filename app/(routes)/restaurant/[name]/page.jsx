"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Intro from "../_components/Intro";
import RestroTabs from "../_components/RestroTabs";

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

  return (
    <div className="">
      <Intro restaurant={restaurant} />
      <RestroTabs />
    </div>
  );
};

export default RestaurantDetails;

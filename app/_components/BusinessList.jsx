"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import BusinessItem from "./BusinessItem";
import BusinessItemSkeleton from "./BusinessItemSkeleton";

const BusinessList = () => {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    params && setCategory(params.get("category"));
    params && getBusinessList(params.get("category"));
  }, [params]);

  const getBusinessList = (category_) => {
    setLoading(true);
    GlobalApi.GetBusiness(category_).then((resp) => {
      setBusinessList(resp?.restaurants);
      setLoading(false);
    });
  };

  useEffect(() => {
    // Set the default category to "all" even if no category is present in the URL
    const defaultCategory = "all";
    setCategory(params.get("category") || defaultCategory);
    getBusinessList(defaultCategory);
  }, []);

  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl">Popular {category} Restaurants</h2>
      <h2 className="font-bold text-primary">{businessList?.length} Results</h2>
      <div className="grid grid-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3">
        {!loading
          ? businessList.map((restaurants, index) => (
              <BusinessItem key={index} business={restaurants} />
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <BusinessItemSkeleton key={index} />
            ))}
      </div>
    </div>
  );
};

export default BusinessList;

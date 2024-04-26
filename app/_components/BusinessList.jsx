"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BusinessList = () => {
  const params = useSearchParams();
  const [category, setCategory] = useState("all");

  useEffect(() => {
    params && setCategory(params.get("category"));
  }, [params]);

  return <div className="">BusinessList</div>;
};

export default BusinessList;

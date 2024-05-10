"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Checkout = () => {
  const params = useSearchParams();

  useEffect(() => {
    console.log(params.get("restaurant"));
  }, []);

  return (
    <div className="">
      <h2 className="font-bold text-2xl my-5">Checkaut</h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
        <div className="md:col-span-2 mx-20"></div>
      </div>
    </div>
  );
};

export default Checkout;

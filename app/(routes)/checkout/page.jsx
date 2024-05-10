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
    </div>
  );
};

export default Checkout;

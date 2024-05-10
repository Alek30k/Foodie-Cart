"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";

const Checkout = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [zip, setZip] = useState();
  const [address, setAddress] = useState();
  const [cart, setCart] = useState();

  const params = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    console.log(params.get("restaurant"));
    user && GetUserCart();
  }, [user]);

  const GetUserCart = () => {
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setCart(resp?.userCarts);
      }
    );
  };

  return (
    <div className="">
      <h2 className="font-bold text-2xl my-5">Checkaut</h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
        <div className="md:col-span-2 mx-20">
          <h2 className="font-bold text-3xl">Billing Details</h2>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input placeholder="Zip" onChange={(e) => setZip(e.target.value)} />
          </div>
          <div className=" mt-3">
            <Input
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mx-10 border">
            <h2 className="p-3 bg-gray-200 font-bold text-center">Total</h2>
            <div className="p-4 flex flex-col gap-4">
              <h2 className="font-bold flex justify-between">Subtotal</h2>
              <hr />
              <h2 className="flex justify-between">Delivery</h2>
              <h2 className="flex justify-between">Tax (9%)</h2>
              <hr />
              <h2 className="font-bold flex justify-between">Total:</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

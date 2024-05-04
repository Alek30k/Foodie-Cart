"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import GlobalApi from "../_utils/GlobalApi";

const Cart = ({ cart }) => {
  const CalculateCartAnount = () => {
    let total = 0;

    cart.forEach((item) => {
      total = total + item.price;
    });
    return total.toFixed(2);
  };

  const RemoveItemFromCart = (id) => {
    GlobalApi.DisconnectRestroFromUserCartItem(id).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <div className="">
      <h2 className="text-lg font-bold">{cart[0]?.restaurant?.name}</h2>
      <div className="mt-5 flex flex-col gap-3">
        <h2 className="font-bold">My Order</h2>
        {cart &&
          cart.map((item, index) => (
            <div
              className="flex justify-between gap-8 items-center cursor-pointer"
              key={index}
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={item.productImage}
                  alt={item.productName}
                  width={40}
                  height={40}
                  className="h-[40px] w-[40px] rounded-lg object-cover"
                />
                <h2 className="text-sm">{item?.productName}</h2>
              </div>
              <h2 className="font-bold flex gap-2">
                ${item.price}
                <X
                  className="h-4 w-4 text-red-500 cursor-pointer"
                  onClick={() => RemoveItemFromCart()}
                />
              </h2>
            </div>
          ))}
        <Button>Checkout ${CalculateCartAnount(item.id)}</Button>
      </div>
    </div>
  );
};

export default Cart;
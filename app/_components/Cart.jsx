"use client";

import Image from "next/image";

const Cart = ({ cart }) => {
  return (
    <div className="">
      <h2 className="text-lg font-bold">{cart[0]?.restaurant?.name}</h2>
      <div className="mt-5 flex flex-col gap-3">
        <h2 className="font-bold">My Order</h2>
        {cart &&
          cart.map((item, index) => (
            <div className="" key={index}>
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
              <h2 className=""></h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;

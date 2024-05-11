"use client";

import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { CartUpdateContext } from "@/app/_context/CartUpdateContext";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [zip, setZip] = useState();
  const [address, setAddress] = useState();
  const [cart, setCart] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [deliveryAmount, setDeliveryAmount] = useState(5);
  const [taxAmount, setTaxAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);

  const params = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    console.log(params.get("restaurant"));
    user && GetUserCart();
  }, [user || updateCart]);

  const GetUserCart = () => {
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setCart(resp?.userCarts);
        calculateTotalAmount(resp?.userCarts);
      }
    );
  };

  const calculateTotalAmount = (cart_) => {
    let total = 0;
    cart_.forEach((item) => {
      total = total + item.price;
    });
    setSubTotal(total.toFixed(2));

    setTaxAmount(total * 0.09);
    setTotal(total + total * 0.09 + deliveryAmount);
  };

  const addToOrder = () => {
    const data = {
      email: user.primaryEmailAddress.emailAddress,
      orderAmount: total,
      restaurantName: params.get("restaurant"),
      userName: user.fullName,
      phone: phone,
      address: address,
      zipCode: zip,
    };
    GlobalApi.CreateNewOrder(data).then((resp) => {
      console.log(resp?.createOrder?.id);
    });
  };

  return (
    <div className="">
      <h2 className="font-bold text-2xl my-5">Checkaut</h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8 ">
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
        </div>
        <div className="mx-10 border">
          <h2 className="p-3 bg-gray-200 font-bold text-center">
            Total Cart ({cart.length})
          </h2>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="font-bold flex justify-between">
              Subtotal : <span>${subtotal}</span>
            </h2>
            <hr />
            <h2 className="flex justify-between">
              Delivery <span>${deliveryAmount}</span>
            </h2>
            <h2 className="flex justify-between">
              Tax (9%) <span>${taxAmount.toFixed(2)}</span>
            </h2>
            <hr />
            <h2 className="font-bold flex justify-between">
              Total: <span>${total.toFixed(2)}</span>
            </h2>
            {/* <Button onClick={()=>onApprove({paymentId:123})}>Payment <ArrowBigRight/></Button> */}
            <Button onClick={() => addToOrder()}>Make Payment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

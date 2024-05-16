import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const MyOrders = () => {
  const { user } = useUser();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    user && GetUserOrders();
  }, [user]);

  const GetUserOrders = () => {
    GlobalApi.GetUserOrders(user?.primaryEmailAddress?.emailAddress).then(
      (resp) => {
        setOrderList(resp?.orders);
      }
    );
  };

  return (
    <div className="">
      <h2 className="font-bold text-lg">My Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {orderList.map((order, index) => (
          <div className="p-3 border rounded-lg" key={index}>
            <h2 className="">
              {moment(order?.createdAt).format("DD-MMM-yyyy")}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

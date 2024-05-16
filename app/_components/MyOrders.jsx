import { useEffect } from "react";
import GlobalApi from "../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";

const MyOrders = () => {
  const { user } = useUser();

  useEffect(() => {
    user && GetUserOrders();
  }, [user]);

  const GetUserOrders = () => {
    GlobalApi.GetUsersOrders().then((resp) => {
      console.log(resp);
    });
  };

  return <div className="">MyOrders</div>;
};

export default MyOrders;

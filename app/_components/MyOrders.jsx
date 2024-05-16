import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MyOrders = () => {
  const { user } = useUser();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    user && GetUserOrders();
  }, [user]);

  const GetUserOrders = () => {
    GlobalApi.GetUserOrders(user?.primaryEmailAddress?.emailAddress).then(
      (resp) => {
        console.log(resp);
        setOrderList(resp?.orders);
      }
    );
  };

  return (
    <div className="">
      <h2 className="font-bold text-lg">My Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {orderList.map((order, index) => (
          <div
            className="p-3 border rounded-lg flex flex-col gap-3"
            key={index}
          >
            <h2 className="font-bold">
              {moment(order?.createdAt).format("DD-MMM-yyyy")}
            </h2>
            <h2 className="flex justify-between text-sm">
              Order Total Amount: <span>{(order?.orderAmount).toFixed(2)}</span>
            </h2>
            <h2 className="flex justify-between">
              Address:{" "}
              <span>
                {order?.address}, {order?.zipCode}
              </span>
            </h2>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h2 className="text-primary underline text-sm">
                    View Order Detail
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    {order?.orderDetail?.map((item, index) => (
                      <div className="" key={index}>
                        <h2 className="">{item?.name}</h2>
                        <h2 className="">{item?.price}</h2>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

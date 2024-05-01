import { Button } from "@/components/ui/button";

const MenuSection = ({ restaurant }) => {
  return (
    <div className="">
      <div className="grid grid-cols-4 mt-2 ">
        <div className="hidden md:flex">
          {restaurant?.menu?.map((item, index) => (
            <Button>{item.category}</Button>
          ))}
        </div>
        <div className="col-span-3 ">Menu List</div>
      </div>
    </div>
  );
};

export default MenuSection;

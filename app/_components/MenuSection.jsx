import { Button } from "@/components/ui/button";

const MenuSection = ({ restaurant }) => {
  const FilterMenu = (category) => {
    console.log("object");
    const result = restaurant?.menu?.filter(
      (item) => item.category == category
    );
    console.log(result);
  };

  return (
    <div className="">
      <div className="grid grid-cols-4 mt-2 ">
        <div className="hidden md:flex flex-col mr-10 gap-2">
          {restaurant?.menu?.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex justify-start"
              onClick={() => FilterMenu(item.category)}
            >
              {item.category}
            </Button>
          ))}
        </div>
        <div className="col-span-3">Menu List</div>
      </div>
    </div>
  );
};

export default MenuSection;

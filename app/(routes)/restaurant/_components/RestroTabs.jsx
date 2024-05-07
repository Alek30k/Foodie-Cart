import MenuSection from "@/app/_components/MenuSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewSection from "./ReviewSection";

const RestroTabs = ({ restaurant }) => {
  return (
    <Tabs defaultValue="category" className="w-full mt-10">
      <TabsList>
        <TabsTrigger value="category">Category</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="category">
        <MenuSection restaurant={restaurant} />
      </TabsContent>
      <TabsContent value="about">about</TabsContent>
      <TabsContent value="reviews">
        <ReviewSection restaurant={restaurant} />
      </TabsContent>
    </Tabs>
  );
};

export default RestroTabs;

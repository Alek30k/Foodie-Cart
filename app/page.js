import BusinessList from "./_components/BusinessList";
import CategoryList from "./_components/CategoryList";

export default function Home() {
  return (
    <div className="">
      <CategoryList />
      <BusinessList />
      {/* <BusinessList /> */}
    </div>
  );
}

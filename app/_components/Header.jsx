import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <Image src="/logo.png" alt="logo" width={200} height={200} />
      <div className="flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full" />
        <Search />
      </div>
    </div>
  );
};

export default Header;

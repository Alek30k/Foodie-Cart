import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 md:px-20">
      <Image src="/logo.png" alt="logo" width={200} height={200} />
      <div className="flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full" />
        <Search />
      </div>
      <div className="flex gap-5">
        <Button variant="outline">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;

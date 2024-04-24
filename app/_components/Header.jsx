import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <Image src="/logo.png" alt="logo" width={200} height={200} />
      <div className="">
        <input type="text" className="" />
        <Search />
      </div>
    </div>
  );
};

export default Header;

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-sm ">
      <Image src="/logo.png" alt="logo" width={200} height={200} />
      <div className="flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full" />
        <Search />
      </div>
      <div className="flex gap-5">
        <SignInButton mode="modal">
          <Button variant="outline">Login</Button>
        </SignInButton>
        <SignUpButton>
          <Button>Sign Up</Button>
        </SignUpButton>
      </div>
    </div>
  );
};

export default Header;

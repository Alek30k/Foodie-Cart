"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartUpdateContext } from "../_context/CartUpdateContext";
import GlobalApi from "../_utils/GlobalApi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Cart from "./Cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, isSignedIn } = useUser();

  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    user && GetUserCart();
  }, [updateCart && user]);

  const GetUserCart = () => {
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setCart(resp?.userCarts);
      }
    );
  };

  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-md">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </Link>
      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full" />
        <Search className="text-primary" />
      </div>
      {isSignedIn ? (
        <div className="flex gap-3 items-center">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex gap-2 items-center cursor-pointer">
                <ShoppingCart />
                <label className="p-1 px-3 rounded-full  bg-slate-200 ">
                  {cart?.length}
                </label>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <Cart cart={cart} />
            </PopoverContent>
          </Popover>
          <UserButton afterSignOutUrl="/">
            <UserButton.UserProfilePage
              label="My Orders"
              labelIcon={<ShoppingBag />}
              url="my-orders"
            >
              <div>
                <h1>Custom Terms Page</h1>
                <p>This is the custom terms page</p>
              </div>
            </UserButton.UserProfilePage>
          </UserButton>
        </div>
      ) : (
        <div className="flex gap-5">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
};

export default Header;

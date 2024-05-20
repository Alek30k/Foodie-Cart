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

import MyOrders from "./MyOrders";

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

  const handleSearch = async (terminoBusqueda) => {
    console.log(terminoBusqueda);
    if (!terminoBusqueda) return; // Manejar término de búsqueda vacío

    const respuesta = await fetch(`/api/search?term=${terminoBusqueda}`); // Reemplazar con tu punto final de la API
    const datos = await respuesta.json();
    setResultadosBusqueda(datos.resultados); // Actualizar estado con resultados de búsqueda
  };

  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-md">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </Link>
      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input
          type="text"
          className="bg-transparent w-full"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />

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
              labelIcon={<ShoppingBag className="w-5 h-5" />}
              url="my-orders"
            >
              <MyOrders />
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

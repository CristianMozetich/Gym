// components/Nav/Nav.tsx
"use client";
import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../themeSwitcher";
import { signOut } from "next-auth/react";
import { Contexto } from "@/app/context/Contexto";
import MenuIcon from "@/app/icons/MenuIcon";
import CloseMenu from "@/app/icons/CloseMenu";
import { useState } from "react";
const Nav = () => {
  const logout = () => {
    localStorage.removeItem("token");
    signOut({ callbackUrl: "/" });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userId } = React.useContext(Contexto);

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/">
          <span className="text-button dark:text-slate-100">180</span>{" "}
          <span className="text-blue-500 dark:text-green-500">FUNCIONAL</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="md:flex hidden gap-4 justify-center">
        <NavbarItem isActive>
          <Link href="/pages/entrenamiento" color="foreground">
            Entrenamiento
          </Link>
        </NavbarItem>
        {userId && (
          <NavbarItem>
            <Link color="foreground" href="/pages/paneladmin">
              Panel Admin
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      {isMenuOpen ? (
        <>
          <Button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <CloseMenu />
          </Button>
        </>
      ) : (
        <Button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </Button>
      )}
      {isMenuOpen && (
        <NavbarContent className="flex flex-col md:hidden z-10 absolute h-screen top-16 right-0 w-1/2 bg-slate-300 dark:bg-black bg-opacity-90 backdrop-filter backdrop-blur-xl">
          <NavbarItem className="m-4" isActive>
            <Link
              href="/pages/entrenamiento"
              color="foreground"
              className="dark:hover:text-green-500 hover:text-blue-500"
            >
              Entrenamiento
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/pages/login"
              variant="flat"
              className="dark:text-blue-500 text-button"
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/pages/registro"
              variant="flat"
              className="dark:text-blue-500 text-button"
            >
              Registrarme
            </Button>
          </NavbarItem>
          {userId && (
            <NavbarItem>
              <Link color="foreground" href="/pages/paneladmin">
                Panel Admin
              </Link>
            </NavbarItem>
          )}
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarContent justify="end" className="hidden md:flex">
        {!userId ? (
          <>
            <NavbarItem>
              <Button as={Link} href="/pages/login" variant="flat">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} href="/pages/registro" variant="flat">
                Registrarme
              </Button>
            </NavbarItem>
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Button onClick={logout} color="primary" variant="flat">
                Sing Out
              </Button>
            </NavbarItem>
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;

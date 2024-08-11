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

const Nav = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/">
          180 FUNCIONAL
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex hidden gap-4 justify-center">
        <NavbarItem isActive>
          <Link href="/pages/entrenamiento" color="foreground">
            Entrenamiento
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/pages/paneladmin">
            Panel Admin
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex hidden">
          <Button>
            {" "}
            <Link href="/pages/registro">Registrarme</Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/pages/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={() => signOut()}>Sing Out</Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;

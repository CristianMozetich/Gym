// components/Nav/Nav.tsx
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

const Nav = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/">
          180 FUNCIONAL
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex hidden gap-4 justify-center">
        <NavbarItem>
          <Link href="/pages/entrenamiento" color="foreground">
            Mi Entrenamiento
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/pages/informacion" aria-current="page">
            Información Personal
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
          <Link href="/pages/registro">Registrarme</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/pages/login"
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;

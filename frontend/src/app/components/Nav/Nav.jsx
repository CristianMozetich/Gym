"use client";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between w-full h-12 bg-slate-300 items-center">
        <ul className="flex gap-4 ml-5">
          <Link href="/">Home</Link>
        </ul>
        <ul className="flex gap-4 mr-5">
          <Link href={"/pages/planadmin"}>PlanAdmin</Link>
          <Link href="/pages/registro">Registrarme</Link>
          <Link href="/pages/login">Iniciar Sesión</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

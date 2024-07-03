import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-96 justify-center grid grid-cols-12 bg-slate-300 dark:bg-gray-950 dark:text-white p-8">
      <div className="col-span-3 flex m-3 justify-start">
        <h1 className="text-5xl">180 Funcional</h1>
      </div>
      <div className="col-span-9 flex justify-between m-6 gap-8">
        <div className="m-5">
          <h2>Calle Pública 123</h2>
          <h2>Madrid, España</h2>
        </div>
        <div className="m-5">
          <h2>Linkedin</h2>
          <h2>Instagram</h2>
          <h2>Facebook</h2>
        </div>
        <div className="m-5">
          <form action="">
            <h1>Dejanos tu mensaje</h1>
            <input className="border border-solid rounded-lg" type="text" />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

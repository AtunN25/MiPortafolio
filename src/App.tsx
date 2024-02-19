import { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";

import "./App.css";
import "./index.css";

import { Header } from "./components/Header.tsx";
import { Navbar } from "./components/Navbar.tsx";

import { Presentation } from "./components/submains/Presentation.tsx";
import { Proyects } from "./components/submains/Proyect.tsx";
import { Contactme } from "./components/submains/Contactme.tsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("🙂Hi! Usa los iconos del panel izquierdo para moverte por las secciones");

  useEffect(() => {
    notify();
  }, []);

  const [nowpage, setnowpage] = useState("PRESENTACION");
  const isMobileOrTablet = useMediaQuery("(max-width: 768px)");

  return (
    <div className="h-screen  w-full  flex jetbrains-mono">
      <ToastContainer toastStyle={{  backgroundColor: 'green', 
      color: 'white' }} />
      {isMobileOrTablet ? (
        //responsive para tablet o celular
        <div className="w-full grid grid-cols-12 md:p-3">
          <div className=" md:p-2 col-span-12 flex flex-col  h-full ">
            <div className=" p-2 flex-1 overflow-y-auto ">
              <Presentation />
              <Proyects />
              <Contactme />
            </div>

            <div className="fixed md:p-1 w-full  h-12">
              <Navbar
                page={"hola soy main tu papa"}
                clickreturnpage={(namepage) => {
                  console.log(namepage);
                  setnowpage(namepage);
                }}
              ></Navbar>
            </div>
          </div>
        </div>
      ) : (
        //tamaño normal de escritorio
        <div className=" w-full grid grid-cols-12 p-3">
          <div className=" h-full px-6 py-2 col-span-1  ">
            <Navbar
              page={"hola soy main tu papa"}
              clickreturnpage={(namepage) => {
                console.log(namepage);
                setnowpage(namepage);
              }}
            ></Navbar>
          </div>

          <div className="col-span-11 flex flex-col h-full">
            <div className=" p-1 w-full h-12">
              <Header namePageHeader={nowpage}></Header>
            </div>

            <div className="  flex-1">
              {nowpage === "PRESENTACION" && <Presentation />}
              {nowpage === "PROYECTOS" && <Proyects />}
              {nowpage === "CONTACTAME" && <Contactme />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

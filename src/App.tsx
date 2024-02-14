import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

import "./App.css";
import "./index.css";

import { Header } from "./components/Header.tsx";
import { Navbar } from "./components/Navbar.tsx";

import { Presentation } from "./components/submains/Presentation.tsx";
import { Proyects } from "./components/submains/Proyect.tsx";
import { Contactme } from "./components/submains/Contactme.tsx";

function App() {
  const [nowpage, setnowpage] = useState("Presentation");
  const isMobileOrTablet = useMediaQuery("(max-width: 768px)");

  return (
    <div className="h-screen  w-full  flex">
      {isMobileOrTablet ? (
        //responsive para tablet o celular
        <div className="bg-orange-400 w-full  grid grid-cols-12 md:p-3">
          {/*<div className=" h-full px-2 py-3 col-span-1 ">
            <Navbar
              page={"hola soy main tu papa"}
              clickreturnpage={(namepage) => {
                console.log(namepage);
                setnowpage(namepage);
              }}
            ></Navbar>
            </div>*/}

          <div className="bg-slate-300 md:p-2 col-span-12 flex flex-col  h-full ">
            <div className="fixed md:p-1 w-full  h-12">
              <Navbar
                page={"hola soy main tu papa"}
                clickreturnpage={(namepage) => {
                  console.log(namepage);
                  setnowpage(namepage);
                }}
              ></Navbar>
            </div>

            <div className="bg-gray-800 p-2 flex-1 overflow-y-auto">
              <Presentation />
              <Proyects />
              <Contactme />
            </div>

            {
              // for the moment will use scroll
              /*<div className="bg-gray-800 p-2 flex-1">
              {nowpage === "Presentation" && <Presentation />}
              {nowpage === "Proyects" && <Proyects />}
              {nowpage === "Contactme" && <Contactme />}
              </div>*/
            }
          </div>
        </div>
      ) : (
        //tamaño normal de escritorio
        <div className=" w-full grid grid-cols-12 p-3">
          <div className=" h-full px-6 py-3 col-span-1  ">
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
              <Header></Header>
            </div>

            <div className="  flex-1">
              {nowpage === "Presentation" && <Presentation />}
              {nowpage === "Proyects" && <Proyects />}
              {nowpage === "Contactme" && <Contactme />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

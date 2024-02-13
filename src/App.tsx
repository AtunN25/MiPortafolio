import { useState } from "react";
import "./App.css";
import "./index.css";

import { Header } from "./components/Header.tsx";
import { Navbar } from "./components/Navbar.tsx";

import { Presentation } from "./components/submains/Presentation.tsx";
import { Proyects } from "./components/submains/Proyect.tsx";
import { Contactme } from "./components/submains/Contactme.tsx";


function App() {

  const [nowpage, setnowpage] = useState('Presentation');

  return (
    <div className="h-screen w-full bg-stone-600 flex  justify-center">
      <div className="bg-black w-10/12 grid grid-cols-12 p-3">
        <div className=" h-full px-2 py-3 col-span-1">
          <Navbar
            page={"hola soy main tu papa"}
            clickreturnpage={(namepage) => {
              console.log(namepage);
              setnowpage(namepage)
            }}
          ></Navbar>
        </div>

        <div className="col-span-11 flex flex-col h-full">
          <div className=" p-1 w-full h-12">
            <Header></Header>
          </div>

          <div className="bg-gray-800 p-2 flex-1">
            {nowpage === "Presentation" && <Presentation />}
            {nowpage === "Proyects" && <Proyects />}
            {nowpage === "Contactme" && <Contactme />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
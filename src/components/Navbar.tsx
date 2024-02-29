import Icon from "@mdi/react";
import {
  mdiHome,
  mdiContacts,
  mdiFolderPound,
  mdiWhatsapp,
  mdiLinkedin,
} from "@mdi/js";

import logosinsubtitulo from "../assets/logoChaparroSinSubtitulo.png";

interface navbarprops {
  page: string;
  clickreturnpage: (namepage: string) => void;
}

let Size = 0.8;

export function Navbar(props: navbarprops): JSX.Element {
  //console.log(props.page);

  const returnAtFather = (nameofdiv: string) => {
    props.clickreturnpage(nameofdiv);
  };

  return (
    <div className="bg-cyan-800 opacity-90 flex justify-between md:bg-teal-950 md:border-2 md:border-emerald-500 md:opacity-85 md:grid grid-cols-1 p-2 gap-5 md:w-14 md:h-full md:rounded-xl ">
      
      <div className=" flex md:grid grid-cols-1 justify-center items-start ">
        <div className="bg-slate-950  md:flex items-center md:justify-center rounded-xl ">
          <img
            className="w-9 "
            src={logosinsubtitulo}
            alt="Logo"
          ></img>
        </div>
      </div>

      <div className=" flex gap-3  md:grid grid-cols-1 items-center ">
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <button
            className="transform transition-transform hover:scale-150"
            name="btnPresentation"
            onClick={() => {
              returnAtFather("PRESENTACION");
            }}
          >
            <Icon path={mdiHome} size={Size} color="white" />
          </button>
        </div>
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <button
            className="transform transition-transform hover:scale-150"
            name="btnFolder"
            onClick={() => {
              returnAtFather("PROYECTOS");
            }}
          >
            <Icon path={mdiFolderPound} size={Size} color="white" />
          </button>
        </div>
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <button
            className="transform transition-transform hover:scale-150"
            name="btnContact"
            onClick={() => {
              returnAtFather("CONTACTAME");
            }}
          >
            <Icon path={mdiContacts} size={Size} color="white" />
          </button>
        </div>
      </div>

      <div className=" flex md:flex-col items-end gap-3 h-full justify-end">
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <a
            className="transform transition-transform hover:scale-150"
            href="https://www.linkedin.com/in/frank-chaparro-0b883428a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiLinkedin} size={Size} color="white" />
          </a>
        </div>
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl ">
          <a
            className="transform transition-transform hover:scale-150"
            href="
            https://wa.link/vtqooi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiWhatsapp} size={Size} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

import Icon from "@mdi/react";
import {
  mdiHome,
  mdiContacts,
  mdiFolderPound,
  mdiAccount,
  mdiGithub,
} from "@mdi/js";

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
    <div className="bg-lime-400  flex justify-between md:bg-teal-950 md:border-2 md:border-emerald-500 md:opacity-85 md:grid grid-cols-1 p-2 gap-5 md:w-14 md:h-full md:rounded-xl">
      <div className=" flex md:grid grid-cols-1 justify-center items-start ">
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <Icon path={mdiAccount} size={Size} color="white" />
        </div>
      </div>

      <div className="  flex gap-2 md:grid grid-cols-1 items-center">
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <button
            className="transform transition-transform hover:scale-150"
            name="btnPresentation"
            onClick={() => {
              returnAtFather("Presentation");
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
              returnAtFather("Proyects");
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
              returnAtFather("Contactme");
            }}
          >
            <Icon path={mdiContacts} size={Size} color="white" />
          </button>
        </div>
      </div>

      <div className="flex  md:grid grid-cols-1 justify-center items-end ">
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <button className="transform transition-transform hover:scale-150" >
            <Icon path={mdiGithub} size={Size} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

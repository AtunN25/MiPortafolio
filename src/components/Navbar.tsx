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
  clickreturnpage: (namepage: string) => void
}

let Size = 1.2;

export function Navbar(props: navbarprops): JSX.Element {
  //console.log(props.page);

  const returnAtFather = (nameofdiv:string) => {
    props.clickreturnpage(nameofdiv)
  }

  return (
    
    <div className="bg-slate-50 grid grid-cols-1 p-2 gap-5 w-16 h-full rounded-xl ">
      <div className=" grid grid-cols-1 justify-center items-start ">
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <Icon path={mdiAccount} size={Size} color="white" />
        </div>
      </div>

      <div className="grid grid-cols-1 items-center">
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <button name="btnPresentation" onClick={() => {
              returnAtFather('Presentation')
          }}>
            <Icon path={mdiHome} size={1.2} color="white" />
          </button>
        </div>
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <button className="btnFolder" onClick={() => {
              returnAtFather('Proyects')
          }}>
            <Icon path={mdiFolderPound} size={1.2} color="white" />
          </button>
        </div>
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <button className="btnContact" onClick={() => {
              returnAtFather('Contactme')
          }}>
            <Icon path={mdiContacts} size={1.2} color="white" />
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-1 justify-center items-end  ">
        <div className="bg-slate-950 p-2 flex items-center justify-center rounded-xl">
          <Icon path={mdiGithub} size={Size} color="white" />
        </div>
      </div>
    </div>
  );
}

import "../index.css";
//import {SubNavbar} from './subNavbar'

import Icon from '@mdi/react';
import { mdiVectorSquareMinus } from '@mdi/js';



export function Header() {
  return (
    <div className=" flex justify-between grid-cols-3 py-2  h-full">
      <div className=" md:bg-slate-50 md:opacity-75 p-1 w-64 rounded-lg flex items-center px-3">
      <h1 className="">subtitulos</h1>
      </div>

      <div className="  p-1 flex justify-center h-full rounded-lg">
        {/*<SubNavbar></SubNavbar>*/}
        
      </div>

      <div className=" md:bg-slate-50 md:opacity-75 px-2 py-0.5 w-16 rounded-lg">
        <div className="bg-gray-950 flex  justify-center rounded-lg">
          <Icon path={mdiVectorSquareMinus} size={0.8} color="white"/>
        </div>
      </div>
    </div>
  );
}

import "../../index.css";
import { Subtema } from "./subparts/Subtema.tsx";

export function Proyects() {
  return (
    <div className="pt-3 md:pt-2   md:grid grid-cols-2 p-1 gap-5 md:h-full pb-3 text-white ">
      <div className="bg-neutral-800 border-2 border-cyan-300 opacity-85 h-full rounded-lg divcircle hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
        <div>
          <Subtema subnamePageHeader={"PROYECTOS"} />
        </div>
      </div>

      <div className=" bg-neutral-800 border-2 border-cyan-300 opacity-85 h-full rounded-lg flex flex-col divcircle hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
        <div>
          <Subtema subnamePageHeader={"TAREAS"} />
        </div>
        <div className=" grid grid-cols-3 p-3 gap-2">
          <div className="flex-grow">
            <div className=" border-2 border-white rounded shadow-lg ">
              <img
                className="w-full"
                src="/src/assets/fondo.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-3 py-2">
                <div className="font-bold ">Nodos y referencias</div>
                <div className="overflow-auto">
                  <h6 className="text-xs">
                    Trabajo grupal para el curso de Estructura de Datos usando
                    nodos y referencias,simulando punteros.
                  </h6>
                  <div className="flex justify-between py-2 w-full">
                    <div className="flex">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/48/html-5--v1.png"
                        alt="html-5--v1"
                      />

                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/48/css3.png"
                        alt="css3"
                      />
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/48/javascript--v1.png"
                        alt="javascript--v1"
                      />
                    </div>
                    <div className="flex gap-1 ">
                      <a
                        href="https://github.com/AtunN25/grupo_10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-slate-100"
                      >
                        <img
                          width="32"
                          height="32"
                          src="https://img.icons8.com/ios-glyphs/30/github.png"
                          alt="github"
                          className="bg-slate-400 border-2 border-white rounded-sm hover:bg-slate-100"
                        />
                      </a>
                      <a
                        href="https://atunn25.github.io/grupo_10/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          width="32"
                          height="32"
                          src="https://img.icons8.com/fluency-systems-regular/48/webpage-scrolling-down.png"
                          alt="webpage-scrolling-down"
                          className="bg-slate-400  border-2 border-white rounded-sm hover:bg-slate-100"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

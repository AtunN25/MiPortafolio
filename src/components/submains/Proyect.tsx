import "../../index.css";
import { Subtema } from "./subparts/Subtema.tsx";
import { SubProyect } from "./subparts/SubProyect.tsx";

export function Proyects() {
  return (
    <div className="pt-3 md:pt-2  md:grid grid-cols-2 p-1 gap-5 md:h-full pb-3 text-white ">
      <div className="bg-neutral-800 border-2 border-cyan-300 opacity-90 h-full rounded-lg divcircle hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
        <div>
          <Subtema subnamePageHeader={"PROYECTOS"} />
        </div>
        <div className=" grid grid-cols-3 p-3 gap-2">
          {/*PROYECTOS*/}
          <SubProyect
            urlimage={"/src/assets/imageproyects/proyectIO.PNG"}
            nameproyect={"Teoria de Decisiones"}
            description={"Simulador del Tema de teoria de deciones bajo certidumbre en una pagina web , para el curso de Investigacion Operativa"}
            arrayurlicons={["https://img.icons8.com/color/48/html-5--v1.png","https://img.icons8.com/color/48/tailwindcss.png","https://img.icons8.com/color/48/javascript--v1.png"]
          }
           urlgit={"https://github.com/AtunN25/TeoriaDeDecisiones"}
           urlproyect={"https://atunn25.github.io/TeoriaDeDecisiones/"}
          ></SubProyect>
        </div>
      </div>

      <div className=" bg-neutral-800 border-2 border-cyan-300 opacity-90 h-full rounded-lg flex flex-col divcircle hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f] mt-4 md:mt-0">
        <div>
          <Subtema subnamePageHeader={"TAREAS"} />
        </div>
        <div className=" grid grid-cols-3 p-3 gap-2">
          {/*TAREAS*/}
          <SubProyect
            urlimage={"/src/assets/imageproyects/Estructuradedatos.PNG"}
            nameproyect={"Nodos y Referencias"}
            description={"Trabajo grupal para el curso de Estructura de Datos usando nodos y referencias,simulando punteros.1"}
            arrayurlicons={["https://img.icons8.com/color/48/html-5--v1.png","https://img.icons8.com/color/48/css3.png","https://img.icons8.com/color/48/javascript--v1.png"]
          }
          urlgit={"https://github.com/AtunN25/grupo_10"}
          urlproyect={"https://atunn25.github.io/grupo_10/"}
          ></SubProyect>
        </div>
      </div>
    </div>
  );
}

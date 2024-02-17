export function Proyects() {
  return (
    <div className="pt-10 md:pt-3  md:grid grid-cols-2 p-1 gap-5 md:h-full pb-3 text-white ">
      <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg">
        <div>
          <h1>Proyectos</h1>
        </div>
      </div>

      <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg p-3 gap-2 flex flex-col">
        <div>
          <h1>Tareas</h1>
        </div>
        <div className="grid  grid-cols-3 flex-grow">
          <div className=" border-2 border-white rounded overflow-hidden shadow-lg h-1/2">
            <img
              className="w-full"
              src="/src/assets/fondo.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-3 py-2">
              <div className="font-bold ">Nodos y referencias</div>
              <div className="overflow-auto">
                <h6 className="text-sm">
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
                  <div className="flex gap-1">
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/ios-glyphs/30/github.png"
                      alt="github"
                      className="bg-slate-400 border-2 border-white rounded-sm"
                    />
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/fluency-systems-regular/48/webpage-scrolling-down.png"
                      alt="webpage-scrolling-down"
                      className="bg-slate-400  border-2 border-white rounded-sm "
                    />
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

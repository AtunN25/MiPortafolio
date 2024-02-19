import Icon from "@mdi/react";
import { mdiGithub, mdiFilePdfBox } from "@mdi/js";
import "../../index.css";
import { Subtema } from "./subparts/Subtema.tsx";

export function Presentation() {
  return (
    <div className=" pt-12 md:pt-0  md:grid grid-cols-2 gap-1 p-1 md:h-full ">
      <div className=" col-span-1  md:pt-1">
        {/*ME*/}
        <div className="pt-1 divcircle md:px-0 h-2/5 md:pr-2 ">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-90 h-full rounded-lg  gap-2 hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
            <Subtema subnamePageHeader={"HERRAMIENTAS Y LENGUAJES"} />

            <div className="grid grid-cols-10 p-2">
              <div className="col-span-6 p-3 text-white">
                <div>
                  <h2 className=" font-bold text-lg">Hola!</h2>
                  <h1 className="text-auto">
                    Soy <span className="font-bold text-lg text-green-500">Frank Chaparro</span>
                  </h1>
                  <h1 className="text-auto">
                    Estudiante de <span className="font-bold text-yellow-400">Ingenieria en sistemas e informatica</span>
                  </h1>
                  <h1 className="font-bold text-blue-500">Me gusta desarrollar software</h1>
                </div>
                <br></br>
                <div className=" flex gap-2 md:gap-4 ">
                  <a
                    className="flex items-center bg-transparent hover:bg-cyan-600 text-cyan-300 font-semibold hover:text-white  px-4 border border-cyan-300 hover:border-transparent rounded"
                    href="/src/assets/CV Frank Chaparro.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon path={mdiFilePdfBox} size={1} className="mr-2" /> CV
                  </a>
                  <a
                    className="flex items-center bg-transparent hover:bg-cyan-600 text-cyan-300 font-semibold hover:text-white py-2 px-4 border border-cyan-300 hover:border-transparent rounded"
                    href="https://github.com/AtunN25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon path={mdiGithub} size={1} className="mr-2" /> Git
                  </a>
                </div>
              </div>

              <div className=" rounded-lg bg-slate-50 col-span-4 p-2 h-auto flex items-center justify-center">
                <img
                  className="w-48 h-48 flex rounded-lg"
                  src="/src/assets/mifoto.jpg"
                  alt="Logo"
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/*DIV ABOUT ME*/}
        <div className="divcircle pt-3 h-3/5 md:px-0 pl-0 md:pr-2 md:pb-2 mt-1 md:mt-0">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-90 h-full rounded-lg text-white  hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
            <Subtema subnamePageHeader={"SOBRE MI"} />
            <br></br>
            <div className="pl-2 text-sm">
              <p>
                Soy Frank, un estudiante <span className="text-cyan-400">apasionado del desarrollo software</span> de ,
                donde cada <span className="text-cyan-400">obstáculo es una oportunidad para crecer y aprender.</span>
                En este emocionante mundo de la programación, nuestras ideas
                pueden cobrar vida con dedicación y esfuerzo. <span className="text-cyan-400">Con constancia y
                determinación, el éxito está al alcance </span> de aquellos que se
                atreven a perseguirlo.
              </p>
            </div>

            <div className=" grid grid-cols-2 p-3">
              <div className=" rounded-lg">
                <h1 className="font-bold italic text-lime-300">Educacion:</h1>
                <br></br>

                <ul className="pl-7 list-disc italic text-sm">
                  <li>
                    &ensp;Ingenieria de Informatica y Sistemas Universidad
                    Nacional Jorge Basadre Grohmann 2021-actualidad
                  </li>

                  <li>
                    {" "}
                    &ensp;Ingles - intermedio Centro de Idiomas Universidad
                    Nacional Jorge Basadre 2023-actualidad
                  </li>
                </ul>
              </div>

              <div className=" rounded-lg ">
                <h1 className="font-bold italic text-lime-300">Conocimientos :</h1>
                <br></br>
                <ul className="pl-7 list-disc italic text-sm">
                  <li>Conocimiento en SO linux</li>
                  <li>Conomiento en metologias agiles</li>
                  <li>Manejo de base de datos</li>
                  <li>Resolucion de problemas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" col-span-1 divcircle md:pl-2">
        {/*DIV JSON*/}
        <div className="pt-4 h-3/6 md:p-2 md:px-0">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-90 h-full rounded-lg  hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
            <Subtema subnamePageHeader={"DETALLES"} />
            <div className=" px-3 flex-1">
              <table className="text-white rounded-md font-medium ">
                <thead>
                  <tr>
                    <th className="w-8"></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{"{ "}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <span className="text-lime-400 text-lg font-thin">
                        &nbsp;&nbsp;&nbsp;&nbsp;"fullname":
                      </span>{" "}
                      <span className="text-violet-400 text-lg">
                        "Frank Aldair Chaparro Perca",
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <span className="text-lime-400 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"age":
                      </span>{" "}
                      <span className="text-red-400 text-lg">22,</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <span className="text-lime-400 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"country":
                      </span>{" "}
                      <span className="text-violet-400 text-lg">"Peru",</span>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <span className="text-lime-400 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"college":
                      </span>{" "}
                      <span className="text-violet-400 text-lg">
                        "Universidad Nacional Jorge Basadre Grohmann",
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <span className="text-lime-400 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"career":
                      </span>{" "}
                      <span className="text-violet-400 text-lg">
                        "Ingeniería de Sistemas",
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <span className="text-lime-400 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"cycle":
                      </span>{" "}
                      <span className="text-violet-400 text-lg">"7mo.",</span>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      <span className="text-lime-400 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"other_languages":
                      </span>{" "}
                      <span className="text-violet-400 text-lg">
                        "Ingles(intermedio)"
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>{"}"}</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>{""}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*DIV TOOLS*/}
        <div className="pt-4 h-3/6 md:p-2 divcircle md:px-0">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-90 h-full rounded-lg gap-2  hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
            <Subtema subnamePageHeader={"HERRAMIENTAS Y LENGUAJES"} />
            <div className=" p-2 flex-1 overflow-auto">
              <div className="  grid grid-cols-6 p-2 gap-2">
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/html-5.png"
                    alt="Logo"
                  ></img>
                </div>

                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/css.png"
                    alt="Logo"
                  ></img>
                </div>

                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/js.png"
                    alt="Logo"
                  ></img>
                </div>

                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/php.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/react.svg"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/servidor-sql.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/typescript.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/linux.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/git.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/figma.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/c++.png"
                    alt="Logo"
                  ></img>
                </div>

                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/microsoft-office.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/tailwind-css.svg"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-300 flex items-center justify-center rounded-md h-20 p-2 hover:scale-110">
                  <img
                    className="h-18 w-16 "
                    src="/src/assets/Vitejs-logo.svg.png"
                    alt="Logo"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

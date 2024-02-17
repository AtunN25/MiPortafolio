import Icon from "@mdi/react";
import { mdiGithub, mdiFilePdfBox } from "@mdi/js";

export function Presentation() {
  return (
    <div className="  pt-14 md:pt-0  md:grid grid-cols-2 gap-1 p-1 md:h-full">
      <div className=" col-span-1 ">
        {/*ME*/}
        <div className=" h-2/5 p-2 pl-0 ">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg grid grid-cols-10 p-2 gap-2">
            <div className="col-span-6 p-3 text-white">
              <div >
                <h1 className="text white">
                  Hola!
                </h1>
                <h1 className="text white">
                  Soy Frank Chaparro
                </h1>
                <h1 className="text white">
                  Soy estudiante de Ingenieria en sistemas e informatica
                </h1>
                <h1 className="text white">Me gusta desarrollar software</h1>
              </div>
              <br></br>
              <div className=" flex gap-4">
                <a className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded"
                 href="/src/assets/CV Frank Chaparro.pdf"
                 target="_blank"
                 rel="noopener noreferrer">
                  <Icon path={mdiFilePdfBox} size={1} className="mr-2" /> CV
                </a>
                <a className="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                 href="https://github.com/AtunN25"
                 target="_blank"
                 rel="noopener noreferrer">
                  <Icon path={mdiGithub} size={1} className="mr-2" /> Git
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-slate-50 col-span-4"></div>
          </div>
        </div>

        {/*DIV ABOUT ME*/}
        <div className=" h-3/5 p-2 pl-0">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg text-white p-2">
            <div>
              <h1>Sobre mi</h1>
            </div>
            <br></br>
            <div className="pl-2 ">
              <p>
                Buenos dias , me llamo Frank , me gusta el desarrollo de
                software y poder aplicar lo aprendido, sin miedo a nuevos
                desafios puesto que en esta profesion uno nunca deja de
                aprender.
              </p>
            </div>

            <br></br>

            <div className=" grid grid-cols-2 p-2">
              <div className=" rounded-lg">
                <h1>Educacion</h1>
                <br></br>

                <ul className="pl-7 list-disc">
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
                <h1>Habilidades</h1>
                <br></br>
                <ul className="pl-7 list-disc">
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

      <div className=" col-span-1 ">
        {/*DIV JSON*/}
        <div className=" h-3/6 p-2">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg p-3">
            <div>
              <table className="text-white  p-5 rounded-md">
                <thead>
                  <tr>
                    <th className="w-8"></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>{"{ "}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <span className="text-red-500 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"fullname":
                      </span>{" "}
                      <span className="text-green-500 text-lg">
                        "Frank Aldair Chaparro Perca",
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <span className="text-red-500 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"age":
                      </span>{" "}
                      <span className="text-orange-400 text-lg">22,</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <span className="text-red-500 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"country":
                      </span>{" "}
                      <span className="text-green-500 text-lg">"Peru",</span>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <span className="text-red-500 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"college":
                      </span>{" "}
                      <span className="text-green-500 text-lg">
                        "Universidad Nacional Jorge Basadre Grohmann",
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <span className="text-red-500 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"career":
                      </span>{" "}
                      <span className="text-green-500 text-lg">
                        "Ingeniería de Sistemas",
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <span className="text-red-500 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"cycle":
                      </span>{" "}
                      <span className="text-green-500 text-lg">"7mo.",</span>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      <span className="text-red-500 text-lg">
                        &nbsp;&nbsp;&nbsp;&nbsp;"other_languages":
                      </span>{" "}
                      <span className="text-green-500 text-lg">
                        "Ingles(intermedio)"
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>{"}"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*DIV TOOLS*/}
        <div className=" h-3/6 p-2">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg gap-2 p-2">
            <div className=" h-6">
              <h1 className="text-white ">Herramientas y lenguages:</h1>
            </div>
            <div className=" p-2 flex-1 overflow-auto">
              <div className="  grid grid-cols-6 p-2 gap-2">
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/html-5.png"
                    alt="Logo"
                  ></img>
                </div>

                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/css.png"
                    alt="Logo"
                  ></img>
                </div>

                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/js.png"
                    alt="Logo"
                  ></img>
                </div>

                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/php.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/react.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/servidor-sql.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/typescript.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/linux.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/git.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/figma.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/c++.png"
                    alt="Logo"
                  ></img>
                </div>

                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/microsoft-office.png"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
                    src="/src/assets/tailwind-css.svg"
                    alt="Logo"
                  ></img>
                </div>
                <div className="bg-slate-700 flex items-center justify-center rounded-md h-20 p-2">
                  <img
                    className="h-18 w-16"
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

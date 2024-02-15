export function Presentation() {
  return (
    <div className="pt-14 md:pt-0  grid grid-cols-2 gap-1 p-1 h-full">
      <div className=" col-span-1 ">
        {/*ME*/}
        <div className=" h-2/5 p-2 pl-0">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg grid grid-cols-10 p-2 gap-2">
            <div className="bg-red-300 col-span-6 ">
              <h1 className="text white"> I'm Frank Chaparro</h1>
              <h1 className="text white">
                Student of Ingeneried in informatic and systems
              </h1>
              <h1 className="text white">22 years old</h1>
              <h1 className="text white">I like developing software.</h1>
            </div>

            <div className="rounded-lg bg-slate-50 col-span-4"></div>
          </div>
        </div>

        {/*DIV ABOUT ME*/}
        <div className=" h-3/5 p-2 pl-0">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg text-white">
            <h1>ABOUT ME</h1>
            <p>
              {" "}
              Buenos dias , me llamo Frank , me gusta el desarrollo de software
              y poder aplicar lo aprendido, sin miedo a nuevos desafios puesto
              que en esta profesion una nunca deja de aprender y donde todo lo
              que imaginemos se pueda programar.
            </p>
            <h1>EDUCATION</h1>
            <p>
              Ingenieria de Informatica y Sistemas Universidad Nacional Jorge
              Basadre Grohmann 2021-actualidad{" "}
            </p>
            <br></br>
            <p>
              Ingles - intermedio Centro de Idiomas Universidad Nacional Jorge
              Basadre 2023-actualidad{" "}
            </p>
          </div>
        </div>
      </div>

      <div className=" col-span-1 ">
        {/*DIV JSON*/}
        <div className=" h-3/6 p-2">
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg p-3">
            <div>
              <table className="text-white bg-gray-900 p-5 rounded-md">
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
                        "english (intermedio)"
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
          <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg">
            <div className="bg-orange-300 h-1/8">
              <h1 className="text-white">Tools and lenguages:</h1>
            </div>
            <div className="bg-lime-400 grid grid-cols-6 p-2 gap-2 ">
              {/*<div className="bg-slate-500 ">
                  <img className="" src="/src/assets/css.png" alt="Logo"></img>
                </div>*/}

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/html-5.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/css.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/js.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/tailwind-css.svg" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/servidor-sql.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/git.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/php.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/c++.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/react.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/Vitejs-logo.svg.png" alt="Logo"></img>
              </div>

              <div className="bg-slate-700 h-1/2">
                <img className="" src="/src/assets/typescript.png" alt="Logo"></img>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

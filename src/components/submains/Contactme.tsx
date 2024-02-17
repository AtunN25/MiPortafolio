export function Contactme() {
  return (
    <div className="pt-10  md:pt-3 md:grid grid-cols-2 gap-5 p-1 md:h-full pb-3">
      <div className="bg-neutral-800 border-2 border-cyan-300  md:h-full rounded-lg">
        <div className="relative h-[650px] rounded-lg shadow-lg r dark:shadow-black/20 flex justify-center items-center p-4 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15178.275423829606!2d-70.24252501103089!3d-17.998785028566807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ac59e303c5e97%3A0x68da2cd60620089!2sDistrito%20de%20Pocollay%2C%20Tacna!5e0!3m2!1ses-419!2spe!4v1693185595511!5m2!1ses-419!2spe"
            className=" left-0 top-0 h-full w-full rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="py-5 col-span-1 flex flex-col gap-3">
        <div className="bg-neutral-800 border-2 border-cyan-300 opacity-85 rounded-lg h-4/6 mb-2">
          <form className="px-8 pt-6 pb-8 mb-4 rounded">
            <div className="mb-4 grid grid-cols-2">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-64 px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className=" mb-4 ">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="Mensaje"
              >
                Mensaje
              </label>
              <textarea
                className=" rounded-md w-full h-32 px-3 py-2"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 dark:bg-blue-700 dark:text-white  focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
        <div className="p-2 text-white bg-neutral-800 border-2 border-cyan-300 opacity-75 rounded-lg h-2/6"> Es la primera version de mi portafolio y la seguire mejorando de acuerdo al diseño en figma con mas efectos.</div>
      </div>
    </div>
  );
}

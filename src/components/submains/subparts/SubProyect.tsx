interface descriptionProyects {
  urlimage: string,
  nameproyect: string,
  description: string,
  arrayurlicons: string[],
  urlgit: string,
  urlproyect: string,
}

export function SubProyect(props: descriptionProyects): JSX.Element {
  return (
    <div className="flex-grow">
      <div className=" border-2 border-white rounded shadow-lg hover:scale-105">
        <img
          className="w-full"
          src={props.urlimage}
          alt="Sunset in the mountains"
        />
        <div className="px-3 py-2">
          <div className="font-bold ">{props.nameproyect}</div>
          <div className="overflow-auto">
            <h6 className="text-xs">{props.description}</h6>
            <div className="flex justify-between py-2 w-full">
              <div className="flex">
                {
                  //es necesario usar index para una lista en react haciendo uso de la funcion map
                  props.arrayurlicons.map((item, index) => {
                    return (
                      <img
                        key={index}
                        width="32"
                        height="32"
                        src={item}
                        alt="html-5--v1"
                      />
                    );
                  })
                }
              </div>
              <div className="flex gap-1 ">
                {/*LINK GIT */}
                <a
                  href={props.urlgit}
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
                {/*LINK PROYECT*/}
                <a
                  href={props.urlproyect}
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
  );
}

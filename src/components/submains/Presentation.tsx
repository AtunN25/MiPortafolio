export function Presentation() {
  return (
    <div className="pt-14 md:pt-0  grid grid-cols-2 gap-1 p-1 h-full">
      
      <div className=" col-span-1 ">
        <div className=" h-2/5 p-2 pl-0">
         <div className="bg-neutral-800 border-2 border-x-amber-400  border-y-rose-600 opacity-75 h-full rounded-lg ">
           <p>div 1</p>
          </div>
        </div>
        <div className=" h-3/5 p-2 pl-0">
        <div className="bg-neutral-800 border-2 border-teal-200 opacity-75 h-full rounded-lg">
           <p>div 2</p>
          </div>
        </div>
      </div>

      <div className=" col-span-1 ">
        <div className=" h-3/5 p-2">
         <div className="bg-neutral-800 border-2 border-cyan-300 opacity-75 h-full rounded-lg">
           <p>div 3</p>
          </div>
        </div>
        <div className=" h-2/5 p-2">
        <div className="bg-neutral-800 border-2 border-y-lime-300 opacity-75 h-full rounded-lg">
           <p>div 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Presentation() {
  return (
    <div className="pt-14 md:pt-0 bg-orange-600 grid grid-cols-2 gap-1 p-1 h-full">
      
      <div className="bg-amber-800 col-span-1 p-2">
        <div className="bg-stone-300 h-2/5 p-2">
         <div className="bg-slate-400 h-full ">
           <p>div 1</p>
          </div>
        </div>
        <div className="bg-green-300 h-3/5 p-2">
        <div className="bg-slate-400 h-full ">
           <p>div 2</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-800 col-span-1 p-2">
        <div className="bg-stone-300 h-3/5 p-2">
         <div className="bg-slate-400 h-full ">
           <p>div 3</p>
          </div>
        </div>
        <div className="bg-green-300 h-2/5 p-2">
        <div className="bg-slate-400 h-full ">
           <p>div 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

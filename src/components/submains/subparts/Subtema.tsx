import "../../../index.css";



export function Subtema(props: {subnamePageHeader: string}) {
  return (
    <div className="rounded-t-lg px-1 bg-neutral-900 flex h-6 justify-between ">
      
      <div className="flex items-center gap-1 pr-2">
        <div className="w-4 h-4 rounded-full circle1" />
        <div className="w-4 h-4 rounded-full circle2" />
        <div className="w-4 h-4 rounded-full circle3" />
      </div>

      <div>
        <h1 className="text-white px-2">{props.subnamePageHeader}</h1>
      </div>

      <div>
      </div>
      
    </div>
  );
}

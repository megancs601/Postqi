export default function Controls() {
  return (
    <div className="m-auto flex justify-between py-4 ">
      <div className="flex space-x-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
            search
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-64 bg-gray-900 pl-10 pr-2 h-full w-96"
          />
        </div>
        <button className="flex items-center justify-center gap-2 border border-slate-700 text-slate-300 rounded-md w-24 hover:bg-slate-700">
          <span className="material-symbols-outlined">filter_list</span>
          Filter
        </button>
      </div>
      <ul className="flex border border-slate-700 rounded-md p-1">
        <li className="flex items-center justify-center text-center">
          <button className="material-symbols-outlined h-auto w-10 hover:bg-slate-700 rounded-sm px-1">
            width_normal
          </button>
        </li>
        <li className="flex items-center justify-center text-center">
          <button className="material-symbols-outlined w-10 hover:bg-slate-700 rounded-sm px-1">
            view_list
          </button>
        </li>
        <li className="flex items-center justify-center text-center">
          <button className="material-symbols-outlined w-10 hover:bg-slate-700 rounded-sm px-1">
            dark_mode
          </button>
        </li>
      </ul>
    </div>
  );
}

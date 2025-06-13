import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Controls() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section aria-label="View controls" className="flex py-4 space-x-4">
      <div className="flex space-x-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
            search
          </span>
          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <input
            id="search-input"
            type="text"
            placeholder="Search"
            className="w-64 bg-gray-900 pl-10 pr-2 h-full w-96"
          />
        </div>
        <button
          aria-label="List view"
          className="flex items-center justify-center gap-2 border border-slate-700 text-slate-300 rounded-md w-24 hover:bg-slate-700"
        >
          <span className="material-symbols-outlined">filter_list</span>
          Filter
        </button>
      </div>
      <div role="group" aria-label="Display mode">
        <ul className="flex border border-slate-700 rounded-md p-1">
          <li className="flex items-center justify-center text-center">
            <button
              type="button"
              aria-label="Column view"
              className="material-symbols-outlined h-auto w-10 hover:bg-slate-700 rounded-sm px-1"
            >
              width_normal
            </button>
          </li>
          <li className="flex items-center justify-center text-center">
            <button
              type="button"
              aria-label="List view"
              className="material-symbols-outlined w-10 hover:bg-slate-700 rounded-sm px-1"
            >
              view_list
            </button>
          </li>
          <li className="flex items-center justify-center text-center">
            <button
              type="button"
              aria-label="Toggle theme mode"
              className="material-symbols-outlined w-10 hover:bg-slate-700 rounded-sm px-1"
            >
              dark_mode
            </button>
          </li>
        </ul>
      </div>
      <button
        type="button"
        aria-label="User account"
        className="material-symbols-outlined h-auto w-10 hover:bg-slate-700 rounded-sm px-1"
        style={{ fontSize: "30px" }}
        onClick={logoutHandler}
      >
        account_circle
      </button>
    </section>
  );
}

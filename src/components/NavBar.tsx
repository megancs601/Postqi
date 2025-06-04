export default function NavBar() {
  return (
    <nav className="min-w-64 bg-gray-900 border-r border-slate-700 p-4">
      <h1 className="m-auto mb-7 text-2xl text-center text-sky-500">Postqi</h1>
      <ul>
        <li>
          <button
            type="button"
            aria-label="View all tasks"
            className="flex items-center w-full h-10 rounded-md hover:bg-slate-700 text-left"
          >
            <span className="material-symbols-outlined p-4">home</span>
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-label="View today's task"
            className="flex items-center w-full h-10 rounded-md hover:bg-slate-700 text-left"
          >
            <span className="material-symbols-outlined p-4">today</span>
            Today
          </button>
        </li>
      </ul>
    </nav>
  );
}

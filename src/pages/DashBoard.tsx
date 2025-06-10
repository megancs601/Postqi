import NavBar from "../components/NavBar";
import Controls from "../components/Controls";
import KanbanBoard from "../components/KanbanBoard";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <NavBar />
      <main
        className="flex flex-col w-full h-full px-4"
        aria-label="Dashboard workspace"
      >
        <Controls />
        <KanbanBoard />
      </main>
    </div>
  );
}

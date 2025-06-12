import NavBar from "../components/NavBar";
import Controls from "../components/Controls";
import KanbanBoard from "../components/KanbanBoard";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Provider store={store}>
        <NavBar />
        <main
          className="flex flex-col w-full h-full px-4"
          aria-label="Dashboard workspace"
        >
          <Controls />
          <KanbanBoard />
        </main>
      </Provider>
    </div>
  );
}

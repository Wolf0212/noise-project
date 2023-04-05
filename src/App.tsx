import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <main className="w-full h-full flex flex-col overflow-hidden">
      <div className="flex gap-10 justify-center">
        <Link to={""}>Home</Link>
        <Link to={"artworks"}>Artworks</Link>
        <Link to={"about"}>About</Link>
      </div>
      <Outlet />
    </main>
  );
}

export default App;

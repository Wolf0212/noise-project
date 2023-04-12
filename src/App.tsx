import { Link, Outlet, useLocation } from "react-router-dom";
import NavLink from "./components/NavLink";

function App() {
  const location = useLocation();

  console.log(location.pathname.split("/")[1]);

  return (
    <main className="w-full h-full flex flex-col overflow-auto overflow-x-hidden relative">
      {location.pathname.split("/")[1] !== "interactive" && (
        <div className="flex gap-8 justify-center mt-10">
          <NavLink url="interactive" name="interactive" /> |
          <NavLink url="gallery" name="gallery" /> |
          <NavLink url="about" name="about" />
        </div>
      )}

      <Outlet />
      {location.pathname !== "/" &&
        location.pathname.split("/")[1] !== "interactive" && (
          <Link
            to=""
            className="absolute bottom-4 left-4 p-2 border border-white flex items-center justify-center rounded-full hover:text-black hover:bg-white duration-300"
          >
            <span className="material-symbols-outlined rotate-180">
              play_arrow
            </span>
          </Link>
        )}
    </main>
  );
}

export default App;

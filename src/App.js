import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import useBearStore from "./state/State";
import Header from "./UI/Header/Header";
import Sidebar from "./UI/Sidebar/Sidebar";

function App() {
  const isUserValid = useBearStore((state) => state.isUserValid);

  return (
    <div>
      {isUserValid ? (
        <div>
          <Header className='header' />
          <div className='d-flex'>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </div>
  );
}

export default App;

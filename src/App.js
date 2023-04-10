import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import useBearStore from "./state/State";
import Header from "./UI/Header/Header";
import Sidebar from "./UI/Sidebar/Sidebar";

function App() {
  const isUserValid = useBearStore((state) => state.isUserValid);

  console.log(isUserValid);

  return (
    <div>
      {isUserValid ? (
        <div>
          <Header />
          <div className='d-flex'>
            <Sidebar />
            <div style={{ padding: "6rem" }}>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </div>
  );
}

export default App;

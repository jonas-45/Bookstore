import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Root;
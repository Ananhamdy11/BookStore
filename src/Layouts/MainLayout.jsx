import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Details from "../components/Details/Details";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Outlet />
      <Hero/>
      <Details/>
    </div>
  );
}

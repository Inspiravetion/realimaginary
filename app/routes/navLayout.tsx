import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { navRoutes } from "~/routes";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar toggleOpen={() => setIsOpen(!isOpen)} />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        {isOpen ? <NavMenu /> : null}
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const NavMenu = () => {
  return (
    <nav
      style={{
        padding: "36px",
        backgroundColor: "#666",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavLink style={{ marginBottom: "12px" }} to={navRoutes.home()}>
          Home
        </NavLink>
        <NavLink style={{ marginBottom: "12px" }} to={navRoutes.modules.home()}>
          Modules
        </NavLink>
        <NavLink style={{ marginBottom: "12px" }} to={navRoutes.resources.home()}>
          Resources
        </NavLink>
      </ul>
    </nav>
  );
};

const NavBar = ({ toggleOpen }: { toggleOpen: () => void }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: "60px", height: "60px", backgroundColor: "#ccc" }}
        onClick={toggleOpen}
      ></div>
      <div style={{ flex: 1, backgroundColor: "#999" }}></div>
    </div>
  );
};

const Footer = () => {
  return <div style={{ height: "120px", backgroundColor: "#333" }}></div>;
};

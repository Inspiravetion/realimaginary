import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div style={{ padding: "20px", backgroundColor: "lightgray" }}>
      <Outlet />
    </div>
  );
}

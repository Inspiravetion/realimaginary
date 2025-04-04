import { NavLink } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resources!" },
    { name: "description", content: "Real Imaginary Resources" },
  ];
}

export default function Resources() {
  const resourceId = new Date().getTime().toString().slice(5);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <NavLink to={`./${resourceId}`}>{`Resource: ${resourceId}`}</NavLink>
        <NavLink to={"/"}>Go Back</NavLink>
      </div>
    </main>
  );
}

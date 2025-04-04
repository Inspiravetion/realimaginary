import { NavLink } from "react-router";
import type { Route } from "./+types/details";

export default function ModuleDetails({ params }: Route.ComponentProps) {
  return <NavLink to={`/modules`}>{`Module: ${params.moduleId}`}</NavLink>;
}

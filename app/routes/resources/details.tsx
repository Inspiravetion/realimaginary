import { NavLink } from "react-router";
import type { Route } from "./+types/details";

export default function ResourceDetails({ params }: Route.ComponentProps) {
  return (
    <NavLink to={`/resources`}>{`Resource: ${params.resourceId}`}</NavLink>
  );
}

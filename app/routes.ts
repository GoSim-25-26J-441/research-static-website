import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/site-layout.tsx", [
    index("routes/home.tsx"),
    route("domain", "routes/domain.tsx"),
    route("milestones", "routes/milestones.tsx"),
    route("documents", "routes/documents.tsx"),
    route("presentations", "routes/presentations.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;

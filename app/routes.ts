import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  {
    path: "product/:id",
    file: "routes/product.$id.tsx",
  },
] satisfies RouteConfig;

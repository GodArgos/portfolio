import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./Home";
import { ProjectDetail } from "./ProjectDetail";
import { ProfessionalProjectDetail } from "./ProfessionalProjectDetail";
import { NotFound } from "./NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "project/:slug", Component: ProjectDetail },
        { path: "professional/:slug", Component: ProfessionalProjectDetail },
        { path: "*", Component: NotFound },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
import { lazy, LazyExoticComponent, ComponentType } from "react";
const Home = lazy(() => import("../pages/Home/Home"));
const Info = lazy(() => import("../pages/Info/Info"));

type Route = {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: LazyExoticComponent<ComponentType<any>>;
};

export const publicRoutes: Route[] = [
  { path: "/success", component: Home },
  { path: "/", component: Info },
];

export const privateRoutes: Route[] = [];

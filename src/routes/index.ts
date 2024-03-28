import {lazy,LazyExoticComponent,ComponentType} from "react"
const Home = lazy(() => import("../pages/Home/Home"));

type Route = {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: LazyExoticComponent<ComponentType<any>>;
};

export const publicRoutes: Route[] = [
  { path: "/", component: Home },
];

export const privateRoutes: Route[] = [];

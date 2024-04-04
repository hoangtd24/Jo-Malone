import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./component/loading/Loading";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Loading />}>
                <Page />
              </Suspense>
            }
          ></Route>
        );
      })}
    </Routes>
  );
}

export default App;

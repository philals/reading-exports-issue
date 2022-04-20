import { Suspense } from "react";
import "./App.css";
import React from "react";
const Header = React.lazy(() => import("@mpui/Header"));
const SquadApp = React.lazy(() => import("@squad/App"));

function App() {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <Header />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <SquadApp />
      </Suspense>
    </div>
  );
}

export default App;

import { Suspense } from "react";
import React from "react";
const SquadApp = React.lazy(() => import("@squad/App"));

function App() {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <SquadApp />
      </Suspense>
    </div>
  );
}

export default App;

import { IntersectionProvider } from "./contexts/IntersectionContexts";
import Home from "./routes/Home";

function App() {
  return (
    <IntersectionProvider>
      <Home />
    </IntersectionProvider>
  );
}

export default App;

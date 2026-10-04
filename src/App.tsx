import { Routes, Route } from "react-router-dom";
import Beer from "./pages/Beer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Beer/>} 
      />
    </Routes>
  );
}

export default App;
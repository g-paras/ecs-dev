import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import ListeningAssessment from "./pages/ListeningAssessment";
import ReadingAssessment from "./pages/ReadingAssessment";
import ReadingData from "./data/reading/1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading-module" element={<ReadingAssessment />} />
        <Route path="/listening-module" element={<ListeningAssessment />} />
        <Route
          path="/data"
          element={<pre>{JSON.stringify(ReadingData, undefined, 2)}</pre>}
        />
        <Route path="/*" element={<h1>404 Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

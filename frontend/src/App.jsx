import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Passage from "./pages/Passage";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ReadingList from "./pages/ReadingList";
import ReadingAssessment from "./pages/ReadingAssessment";
import ListeningAssessment from "./pages/ListeningAssessment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading-assessment" element={<ReadingAssessment />} />
        <Route path="/reading-assessment/:id" element={<Passage />} />
        <Route path="/reading-module" element={<ReadingList />} />
        <Route path="/listening-module" element={<ListeningAssessment />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

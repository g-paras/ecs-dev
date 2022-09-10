import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ReadingList from "./pages/ReadingList";
import WritingList from "./pages/WritingList";
import ListeningList from "./pages/ListeningList";
import ReadingAssessment from "./pages/ReadingAssessment";
import ListeningAssessment from "./pages/ListeningAssessment";
import WritingAssessment from "./pages/WritingAssessment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading-module" element={<ReadingList />} />
        <Route path="/writing-module" element={<WritingList />} />
        <Route path="/listening-module" element={<ListeningList />} />
        <Route path="/reading-assessment/:id" element={<ReadingAssessment />} />
        <Route path="/writing-assessment/:id" element={<WritingAssessment />} />
        <Route path="/listening-assessment/:id" element={<ListeningAssessment />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

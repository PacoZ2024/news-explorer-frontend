import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

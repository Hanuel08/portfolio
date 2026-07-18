import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layouts/Header";
import { Main } from "./components/layouts/Main";
import { Footer } from "./components/layouts/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { useHashScroll } from "./hooks/useHashScroll";

export default function App() {
  useHashScroll();

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

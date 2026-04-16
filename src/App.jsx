import { Navigate, Route, Routes } from "react-router-dom";
import PageShell from "./components/PageShell.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Founders from "./pages/Founders.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageShell>
  );
}


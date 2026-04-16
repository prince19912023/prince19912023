import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}


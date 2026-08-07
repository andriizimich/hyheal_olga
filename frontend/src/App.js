import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import Dashboard from "./components/Dashboard";
import DoctorPage from "./components/DoctorPage";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

const Layout = ({ children }) => {
  const [activeNav, setActiveNav] = useState("timeline");
  const navigate = useNavigate();

  const handleNav = (id) => {
    setActiveNav(id);
    if (id === "timeline") navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f9] flex flex-col">
      <TopHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeId={activeNav} onSelect={handleNav} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

const Home = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTileClick = (label) => {
    toast(label, { description: "Розділ у розробці" });
  };

  return (
    <div className="p-6">
      <ProfileCard />
      <Dashboard now={now} onTileClick={handleTileClick} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/doctor"
            element={
              <Layout>
                <DoctorPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

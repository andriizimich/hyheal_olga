import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import Dashboard from "./components/Dashboard";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

const Home = () => {
  const [now, setNow] = useState(new Date());
  const [activeNav, setActiveNav] = useState("timeline");

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTileClick = (label) => {
    toast(label, { description: "Розділ у розробці" });
  };

  return (
    <div className="min-h-screen bg-[#f4f5f9] flex flex-col">
      <TopHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeId={activeNav} onSelect={setActiveNav} />
        <main className="flex-1 overflow-y-auto p-6">
          <ProfileCard />
          <Dashboard now={now} onTileClick={handleTileClick} />
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

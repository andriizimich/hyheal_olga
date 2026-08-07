import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import Dashboard from "./components/Dashboard";
import DoctorPage from "./components/DoctorPage";
import PatientsPage from "./components/PatientsPage";
import PatientProfile from "./components/PatientProfile";
import TreatmentPlansList from "./components/TreatmentPlansList";
import TreatmentPlanDetail from "./components/TreatmentPlanDetail";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

// Map sidebar item id -> route
const navRoutes = {
  timeline: "/",
  patients: "/patients",
  plans: "/treatment-plans",
};

// Map current pathname -> active sidebar id
const pathToNav = (pathname) => {
  if (pathname.startsWith("/patients") || pathname.startsWith("/patient/"))
    return "patients";
  if (pathname.startsWith("/treatment-plans")) return "plans";
  return "timeline";
};

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeNav = pathToNav(location.pathname);

  const handleNav = (id) => {
    if (navRoutes[id]) navigate(navRoutes[id]);
    else toast("Розділ у розробці");
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
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTileClick = (tile) => {
    if (tile.id === "patients") {
      navigate("/patients");
      return;
    }
    if (tile.id === "treatment-plans") {
      navigate("/treatment-plans");
      return;
    }
    toast(tile.label, { description: "Розділ у розробці" });
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
          <Route
            path="/patients"
            element={
              <Layout>
                <PatientsPage />
              </Layout>
            }
          />
          <Route
            path="/patient/:id"
            element={
              <Layout>
                <PatientProfile />
              </Layout>
            }
          />
          <Route
            path="/treatment-plans"
            element={
              <Layout>
                <TreatmentPlansList />
              </Layout>
            }
          />
          <Route
            path="/treatment-plans/:id"
            element={
              <Layout>
                <TreatmentPlanDetail />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

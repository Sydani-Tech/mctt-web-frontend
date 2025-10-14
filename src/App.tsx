import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Demographics from "./components/Demographics/Demographics";
import DemographicsForm from "./components/Demographics/DemographicsForms/DemographicsForm";
import InjectionSupplies from "./components/Injections/injections";
import LogisticsForm from "./components/Injections/LogisticsForm/LogisticsForm";
import DemographicDetails from "./components/Demographics/DemographicDetails/DemographicDetails";
import SocialMapping from "./components/SocialMapping/SocialMapping";
import RootCauseAnalysisForm from "./components/RootCause/RootCauseForm";
import Problems from "./components/RootCause/Problems";
import HouseHold from "./components/HouseHold/HouseHold";
import HouseHoldForm from "./components/HouseHold/Form/HouseHoldForm";
import HouseHoldDetails from "./components/HouseHold/HouseHoldDetails/HouseHoldDetails";
import "leaflet/dist/leaflet.css";
import SessionPlanning from "./components/Demographics/SessionPlanning/SessionPlanning";
import Supervisor from "./components/Supervisor/Supervisor";
import SupervisionForm from "./components/Supervisor/Form/SupervisorForm";
import OPMonitoringForm from "./components/Monitoring/Form/MonitoringForm";
import Monitoring from "./components/Monitoring/Monitoring";
import AnnualRiForm from "./components/Annaual/AnnaualRiForm/AnnaualRiForm";
import { ProtectedRoute } from "./components/Auth/PrivateRoutes";
import { PublicRoute } from "./components/Auth/PublicRoutes";
import Admin from "./components/Admin/Admin";
// import InstallPrompt from "./utils/InstallPrompt";

function App() {
  return (
    <>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route
          index
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="login" element={<Login />} /> */}

        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route path="demographics" element={<Demographics />} />
        <Route
          path="demographics/details/:id"
          element={<DemographicDetails />}
        />
        <Route path="social-mapping" element={<SocialMapping />} />
        {/* <Route path="social-mapping/form" element={<SocialMappingForm />} />
      <Route
        path="social-mapping/details/:id"
        element={<SocialMappingForm />}
      /> */}
        <Route path="demographics/form" element={<DemographicsForm />} />
        <Route
          path="demographics/program-analysis/:id"
          element={<DemographicsForm />}
        />
        <Route path="root-cause/form" element={<RootCauseAnalysisForm />} />
        <Route path="session-planning" element={<SessionPlanning />} />
        <Route path="supervision" element={<Supervisor />} />
        <Route path="supervision/form" element={<SupervisionForm />} />
        <Route path="root-cause" element={<Problems />} />
        <Route path="house-holds" element={<HouseHold />} />
        <Route path="house-hold/details/:id" element={<HouseHoldDetails />} />
        <Route path="house-holds/form" element={<HouseHoldForm />} />
        <Route path="logistics" element={<InjectionSupplies />} />
        <Route path="logistics/form" element={<LogisticsForm />} />
        <Route path="monitoring/form" element={<OPMonitoringForm />} />
        <Route path="annual-ri/form" element={<AnnualRiForm />} />
        <Route path="monitoring" element={<Monitoring />} />
      </Routes>
    </>
  );
}

export default App;

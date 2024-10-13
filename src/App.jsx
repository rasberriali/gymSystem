// App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ClassDetail from "./pages/Classes/ClassDetail.jsx";
import Classes from './pages/Classes/Classes.jsx';
import Coaches from './pages/CoachesProfile/Coaches.jsx';
import CoachProfile from './pages/CoachesProfile/Coaches_Profile.jsx';
import Facilities from "./pages/Facilities/Facilities.jsx";
import Home from './pages/Home.jsx';
import Login from './pages/Login/LoginModal.jsx';
import Membership from './pages/Membership/Membership.jsx';
import ActivePlan from './pages/Profile/Active_Plan.jsx';
import Bookings from './pages/Profile/Bookings.jsx';
import CoachesHistory from './pages/Profile/CoachesHistory.jsx';
import ServicesHistory from './pages/Profile/ServicesHistory.jsx';
import Register from './pages/Registration/Registration.jsx';
import ServicesPage from './pages/Services/Services.jsx';
import ServicesPage1 from './pages/Services/ServicesPage1.jsx';
import ServicesPage2 from './pages/Services/ServicesPage2.jsx';


// Admin Imports
import HeaderAdmin from "./AdminPages/components/header.jsx"; // Consider renaming for clarity
import BookingsPage from "./AdminPages/pages/BookingsPage/BookingsPage.jsx";
import ClassAdmin from "./AdminPages/pages/Classes/Classes.jsx"; // Consider renaming for clarity
import AddCoach from "./AdminPages/pages/Coaches/AddCoach.jsx"; // Fixed naming
import CoachDetails from "./AdminPages/pages/Coaches/CoachDetails.jsx";
import CoachesAdmin from "./AdminPages/pages/Coaches/Coaches.jsx"; // Fixed naming
import FacilitiesAdmin from "./AdminPages/pages/Facilities/Facilities.jsx"; // Fixed naming
import Memberships from './AdminPages/pages/Membership/Membership.jsx';
import ServicesAdmin from './AdminPages/pages/Services/Services.jsx'; // Fixed naming
import Dashboard from "./AdminPages/pages/dashboard.jsx"; // Ensure this is the correct import

const App = () => {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/class/:classId" element={<ClassDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services-page-1" element={<ServicesPage1 />} />
          <Route path="/services-page-2" element={<ServicesPage2 />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coach/:id" element={<CoachProfile />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/active-plan" element={<ActivePlan />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/coaches-history" element={<CoachesHistory />} />
          <Route path="/services-history" element={<ServicesHistory />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} /> 
          <Route path="/admin/coaches" element={<CoachesAdmin />} />
          <Route path="/admin/services" element={<ServicesAdmin />} />
          <Route path="/admin/facilities" element={<FacilitiesAdmin />} />
          <Route path="/admin/membership" element={<Memberships />} />
          <Route path="/admin/classes" element={<ClassAdmin />} />
          <Route path="/admin/bookings" element={<BookingsPage />} />
          <Route path="/admin/coach-details" element={<CoachDetails />} />
          <Route path="/admin/add-coach" element={<AddCoach />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;

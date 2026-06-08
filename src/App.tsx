import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Mission from './pages/Mission';
import Programs from './pages/Programs';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Beneficiaries from './pages/Beneficiaries';
import ViewBeneficiary from './pages/ViewBeneficiary';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import GeneralMembers from './pages/GeneralMembers';
import Campaigns from './pages/Campaigns';
import ProjectExpenses from './pages/ProjectExpenses';
import Internship from './pages/Internship';
import ViewInternship from './pages/ViewInternship';
import ManagementBody from './pages/ManagementBody';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route element={<PageTransition />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/beneficiary" element={<Beneficiaries />} />
              <Route path="/view-beneficiary" element={<ViewBeneficiary />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/general-members" element={<GeneralMembers />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/expenses" element={<ProjectExpenses />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/view-internship" element={<ViewInternship />} />
              <Route path="/management-body" element={<ManagementBody />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

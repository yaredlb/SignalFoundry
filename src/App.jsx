import { Toaster } from "react-hot-toast";
import WorkflowScenarios from "./components/WorkflowScenarios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#111827",
            color: "#f8fafc",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },
        }}
      />

      <Navbar />

      <main className="overflow-x-clip">
        <Hero />
        <TrustedBy />
        <Services />
        <WorkflowScenarios />
        <OurWork />
        <Teams />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
};

export default App;

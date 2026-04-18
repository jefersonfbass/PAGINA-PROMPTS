import UrgencyBar from "./components/UrgencyBar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import PlanSelection from "./components/PlanSelection";
import FAQ from "./components/FAQ";
import PurchaseNotifications from "./components/PurchaseNotifications";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-gold selection:text-black">
      <div className="sleek-container">
        <UrgencyBar />
        <main className="flex-1">
          <Hero />
          <Benefits />
          <HowItWorks />
          <Testimonials />
          <PlanSelection />
          <FAQ />
        </main>
        <PurchaseNotifications />
        <Footer />
      </div>
    </div>
  );
}

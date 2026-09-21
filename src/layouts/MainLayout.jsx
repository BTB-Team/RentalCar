import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/header/Navbar";

export default function MainLayout() {
  return (
    // 💡 The main layout framework must be completely unconstrained (w-full overflow-x-hidden)
    <div className="relative w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
      
      {/* Centered Website Header bar */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-50">
        <Navbar />
      </div>

      {/* 
        💡 PRODUCTION FIX: Removed max-w-[1440px] from the main tag.
        Now the canvas wrapper is wide open. Full-width backdrops (like Hero Section) 
        can natively fill up 100% of any wide-screen monitor.
      */}
      <main className="flex-grow w-full relative z-10">
        <Outlet />
      </main>

      {/* Centered Website Footer bar */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-20 mt-auto">
        <Footer />
      </div>

    </div>
  );
}

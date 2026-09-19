import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/header/Navbar";

export default function MainLayout() {
  return (
    <div className="relative w-screen min-h-screen bg-cover bg-center flex flex-col overflow-x-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <Navbar />
      </div>
      <main className="flex-grow w-full  max-w-[1440px] mx-auto  relative z-10">
        <Outlet />
      </main>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-20 ">
        <Footer />
      </div>
    </div>
  );
}

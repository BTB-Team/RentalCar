import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/header/Navbar";

export default function MainLayout() {
  return (
    // 💡 تغییر w-screen به w-full برای ریشه‌کن کردن قطعی اسکرول افقی ناشی از نوار مرورگر
    <div className="relative w-full min-h-screen bg-cover bg-center flex flex-col overflow-x-hidden">
      
      {/* هدر سایت */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* محتوای اصلی صفحات (Outlet) */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto relative z-10">
        <Outlet />
      </main>

      {/* فوتر سایت */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <Footer />
      </div>

    </div>
  );
}

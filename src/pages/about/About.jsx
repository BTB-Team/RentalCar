import { CtaBanner } from "../../components/common/CtaBanner"
import { AboutDetails } from "./components/AboutDetails"
import { HeroSection } from "./components/HeroSection"
import { MissionVision } from "./components/MissionVision"
import { Services } from "./components/Services"

export const About = () => {
    return (
            // 💡 استفاده از overflow-x-hidden روی والد اصلی برای جلوگیری از هرگونه لق‌زدگی یا اسکرول افقی
            <div className="relative w-full">
              
              {/* 💡 تبدیل باکس SVG به لایه مطلق (absolute top-0) و تمام‌عرض مستقل تا بدون اشغال فضای مرده، به پس‌زمینه قفل شود */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen  h-[672px] z-0 pointer-events-none flex justify-center overflow-hidden">
                <svg 
                  width="1440" 
                  height="672" 
                  viewBox="0 0 1440 672" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-fill opacity-100"
                >
                  {/* اصلاح فضای نامی زنده طبق استانداردهای W3C برای نمایش شفاف دایره زرد */}
                  <circle cx="727" cy="-148" r="820" fill="#F7D102" fillOpacity="0.18" />
                </svg>    
              </div>
        
              {/* 💡 لایه بالایی محتوا که با z-10 مقتدرانه روی دایره زرد قرار می‌گیرد */}
              <div className="relative z-10 flex flex-col max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSection />
                <AboutDetails />
                <MissionVision />
                <Services />
                <CtaBanner />
              </div>
        
            </div>
          );
}
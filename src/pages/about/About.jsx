import { CtaBanner } from "../../components/common/CtaBanner"
import { AboutDetails } from "./components/AboutDetails"
import { HeroSection } from "./components/HeroSection"
import { MissionVision } from "./components/MissionVision"
import { Services } from "./components/Services"

export const About = () => {
    return (
        <div className="relative min-h-screen !w-screen left-1/2 right-1/2 -mx-[50vw] overflow-x-hidden">

            <div
                // 💡 اضافه شدن کلاس‌های xl:w-[120vw] و xl:h-[120vw] برای مهار کامل مانیتورهای خیلی بزرگ
                className="absolute w-screen left-1/2 -translate-x-1/2 md:top-[-968px] w-[1640px] xl:w-[120vw] top-[-1020px] h-[1640px] xl:h-[120vw] xl:top-[-80vw] rounded-full bg-[#F7D1022E] pointer-events-none z-0"
            />
            <div className="relative z-10 flex flex-col max-w-[1280px] mx-auto px-4 ">
                <HeroSection />
                <AboutDetails />
                <MissionVision />
                <Services />
                <CtaBanner />
            </div>

        </div>
    )
}
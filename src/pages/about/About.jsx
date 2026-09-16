import { CtaBanner } from "../../components/common/CtaBanner"
import { AboutDetails } from "./components/AboutDetails"
import { HeroSection } from "./components/HeroSection"
import { MissionVision } from "./components/MissionVision"
import { Services } from "./components/Services"

export const About = () => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">

            <div
                className="absolute left-1/2 -translate-x-1/2 top-[-900px] w-[1640px] h-[1640px] rounded-full bg-[#F7D1022E] pointer-events-none z-0"
            />

            <div className="relative z-10 flex flex-col gap-12 md:gap-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <HeroSection />
                <AboutDetails />
                <MissionVision />
                <Services />
                <CtaBanner />
            </div>

        </div>
    )
}
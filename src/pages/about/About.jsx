import { CtaBanner } from "../../components/common/CtaBanner"
import { AboutDetails } from "./components/AboutDetails"
import { HeroSection } from "./components/HeroSection"
import { MissionVision } from "./components/MissionVision"
import { Services } from "./components/Services"

export const About = () => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">

            <div
                className="absolute left-1/2 -translate-x-1/2 md:top-[-968px] w-[1640px] top-[-1020px] h-[1640px] rounded-full bg-[#F7D1022E] pointer-events-none z-0"
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
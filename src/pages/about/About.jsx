import { CtaBanner } from "../../components/common/CtaBanner"
import { Navbar } from "../../components/header/Navbar"
import { AboutDetails } from "./components/AboutDetails"
import { HeroSection } from "./components/HeroSection"
import { MissionVision } from "./components/MissionVision"
import { Services } from "./components/Services"

export const About = () => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">

            <div
                className="absolute left-1/2 -translate-x-1/2 top-[-968px] w-[1640px] h-[1640px] rounded-full bg-[#F7D1022E] pointer-events-none z-0"
            />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <HeroSection />
                <AboutDetails />
                <MissionVision />
                <Services />
                <CtaBanner />
            </div>

        </div>
    )
}
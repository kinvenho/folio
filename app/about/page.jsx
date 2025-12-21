import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import CursiveMind from "@/components/about/CursiveMind";
import Pursuit from "@/components/about/Pursuit";
import Pathway from "@/components/about/Pathway";
import Quirks from "@/components/about/Quirks";

export const metadata = {
    title: "About - Oyefeso Afolabi",
    description: "Designer, Builder, Problem Solver. Learn more about Oyefeso's journey and approach to creating intuitive experiences.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutIntro />
            <CursiveMind />
            <Pursuit />
            <Pathway />
            <Quirks />
        </main>
    );
}

import Hero from "@/app/home/sections/Hero";
import Summary from "@/app/home/sections/Summary";
import CTA from "@/app/home/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Summary />
      <CTA />
    </main>
  );
}

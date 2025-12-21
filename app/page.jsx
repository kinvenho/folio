import Hero from "@/components/home/Hero";
import Featured from "@/components/home/Featured";
import WorkHistory from "@/components/home/WorkHistory";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Featured />
      <WorkHistory />
      <CTA />
    </main>
  );
}

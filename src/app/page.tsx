import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Badges from "@/components/Badges";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import HowItWorks from "@/components/HowItWorks";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Badges />
      <Features />
      <AppPreview />
      <HowItWorks />
      <DownloadCTA />
      <Footer />
    </main>
  );
}

import Slider from "@/app/Hero/Slider";
import About from "@/app/About/About";
import Galery from "@/app/Galery/Galery";
import Avatar from "@/app/Stucture/Avatar";
import Card from "@/app/Fasilitas/Card";
import Navbar from "@/app/Navbar/Navbar";
import Footer from "@/app/Footer/Footer";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <Slider />
      <About />
      <Card />
      <Galery />
      <Avatar />
      <Contact/>
      <Footer />
    </main>
  );
}

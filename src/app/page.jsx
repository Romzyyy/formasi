import Slider from "@/components/Slider";
import About from "@/components/About";
import Galery from "@/components/Galery";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-center">
    <Navbar/>
      <Slider />
      <About />
      <Card />
      <Galery />
      <Avatar />
    <Footer/>
    </main>
  
    
  );
}

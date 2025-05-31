import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Partners from "./components/partners/Partners";

export default function Home() {
  return (
    <div className="font-jura">
      <Header />
      <Banner />
      <About />
      <Partners />
      <Contact />
    </div>
  );
}

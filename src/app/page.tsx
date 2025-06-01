import About from "./components/about/About";
import Banner, { BannerPage } from "./components/banner/Banner";
import Partners from "./components/partners/Partners";

export default function Home() {
  return (
    <div className="font-jura">
      <Banner page={BannerPage.HOME} />
      <About />
      <Partners />
    </div>
  );
}

import About from "../components/about/About";
import Banner, { BannerType } from "../components/banner/Banner";
import Partners from "../components/partners/Partners";

export default function Home() {
  return (
    <div className="font-jura">
      <Banner bannerType={BannerType.HOME} />
      <About />
      <Banner bannerType={BannerType.DRUG_LICENSES} />
      <Partners />
    </div>
  );
}

import HomeHero from "../@common/home_hero";
import AboutMovesInt from "./about-moves-int";
import ExpertAdmission from "./expert-admission";
import Featured from "./featured";
import LeadsAndSales from "./leads-and-sales";
import OurPartners from "../@common/our-partners";
import PopularCourse from "./popular-course";
import QualityAndPrestigious from "./quality-and-prestigious";
import ReadyToGo from "../@common/ready-to-go";
import WebStories from "./web-stories";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Featured />
      <AboutMovesInt />
      <ExpertAdmission />
      <PopularCourse />
      <LeadsAndSales />
      <QualityAndPrestigious />
      <WebStories />
      <OurPartners classes={{ root: `pt-5 lg:pt-[50px]` }} />
      <ReadyToGo />
    </>
  );
};

export default Home;

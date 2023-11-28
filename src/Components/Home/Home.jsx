import Banner from "./Banner";
import HowItWorks from "../../Components/Home/HowItWorks";
import TopFeatures from "./TopFeatures";
import WhyChoose from "./WhyChoose";
import SuccessStories from "./SuccessStories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <TopFeatures></TopFeatures>
      <WhyChoose></WhyChoose>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;

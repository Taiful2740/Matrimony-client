import Banner from "./Banner";
import HowItWorks from "../../Components/Home/HowItWorks";
import TopFeatures from "./TopFeatures";
import WhyChoose from "./WhyChoose";
import SuccessStories from "./SuccessStories";
import TrustedMillion from "./TrustedMillion";
import AssistantService from "./AssistantService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <TopFeatures></TopFeatures>
      <WhyChoose></WhyChoose>
      <SuccessStories></SuccessStories>
      <TrustedMillion></TrustedMillion>
      <AssistantService></AssistantService>
    </div>
  );
};

export default Home;

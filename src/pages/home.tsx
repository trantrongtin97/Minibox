import {
  HeadingSession,
  CategorySlideShow,
  GeneralPromotion,
  Tabs,
  DailyPromotion,
  ScrollToTopButton,
  BrandsSesion,
  VideoSesion,
  Footer
} from "@components/index";

const Home = () => {

  return (
    <>
      <HeadingSession />
      <CategorySlideShow />
      <GeneralPromotion />
      <Tabs />
      <DailyPromotion />
      <BrandsSesion/>
      <VideoSesion/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  );
};

export default Home;

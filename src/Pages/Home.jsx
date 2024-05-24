import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import FoodMenu from "../Components/FoodMenu";
import NoteSection from "../Components/NoteSection";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bistra Boss</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <NoteSection></NoteSection>
      <FoodMenu></FoodMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

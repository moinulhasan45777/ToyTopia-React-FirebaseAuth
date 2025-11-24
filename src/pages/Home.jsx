import Slider from "../components/Slider";
import Header from "../components/Header";
import { useLoaderData } from "react-router";
import PopularToys from "../components/PopularToys";
import ToyCard from "../components/ToyCard";
import useTitle from "../hooks/useTitle";
import NewsletterSignup from "../components/NewsLetterSignup";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading.jsx";

const Home = () => {
  useTitle("Home");
  // Getting Loader Data
  const data = useLoaderData();
  return (
    <div className="min-h-[calc(100vh-72px)]">
      <Header></Header>
      <section>
        <Slider data={data}></Slider>
      </section>
      <section>
        <PopularToys data={data}></PopularToys>
      </section>
      <section>
        <NewsletterSignup></NewsletterSignup>
      </section>
    </div>
  );
};

export default Home;

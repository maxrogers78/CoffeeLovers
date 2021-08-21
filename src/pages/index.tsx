import axios from "axios";
import { useEffect } from "react";
import Hero from "../sections/Hero";

const Home = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await axios.get(`https://api.sampleapis.com/coffee/hot`);
    console.log(resp.data);
  };

  return (
    <main className="container">
      <Hero />
    </main>
  );
};

export default Home;

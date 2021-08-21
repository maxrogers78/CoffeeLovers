import { GetStaticProps } from "next";
import axios from "axios";
import Hero from "../sections/Hero";
import { ICoffee } from "../interfaces/Coffee";

export const getStaticProps: GetStaticProps = async (context) => {
  const resp = await axios.get(`https://api.sampleapis.com/coffee/hot`);
  const coffees: ICoffee[] = await resp.data;

  return {
    props: {
      coffees,
    },
  };
};

interface Props {
  coffees: ICoffee[];
}

const Home = ({ coffees }: Props) => {
  console.log(coffees);

  return (
    <main className="container">
      <Hero />
    </main>
  );
};

export default Home;

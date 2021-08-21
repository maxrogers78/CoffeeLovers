import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await axios.get(`https://api.sampleapis.com/coffee/hot`);
    console.log(resp.data);
  };

  return (
    <div>
      <h1>Coffee Lovers</h1>
    </div>
  );
};

export default Home;
